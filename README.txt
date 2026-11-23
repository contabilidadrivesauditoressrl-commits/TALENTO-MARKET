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
1. Completa la postulacion y recibe un codigo UUID de seguimiento.
2. Inicia la prueba tecnica, dos preguntas STAR y el caso situacional.
3. Si cierra la pagina, puede volver a la seccion de consulta e ingresar codigo y CI.
4. Cuando RR. HH. concluya la rubrica, puede consultar y generar su informe de resultados.

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
- El ranking es una ayuda de decision, no una contratacion automatica. RR. HH. debe validar referencias, documentos, requisitos y criterios legales antes de decidir.
- No se incluyen postulantes de demostracion.

IMPORTANTE
Despues de actualizar, probar una postulacion real de prueba controlada y verificar que aparezca en el panel de RR. HH. No utilizar datos personales reales de terceros para las pruebas.
