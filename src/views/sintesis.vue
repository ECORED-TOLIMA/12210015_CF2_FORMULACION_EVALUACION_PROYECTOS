<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    p La evaluación integral del proyecto permite valorar la viabilidad de una iniciativa empresarial mediante el análisis articulado de diferentes dimensiones del proceso de formulación. En este sentido, se integran la evaluación financiera, el análisis económico y social y la valoración de los impactos ambientales, con el fin de comprender de manera amplia los efectos que el proyecto puede generar en el entorno. Este enfoque permite interpretar la información obtenida en los estudios del proyecto y relacionarla con criterios de sostenibilidad, responsabilidad social y uso eficiente de los recursos.
    p De igual manera, la integración de resultados, el análisis de escenarios y la revisión del desempeño del proyecto permiten emitir un juicio técnico sobre su viabilidad global. A partir de este análisis se identifican desviaciones, se establecen oportunidades de mejora y se formulan acciones orientadas al fortalecimiento de la iniciativa durante su implementación. En este contexto, el mapa conceptual presenta de forma visual la organización de estos elementos y la relación entre los procesos de evaluación, seguimiento y plan de mejora del proyecto.

    .row.justify-content-center
      .col-lg-10.mb-5.bgs.p-4.brad
        figure
          img(src="@/assets/curso/sintesis.svg", alt="Mapa conceptual que muestra la evaluación integral y el plan de mejora del proyecto, estructurado en cuatro procesos: evaluación financiera, basada en indicadores como VPN, TIR, PRI, RBC y WACC; evaluación económica y social, que analiza impactos y costo-beneficio social; evaluación integral y toma de decisiones, que integra resultados y escenarios para determinar la viabilidad del proyecto; y plan de mejora, orientado a identificar brechas y formular acciones correctivas.")
      .col-auto
        a.anexo.mb-5(:href="obtenerLink('/downloads/Sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/bullets/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
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
