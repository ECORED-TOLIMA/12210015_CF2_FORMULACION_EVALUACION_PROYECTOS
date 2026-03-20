<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción

    figure
      img(src='@/assets/curso/intro/1.png', alt='', style="width: 1226px").m-auto

    p.mt-4 La evaluación de un proyecto constituye una etapa fundamental dentro del proceso de formulación, ya que permite analizar de manera técnica y objetiva la información obtenida en los estudios previos. En esta fase se integran resultados financieros, económicos, sociales y ambientales con el fin de determinar la viabilidad de la iniciativa y sustentar decisiones fundamentadas. Evaluar implica interpretar resultados, reconocer riesgos y valorar el impacto que el proyecto puede generar en su entorno.

    .row.justify-content-center.mt-4.mb-4
      .col-lg-10
        .row.align-items-center
          .col-lg-12
            .cajon.color1.p-4
              p El componente aborda herramientas de análisis financiero y métodos para el estudio de escenarios, facilitando la interpretación de información cuantitativa y cualitativa con criterios metodológicos. Asimismo, incorpora la dimensión social y ambiental como aspectos complementarios a la rentabilidad, promoviendo una visión integral orientada al desarrollo responsable y a la sostenibilidad del proyecto.
            .row.align-items-center.mt-4
              .col-lg-4.d-none.d-lg-block
                figure(data-aos="fade-down")
                  img(src='@/assets/curso/intro/2.svg', alt='', style="width: 390px").m-auto
              .col-lg-8.p-3
                p En este sentido, se orienta la estructuración de planes de mejora a partir de la identificación de desviaciones y oportunidades de ajuste. Mediante la definición de acciones correctivas, cronogramas e indicadores de seguimiento, se fortalece la gestión estratégica y se consolida la evaluación como una herramienta práctica para la toma de decisiones y la mejora continua.
                .row.align-items-start
                  .col-lg-2.mb-lg-0.mb-4
                    figure(data-aos="fade-down")
                      img(src='@/assets/curso/intro/3.svg', style='width: 100px').m-auto
                  
                  .col
                    p Para ampliar la comprensión de los conceptos abordados y contextualizar su aplicación en la gestión de proyectos, se recomienda acceder al recurso audiovisual que acompaña esta sección.


    .row.justify-content-center.align-items-center.mt-4           
      .col-lg-12
        figure(data-aos="fade-down")
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/vdPrCjWJSHo?si=X4NxENRo3LLXAua_" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)



</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
