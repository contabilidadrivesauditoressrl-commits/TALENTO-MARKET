TALENTO MARKET S.R.L. - PORTAL DE RECLUTAMIENTO Y SELECCION

CONTENIDO
- index.html: portal publico, formulario, evaluaciones y panel de RR. HH.
- netlify/functions/applications.mjs: API segura para postulaciones y evaluaciones.
- netlify.toml: configuracion de Netlify Functions.
- package.json: dependencia Netlify Blobs.

PUBLICACION / ACTUALIZACION
1. Descomprimir el ZIP.
2. En GitHub abrir el repositorio conectado al sitio Netlify.
3. Subir el CONTENIDO de la carpeta talento-market-netlify a la raiz del repositorio, reemplazando los archivos anteriores.
4. Confirmar que netlify/functions/applications.mjs quede exactamente en esa ruta.
5. Hacer Commit y esperar que Netlify termine el deploy.
6. En Netlify ir a Variables de entorno y crear TM_ADMIN_KEY con una clave larga, unica y privada. No colocar esa clave en index.html ni compartirla con postulantes.
7. Volver a desplegar el sitio si Netlify lo solicita.

ALMACENAMIENTO
Las postulaciones y evaluaciones se guardan en Netlify Blobs. No se guardan en localStorage. La primera lectura/escritura puede requerir que Netlify complete la inicializacion del almacenamiento en el sitio desplegado.

FLUJO DEL POSTULANTE
1. Entra a Vacantes y selecciona uno de los 8 cargos.
2. Completa el formulario de postulación y envía sus datos. El sistema registra la postulación y muestra un código único de seguimiento.
3. La evaluación se abre automáticamente para el cargo elegido. Debe responder las 5 preguntas técnicas, las 2 preguntas STAR y el caso práctico; luego pulsa “Guardar respuestas”.
4. El sistema corrige la prueba técnica y registra las respuestas abiertas para revisión de Recursos Humanos. La etapa queda “Evaluación pendiente de rúbrica”.
5. Si cierra la página antes de terminar, entra a “Consultar mi postulación”, introduce el código y CI y continúa si la evaluación todavía no fue enviada.
6. Cuando RR. HH. termina la rúbrica, el postulante consulta el estado y puede generar su informe individual.

FLUJO DE RECURSOS HUMANOS
1. Ingresar al panel con TM_ADMIN_KEY.
2. Revisar expedientes y respuestas.
3. Calificar STAR 1, STAR 2 y caso situacional de 1 a 5.
4. Guardar la evaluacion. El resultado se calcula con ponderacion: tecnica 40%, STAR 30% y caso 30%.
5. Consultar el ranking por cargo. Solo incluye evaluaciones completas.
6. Generar informe confidencial del empleador o exportar CSV.

INFORMES
Los informes se abren en una ventana imprimible. Elegir Imprimir > Guardar como PDF en el navegador. Permitir ventanas emergentes para el dominio del sitio.

SEGURIDAD Y CRITERIO DE SELECCION
- El panel de RR. HH. requiere TM_ADMIN_KEY.
- La consulta individual exige codigo de seguimiento y CI.
- El buscador del panel de RR. HH. filtra exclusivamente por nombre y apellido del postulante. La consulta individual del postulante mantiene código de seguimiento + CI como verificación de privacidad.
- Al registrar una postulación, se abre automáticamente la evaluación del cargo elegido y el nombre del postulante se carga en el formulario.
- El ranking es una ayuda de decision, no una contratacion automatica. RR. HH. debe validar referencias, documentos, requisitos y criterios legales antes de decidir.
- No se incluyen postulantes de demostracion.

IMPORTANTE
Despues de actualizar, probar una postulacion real de prueba controlada y verificar que aparezca en el panel de RR. HH. No utilizar datos personales reales de terceros para las pruebas.
