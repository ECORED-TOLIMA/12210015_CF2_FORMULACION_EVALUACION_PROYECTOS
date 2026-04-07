<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 5
      h1 Seguimiento y evaluación de desempeño
    
    .row.align-items-center.justify-content-center
      .col-lg-12
        .row.justify-content-center.mt-4
          .col-lg-12(data-aos="fade-down")
            .row.d-flex.align-items-center(data-aos="fade-right")
              .col-lg-auto.pe-lg-0.mb-4.mb-xl-0.d-flex.d-none.d-lg-block
                figure.m-0.p-0.w-100.h-100.d-flex
                  img(src='@/assets/curso/tema5/1.png', alt='', class="w-100 h-100 object-fit-cover", style="margin-left:-10px")
              .col-lg
                p El seguimiento y la evaluación del desempeño del proyecto constituyen procesos fundamentales para verificar que los resultados obtenidos se ajusten a lo planificado. Una vez tomada la decisión de ejecutar la iniciativa, es necesario establecer mecanismos de control que permitan medir el avance en términos financieros, operativos, sociales y ambientales. Este monitoreo continuo facilita identificar desviaciones oportunamente y adoptar medidas correctivas antes de que los problemas afecten de manera significativa la sostenibilidad del proyecto.

                .cajon.color2.p-4.py-4
                  p La evaluación del desempeño consiste en comparar los resultados reales con los indicadores definidos durante la etapa de formulación y evaluación integral. En este análisis se revisan aspectos como el cumplimiento del cronograma, la ejecución del presupuesto, la generación de ingresos, el control de costos y los impactos sociales y ambientales. Además, el uso de indicadores de gestión y de herramientas tecnológicas permiten organizar y sistematizar la información del proyecto, fortaleciendo la transparencia en los procesos de administración y apoyando la toma de decisiones.


    .row.align-items-center.justify-content-center
      .col-lg-12
        .row.justify-content-center.mt-4
          .col-lg-12(data-aos="fade-down")
            .row.d-flex.align-items-center(data-aos="fade-right")
              .col-lg-8
                .row.align-items-start.mt-4
                  p Con el propósito de fortalecer la comprensión del seguimiento y la evaluación del desempeño en la gestión de proyectos, a continuación, se presenta un recurso audiovisual orientado a explicar cómo monitorear y evaluar el avance del proyecto. En este pódcast se abordará la importancia de verificar si las actividades y los resultados se desarrollan conforme a lo planificado, así como el papel de los indicadores de gestión para analizar el desempeño, identificar oportunamente posibles desviaciones y orientar la toma de decisiones que contribuyan a mejorar la eficiencia y la sostenibilidad de la iniciativa durante su ejecución.

                  .row.align-items-center.justify-content-center
                    .col-lg-12
                      .row.justify-content-center.mt-4
                        .col-lg-12(data-aos="fade-down")
                          .row.d-flex.align-items-center.bg-10.bg-r8(data-aos="fade-right").p-4
                            .col-lg-auto.pe-lg-0.mb-4.mb-xl-0.d-flex.d-none.d-lg-block
                              figure.m-0.p-0.w-100.h-100.d-flex
                                img(src='@/assets/curso/tema5/2.svg', alt='', class="", style="margin-left:-10px; width: 200px")
                            .col-lg
                              h2(style="color: #F8FFDF") Pódcast
                              p.mt-4.text-white Lo invitamos a escuchar el siguiente Pódcast:
                              .row.justify-content-center.mt-4

                                .tarjeta.h-100

                                  TarjetaAudio.color-acento-botones.bg-white.mb-3(
                                  texto="Monitorear y evaluar el avance del proyecto"
                                  :audio="require('@/assets/componentes/audios/audio-ej.mp3')"
                                )

              .col-lg-4.pe-lg-0.mb-4.mb-xl-0.d-flex.d-none.d-lg-block
                figure.m-0.p-0.w-100.h-100.d-flex
                  img(src='@/assets/curso/tema5/3.png', alt='', class="w-100 h-100 object-fit-cover", style="margin-left:-10px")
              
    .row.justify-content-center.py-4
      .col-lg-10
        .row.align-items-center
          .col-lg-12
            .cajon.color1.p-4
              p Mantener un seguimiento permanente no solo permite controlar riesgos, sino también generar un aprendizaje organizacional. La evaluación periódica del desempeño proporciona información valiosa para ajustar estrategias, optimizar recursos y mejorar la eficiencia operativa. De esta manera, el seguimiento deja de ser una actividad de control aislada y se convierte en un instrumento estratégico que garantiza la coherencia entre los objetivos del proyecto y los resultados alcanzados en su ejecución.

    p.mt-4 A partir de lo anterior, en la siguiente tabla se presentan los principales aspectos que deben monitorearse durante la ejecución de la iniciativa, integrando dimensiones financieras, operativas, sociales y ambientales. En ella se identifican las áreas de control, los indicadores representativos y las posibles acciones correctivas ante desviaciones detectadas. Esta organización permite comprender que el seguimiento no se limita a revisar cifras, sino que constituye un proceso sistemático de verificación y ajuste continuo, orientado a garantizar el cumplimiento de los objetivos y la sostenibilidad del proyecto en el tiempo.

    .row.justify-content-center
      .col-lg-12
        .titulo-sexto.color-acento-contenido.mb-3.mt-4
          h5 Tabla 5.
          span Seguimiento y evaluación de desempeño del proyecto

        .tabla-a.color-acento-contenido
          table
            thead(style="background-color: #FE93C4")
              tr
                th(style="width: 300px;") Área de seguimiento
                th ¿Qué se controla?
                th Indicador ejemplo
                th Acción si hay desviación
            tbody
              tr(style="background-color: #F6F6F6")
                th.text-start Financiera
                td.text-start Ingresos, costos y rentabilidad.
                td.text-start Variación del flujo de caja, margen de utilidad.
                td.text-start Ajustar presupuesto o revisar estrategia de ventas.
              tr
                th.text-start Operativa
                td.text-start Cumplimiento de cronograma y metas.
                td.text-start % de avance del proyecto, cumplimiento de actividades.
                td.text-start Reprogramar actividades o reasignar recursos.
              tr(style="background-color: #F6F6F6")
                th.text-start Económica y social
                td.text-start Impactos en empleo y comunidad.
                td.text-start Número de empleos generados, cobertura de beneficiarios.
                td.text-start Rediseñar acciones para mejorar el impacto social.
              tr
                th.text-start Ambiental
                td.text-start Cumplimiento del plan de manejo ambiental.
                td.text-start Nivel de emisiones, control de residuos.
                td.text-start Implementar medidas correctivas o reforzar controles.
              tr(style="background-color: #F6F6F6")
                th.text-start Gestión general
                td.text-start Cumplimiento de objetivos estratégicos.
                td.text-start Indicadores de desempeño (KPIs).
                td.text-start Ajustar el plan de acción o redefinir metas.

    .row.justify-content-center.py-4
      .col-lg-10
        .row.align-items-center
          .col-lg-12
            .row.align-items-start
              .col-lg-1.mb-lg-0.mb-4
                figure(data-aos="fade-down")
                  img(src='@/assets/curso/tema5/4.svg', style='width: 100px').m-auto
              
              .col
                p El seguimiento se realiza mediante la medición de indicadores de desempeño que permiten evaluar aspectos como cumplimiento de metas, eficiencia en el uso de recursos, calidad de los resultados y nivel de impacto generado. Estos indicadores proporcionan información objetiva que facilita la gestión del proyecto y la toma de decisiones estratégicas.

    p.mt-4 La evaluación del desempeño también permite identificar aprendizajes y oportunidades de mejora que pueden ser incorporados en futuros proyectos o en las siguientes fases del mismo. De esta manera, el seguimiento se convierte en una herramienta fundamental para la mejora continua y el fortalecimiento de la gestión de proyectos.

    separador
    #t_5_1.titulo-segundo.color-acento-contenido
      h2 5.1. Indicadores de desempeño

    figure
      img(src='@/assets/curso/tema5/5.png', alt='', style="width: 1226px").m-auto
    
    p.mt-4 Los indicadores de desempeño son herramientas de medición que permiten evaluar el grado de cumplimiento de los objetivos establecidos para el proyecto. A través de estos indicadores se monitorean resultados en términos financieros, operativos, sociales y ambientales, comparando lo ejecutado frente a lo planificado. Su función principal es proporcionar información cuantificable que facilite la toma de decisiones oportunas y el control eficiente de la gestión.

    .row.justify-content-center
      .col-lg-10
        .row.align-items-center
          .col-lg-12
            .row.align-items-start.mt-4
              .col-lg-1.mb-lg-0.mb-4
                figure(data-aos="fade-down")
                  img(src='@/assets/curso/tema5/6.svg', style='width: 100px').m-auto
              
              .col
                p La definición de indicadores adecuados requiere establecer metas claras, criterios de medición y mecanismos de seguimiento que permitan evaluar el desempeño del proyecto. Estos indicadores facilitan el control de los resultados obtenidos y apoyan el proceso de toma de decisiones durante su ejecución. Entre los indicadores más utilizados se encuentran los siguientes:

    .row
      .col-12
        .p-5
          .row.align-items-center.bg-08
            .col-lg-4.d-lg-block.d-none
              figure(data-aos="zoom-in")
                img(src='@/assets/curso/tema5/7.png',  style='width: 396px').m-auto
    
            .col-lg-8.p-5
              SlyderF.p-4(columnas="col-lg-6 col-xl-4")
                .tarjeta.bg-9.p-4
                  .row.justify-content-center.mb-3
                    .col-8
                      img(src='@/assets/curso/tema5/8.svg', alt='').img100.m-auto
                  p.text-center.mb-0 Margen de rentabilidad
                       
                .tarjeta.bg-9.p-4
                  .row.justify-content-center.mb-3
                    .col-8
                      img(src='@/assets/curso/tema5/9.svg', alt='').img100.m-auto
                  p.text-center.mb-0 Cumplimiento de cronograma
    
                .tarjeta.bg-9.p-4
                  .row.justify-content-center.mb-3
                    .col-8
                      img(src='@/assets/curso/tema5/10.svg', alt='').img100.m-auto
                  p.text-center.mb-0 Ejecución presupuestal
    
                .tarjeta.bg-9.p-4
                  .row.justify-content-center.mb-3
                    .col-8
                      img(src='@/assets/curso/tema5/11.svg', alt='').img100.m-auto
                  p.text-center.mb-0 Nivel de satisfacción 
    
                .tarjeta.bg-9.p-4
                  .row.justify-content-center.mb-3
                    .col-8
                      img(src='@/assets/curso/tema5/12.svg', alt='').img100.m-auto
                  p.text-center.mb-0 Control de impactos ambientales


    .row.justify-content-center
      .col-lg-10
        .row.align-items-center
          .col-lg-12
            .row.align-items-start.mt-4.bg-2
              .col-lg-2.mb-lg-0.mb-4.d-flex.d-none.d-lg-block
                figure(data-aos="fade-down")
                  img(src='@/assets/curso/tema5/13.svg', style='width: 100px; margin-left:-11px')
              .col
                p.mt-4 Estos indicadores pueden expresarse en valores absolutos, porcentajes o razones, permitiendo evaluar el avance del proyecto de manera objetiva y sistemática.

          .cajon.color1.p-4.mt-4
            p Un sistema de indicadores bien estructurado fortalece la transparencia y mejora la capacidad de respuesta ante posibles desviaciones. Cuando se detectan diferencias significativas entre los resultados esperados y los obtenidos, los responsables del proyecto pueden implementar acciones correctivas o preventivas. En este sentido, los indicadores de desempeño no solo miden resultados, sino que también orientan a la mejora continua y contribuyen a garantizar la sostenibilidad y eficiencia del proyecto en el tiempo.

    p.mt-4 Para evaluar el desempeño del proyecto durante su ejecución, es necesario definir indicadores que permitan medir los resultados alcanzados en diferentes dimensiones de gestión. Estos indicadores facilitan el seguimiento del cumplimiento de metas, la eficiencia en el uso de los recursos y los impactos generados por la iniciativa. A continuación, se presentan algunos ejemplos de indicadores de desempeño del proyecto:

    SlyderA.p-4.bg-04.bg-r8(tipo="b").mt-4
      //-Tarjeta 1--------------------------------------------------------
      .row.justify-content-center.align-items-center
        .col-lg-7.mb-4.mb-lg-0.text-white
          h4 A. Indicadores financieros
          p Miden la rentabilidad del proyecto y el manejo adecuado de los recursos económicos durante su ejecución.
          
          .row.align-items-center
            .col-lg-auto.mb-lg-0.margin-li
              ul.lista-ul--color.p-4
                li
                  i.lista-ul__vineta
                  p.mb-0 Margen de utilidad (%).
                li
                  i.lista-ul__vineta
                  p.mb-0 Variación del flujo de caja.
                li
                  i.lista-ul__vineta
                  p.mb-0 Cumplimiento del presupuesto (%).
                li
                  i.lista-ul__vineta
                  p.mb-0 Retorno sobre la inversión (ROI).
                li
                  i.lista-ul__vineta
                  p.mb-0 Variación entre ingresos proyectados y reales.

                  
        .col-lg-5.d-flex.d-none.d-lg-block
          figure(data-aos="fade-down")
            img(src='@/assets/curso/tema5/14.png', style='width: 572px')
    
      //-Tarjeta 2--------------------------------------------------------
      .row.justify-content-center.align-items-center
        .col-lg-7.mb-4.mb-lg-0.text-white
          h4 B. Indicadores operativos
          p Evalúan el nivel de cumplimiento de las actividades programadas y la eficiencia en la ejecución de los procesos del proyecto.
          
          .row.align-items-center
            .col-lg-auto.mb-lg-0.margin-li
              ul.lista-ul--color.p-4
                li
                  i.lista-ul__vineta
                  p.mb-0 Porcentaje de avance del cronograma.
                li
                  i.lista-ul__vineta
                  p.mb-0 Cumplimiento de metas de producción (%).
                li
                  i.lista-ul__vineta
                  p.mb-0 Nivel de cumplimiento de actividades programadas.
                li
                  i.lista-ul__vineta
                  p.mb-0 Tiempo promedio de ejecución de tareas.
                li
                  i.lista-ul__vineta
                  p.mb-0 Índice de productividad del equipo.

                  
        .col-lg-5.d-flex.d-none.d-lg-block
          figure(data-aos="fade-down")
            img(src='@/assets/curso/tema5/15.png', style='width: 572px')

      //-Tarjeta 3--------------------------------------------------------
      .row.justify-content-center.align-items-center
        .col-lg-7.mb-4.mb-lg-0.text-white
          h4 C. Indicadores económicos y sociales
          p Analizan los beneficios generados por el proyecto en la comunidad y en el entorno productivo.
          
          .row.align-items-center
            .col-lg-auto.mb-lg-0.margin-li
              ul.lista-ul--color.p-4
                li
                  i.lista-ul__vineta
                  p.mb-0 Número de empleos generados.
                li
                  i.lista-ul__vineta
                  p.mb-0 Porcentaje de beneficiarios atendidos.
                li
                  i.lista-ul__vineta
                  p.mb-0 Nivel de satisfacción de la comunidad (%).
                li
                  i.lista-ul__vineta
                  p.mb-0 Incremento en ingresos de beneficiarios.
                li
                  i.lista-ul__vineta
                  p.mb-0 Impacto en cobertura del servicio.

                  
        .col-lg-5.d-flex.d-none.d-lg-block
          figure(data-aos="fade-down")
            img(src='@/assets/curso/tema5/16.png', style='width: 572px')

      //-Tarjeta 4--------------------------------------------------------
      .row.justify-content-center.align-items-center
        .col-lg-7.mb-4.mb-lg-0.text-white
          h4 D. Indicadores ambientales
          p Permiten evaluar los efectos del proyecto sobre el entorno natural y la gestión responsable de los recursos ambientales.
          
          .row.align-items-center
            .col-lg-auto.mb-lg-0.margin-li
              ul.lista-ul--color.p-4
                li
                  i.lista-ul__vineta
                  p.mb-0 Reducción en consumo de energía (%).
                li
                  i.lista-ul__vineta
                  p.mb-0 Nivel de emisiones generadas.
                li
                  i.lista-ul__vineta
                  p.mb-0 Cantidad de residuos reciclados.
                li
                  i.lista-ul__vineta
                  p.mb-0 Cumplimiento del plan de manejo ambiental (%).
                li
                  i.lista-ul__vineta
                  p.mb-0 Índice de eficiencia en uso de recursos naturales.

                  
        .col-lg-5.d-flex.d-none.d-lg-block
          figure(data-aos="fade-down")
            img(src='@/assets/curso/tema5/17.png', style='width: 572px')

    separador
    #t_5_2.titulo-segundo.color-acento-contenido
      h2 5.2. Evaluación de resultados frente a objetivos
    
    p La evaluación de resultados frente a objetivos consiste en comparar los logros obtenidos durante la ejecución del proyecto con las metas inicialmente planteadas en su formulación. Este proceso permite verificar el grado de cumplimiento de los compromisos establecidos en términos financieros, operativos, sociales y ambientales. La revisión sistemática de resultados facilita determinar si el proyecto avanza conforme a lo previsto o si presenta desviaciones que requieren intervención.

    .bloque-texto-g.bg-61.p-3.p-sm-4.p-md-5.mt-4
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema5/18.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Este análisis no se limita a identificar diferencias numéricas, sino que también busca comprender las causas que explican los resultados obtenidos. Factores como cambios en el entorno económico, variaciones en la demanda, dificultades operativas o ajustes regulatorios pueden influir en el desempeño del proyecto. Por ello, la evaluación debe incluir una interpretación crítica de la información, permitiendo distinguir entre desviaciones coyunturales y problemas estructurales que afectan la viabilidad.

    p.mt-4 Al contrastar resultados con objetivos, la organización fortalece su capacidad de gestión y mejora continua. Este ejercicio proporciona insumos para la toma de decisiones correctivas, la redefinición de estrategias o la actualización de metas cuando las condiciones lo exijan. En consecuencia, la evaluación de resultados no solo verifica el cumplimiento, sino que se convierte en un mecanismo estratégico para garantizar la coherencia entre la planificación inicial y la ejecución real del proyecto.

    .row.align-items-center.justify-content-center.mt-4
      .col-lg-12(data-aos="fade-down")
        .row.d-flex.align-items-center(data-aos="fade-right")
          .col-lg
            .row.justify-content-center
              .col-lg-2.mb-lg-0.mb-4
                figure(data-aos="fade-down")
                  img(src='@/assets/curso/tema5/19.svg', style='width: 100px').m-auto
              
              .col
                p Para verificar el cumplimiento de los objetivos establecidos durante la formulación del proyecto, es necesario comparar los resultados obtenidos con las metas definidas inicialmente. Este análisis permite identificar desviaciones, comprender sus causas y proponer acciones de mejora que fortalezcan la gestión del proyecto. A continuación, se presentan algunos pasos para evaluar los resultados frente a los objetivos planteados:
                                
          .col-lg-auto.pe-lg-0.mb-4.mb-xl-0.d-flex.d-none.d-lg-block
            figure.m-0.p-0.w-100.h-100.d-flex
              img(src='@/assets/curso/tema5/20.png', alt='', class="w-100 h-100 object-fit-cover")

    .titulo-tres.mt-5: h3 Pasos para evaluar resultados frente a objetivos
    
    .row.align-items-center.justify-content-center.mt-4
      .col-lg-12
        SlyderF(columnas="col-lg-6 col-xl-4")
          .tarjeta.bg-61.p-4
            .row.justify-content-center.mb-3
              .col-8
                img(src='@/assets/curso/tema5/21.svg', alt='').img100.m-auto
            p.text-center.mb-0 
              b 1. Revisar los objetivos formulados inicialmente
            p.text-centervo Confirmar metas financieras, operativas, sociales y ambientales establecidas en la etapa de formulación.
                  
          .tarjeta.bg-61.p-4
            .row.justify-content-center.mb-3
              .col-8
                img(src='@/assets/curso/tema5/22.svg', alt='').img100.m-auto
            p.text-center.mb-0 
              b 2. Recopilar los resultados reales obtenidos
            p.text-center Consolidar información actualizada sobre ingresos, costos, cronograma, impactos y desempeño general.

          .tarjeta.bg-61.p-4
            .row.justify-content-center.mb-3
              .col-8
                img(src='@/assets/curso/tema5/23.svg', alt='').img100.m-auto
            p.text-center.mb-0 
              b 3. Comparar resultados vs. metas
            p.text-center Identificar diferencias entre lo proyectado y lo ejecutado.


          .tarjeta.bg-61.p-4
            .row.justify-content-center.mb-3
              .col-8
                img(src='@/assets/curso/tema5/24.svg', alt='').img100.m-auto
            p.text-center.mb-0 
              b 4. Calcular variaciones
            p.text-center Determinar desviaciones en términos absolutos y porcentuales.

          .tarjeta.bg-61.p-4
            .row.justify-content-center.mb-3
              .col-8
                img(src='@/assets/curso/tema5/25.svg', alt='').img100.m-auto
            p.text-center.mb-0 
              b 5. Analizar causas de las desviaciones
            p.text-center Establecer si los resultados se deben a factores internos (gestión, recursos) o externos (mercado, normativa).

          .tarjeta.bg-61.p-4
            .row.justify-content-center.mb-3
              .col-8
                img(src='@/assets/curso/tema5/26.svg', alt='').img100.m-auto
            p.text-center.mb-0 
              b 6. Evaluar el impacto de las desviaciones
            p.text-center Determinar si afectan la rentabilidad, sostenibilidad o cumplimiento del proyecto.

          .tarjeta.bg-61.p-4
            .row.justify-content-center.mb-3
              .col-8
                img(src='@/assets/curso/tema5/27.svg', alt='').img100.m-auto
            p.text-center.mb-0 
              b 7. Definir acciones correctivas o preventivas
            p.text-center Proponer ajustes técnicos, financieros u operativos según el caso.

          .tarjeta.bg-61.p-4
            .row.justify-content-center.mb-3
              .col-8
                img(src='@/assets/curso/tema5/28.svg', alt='').img100.m-auto
            p.text-center.mb-0 
              b 8. Documentar conclusiones y decisiones
            p.text-center Registrar hallazgos y medidas adoptadas para facilitar el seguimiento posterior.


    separador
    #t_5_3.titulo-segundo.color-acento-contenido
      h2 5.3. Análisis de desviaciones
    
    p La identificación de desviaciones consiste en reconocer las diferencias entre los resultados proyectados y los resultados reales obtenidos durante la ejecución del proyecto. Estas diferencias pueden presentarse en variables financieras, operativas, sociales o ambientales, afectando el cumplimiento de metas establecidas. Detectar oportunamente estas variaciones permite anticipar riesgos y evitar que pequeños desajustes se conviertan en problemas estructurales.

    .row.justify-content-center.mt-4
      .col-lg-10
        .row.align-items-center.p-4.bg-2.text-center
          .col-lg-12
            p El análisis de desviaciones no se limita a señalar que existe una diferencia, sino que requiere examinar sus causas y magnitud.

        .row.justify-content-center.mt-4
          .col-lg-12(data-aos="fade-down")
            .row.d-flex.align-items-center(data-aos="fade-right")
              .col-lg-auto.pe-lg-0.mb-4.mb-xl-0.d-flex.d-none.d-lg-block
                figure.m-0.p-0.w-100.h-100.d-flex
                  img(src='@/assets/curso/tema5/29.png', alt='', class="w-100 h-100 object-fit-cover", style="margin-left:-10px")
              .col-lg
                p Una variación en ingresos puede estar asociada a cambios en la demanda, errores en la estimación inicial o fallas en la estrategia comercial. De igual manera, retrasos en el cronograma pueden deberse a limitaciones logísticas, problemas de gestión o factores externos. Comprender el origen de la desviación es fundamental para definir acciones correctivas adecuadas.

                p La identificación sistemática de desviaciones fortalece la capacidad de control y mejora continua del proyecto. Al establecer mecanismos periódicos de revisión, la organización puede ajustar estrategias, redistribuir recursos o redefinir metas cuando las condiciones lo exijan. De esta manera, el proyecto mantiene coherencia entre planificación y ejecución, reduciendo riesgos y aumentando la probabilidad de alcanzar los objetivos propuestos.

    .titulo-tres.mt-5: h3 Clasificación de desviaciones

    p.mt-4 Las desviaciones identificadas durante la ejecución del proyecto pueden clasificarse según su naturaleza y origen, lo cual facilita su análisis y tratamiento. Esta clasificación permite organizar la información y priorizar acciones correctivas de manera estructurada.

    .row.bg-05.mb-5
      .col-12
        .p-5
          .row.align-items-center.p-5
            .tarjeta.bg-9.p-4
              PasosB.color-acento-contenido
                //-Primer Paso
                .row(titulo="")
                  .col-md-6.mb-4.mb-md-0
                    figure
                      img(src='@/assets/curso/tema5/30.png', alt='')
                    
                  .col-md-6
                    h4 A. Desviaciones financieras
                    p Las desviaciones financieras se relacionan con variaciones en ingresos, costos, flujo de caja o rentabilidad. Estas pueden manifestarse en sobrecostos, disminución en ventas o reducción del margen de utilidad, afectando directamente la sostenibilidad económica del proyecto.

                //-Segundo Paso
                .row(titulo="")
                  .col-md-6.mb-4.mb-md-0
                    figure
                      img(src='@/assets/curso/tema5/31.png', alt='')
                    
                  .col-md-6
                    h4 B. Desviaciones operativas
                    p Las desviaciones operativas se asocian al incumplimiento de cronogramas, retrasos en actividades o fallas en la ejecución técnica. Este tipo de desviaciones impacta el tiempo y la eficiencia del proyecto, pudiendo generar costos adicionales o pérdida de competitividad.

                //-Tercer Paso
                .row(titulo="")
                  .col-md-6.mb-4.mb-md-0
                    figure
                      img(src='@/assets/curso/tema5/32.png', alt='')
                    
                  .col-md-6
                    h4 C. Desviaciones estratégicas
                    p Las desviaciones estratégicas se presentan cuando el proyecto se aleja de los objetivos inicialmente definidos debido a cambios en el entorno o a decisiones internas que modifican su alcance.
              
                //-Cuarto Paso
                .row(titulo="")
                  .col-md-6.mb-4.mb-md-0
                    figure
                      img(src='@/assets/curso/tema5/33.png', alt='')
                    
                  .col-md-6
                    h4 D. Desviaciones externas
                    p Las desviaciones externas se originan por factores fuera del control directo de la organización, como cambios normativos, variaciones económicas o transformaciones en el mercado.


    .row.justify-content-center.mt-4
      .col-lg-10
        .row.align-items-center
          .col-lg-12
            .cajon.color1.p-4
              p La clasificación adecuada de las desviaciones permite establecer prioridades de intervención, asignar responsabilidades y definir acciones correctivas acordes con la magnitud de los impactos identificados. De esta manera, se fortalece la gestión integral del proyecto y se facilita la toma de decisiones orientadas a su mejora continua.


</template>

<script>
export default {
  name: 'Tema5',
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
