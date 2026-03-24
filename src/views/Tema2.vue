<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 2
      h1 Evaluación económica y social del proyecto

    figure
      img(src='@/assets/curso/tema2/1.png', alt='', style="width: 1226px").m-auto

    p.mt-4 La evaluación económica y social del proyecto complementa el análisis financiero al examinar los efectos que la iniciativa puede generar en la economía y en la comunidad donde se implementa. Mientras la evaluación financiera se enfoca en la rentabilidad para el inversionista, la evaluación económica y social amplía la perspectiva, considerando beneficios y costos que trascienden el ámbito empresarial. Esta etapa permite identificar si el proyecto contribuye al desarrollo regional, a la generación de empleo y al bienestar colectivo, aspectos fundamentales en la formulación de iniciativas sostenibles.

    .row.justify-content-center.mt-4
      .col-lg-10
        .row.align-items-center
          .col-lg-12(data-aos="fade-down")
            .row.d-flex.align-items-center(data-aos="fade-right")
              .col-lg-5.pe-lg-0.mb-4.mb-xl-0.d-flex.d-none.d-lg-block
                figure.m-0.p-0.w-100.h-100.d-flex
                  img(src='@/assets/curso/tema2/2.png', alt='', class="w-100 h-100 object-fit-cover", style="margin-left:-10px")
              .col-lg
                p Desde el punto de vista económico, se analizan los impactos que el proyecto puede generar en términos de producción, empleo, ingresos y dinamización del mercado local. Se evalúan beneficios directos e indirectos, así como costos relevantes que puedan afectar a distintos grupos de interés. En el componente social, se consideran variables como:

                ul.lista-ul--color(style='')
                  li.d-flex.align-items-start
                    span.icono-img
                    p.mb-0 Calidad de vida.

                  li.d-flex.align-items-start
                    span.icono-img
                    p.mb-0 Acceso a bienes o servicios.

                  li.d-flex.align-items-start
                    span.icono-img
                    p.mb-0 Inclusión.
                  li.d-flex.align-items-start
                    span.icono-img
                    p.mb-0 Equidad.

                  li.d-flex.align-items-start
                    span.icono-img
                    p.mb-0 Impactos externos.


            .cajon.color1.p-3.mt-4.mb-4
              .row.align-items-start.mt-4
                .col-lg-2.mb-lg-0.mb-4.d-flex.d-none.d-lg-block
                  figure(data-aos="fade-down")
                    img(src='@/assets/curso/tema2/3.svg', style='width: 180px')
                
                .col
                  p Este análisis permite evaluar no solo la viabilidad financiera del proyecto, sino también su impacto y aporte al entorno en el que se desarrolla.

    .bloque-texto-g.bg-61.p-3.p-sm-4.p-md-5.mt-4
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema2/4.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 En consecuencia, la evaluación económica y social se convierte en un instrumento estratégico para fundamentar decisiones integrales, especialmente en proyectos públicos o de impacto comunitario. La medición adecuada de beneficios sociales y económicos fortalecen la legitimidad de la iniciativa y permiten justificar su ejecución más allá de la rentabilidad monetaria. De esta manera, el proyecto no solo se evalúa por su capacidad de generar utilidades, sino también por su aporte al desarrollo sostenible y al mejoramiento de las condiciones sociales de la población objetivo.


    .row.align-items-center.justify-content-center
      .col-lg-12
        .row.justify-content-center.mt-4
          .col-lg-12(data-aos="fade-down")
            .row.d-flex.align-items-center(data-aos="fade-right")
              .col-lg.p-4
                .row.align-items-start.mt-4
                  .col-lg-2.mb-lg-0.mb-4
                    figure(data-aos="fade-down")
                      img(src='@/assets/curso/tema2/5.svg', style='width: 100px').m-auto
                  
                  .col
                    p Con el propósito de comprender de manera estructurada los diferentes efectos que puede generar un proyecto, a continuación, se presenta una tabla con los principales componentes que intervienen en la evaluación económica y social. Estos elementos permiten analizar el impacto de una iniciativa más allá de su rentabilidad financiera, considerando tanto los beneficios como los posibles efectos que puede producir en la comunidad y en el entorno productivo.


                  .cajon.color1.p-4
                    p En este análisis se distinguen diferentes tipos de impactos, entre ellos los efectos económicos directos e indirectos, así como las externalidades que pueden presentarse durante la ejecución del proyecto. Esta organización facilita identificar cómo una iniciativa puede contribuir al desarrollo regional, a la generación de bienestar social y a la dinamización de las actividades económicas, al tiempo que permite reconocer posibles riesgos o efectos adversos asociados a su implementación.
                    
              .col-lg-5.pe-lg-0.mb-4.mb-xl-0.d-flex.d-none.d-lg-block
                figure.m-0.p-0.w-100.h-100.d-flex
                  img(src='@/assets/curso/tema2/6.png', alt='', class="w-100 h-100 object-fit-cover")

    .row.justify-content-center
      .col-lg-12
        .titulo-sexto.color-acento-contenido.mb-3.mt-4
          h5 Tabla 2.
          span Componentes de la evaluación económica y social del proyecto

        .tabla-a.color-acento-contenido
          table
            thead(style="background-color: #FE93C4")
              tr
                th(style="width: 300px;") Componente
                th ¿Qué analiza?
                th Ejemplos de impacto
                th Ejemplo práctico
            tbody
              tr(style="background-color: #F6F6F6")
                th.text-start Impacto Económico Directo.
                td.text-start Efectos inmediatos del proyecto sobre producción e ingresos.
                td.text-start Generación de empleo, aumento de ventas, contratación de proveedores locales.
                td.text-start Permite medir la contribución del proyecto al crecimiento económico.
              tr
                th.text-start Impacto Económico Indirecto.
                td.text-start Efectos secundarios derivados de la actividad del proyecto.
                td.text-start Dinamización del comercio local, encadenamientos productivos.
                td.text-start Muestra cómo el proyecto impulsa otras actividades económicas.
              tr(style="background-color: #F6F6F6")
                th.text-start Impacto Social.
                td.text-start Cambios en las condiciones de vida de la población beneficiaria.
                td.text-start Acceso a servicios, mejora en calidad de vida, inclusión social.
                td.text-start Evalúa el aporte del proyecto al bienestar comunitario.
              tr
                th.text-start Externalidades Positivas.
                td.text-start Beneficios adicionales no previstos directamente en ingresos financieros.
                td.text-start Desarrollo regional, fortalecimiento empresarial, innovación local.
                td.text-start Evidencia beneficios que trascienden la rentabilidad monetaria.
              tr(style="background-color: #F6F6F6")
                th.text-start Externalidades Negativas.
                td.text-start Posibles efectos adversos que puede generar el proyecto.
                td.text-start Congestión, desigualdad, desplazamiento de pequeños productores.
                td.text-start Permite identificar riesgos y establecer medidas correctivas.

    separador
    #t_2_1.titulo-segundo.color-acento-contenido
      h2 2.1. Impactos económicos 

    p.mt-4 Los impactos económicos del proyecto hacen referencia a los efectos que la iniciativa puede generar en la actividad productiva, el empleo y el dinamismo del mercado donde se implementa. Estos impactos pueden manifestarse tanto de manera directa como indirecta, dependiendo del alcance de la inversión y de su capacidad para integrarse con otros sectores económicos. Evaluar estos efectos permiten determinar si el proyecto contribuye al crecimiento económico local, regional o sectorial, más allá de los beneficios financieros obtenidos por la empresa.

    .row.align-items-center.justify-content-center
      .col-lg-12
        .row.justify-content-center.mt-4
          .col-lg-12(data-aos="fade-down")
            .row.d-flex.align-items-center.bg-2(data-aos="fade-right")
              .col-lg-auto.pe-lg-0.mb-4.mb-xl-0.d-flex.d-none.d-lg-block
                figure.m-0.p-0.w-100.h-100.d-flex
                  img(src='@/assets/curso/tema2/7.png', alt='', class="w-100 h-100 object-fit-cover", style="margin-left:-11px")
              .col-lg
                .row.align-items-center
                  .col-lg-12.p-3
                
                    figure
                      img(src="@/assets/curso/tema2/8.svg", alt="", style="width: 80px")
                
                    p.mt-3 En términos directos, los impactos económicos se relacionan con la generación de empleo, el incremento en la producción de bienes o servicios y el aumento de ingresos para proveedores y trabajadores vinculados al proyecto. Asimismo, pueden presentarse efectos indirectos derivados de los encadenamientos productivos, como el fortalecimiento de empresas proveedoras, la ampliación del comercio local y el estímulo a nuevas inversiones complementarias. Este análisis permite identificar cómo la iniciativa influye en la estructura económica del entorno y en la circulación de recursos dentro de la comunidad.


    .row.justify-content-center.mt-4
      .col-lg-10
        .row.align-items-center
          .col-lg-12
            .row.align-items-start.mt-4
              .col-lg-1.mb-lg-0.mb-4
                figure(data-aos="fade-down")
                  img(src='@/assets/curso/tema2/9.svg', style='width: 100px').m-auto
              
              .col
                p Desde una perspectiva estratégica, la medición de los impactos económicos facilita la toma de decisiones responsables y orientadas a la sostenibilidad. En este sentido, cuando un proyecto genera empleo estable, impulsa el desarrollo empresarial y dinamiza el mercado local, contribuye a fortalecer su legitimidad y favorece la aceptación social en la comunidad.

            .cajon.color1.p-4.mt-3
              p En consecuencia, la evaluación de los impactos económicos no solo complementa el análisis financiero, sino que también permite valorar el aporte del proyecto al desarrollo productivo y al fortalecimiento de la competitividad del territorio donde se implementa.


    separador
    #t_2_2.titulo-segundo.color-acento-contenido
      h2 2.2. Análisis costo–beneficio social

    .row.align-items-center.justify-content-center
      p El análisis costo–beneficio social constituye una herramienta para evaluar proyectos cuyo impacto trasciende el ámbito financiero y empresarial. A diferencia del análisis financiero tradicional, que se enfoca en la rentabilidad para el inversionista, el análisis social examina los beneficios y costos que afectan a la comunidad en su conjunto. Este enfoque permite identificar si el proyecto contribuye al bienestar colectivo, considerando variables como generación de empleo, acceso a servicios, reducción de desigualdades y mejora en la calidad de vida de la población beneficiaria.

      .col-lg-12
        .row.justify-content-center
          .col-lg-12(data-aos="fade-down")
            .row.d-flex.align-items-center(data-aos="fade-right")
              .col-lg.p-4
                .row.align-items-start.mt-4
                  .col-lg-2.mb-lg-0.mb-4
                    figure(data-aos="fade-down")
                      img(src='@/assets/curso/tema2/10.svg', style='width: 100px').m-auto
                  
                  .col
                    p Desde el punto de vista metodológico, el análisis costo–beneficio social implica cuantificar y valorar, en la medida de lo posible, los efectos positivos y negativos que el proyecto genera sobre la sociedad. Esto incluye beneficios directos e indirectos, así como externalidades que no siempre se reflejan en los estados financieros

                  .cajon.color2.p-4
                    p Según Mokate (2004), la evaluación financiera de proyectos con enfoque social debe incorporar los impactos sobre la comunidad y no limitarse exclusivamente a los retornos monetarios del inversionista, ya que el verdadero valor de un proyecto puede manifestarse en beneficios sociales de largo plazo.

              .col-lg-5.pe-lg-0.mb-4.mb-xl-0.d-flex.d-none.d-lg-block
                figure.m-0.p-0.w-100.h-100.d-flex
                  img(src='@/assets/curso/tema2/11.png', alt='', class="w-100 h-100 object-fit-cover")
  
    .bloque-texto-g.bg-base.p-3.p-sm-4.p-md-5.mt-4
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema2/12.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 En consecuencia, el análisis costo–beneficio social permite determinar si los beneficios sociales esperados superan los costos asumidos por la comunidad o el Estado. Cuando el resultado es favorable, el proyecto no solo es viable económicamente, sino también justificable desde el punto de vista del desarrollo sostenible. De esta manera, este análisis se convierte en un instrumento clave para sustentar decisiones en proyectos públicos, sociales o de impacto regional, garantizando que la inversión contribuya efectivamente al bienestar colectivo.

    .row.align-items-center.justify-content-center.mt-4
      p Para comprender cómo se aplica el análisis costo–beneficio social en la evaluación de proyectos, es necesario considerar una serie de etapas que orientan su desarrollo. Este proceso permite identificar, valorar y comparar los costos y beneficios que una iniciativa puede generar en la sociedad. A continuación, se presentan los principales pasos que guían la realización de este análisis.

      .col-lg-12
        SlyderF(columnas="col-lg-6 col-xl-4")
          //-Primer Slyder--------------------------------------------------
          .tarjeta.bg-61.p-4
            .row.justify-content-center.mb-3
              .col-8
                img(src='@/assets/curso/tema2/13.svg', alt='').img100.m-auto
            p.text-center.mb-0 
              b Definir el alcance del proyecto
            p.text-center Determinar claramente los objetivos, la población beneficiaria y el área de influencia del proyecto.

          //-Segundo Slyder--------------------------------------------------
          .tarjeta.bg-61.p-4
            .row.justify-content-center.mb-3
              .col-8
                img(src='@/assets/curso/tema2/14.svg', alt='').img100.m-auto
            p.text-center.mb-0 
              b Identificar los costos sociales
            p.text-center Reconocer todos los costos directos e indirectos que afectan a la sociedad, incluyendo costos ambientales, sociales y de oportunidad.
            
          //-Tercer Slyder--------------------------------------------------
          .tarjeta.bg-61.p-4
            .row.justify-content-center.mb-3
              .col-8
                img(src='@/assets/curso/tema2/15.svg', alt='').img100.m-auto
            p.text-center.mb-0 
              b Identificar los beneficios sociales
            p.text-center Establecer los beneficios directos e indirectos generados por el proyecto, como generación de empleo, acceso a servicios, mejora en calidad de vida y desarrollo regional.

          //-Cuarto Slyder--------------------------------------------------
          .tarjeta.bg-61.p-4
            .row.justify-content-center.mb-3
              .col-8
                img(src='@/assets/curso/tema2/16.svg', alt='').img100.m-auto
            p.text-center.mb-0 
              b Cuantificar los costos y beneficios
            p.text-center Asignar valores monetarios a los impactos identificados, cuando sea posible, utilizando metodologías económicas apropiadas.
          //-Quinto Slyder--------------------------------------------------
          .tarjeta.bg-61.p-4
            .row.justify-content-center.mb-3
              .col-8
                img(src='@/assets/curso/tema2/17.svg', alt='').img100.m-auto
            p.text-center.mb-0 
              b Actualizar los valores al presente
            p.text-center Aplicar una tasa social de descuento para traer los costos y beneficios futuros a valor presente.

          //-Sexto Slyder--------------------------------------------------
          .tarjeta.bg-61.p-4
            .row.justify-content-center.mb-3
              .col-8
                img(src='@/assets/curso/tema2/18.svg', alt='').img100.m-auto
            p.text-center.mb-0 
              b Calcular el indicador social
            p.text-center Determinar la Relación Beneficio Costo Social o el Valor Presente Neto Social, comparando beneficios y costos sociales actualizados.
            
          //-Séptimo Slyder--------------------------------------------------
          .tarjeta.bg-61.p-4
            .row.justify-content-center.mb-3
              .col-8
                img(src='@/assets/curso/tema2/19.svg', alt='').img100.m-auto
            p.text-center.mb-0 
              b Analizar resultados e impactos cualitativos
            p.text-center Complementar el análisis cuantitativo con la evaluación de impactos no monetizables, como equidad, inclusión o sostenibilidad.

          //-Octavo Slyder--------------------------------------------------
          .tarjeta.bg-61.p-4
            .row.justify-content-center.mb-3
              .col-8
                img(src='@/assets/curso/tema2/20.svg', alt='').img100.m-auto
            p.text-center.mb-0 
              b Tomar la decisión
            p.text-center Determinar si el proyecto es socialmente conveniente, es decir, si los beneficios sociales superan los costos asumidos por la comunidad.

    separador
    #t_2_3.titulo-segundo.color-acento-contenido
      h2 2.3. Indicadores de impacto comunitario

    .row.align-items-center.justify-content-center
      .col-lg-12
        .row.justify-content-center.mt-4
          .col-lg-12(data-aos="fade-down")
            .row.d-flex.align-items-center(data-aos="fade-right")
              .col-lg-auto.pe-lg-0.mb-4.mb-xl-0.d-flex.d-none.d-lg-block
                figure.m-0.p-0.w-100.h-100.d-flex
                  img(src='@/assets/curso/tema2/21.svg', alt='', class="w-100 h-100 object-fit-cover", style="margin-left:-10px")
              .col-lg
                p.mt-4 Los indicadores de impacto y beneficios para la comunidad permiten medir de manera objetiva los efectos que un proyecto genera en el entorno social donde se implementa. Estos indicadores buscan evaluar cambios en variables como empleo, ingresos, acceso a bienes y servicios, calidad de vida y desarrollo local. A través de su aplicación, es posible determinar si el proyecto contribuye efectivamente al bienestar colectivo y si sus resultados trascienden el ámbito financiero empresarial.
                
                .cajon.color1.p-4
                  p Para analizar el impacto de un proyecto es necesario utilizar indicadores que permitan medir y comprender los cambios generados en el entorno. Estos indicadores pueden clasificarse en #[b cuantitativos] y #[b cualitativos], según el tipo de información que aportan. A continuación, se presentan algunas características representativas de cada tipo de indicador.

    SlyderA.p-4.bg-04.bg-r8(tipo="b").mt-4
      //-Tarjeta 1--------------------------------------------------------
      .row.justify-content-center.align-items-center
        .col-lg-7.mb-4.mb-lg-0.text-white
          h4.text-white A. Indicadores cuantitativos
          p Permiten medir los resultados de un proyecto mediante datos numéricos. Estos indicadores facilitan evaluar de forma objetiva los cambios generados en el entorno económico o social.
          p.mt-4 Ejemplos:
          .row.align-items-center
            .col-lg-auto.mb-lg-0.margin-li
              ul.lista-ul--color.p-4.text-white
                li
                  i.lista-ul__vineta
                  p.mb-0 Número de empleos generados.
                li
                  i.lista-ul__vineta
                  p.mb-0 Incremento en los ingresos familiares.
                li
                  i.lista-ul__vineta
                  p.mb-0 Cobertura de servicios.
                li
                  i.lista-ul__vineta
                  p.mb-0 Porcentaje de población beneficiada.

                  
        .col-lg-5.d-flex.d-none.d-lg-block
          figure(data-aos="fade-down")
            img(src='@/assets/curso/tema2/22.png', style='width: 572px')
    
      //-Tarjeta 2--------------------------------------------------------
      .row.justify-content-center.align-items-center
        .col-lg-7.mb-4.mb-lg-0.text-white 
          h4 B. Indicadores cualitativos
          p Se utilizan para analizar cambios relacionados con percepciones y condiciones sociales derivadas de la implementación del proyecto. Estos indicadores ayudan a comprender efectos que no siempre pueden expresarse en valores numéricos.
          p.mt-4 Ejemplos:
          .row.align-items-center
            .col-lg-auto.mb-lg-0.margin-li
              ul.lista-ul--color.p-4
                li
                  i.lista-ul__vineta
                  p.mb-0 Percepción de mejora en la calidad de vida.
                li
                  i.lista-ul__vineta
                  p.mb-0 Fortalecimiento del tejido empresarial.
                li
                  i.lista-ul__vineta
                  p.mb-0 Inclusión social.
                li
                  i.lista-ul__vineta
                  p.mb-0 Mejoramiento de las condiciones de bienestar.
                  
          
        .col-lg-5.d-flex.d-none.d-lg-block
          figure(data-aos="fade-down")
            img(src='@/assets/curso/tema2/23.png', style='width: 572px')

    .row.justify-content-center
      .col-lg-10
        .row.align-items-center
          .col-lg-12
            .cajon.color2.p-4
              p La definición y medición de indicadores de impacto fortalecen la evaluación económica y social del proyecto y facilitan el seguimiento posterior a su ejecución. Estos instrumentos permiten verificar el cumplimiento de los objetivos sociales y sustentar la inversión ante entidades financiadoras, organismos públicos o la comunidad beneficiaria. 
          
          p.mt-4 En este sentido, los indicadores se constituyen en herramientas estratégicas que contribuyen a asegurar que el proyecto genere beneficios sostenibles y aporte al desarrollo integral del territorio.

</template>

<script>
export default {
  name: 'Tema2',
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
