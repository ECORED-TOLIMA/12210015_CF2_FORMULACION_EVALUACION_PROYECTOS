<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 3
      h1 Evaluación ambiental y sostenibilidad

    .row.align-items-center.justify-content-center
      .col-lg-12
        .row.justify-content-center.mt-4
          .col-lg-12(data-aos="fade-down")
            .row.d-flex.align-items-center(data-aos="fade-right")
              .col-lg-auto.pe-lg-0.mb-4.mb-xl-0.d-flex.d-none.d-lg-block
                figure.m-0.p-0.w-100.h-100.d-flex
                  img(src='@/assets/curso/tema3/1.png', alt='', class="w-100 h-100 object-fit-cover", style="margin-left:-10px")
              .col-lg
                p La evaluación ambiental del proyecto permite examinar las posibles interacciones entre la iniciativa y el entorno natural en el cual se desarrollará. Este análisis busca anticipar efectos sobre los recursos ambientales, tales como el suelo, el agua, el aire y la biodiversidad, incorporando criterios ecológicos dentro del proceso de valoración integral. Más allá del cumplimiento normativo, esta evaluación responde a la necesidad de garantizar que el crecimiento económico sea compatible con la conservación ambiental y el uso responsable de los recursos.
                p En el ámbito técnico, el estudio ambiental contempla la identificación, clasificación y medición de impactos potenciales derivados de las actividades del proyecto. Esto incluye el análisis de emisiones, generación de residuos, consumo energético y alteraciones en el ecosistema. La valoración de estos aspectos permite establecer medidas de prevención, mitigación o compensación cuando sea necesario, incorporando herramientas como matrices de impacto ambiental y planes de manejo que aseguren el control adecuado de los efectos identificados.
              
    .row.align-items-center.justify-content-center
      .col-lg-12
        .row.justify-content-center.mt-4
          .col-lg-12(data-aos="fade-down")
            .row.d-flex.align-items-center(data-aos="fade-right")
              .col-lg.p-4
                .row.d-flex.align-items-center.bg-3(data-aos="fade-right")
                  .col-lg-auto.pe-lg-0.mb-4.mb-xl-0.d-flex.d-none.d-lg-block
                    figure.m-0.p-0.w-100.h-100.d-flex
                      img(src='@/assets/curso/tema3/2.svg', alt='', class="w-100 h-100 object-fit-cover", style="margin-left:-12px")
                  .col-lg
                    p Incorporar la dimensión ambiental en la evaluación del proyecto fortalece su sostenibilidad a mediano y largo plazo. Las organizaciones que gestionan adecuadamente sus impactos ambientales no solo reducen riesgos legales y operativos, sino que también mejoran su reputación y competitividad. Desde esta perspectiva, la sostenibilidad deja de ser un requisito externo y se convierte en un elemento estratégico que contribuye a la permanencia del proyecto y a su integración armónica con el entorno.
                
                p.mt-4 En la siguiente tabla se presentan algunos aspectos ambientales que deben considerarse al analizar los posibles impactos que puede generar la ejecución de una iniciativa. En ella se identifican componentes del entorno que podrían verse afectados, como el suelo, el agua, el aire, los residuos y el consumo de energía. Asimismo, se plantean acciones orientadas a prevenir, mitigar o controlar dichos impactos. Esta organización facilita comprender cómo la gestión ambiental se integra al proceso de evaluación del proyecto y contribuye a promover decisiones responsables y sostenibles.

              .col-lg-auto.pe-lg-0.mb-4.mb-xl-0.d-flex.d-none.d-lg-block
                figure.m-0.p-0.w-100.h-100.d-flex
                  img(src='@/assets/curso/tema3/3.png', alt='', class="w-100 h-100 object-fit-cover")

    .row.justify-content-center
      .col-lg-10
        .row.align-items-center
          .col-lg-12
            .titulo-sexto.color-acento-contenido.mb-3.mt-4
              h5 Tabla 3.
              span Evaluación ambiental del proyecto

            .tabla-a.color-acento-contenido
              table
                thead(style="background-color: #FE93C4")
                  tr
                    th(style="width: 200px;") Aspecto ambiental
                    th ¿Qué puede afectar el proyecto?
                    th ¿Qué se debe hacer?
                tbody
                  tr(style="background-color: #F6F6F6")
                    th.text-start Suelo
                    td.text-start Uso del terreno y posibles alteraciones del espacio.
                    td.text-start Planificar adecuadamente la ubicación y minimizar impactos.
                  tr
                    th.text-start Agua
                    td.text-start Consumo y posibles vertimientos.
                    td.text-start Controlar el uso y aplicar sistemas de tratamiento.
                  tr(style="background-color: #F6F6F6")
                    th.text-start Aire
                    td.text-start Emisiones o generación de contaminantes.
                    td.text-start Implementar controles y tecnologías limpias.
                  tr
                    th.text-start Residuos
                    td.text-start Producción de desechos sólidos o peligrosos.
                    td.text-start Aplicar un plan de manejo y reciclaje.
                  tr(style="background-color: #F6F6F6")
                    th.text-start Energía
                    td.text-start Alto consumo energético.
                    td.text-start Promover eficiencia y uso de energías renovables.

    separador
    #t_3_1.titulo-segundo.color-acento-contenido
      h2 3.1. Identificación de impactos ambientales
    
    .bloque-texto-g.bg-61.p-3.p-sm-4.p-md-5.mt-4
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema3/4.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 La identificación de impactos ambientales consiste en reconocer los posibles efectos que las actividades del proyecto pueden generar sobre el entorno natural. Este proceso implica analizar cada etapa de ejecución desde la construcción hasta la operación, para determinar cómo interactúa con los recursos ambientales. La finalidad es anticipar consecuencias antes de que ocurran, permitiendo una planificación responsable y alineada con criterios de sostenibilidad.

    .row.justify-content-center.mt-4.mb-4
      p Para realizar esta identificación se analizan factores como las emisiones, la generación de residuos, el consumo de agua y energía, la alteración del suelo y las posibles afectaciones a la biodiversidad. Este proceso permite reconocer los efectos que el proyecto puede generar sobre el entorno natural.
      .col-lg-10
        .row.align-items-center.mt-4
          .col-lg-12
            .cajon.color1.p-4
              p En esta fase no solo se identifican impactos negativos, sino también posibles impactos positivos, como la implementación de tecnologías limpias o la optimización en el uso de los recursos. Para facilitar este análisis se emplean herramientas que permiten organizar y evaluar la información ambiental de manera sistemática.

    .titulo-tres.mt-4(data-aos="fade-left"): h3 Herramientas para identificar impactos ambientales

    p.mt-4 Para apoyar el proceso de identificación y análisis de los impactos ambientales se utilizan diferentes herramientas que permiten revisar de manera estructurada las actividades del proyecto y su relación con los recursos del entorno natural. Entre las herramientas más utilizadas se encuentran:
    
    .row.justify-content-center.mt-4
      .col-lg-auto
        AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta bg-2")

          //- Tarjeta 1----------------------------------------------------------------------
          .tarjeta.clr--pink02.p-4(titulo="A. Listas de chequeo")
            .row.align-items-center
              .col-lg-12(data-aos="fade-down")
                .row.d-flex.align-items-center(data-aos="fade-right")
                  .col-lg-5
                    p Herramienta que permite revisar de manera ordenada los posibles aspectos e impactos ambientales asociados a las actividades del proyecto.

                    .row.align-items-center
                      .col-lg-auto.mb-lg-0.margin-li
                        ul.lista-ul--color.p-4
                          li
                            i.lista-ul__vineta
                            p.mb-0 Son listas de preguntas o aspectos ambientales a revisar.
                          li
                            i.lista-ul__vineta
                            p.mb-0 Ayudan a no olvidar ningún posible impacto.
                          li
                            i.lista-ul__vineta
                            p.mb-0 Permiten verificar efectos sobre agua, suelo, aire, residuos y biodiversidad.
                          li
                            i.lista-ul__vineta
                            p.mb-0 Se utilizan como herramienta inicial de diagnóstico.

                  .col-lg-7.pe-lg-0.mb-4.mb-xl-0.d-flex.d-none.d-lg-block
                    figure.m-0.p-0.w-100.h-100.d-flex
                      img(src='@/assets/curso/tema3/5.png', alt='', class="w-100 h-100 object-fit-cover")
          
          //- Tarjeta 2----------------------------------------------------------------------
          .tarjeta.clr--pink02.p-4(titulo="B. Matrices de impacto ambiental")
            .row.align-items-center
              .col-lg-12(data-aos="fade-down")
                .row.d-flex.align-items-center(data-aos="fade-right")
                  .col-lg-5
                    p Instrumento que relaciona las actividades del proyecto con los elementos del medio ambiente para analizar la magnitud de los impactos generados.

                    .row.align-items-center
                      .col-lg-auto.mb-lg-0.margin-li
                        ul.lista-ul--color.p-4
                          li
                            i.lista-ul__vineta
                            p.mb-0 Relacionan actividades del proyecto con elementos del medio ambiente.
                          li
                            i.lista-ul__vineta
                            p.mb-0 Permiten evaluar qué tan fuerte o importante es cada impacto.
                          li
                            i.lista-ul__vineta
                            p.mb-0 Ayudan a clasificar impactos como bajos, medios o altos.
                          li
                            i.lista-ul__vineta
                            p.mb-0 Facilitan la toma de decisiones sobre medidas de mitigación.

                  .col-lg-7.pe-lg-0.mb-4.mb-xl-0.d-flex.d-none.d-lg-block
                    figure.m-0.p-0.w-100.h-100.d-flex
                      img(src='@/assets/curso/tema3/6.png', alt='', class="w-100 h-100 object-fit-cover")

    separador
    #t_3_2.titulo-segundo.color-acento-contenido
      h2 3.2. Normativa ambiental aplicable
    
    .row.align-items-start.mt-4
      .col-lg-1.mb-lg-0.mb-4
        figure(data-aos="fade-down")
          img(src='@/assets/curso/tema3/7.svg', style='width: 100px').m-auto
      
      .col
        p   La normativa ambiental aplicable comprende el conjunto de leyes, decretos y regulaciones que orientan y controlan las actividades económicas para garantizar la protección del medio ambiente. Todo proyecto, independientemente de su tamaño o sector, debe cumplir con disposiciones legales relacionadas con el uso de recursos naturales, vertimientos, emisiones, manejo de residuos y conservación de ecosistemas. Este marco normativo establece límites y obligaciones que buscan prevenir daños ambientales y promover prácticas sostenibles. 

    .row.align-items-center.justify-content-center
      .col-lg-12
        .row.justify-content-center.mt-4
          .col-lg-12(data-aos="fade-down")
            .row.d-flex.align-items-center(data-aos="fade-right")
              .col-lg-4.pe-lg-0.mb-4.mb-xl-0.d-flex.d-none.d-lg-block
                figure.m-0.p-0.w-100.h-100.d-flex
                  img(src='@/assets/curso/tema3/8.png', alt='', class="w-100 h-100 object-fit-cover", style="margin-left:-10px")
              .col-lg
                .cajon.color2.p-4
                  p El análisis de la normativa ambiental implica identificar qué requisitos específicos afectan al proyecto según su ubicación, tipo de actividad y nivel de impacto. En algunos casos, puede requerirse licencia ambiental, permisos de vertimiento, concesiones de agua o registros ante autoridades ambientales competentes. Además, deben considerarse estándares técnicos y lineamientos que regulan la gestión de residuos, la eficiencia energética y el control de emisiones contaminantes.

                p.mt-4 Para comprender los principales aspectos que deben considerarse en el análisis de la normativa ambiental aplicable a un proyecto, es necesario identificar los elementos que orientan el cumplimiento de las disposiciones legales y técnicas en materia ambiental. Estos componentes permiten reconocer los requisitos, controles y registros que garantizan una gestión responsable de los recursos naturales. A continuación, se presentan algunos de los aspectos más relevantes que orientan este proceso:


    .bg-7.p-5.mt-5
      SlyderB(:datos="datosSlyder")

    .row.align-items-start.mt-4
      .col-lg-1.mb-lg-0.mb-4
        figure(data-aos="fade-down")
          img(src='@/assets/curso/tema3/15.svg', style='width: 100px').m-auto
      
      .col
        p El cumplimiento de la normativa no solo evita las sanciones legales y económicas, sino que también fortalece la sostenibilidad y credibilidad del proyecto ante la comunidad y las entidades de control. Integrar la dimensión legal dentro de la evaluación ambiental permite anticipar obligaciones, planificar inversiones necesarias y reducir riesgos operativos. De esta manera, la normativa ambiental se convierte en un componente estratégico que respalda la viabilidad integral y la responsabilidad social del proyecto.


    separador
    #t_3_3.titulo-segundo.color-acento-contenido
      h2 3.3. Plan de manejo ambiental

    p.mt-4.mb-0 El plan de manejo ambiental es el instrumento mediante el cual se establecen las acciones necesarias para prevenir, mitigar, corregir o compensar los impactos ambientales identificados durante la evaluación del proyecto. Este plan traduce el análisis ambiental en medidas concretas de gestión, definiendo responsabilidades, tiempos de ejecución y recursos requeridos para su implementación. Su finalidad es asegurar que las actividades del proyecto se desarrollen de manera controlada y en armonía con el entorno.

    .row.bg-07.p-5.mt-0
      .row.align-items-center.justify-content-center
        .col-lg-12
          .row.justify-content-center
            .col-lg-12(data-aos="fade-down")
              .row.d-flex.align-items-center(data-aos="fade-right")
                .col-lg.p-4
                  p La elaboración del plan de manejo implica diseñar estrategias específicas para cada impacto relevante. Entre estas se incluyen programas de control de emisiones, manejo integral de residuos, uso eficiente del agua y la energía, así como acciones de reforestación o restauración de áreas intervenidas. Asimismo, deben establecerse mecanismos de seguimiento y monitoreo que permitan verificar el cumplimiento de las medidas propuestas y realizar los ajustes necesarios cuando se requiera. Un plan bien estructurado no solo reduce los riesgos ambientales, sino que también fortalece la gestión operativa del proyecto.

                  .cajon.color1.p-4
                    p La incorporación de un plan de manejo ambiental contribuye a fortalecer la sostenibilidad del proyecto a largo plazo y evidencia el compromiso de la organización con la responsabilidad ambiental. Además de dar cumplimiento a los requisitos legales, este instrumento favorece la generación de confianza en la comunidad, reduce la posibilidad de conflictos y promueve una cultura empresarial orientada al desarrollo sostenible. 
                
                .col-lg-auto.pe-lg-0.mb-4.mb-xl-0.d-flex.d-none.d-lg-block
                  figure.m-0.p-0.w-100.h-100.d-flex
                    img(src='@/assets/curso/tema3/16.png', alt='', class="w-100 h-100 object-fit-cover")

    p De esta manera, el proyecto no solo busca alcanzar rentabilidad económica, sino también mantener el equilibrio ambiental y asegurar su permanencia en el tiempo.

</template>

<script>
export default {
  name: 'Tema3',
  data: () => ({
    // variables de vue
    datosSlyder: [
      {
        titulo: 'Licencia ambiental',
        texto:
          'Corresponde a la autorización otorgada por la autoridad competente para desarrollar proyectos que puedan generar impactos sobre el medio ambiente. Incluye permisos y concesiones relacionadas con el uso de recursos naturales.',
        imagen: require('@/assets/curso/tema3/9.png'),
        // leyendaImagen: 'Leyenda de la imagen',
      },
      {
        titulo: 'Eficiencia energética',
        texto:
          'Hace referencia al uso racional y optimizado de la energía en los procesos productivos, con el fin de reducir el consumo de recursos y minimizar los impactos ambientales asociados.',
        imagen: require('@/assets/curso/tema3/10.png'),
        // leyendaImagen: 'Leyenda de la imagen',
      },
      {
        titulo: 'Impacto ambiental',
        texto:
          'Se refiere a la evaluación de los efectos que las actividades del proyecto pueden generar sobre el entorno natural, considerando aspectos como la generación de residuos y la afectación de los recursos naturales.',
        imagen: require('@/assets/curso/tema3/12.png'),
        // leyendaImagen: 'Leyenda de la imagen',
      },
      {
        titulo: 'Control de emisiones',
        texto:
          'Comprende las acciones orientadas a prevenir, reducir y controlar las emisiones contaminantes que pueden generarse durante la ejecución del proyecto.',
        imagen: require('@/assets/curso/tema3/13.png'),
        // leyendaImagen: 'Leyenda de la imagen',
      },
      {
        titulo: 'Estándares técnicos',
        texto:
          'Corresponden al cumplimiento de normas y lineamientos técnicos establecidos por la normativa ambiental para garantizar que las actividades del proyecto se desarrollen de manera adecuada.',
        imagen: require('@/assets/curso/tema3/14.png'),
        // leyendaImagen: 'Leyenda de la imagen',
      },
      {
        titulo: 'Registros ambientales',
        texto:
          'Incluyen los reportes y registros que deben presentarse ante las autoridades ambientales para demostrar el cumplimiento de las obligaciones y regulaciones vigentes.',
        imagen: require('@/assets/curso/tema3/14.png'),
        // leyendaImagen: 'Leyenda de la imagen',
      },
    ],
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
