<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(icono="far fa-question-circle" titulo="Actividad didáctica")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5
  
      #Actividad                
        <Actividad :cuestionario="cuestionario"/>
  
  </template>

<script>
import Actividad from 'ecored-pkg-fliz/plugin/components/actividad/Actividad.vue'
export default {
  name: 'ActividadDidactica',
  components: {
    Actividad,
  },
  data: () => ({
    cuestionario: {
      tema: 'Reto de evaluación del proyecto',
      titulo: 'Cuestionario',
      introduccion:
        '<b> Objetivo:</b> responder un cuestionario que permita analizar la información financiera, económica, social y ambiental de un proyecto, e interpretar sus indicadores de evaluación para apoyar la toma de decisiones.',
      barajarPreguntas: true,
      titulo_aprobado: '¡BUEN TRABAJO!',
      titulo_reprobado: 'VUELVA A INTENTARLO.',
      preguntas: [
        {
          id: 1,
          texto:
            '¿Cuál es el principal objetivo del Valor Presente Neto (VPN)?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Medir el tiempo de recuperación.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Calcular la rentabilidad porcentual.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Determinar el valor actual de los flujos descontados y la creación de valor.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Estimar el nivel de endeudamiento.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 2,
          texto: 'La TIR es aceptable cuando:',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Es menor al WACC.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Es igual a cero.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Es mayor al costo de capital (WACC).',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Es negativa.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 3,
          texto: 'El PRI permite identificar:',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'La rentabilidad porcentual.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'El tiempo necesario para recuperar la inversión.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'El valor social del proyecto.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'El impacto ambiental.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 4,
          texto: 'La RBC es favorable cuando:',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Es menor que 1.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Es igual a 1.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Es mayor que 1.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Es negativa.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 5,
          texto: 'El análisis costo-beneficio social busca:',
          imagen: require('@/assets/actividad/imagen5.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Medir utilidades privadas.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Evaluar beneficios y costos para la comunidad.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Calcular impuestos.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Estimar inflación.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 6,
          texto: 'El análisis de sensibilidad evalúa:',
          imagen: require('@/assets/actividad/imagen6.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Cambios en variables clave.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Impactos legales.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Estrategia comercial.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Clima organizacional.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 7,
          texto: 'Una desviación financiera puede reflejar:',
          imagen: require('@/assets/actividad/imagen7.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Aumento de ventas.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Sobrecostos no previstos.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Mejoras ambientales.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Incremento en productividad.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 8,
          texto:
            'La evaluación integral del proyecto considera principalmente:',
          imagen: require('@/assets/actividad/imagen8.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Solo indicadores financieros.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Aspectos financieros, sociales y ambientales.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Solo impacto social.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Solo cumplimiento legal.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 9,
          texto: 'El WACC representa:',
          imagen: require('@/assets/actividad/imagen9.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Ganancia neta.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Costo promedio del capital utilizado.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Nivel de ventas.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Impacto social.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 10,
          texto: 'Un proyecto con VPN negativo:',
          imagen: require('@/assets/actividad/imagen10.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Genera valor.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Es viable automáticamente.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Destruye valor económico.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'No requiere análisis.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 11,
          texto: 'El plan de mejora tiene como propósito:',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Incrementar impuestos.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Corregir desviaciones y optimizar resultados.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Cambiar el mercado.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Eliminar el proyecto.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 12,
          texto: 'Opción a)\tSimular contextos optimista y pesimista. X',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Calcular salarios.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Medir clima laboral.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Determinar impuestos.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 13,
          texto: 'Un impacto social positivo puede ser:',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Contaminación.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Generación de empleo.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Sobrecostos.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Multas.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 14,
          texto: 'El seguimiento del proyecto permite:',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Detectar desviaciones.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Eliminar riesgos.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Suspender actividades.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Reducir ventas.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 15,
          texto: 'Una acción correctiva se aplica cuando:',
          imagen: require('@/assets/actividad/imagen5.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'No hay problemas.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Existe una desviación detectada.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Hay exceso de utilidades.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'El proyecto termina.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 16,
          texto: 'La evaluación ambiental busca:',
          imagen: require('@/assets/actividad/imagen6.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Incrementar ventas.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Medir rentabilidad.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Identificar impactos sobre recursos naturales.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Reducir costos financieros.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 17,
          texto: 'El concepto de viabilidad global implica:',
          imagen: require('@/assets/actividad/imagen7.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Solo rentabilidad financiera.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Evaluación integral del proyecto.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Impacto ambiental aislado.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Cumplimiento parcial.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 18,
          texto: 'Un indicador de desempeño financiero puede ser:',
          imagen: require('@/assets/actividad/imagen8.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Número de empleados.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Margen de utilidad.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Nivel de satisfacción.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Nivel de reciclaje.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 19,
          texto: 'Si los beneficios sociales superan los costos sociales:',
          imagen: require('@/assets/actividad/imagen9.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'El proyecto es socialmente viable.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'El proyecto se descarta.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'No se analiza.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Se ignora.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 20,
          texto: 'El cronograma del plan de mejora permite:',
          imagen: require('@/assets/actividad/imagen10.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Improvisar decisiones.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Organizar acciones en el tiempo.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Reducir impuestos.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Eliminar indicadores.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
      ],
      mensaje_final_aprobado: '¡Excelente! Ha superado la actividad.',
      mensaje_final_reprobado:
        'Le recomendamos volver a revisar el componente formativo e intentar nuevamente la actividad didáctica.',
    },
  }),
}
</script>
