<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 4
      h1 Evaluación integral y toma de decisiones

    figure
      img(src='@/assets/curso/tema4/1.jpg', alt='', style="width: 1226px").m-auto
    
    .row.align-items-start.mt-4
      .col-lg-1.mb-lg-0.mb-4.d-flex.d-none.d-lg-block
        figure(data-aos="fade-down")
          img(src='@/assets/curso/tema4/2.svg', style='width: 100px').m-auto
      
      .col
        p La evaluación integral del proyecto consiste en consolidar los resultados obtenidos en los análisis financiero, económico, social y ambiental para emitir un juicio técnico fundamentado sobre su viabilidad. En esta etapa se integran los indicadores calculados, los impactos identificados y las condiciones del entorno, con el propósito de valorar el desempeño global de la iniciativa.

    .row.align-items-start.mt-4.bg-2
      .col
        p.mt-4 El objetivo no es revisar cada componente de manera aislada, sino comprender cómo interactúan entre sí y qué implicaciones tienen en conjunto.
      .col-lg-1.mb-lg-0.mb-4.d-flex.d-none.d-lg-block
        figure(data-aos="fade-down")
          img(src='@/assets/curso/tema4/3.svg', style='width: 100px; margin-left:11px')

    p.mt-4 Este proceso requiere comparar resultados, identificar fortalezas y debilidades, y analizar posibles escenarios que puedan influir en el comportamiento futuro del proyecto. La integración de información permite detectar inconsistencias, riesgos relevantes o ventajas competitivas que no son evidentes cuando los estudios se revisan de forma independiente. Además, facilita la priorización de decisiones estratégicas, especialmente cuando existen restricciones presupuestales, incertidumbre en el mercado o variaciones en el entorno regulatorio.

    .row.align-items-center.justify-content-center
      .col-lg-12
        .row.justify-content-center.mt-4
          .col-lg-12(data-aos="fade-down")
            .row.d-flex.align-items-center(data-aos="fade-right")
              .col-lg-auto.pe-lg-0.mb-4.mb-xl-0.d-flex.d-none.d-lg-block
                figure.m-0.p-0.w-100.h-100.d-flex
                  img(src='@/assets/curso/tema4/4.png', alt='', class="w-100 h-100 object-fit-cover", style="margin-left:-10px")
              .col-lg
                p La toma de decisiones, como resultado de la evaluación integral, debe basarse en criterios objetivos y en la coherencia entre rentabilidad, impacto social y sostenibilidad ambiental. Un proyecto puede ser financieramente atractivo, pero si presenta impactos sociales negativos significativos o incumple requisitos ambientales, la decisión final podría requerir ajustes o replanteamientos. Por ello, la evaluación integral permite determinar si la iniciativa debe ejecutarse, modificarse o descartarse, garantizando que la decisión adoptada esté respaldada por un análisis técnico completo y responsable.

                .cajon.color2.p-4
                  p Para orientar la toma de decisiones en un proyecto, es necesario analizar de manera articulada los aspectos financieros, económicos, sociales y ambientales que influyen en su viabilidad. A continuación, se presenta una tabla que sintetiza los principales componentes de la evaluación integral, indicando qué se analiza en cada dimensión y las preguntas clave que apoyan la decisión de ejecutar, ajustar o descartar la iniciativa.

    .row.justify-content-center
      .col-lg-12
        .titulo-sexto.color-acento-contenido.mb-3.mt-4
          h5 Tabla 4.
          span Evaluación integral para la toma de decisiones

        .tabla-a.color-acento-contenido
          table
            thead(style="background-color: #FE93C4")
              tr
                th(style="width: 300px;") Componente evaluado
                th ¿Qué se analiza?
                th Pregunta clave para decidir
            tbody
              tr(style="background-color: #F6F6F6")
                th.text-start Financiero
                td.text-start Rentabilidad, recuperación de inversión y costo de capital.
                td.text-start ¿El proyecto genera valor y supera la rentabilidad mínima requerida?
              tr
                th.text-start Económico y social
                td.text-start Impactos en empleo, ingresos y bienestar comunitario.
                td.text-start ¿El proyecto aporta beneficios a la comunidad y al entorno productivo?
              tr(style="background-color: #F6F6F6")
                th.text-start Ambiental
                td.text-start Uso de recursos y posibles impactos ecológicos.
                td.text-start ¿El proyecto es sostenible y cumple la normativa ambiental?
              tr
                th.text-start Integral
                td.text-start Relación entre todos los componentes anteriores.
                td.text-start ¿Es conveniente ejecutar, ajustar o descartar el proyecto?


    separador
    #t_4_1.titulo-segundo.color-acento-contenido
      h2 4.1. Integración de resultados

    p.mt-4 La integración de resultados financieros, económicos y ambientales implica consolidar la información obtenida en cada uno de los estudios realizados para obtener una visión completa del proyecto. En esta fase se comparan los indicadores de rentabilidad, los impactos sociales y los efectos ambientales, con el propósito de evaluar su coherencia y compatibilidad. No se trata únicamente de verificar si cada componente es favorable de manera individual, sino de analizar cómo interactúan y qué implicaciones tienen en conjunto para la viabilidad del proyecto.

    .bloque-texto-g.bloque-texto-g--inverso.bg-base.p-3.p-sm-4.p-md-5.mt-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema4/5.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Al integrar estos resultados, pueden identificarse situaciones en las que un proyecto sea financieramente atractivo, pero presente impactos sociales o ambientales que requieran ajustes. De igual forma, puede ocurrir que una iniciativa genere beneficios sociales significativos, aunque su rentabilidad económica sea moderada. Este análisis cruzado permite equilibrar intereses y priorizar decisiones estratégicas que armonicen la generación de valor económico con la responsabilidad social y ambiental.

    .row.align-items-center.justify-content-center.mt-4
      .col-lg-12
        .row.justify-content-center.mt-4
          .col-lg-12(data-aos="fade-down")
            .row.d-flex.align-items-center(data-aos="fade-right")
              .col-lg-auto.pe-lg-0.mb-4.mb-xl-0.d-flex.d-none.d-lg-block
                figure.m-0.p-0.w-100.h-100.d-flex
                  img(src='@/assets/curso/tema4/6.svg', alt='', class="w-100 h-100 object-fit-cover", style="margin-left:-10px")
              .col-lg
                p La integración adecuada de estos componentes fortalece la objetividad en la toma de decisiones y reduce el riesgo de evaluar el proyecto de manera parcial. Al considerar simultáneamente la rentabilidad, el impacto en la comunidad y la sostenibilidad ambiental, se garantiza una valoración más técnica y responsable. De esta manera, el proyecto puede ajustarse oportunamente o redefinirse antes de su ejecución, asegurando coherencia entre sus objetivos económicos y su contribución al desarrollo sostenible.

                .cajon.color1.p-4
                  p Para orientar la toma de decisiones sobre la viabilidad del proyecto, es necesario revisar de manera conjunta los resultados financieros, económicos, sociales y ambientales. A continuación, se presenta una lista de chequeo con preguntas clave que permiten verificar estos aspectos de forma estructurada.

    .row.justify-content-center.mt-4
      .col-lg-12
        AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta bg-2")

          //- Tarjeta 1----------------------------------------------------------------------
          .tarjeta.clr--pink02.p-4(titulo="A. Componente financiero")
            .row.align-items-center
              .col-lg-12(data-aos="fade-down")
                .row.d-flex.align-items-center(data-aos="fade-right")
                  .col-lg-5
                    p Permite verificar si el proyecto cumple con los criterios mínimos de rentabilidad y recuperación de la inversión.

                    .row.align-items-center
                      .col-lg-auto.mb-lg-0.margin-li
                        ul.lista-ul--color.p-4
                          li
                            i.lista-ul__vineta
                            p.mb-0 ¿El VPN es positivo?
                          li
                            i.lista-ul__vineta
                            p.mb-0 ¿La TIR supera el costo de capital (WACC)?
                          li
                            i.lista-ul__vineta
                            p.mb-0 ¿La Razón Beneficio Costo es mayor que 1?
                          li
                            i.lista-ul__vineta
                            p.mb-0 ¿El periodo de recuperación es razonable según el nivel de riesgo?

                  .col-lg-7.pe-lg-0.mb-4.mb-xl-0.d-flex.d-none.d-lg-block
                    figure.m-0.p-0.w-100.h-100.d-flex
                      img(src='@/assets/curso/tema4/7.png', alt='', class="w-100 h-100 object-fit-cover")
          
          //- Tarjeta 2----------------------------------------------------------------------
          .tarjeta.clr--pink02.p-4(titulo="B. Componente económico y social")
            .row.align-items-center
              .col-lg-12(data-aos="fade-down")
                .row.d-flex.align-items-center(data-aos="fade-right")
                  .col-lg-5
                    p Permite analizar los beneficios que el proyecto puede generar en la comunidad y en el entorno productivo.

                    .row.align-items-center
                      .col-lg-auto.mb-lg-0.margin-li
                        ul.lista-ul--color.p-4
                          li
                            i.lista-ul__vineta
                            p.mb-0 ¿El proyecto genera empleo directo o indirecto?
                          li
                            i.lista-ul__vineta
                            p.mb-0 ¿Produce beneficios económicos en el entorno local?
                          li
                            i.lista-ul__vineta
                            p.mb-0 ¿Los beneficios sociales superan los costos sociales?
                          li
                            i.lista-ul__vineta
                            p.mb-0 ¿Se identificaron y analizaron posibles externalidades negativas?

                  .col-lg-7.pe-lg-0.mb-4.mb-xl-0.d-flex.d-none.d-lg-block
                    figure.m-0.p-0.w-100.h-100.d-flex
                      img(src='@/assets/curso/tema4/8.png', alt='', class="w-100 h-100 object-fit-cover")
          
          //- Tarjeta 3----------------------------------------------------------------------
          .tarjeta.clr--pink02.p-4(titulo="C. Componente ambiental")
            .row.align-items-center
              .col-lg-12(data-aos="fade-down")
                .row.d-flex.align-items-center(data-aos="fade-right")
                  .col-lg-5
                    p Permite identificar los impactos ambientales del proyecto y verificar las medidas de gestión ambiental.

                    .row.align-items-center
                      .col-lg-auto.mb-lg-0.margin-li
                        ul.lista-ul--color.p-4
                          li
                            i.lista-ul__vineta
                            p.mb-0 ¿Se identificaron los principales impactos ambientales?
                          li
                            i.lista-ul__vineta
                            p.mb-0 ¿Existe un plan de manejo ambiental definido?
                          li
                            i.lista-ul__vineta
                            p.mb-0 ¿El proyecto cumple con la normativa ambiental aplicable?
                          li
                            i.lista-ul__vineta
                            p.mb-0 ¿Se establecieron medidas de mitigación y seguimiento?

                  .col-lg-7.pe-lg-0.mb-4.mb-xl-0.d-flex.d-none.d-lg-block
                    figure.m-0.p-0.w-100.h-100.d-flex
                      img(src='@/assets/curso/tema4/9.png', alt='', class="w-100 h-100 object-fit-cover")
          
          //- Tarjeta 4----------------------------------------------------------------------
          .tarjeta.clr--pink02.p-4(titulo="D. Evaluación integral")
            .row.align-items-center
              .col-lg-12(data-aos="fade-down")
                .row.d-flex.align-items-center(data-aos="fade-right")
                  .col-lg-5
                    p Permite analizar de manera conjunta los resultados financieros, sociales y ambientales para orientar la decisión final.

                    .row.align-items-center
                      .col-lg-auto.mb-lg-0.margin-li
                        ul.lista-ul--color.p-4
                          li
                            i.lista-ul__vineta
                            p.mb-0 ¿Los resultados financieros son coherentes con los impactos sociales y ambientales?
                          li
                            i.lista-ul__vineta
                            p.mb-0 ¿Se identificaron riesgos relevantes antes de la ejecución?
                          li
                            i.lista-ul__vineta
                            p.mb-0 ¿El proyecto puede ejecutarse sin comprometer su sostenibilidad?


                  .col-lg-7.pe-lg-0.mb-4.mb-xl-0.d-flex.d-none.d-lg-block
                    figure.m-0.p-0.w-100.h-100.d-flex
                      img(src='@/assets/curso/tema4/10.png', alt='', class="w-100 h-100 object-fit-cover")

    separador
    #t_4_2.titulo-segundo.color-acento-contenido
      h2 4.2. Análisis de escenarios y sensibilidad
    
    .row.align-items-center.justify-content-center
      .col-lg-10
        .row.justify-content-center.mt-4
          .col-lg-12(data-aos="fade-down")
            .row.d-flex.align-items-center(data-aos="fade-right")
              .col-lg-auto.pe-lg-0.mb-4.mb-xl-0.d-flex.d-none.d-lg-block
                figure.m-0.p-0.w-100.h-100.d-flex
                  img(src='@/assets/curso/tema4/11.svg', alt='', class="w-100 h-100 object-fit-cover", style="margin-left:-10px")
              .col-lg
                p El análisis de escenarios y sensibilidad permite evaluar cómo pueden variar los resultados del proyecto ante cambios en las variables clave que influyen en su desempeño. Ninguna proyección financiera es completamente segura, ya que depende de supuestos relacionados con precios, costos, demanda, tasas de interés o crecimiento del mercado. Por esta razón, es necesario simular distintos contextos posibles optimista, probable y pesimista para anticipar el comportamiento del proyecto bajo diferentes condiciones.
                p El análisis de sensibilidad se enfoca en modificar una variable específica, manteniendo las demás constantes, con el fin de identificar qué tan vulnerable es el proyecto ante variaciones en esa variable. Por ejemplo, puede analizarse cómo cambia el VPN si disminuyen las ventas en un 10 % o si aumentan los costos operativos. Este ejercicio permite determinar cuáles factores tienen mayor impacto en la rentabilidad y, por tanto, requieren mayor control o monitoreo durante la ejecución.
        

            .cajon.color1.p-4.mt-4
              p La evaluación de escenarios complementa este análisis al combinar variaciones simultáneas en varias variables, construyendo panoramas integrales de riesgo. Este enfoque fortalece la toma de decisiones, ya que permite identificar el nivel de resistencia del proyecto frente a condiciones adversas. En consecuencia, el análisis de escenarios y sensibilidad se convierte en una herramienta estratégica para gestionar la incertidumbre, reducir riesgos y ajustar el proyecto antes de comprometer recursos de manera definitiva.

    separador
    #t_4_3.titulo-segundo.color-acento-contenido
      h2 4.3. Determinación de viabilidad del proyecto

    .bloque-texto-g.bg-2.p-3.p-sm-4.p-md-5.mt-4
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema4/12.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 La determinación de viabilidad del proyecto corresponde al momento en el cual se emite un juicio técnico fundamentado a partir de la integración de todos los estudios realizados. En esta fase se analizan de manera conjunta los resultados financieros, económicos, sociales y ambientales, con el propósito de establecer si la iniciativa cumple con los criterios necesarios para su ejecución. No se trata únicamente de verificar la rentabilidad, sino de valorar la coherencia global del proyecto frente a sus objetivos y al entorno en el que se desarrollará.

    p.mt-4 Para determinar la viabilidad de un proyecto, es necesario analizar de manera conjunta los resultados financieros, sociales y ambientales obtenidos durante el proceso de evaluación. Este análisis permite comparar los indicadores con los criterios establecidos y valorar la estabilidad del proyecto frente a posibles cambios del entorno. A continuación, se presentan algunos pasos clave que orientan este proceso de análisis:

    .row.align-items-center.justify-content-center
      .col-lg-12
        .row.justify-content-center.mt-4
          .col-lg-12(data-aos="fade-down")
            .row.d-flex.align-items-center(data-aos="fade-right")
              .col-lg.p-4
                .row.justify-content-center 
                  AcordionA(tipo="b" clase-tarjeta="tarjeta bg-8").color-primario
                    //-1ra pestaña
                    .row(titulo="A. Comparación de indicadores")
                      p Consiste en comparar los indicadores obtenidos en la evaluación del proyecto con los parámetros mínimos definidos por la organización o por las entidades financiadoras, con el fin de verificar si la propuesta cumple las condiciones requeridas para su ejecución.

                    //-2da pestaña  
                    .row(titulo="B. Análisis del valor económico y social")
                      p Permite revisar si el proyecto genera valor económico y si los beneficios sociales esperados superan los costos asociados, considerando su aporte al bienestar de la comunidad y al entorno productivo.
                    
                    //-3ra pestaña
                    .row(titulo="C. Evaluación de la gestión ambiental")
                      p Consiste en verificar que los impactos ambientales identificados cuenten con medidas de prevención, mitigación o control que garanticen el uso responsable de los recursos naturales.
            
                    //-4ra pestaña
                    .row(titulo="D. Análisis de escenarios y riesgos")
                      p Implica examinar los resultados del análisis de escenarios y sensibilidad para identificar el nivel de riesgo del proyecto y evaluar la estabilidad de los resultados ante posibles cambios en las condiciones del mercado.
                
              .col-lg-auto.pe-lg-0.mb-4.mb-xl-0.d-flex.d-none.d-lg-block
                figure.m-0.p-0.w-100.h-100.d-flex
                  img(src='@/assets/curso/tema4/13.png', alt='', class="w-100 h-100 object-fit-cover")


    p.mt- Para orientar la decisión final sobre la ejecución de un proyecto, es necesario analizar de manera integral los resultados financieros, sociales y ambientales obtenidos durante el proceso de evaluación. A partir de este análisis, se pueden identificar tres posibles alternativas de decisión:

    .row.justify-content-center.py-4
      //-Tarjeta 1
      .col-10.col-md-6.col-lg-4.mb-4.mb-md-0(data-aos="fade-right")
        .tarjeta-avatar
          img(src='@/assets/curso/tema4/14.svg' alt='AvatarTop').m-auto
          .tarjeta.color-primario.shadow
            .p-4
              .row.justify-content-center.mb-3
                .col-auto
                  .py-2.px-3
                    p.mb-0 #[b Ejecución del proyecto]
                    p.mt-2 El proyecto se desarrolla en las condiciones propuestas cuando los resultados del análisis indican que es viable y genera beneficios esperados.
    
      //-Tarjeta 2
      .col-10.col-md-6.col-lg-4.mb-4.mb-md-0(data-aos="fade-right")
        .tarjeta-avatar
          img(src='@/assets/curso/tema4/15.svg' alt='AvatarTop').m-auto
          .tarjeta.color-primario.shadow
            .p-4
              .row.justify-content-center.mb-3
                .col-auto
                  .py-2.px-3
                    p.mb-0 #[b Ajuste del proyecto]
                    p.mt-2 La iniciativa se modifica o mejora cuando se identifican aspectos que requieren optimización para alcanzar mejores resultados.
    
      //-Tarjeta 3
      .col-10.col-md-6.col-lg-4.mb-4.mb-md-0(data-aos="fade-right")
        .tarjeta-avatar
          img(src='@/assets/curso/tema4/16.svg' alt='AvatarTop').m-auto
          .tarjeta.color-primario.shadow
            .p-4
              .row.justify-content-center.mb-3
                .col-auto
                  .py-2.px-3
                    p.mb-0 #[b Descarte del proyecto]
                    p.mt-2 El proyecto no se ejecuta cuando los riesgos, costos o impactos superan los beneficios previstos.

    .row.justify-content-center.py-4
      .col-lg-6.d-none.d-lg-block
        figure(data-aos="fade-up")
          img(src='@/assets/curso/tema4/17.png', alt='', style="width: 100%").m-auto
      .col-lg-6
        LineaTiempoD.color-primario.linea-bold
          .row(numero="1" titulo="Ejecución del proyecto")
            .col-md-12.mb-4.mb-md-0
              p El proyecto se desarrolla en las condiciones propuestas cuando los resultados del análisis indican que es viable y genera beneficios esperados.

          .row(numero="2" titulo="Ajuste del proyecto")
            .col-md-12.mb-4.mb-md-0
              p La iniciativa se modifica o mejora cuando se identifican aspectos que requieren optimización para alcanzar mejores resultados.
    
          .row(numero="3" titulo="Descarte del proyecto")
            .col-md-12.mb-4.mb-md-0
              p El proyecto no se ejecuta cuando los riesgos, costos o impactos superan los beneficios previstos.

    .row.justify-content-center.py-4
      .col-lg-10
        .row.align-items-center
          .col-lg-12
            .cajon.color2.p-4
              p Este proceso garantiza que la inversión se sustente en un análisis técnico integral y no únicamente en expectativas de rentabilidad. De esta manera, la evaluación del proyecto se consolida como un ejercicio estratégico orientado a la sostenibilidad y al uso eficiente de los recursos.

    p.mt-4 La aplicación de estos criterios permite analizar de manera integral los diferentes resultados obtenidos durante la evaluación del proyecto. Al revisar conjuntamente los aspectos financieros, económicos, sociales y ambientales, se fortalece la capacidad de análisis y se facilita una decisión técnica fundamentada. De esta forma, la organización puede determinar con mayor claridad si la iniciativa debe ejecutarse, ajustarse o descartarse, garantizando que la inversión responda a principios de sostenibilidad, responsabilidad y gestión eficiente de los medios disponibles.

</template>

<script>
export default {
  name: 'Tema4',
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
