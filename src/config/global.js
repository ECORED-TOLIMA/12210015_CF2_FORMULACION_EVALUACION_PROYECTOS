export default {
  global: {
    Name: 'Evaluación integral y plan de mejora del proyecto',
    Description:
      'El componente formativo desarrolla los fundamentos técnicos para el análisis de la viabilidad financiera, económica, social y ambiental de un proyecto. A partir de la interpretación de indicadores y la valoración de resultados, orienta la toma de decisiones y la formulación de acciones de mejora que fortalecen la sostenibilidad y el cumplimiento de los objetivos establecidos.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.jpg'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Evaluación financiera del proyecto',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Análisis e interpretación de los indicadores financieros',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'VPN y TIR en la evaluación',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: 'Recuperación de la inversión y costo de capital',
            hash: 't_1_3',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Evaluación económica y social del proyecto',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Impactos económicos',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Análisis costo–beneficio social',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo: 'Indicadores de impacto comunitario',
            hash: 't_2_3',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Evaluación ambiental y sostenibilidad',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'Identificación de impactos ambientales',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo: 'Normativa ambiental aplicable',
            hash: 't_3_2',
          },
          {
            numero: '3.3',
            titulo: 'Plan de manejo ambiental',
            hash: 't_3_3',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Evaluación integral y toma de decisiones',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '4.1',
            titulo: 'Integración de resultados',
            hash: 't_4_1',
          },
          {
            numero: '4.2',
            titulo: 'Análisis de escenarios y sensibilidad',
            hash: 't_4_2',
          },
          {
            numero: '4.3',
            titulo: 'Determinación de viabilidad del proyecto',
            hash: 't_4_3',
          },
        ],
      },
      {
        nombreRuta: 'tema5',
        numero: '5',
        titulo: 'Seguimiento y evaluación de desempeño',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '5.1',
            titulo: 'Indicadores de desempeño',
            hash: 't_5_1',
          },
          {
            numero: '5.2',
            titulo: 'Evaluación de resultados frente a objetivos',
            hash: 't_5_2',
          },
          {
            numero: '5.3',
            titulo: 'Análisis de desviaciones',
            hash: 't_5_3',
          },
        ],
      },
      {
        nombreRuta: 'tema6',
        numero: '6',
        titulo: 'Plan de mejora',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '6.1',
            titulo: 'Brechas y oportunidades de mejora',
            hash: 't_6_1',
          },
          {
            numero: '6.2',
            titulo: 'Formulación del plan de acción',
            hash: 't_6_2',
          },
          {
            numero: '6.3',
            titulo: 'Cronograma y seguimiento',
            hash: 't_6_3',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },

      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/dist.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: '',
      referencia: '',
      tipo: 'Sitio web',
      link: '',
    },
  ],
  glosario: [
    {
      termino: '<strong>Análisis de sensibilidad:</strong>',
      significado:
        'herramienta que evalúa cómo cambian los resultados del proyecto cuando se modifican variables clave como ventas, costos o tasas.',
    },
    {
      termino: '<strong>Evaluación integral:</strong>',
      significado:
        'proceso que integra resultados financieros, económicos, sociales y ambientales para determinar la viabilidad global del proyecto.',
    },
    {
      termino: '<strong>Impacto social:</strong>',
      significado:
        'efectos positivos o negativos que el proyecto genera en la comunidad, tales como empleo, calidad de vida o acceso a servicios.',
    },
    {
      termino: '<strong>Indicadores de desempeño:</strong>',
      significado:
        'herramientas de medición que permiten evaluar el cumplimiento de objetivos financieros, operativos, sociales y ambientales.',
    },
    {
      termino: '<strong>Periodo de Recuperación (PRI):</strong>',
      significado:
        'tiempo necesario para recuperar la inversión inicial a partir de los flujos netos de caja generados por el proyecto.',
    },
    {
      termino: '<strong>Plan de mejora:</strong>',
      significado:
        'conjunto de acciones correctivas y preventivas diseñadas para optimizar el desempeño del proyecto y corregir desviaciones.',
    },
    {
      termino: '<strong>Razón Beneficio Costo (RBC):</strong>',
      significado:
        'relación entre el valor presente de los beneficios y el valor presente de los costos. si es mayor que uno, el proyecto es viable financieramente.',
    },
    {
      termino: '<strong>Tasa Interna de Retorno (TIR):</strong>',
      significado:
        'tasa de rentabilidad que iguala el valor presente de los ingresos con el de los egresos del proyecto. se utiliza para comparar la rentabilidad con el costo de capital.',
    },
    {
      termino: '<strong>Valor Presente Neto (VPN):</strong>',
      significado:
        'indicador financiero que calcula el valor actual de los flujos de caja futuros descontados a una tasa determinada, restando la inversión inicial. si es positivo, el proyecto genera valor.',
    },
  ],
  referencias: [
    {
      referencia:
        'Baca, G. (2022). <em>Evaluación de proyectos</em> (9.ª ed.). McGraw Hill.',
      link: '',
    },
    {
      referencia:
        'Baca, G. (2007). <em>Ingeniería económica</em> (8.ª ed.). Fondo Educativo Panamericano.',
      link: '',
    },
    {
      referencia:
        'Canada, J., Sullivan, W., & White, J. (1997). <em>Análisis de inversión de capital para ingeniería y administración</em> (2.ª ed.). Prentice Hall.',
      link: '',
    },
    {
      referencia:
        'Dergamo, P., Sullivan, W., Bontadelli, J., & Wicks, E. (1997). <em>Ingeniería económica</em> (10.ª ed.). Prentice Hall.',
      link: '',
    },
    {
      referencia:
        'García, J. (2008). <em>Matemáticas financieras</em> (5.ª ed.). Pearson.',
      link: '',
    },
    {
      referencia:
        'Londoño, C. A. (2004). <em>Fundamentos de ingeniería económica</em> (1.ª ed.). Universidad Católica Popular del Risaralda.',
      link: '',
    },
    {
      referencia:
        'Mesa, J. J. (2017). <em>Evaluación financiera de proyectos</em>. Ecoe Ediciones.',
      link: '',
    },
    {
      referencia:
        'Miranda Miranda, J. J. (2016). <em>Gestión de proyectos: Identificación, formulación, evaluación y administración</em> (2.ª ed.). Ecoe Ediciones.',
      link: '',
    },
    {
      referencia:
        'Mokate, K. (2004). <em>Evaluación financiera de proyectos de inversión</em>. Alfaomega.',
      link: '',
    },
    {
      referencia:
        'Rosillo, J. (2009). <em>Matemáticas financieras para decisiones de inversión y financiación</em>. Cengage Learning.',
      link: '',
    },
    {
      referencia:
        'Serrano, J. (2018). <em>Matemáticas financieras y evaluación de proyectos</em> (2.ª ed.). Alfaomega.',
      link: '',
    },
    {
      referencia:
        'Sapág Chain, N., & Sapág Chain, R. (2014). <em>Preparación y evaluación de proyectos</em> (6.ª ed.). McGraw Hill Interamericana.',
      link: '',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Nombre completo',
          cargo: 'Responsable del ecosistema',
          centro: 'Dirección General',
        },
        {
          nombre: 'Nombre completo',
          cargo: 'Responsable de línea de producción',
          centro: 'Centro XYZ - Regional XYZ',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Nombre responsable',
          cargo: 'Nombre del rol',
          centro: 'Centro XYZ - Regional XYZ',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Nombre responsable',
          cargo: 'Diseñador de contenidos',
          centro: 'Centro XYZ - Regional XYZ',
        },
        {
          nombre: 'Nombre responsable',
          cargo: 'Desarrollador <i>full stack</i>',
          centro: 'Centro XYZ - Regional XYZ',
        },
        {
          nombre: 'Nombre responsable',
          cargo: 'Animador y productor audiovisual',
          centro: 'Centro XYZ - Regional XYZ',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Nombre responsable',
          cargo: 'Validador y vinculador de recursos educativos digitales',
          centro: 'Centro XYZ - Regional XYZ',
        },
        {
          nombre: 'Nombre responsable',
          cargo: 'Evaluador de contenidos inclusivos y accesibles',
          centro: 'Centro XYZ - Regional XYZ',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
}
