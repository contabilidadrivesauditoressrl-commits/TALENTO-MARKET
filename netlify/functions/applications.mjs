import { getStore } from "@netlify/blobs";

const STORE_NAME = "talento-market-recruitment";
const KEY = "applications-v1";
const json = (data, status = 200) => new Response(JSON.stringify(data), {
  status,
  headers: { "Content-Type": "application/json; charset=utf-8", "Cache-Control": "no-store" }
});
const readAll = async (store) => ((await store.get(KEY, { type: "json" })) || []).filter(a => a.demo !== true && !String(a.ci || "").startsWith("DEMO-"));
const saveAll = async (store, items) => store.setJSON(KEY, items);

export default async (request) => {
  const store = getStore({ name: STORE_NAME });
  const method = request.method.toUpperCase();
  const adminKey = process.env.TM_ADMIN_KEY;
  const suppliedKey = request.headers.get("x-admin-key") || "";
  const isAdmin = Boolean(adminKey && suppliedKey && suppliedKey === adminKey);

  if (method === "GET") {
    if (!isAdmin) return json({ error: "Acceso no autorizado." }, 401);
    // Retira únicamente registros de demostración identificados explícitamente por la versión anterior.
    const all = await readAll(store);
    const real = all.filter(a => a.demo !== true && !String(a.ci || "").startsWith("DEMO-"));
    if (real.length !== all.length) await saveAll(store, real);
    return json({ applications: real });
  }
  if (method !== "POST") return json({ error: "Método no permitido." }, 405);

  let body;
  try { body = await request.json(); }
  catch { return json({ error: "Solicitud inválida." }, 400); }

  const items = await readAll(store);
  if (body.action === "candidate-get") {
    const a = items.find(x => x.id === body.applicationId && String(x.ci || "").trim().toLowerCase() === String(body.ci || "").trim().toLowerCase());
    if (!a) return json({ error: "No se encontró la postulación con esos datos." }, 404);
    // Solo se devuelve el expediente propio del postulante; nunca la lista de candidatos.
    return json({ application: { id:a.id, name:a.name, job:a.job, stage:a.stage, score:a.score ?? null, rubricStatus:a.rubricStatus || "Pendiente", assessment:a.assessment || null } });
  }
  if (body.action === "create") {
    const a = body.application || {};
    if (!a.name || !a.email || !a.phone || !a.ci || !Number.isInteger(Number(a.job))) {
      return json({ error: "Completa los datos obligatorios de la postulación." }, 400);
    }
    a.demo = false;
    a.id = crypto.randomUUID();
    a.createdAt = new Date().toISOString();
    a.stage = "Recepción de postulación";
    a.stageHistory = ["Recepción de postulación"];
    items.push(a);
    await saveAll(store, items);
    return json({ application: a }, 201);
  }
  if (body.action === "assessment") {
    const a = items.find(x => x.id === body.applicationId);
    if (!a) return json({ error: "No se encontró la postulación." }, 404);
    if (a.assessment) return json({ error: "Esta postulación ya tiene respuestas registradas. Contacta a Recursos Humanos si necesitas corregirlas." }, 409);
    const assessment = body.assessment || {};
    if (!Array.isArray(assessment.answers) || assessment.answers.length !== 5 || !Array.isArray(assessment.star) || assessment.star.length !== 2 || !assessment.caseAnswer) {
      return json({ error: "La evaluación está incompleta." }, 400);
    }
    a.assessment = assessment;
    a.stage = "Evaluación pendiente de rúbrica";
    a.rubricStatus = "Pendiente de calificación";
    a.stageHistory = [...(a.stageHistory || []), "Revisión curricular", "Entrevista inicial", "Evaluación técnica / práctica"];
    await saveAll(store, items);
    return json({ ok: true });
  }
  if (!isAdmin) return json({ error: "Acceso no autorizado." }, 401);
  if (body.action === "update") {
    const updated = body.application;
    if (!updated?.id) return json({ error: "Falta el identificador del postulante." }, 400);
    const idx = items.findIndex(x => x.id === updated.id);
    if (idx < 0) return json({ error: "No se encontró la postulación." }, 404);
    items[idx] = updated;
    await saveAll(store, items);
    return json({ ok: true });
  }

  return json({ error: "Acción no reconocida." }, 400);
};
