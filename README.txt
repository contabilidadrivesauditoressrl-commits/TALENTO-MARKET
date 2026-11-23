TALENTO MARKET S.R.L. - PORTAL DE RECLUTAMIENTO Y SELECCION

CONTENIDO DEL PROYECTO
- index.html: portal público, perfiles de ocho cargos, formulario de postulación y panel de RR. HH.
- netlify/functions/applications.mjs: API para guardar postulaciones y evaluaciones en Netlify Blobs.
- netlify.toml: configuración de publicación y funciones.
- package.json: dependencia de Netlify Blobs.

CAMBIOS DE ESTA VERSION
- Se eliminaron los registros y mecanismos de creación de postulantes demostrativos.
- Al ingresar al panel de RR. HH., se depuran del registro central los registros marcados como demostrativos por la versión anterior (demo=true o CI con prefijo DEMO-).
- Las postulaciones nuevas se guardan en Netlify Blobs y no en el almacenamiento local del navegador.
- Las respuestas de prueba técnica, entrevista STAR y caso situacional se guardan en el registro central.
- RR. HH. puede abrir el expediente, leer las respuestas y calificar las dos respuestas STAR y el caso situacional con escala de 1 a 5.
- El resultado provisional pondera prueba técnica 40%, STAR 30% y caso situacional 30%.
- Las modificaciones de etapas, puntajes y calificaciones se guardan en la nube.

PUBLICACION EN NETLIFY
1. Extraer este ZIP en una carpeta de su computadora.
2. En GitHub, abrir el repositorio PROYECTO_GESTION.
3. Subir al nivel principal del repositorio el contenido interno de la carpeta talento-market-netlify (no subir solamente el ZIP): index.html, netlify.toml, package.json, README.txt y la carpeta netlify/functions/applications.mjs.
4. Confirmar el commit. Netlify debe iniciar un nuevo deploy desde GitHub.
5. En Netlify, verificar que el deploy termine como Published.
6. En Project configuration / Environment variables, crear TM_ADMIN_KEY con una clave larga, única y privada. No compartirla con postulantes ni incluirla en el código.
7. En Project configuration / Build & deploy, verificar:
   - Publish directory: .
   - Functions directory: netlify/functions
8. Asegurarse de que Visitor access / Project visibility esté en Public para permitir postulaciones sin iniciar sesión en Netlify.
9. Abrir la URL pública. Probar el formulario con una postulación de prueba propia y luego entrar a Recursos Humanos con TM_ADMIN_KEY para ver la respuesta y calificarla.

USO
- Postulantes: ingresar al portal, seleccionar una vacante, completar el formulario y enviar. Luego iniciar la evaluación técnica/STAR/caso desde el botón que aparece.
- Recursos Humanos: ingresar al panel con la clave TM_ADMIN_KEY, actualizar registros, abrir Ver para consultar las respuestas y Calificar para completar la rúbrica.
- Los datos se comparten entre equipos porque se almacenan en Netlify Blobs, no en el navegador local.

IMPORTANTE
- Este paquete contiene el código corregido, pero no publica automáticamente los cambios en la cuenta Netlify. Para que la URL pública use esta versión, debe subirse el contenido al repositorio conectado y esperar un nuevo deploy exitoso.
- No usar datos personales reales durante pruebas iniciales. Realizar una postulación de prueba y eliminarla desde el mecanismo administrativo disponible antes de abrir convocatorias reales.
- La clave TM_ADMIN_KEY debe mantenerse confidencial.
