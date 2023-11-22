export default {
  global: {
    componenteFormativo:
      'Plan de acción: metodologías, recursos y lineamientos administrativos',
    descripcionCurso:
      'Por medio del presente componente se expone la importancia del plan de acción para la operatividad de los diversos procesos estratégicos, misionales y de apoyo que hacen parte de las organizaciones. Se tienen en cuenta las estrategias de ejecución del plan de acción y los elementos claves a tener en cuenta dentro de los procedimientos, manuales y métodos de priorización. ',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
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
        titulo: 'Plan de acción',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Metodologías',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Actividades',
            hash: 't_1_2',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Recursos',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Técnicas de recolección y procesamiento de datos',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Ejecución de planes',
            hash: 't_2_2',
          },
        ],
      },
      // {
      //   nombreRuta: 'tema3',
      //   numero: '3',
      //   titulo: 'Titulo de primer nivel',
      //   desarrolloContenidos: true,
      // },
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
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar PDF',
        download: 'downloads/CFA_13_331316.zip',
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
      tema: '1.2. Actividades',
      referencia:
        'Méndez García, Cenobio, J. C. (2006). Gestión de la calidad en procesos de servicios y productivos. Instituto Politécnico Nacional. ',
      tipo: 'Libro',
      link:
        'https://elibro-net.bdigital.sena.edu.co/es/lc/senavirtual/titulos/101737',
    },
    {
      tema: '1.2. Actividades',
      referencia:
        'González Luna, A. C. (2016). Plan estratégico de negocios. Grupo Editorial Patria. ',
      tipo: 'Libro',
      link:
        'https://elibro-net.bdigital.sena.edu.co/es/lc/senavirtual/titulos/40472',
    },
    {
      tema: '2.1. Técnicas de recolección y procesamiento de datos',
      referencia:
        'Denzin, N. K. (Coord.) & Lincoln, Y. S. (Coord.). (2015). Métodos de recolección y análisis de datos: Manual de investigación cualitativa Vol. IV. Editorial Gedisa. ',
      tipo: 'Libro',
      link:
        'https://elibro-net.bdigital.sena.edu.co/es/lc/senavirtual/titulos/131061',
    },
  ],
  glosario: [
    {
      termino: 'Alta dirección',
      significado:
        'Es la persona o grupo de personas que lideran y dirigen la organización. dentro del organigrama se ubican en el nivel más alto. (Salazar Molina A. 2005).',
    },
    {
      termino: 'Calidad',
      significado:
        'Nivel en el que un grupo de características inherentes dan cumplimiento a los requisitos. (NTC ISO 9001:2015).',
    },
    {
      termino: 'Documento',
      significado:
        'Es el que contiene información y su medio de soporte. (NTC ISO 9001:2015).',
    },
    {
      termino: 'Eficacia',
      significado:
        'Ejecución de las actividades planeadas en función de los resultados alcanzados. (Navarrete Lozano K. 2019).',
    },
    {
      termino: 'Eficiencia',
      significado:
        'Es la relación entre el resultado logrado y los recursos utilizados. (Navarrete Lozano K. 2019).',
    },
    {
      termino: 'Información documentada',
      significado:
        'Es la información que la organización debe controlar y mantener. (NTC ISO 9001:2015).',
    },
    {
      termino: 'Manual de la calidad',
      significado:
        'Documento que especifica el sistema de gestión de la calidad de una organización. (NTC ISO 9001:2015).',
    },
    {
      termino: 'Procedimiento',
      significado:
        'Es la forma específica de realizar una actividad o un proceso. en los procedimientos se detalla la manera de ejecutar una actividad con todo detalle. (NTC ISO 9001:2015).',
    },
    {
      termino: 'Proceso',
      significado:
        'Es el conjunto de actividades que están relacionadas entre sí, las cuales parten de uno o varios elementos de entradas que se transforman en salidas. (NTC ISO 9001:2015).',
    },
    {
      termino: 'Producto',
      significado: 'Es el resultado de un proceso. (NTC ISO 9001:2015).',
    },
    {
      termino: 'Proyecto',
      significado:
        'Son el grupo o conjunto de actividades que son coordinadas y controladas con las respectivas fechas de inicio y de finalización, las cuales se llevan a cabo para lograr un objetivo acorde con los requerimientos específicos, teniendo en cuenta las limitaciones de tiempo costo y recursos.  (NTC ISO 9001:2015).',
    },
    {
      termino: 'Registro',
      significado:
        'Es el soporte en donde se consigan los datos obtenidos o proporciona la evidencia de las actividades desempeñadas. (NTC ISO 9001:2015).',
    },
    {
      termino: 'Salida de un proceso',
      significado: 'Corresponde al resultado del proceso. (NTC ISO 9001:2015).',
    },
    {
      termino: 'Trazabilidad documental',
      significado:
        'Son los procedimientos necesarios que facilitan el histórico, la ubicación y la trayectoria de un elemento determinado el cual puede ser un producto, documento, servicio.  (NTC ISO 9001:2015).',
    },
    {
      termino: 'Validación',
      significado:
        'Es la confirmación del uso y la aplicabilidad que debe tener el producto o servicio que se está diseñando y desarrollando. (NTC ISO 9001:2015).',
    },
  ],
  referencias: [
    {
      referencia:
        'Betancourt, D. F. (12 de julio de 2016). <em>El diagrama de Pareto: Qué es y cómo se construye.</em> Recuperado el 11 de octubre de 2022, de Ingenio Empresa. ',
      link: 'https://ingenioempresa.com/diagrama-de-pareto',
    },
    {
      referencia:
        'Cruz Fernández, A. (2017). Gestión de inventarios. UF0476. IC Editorial. ',
      link:
        'https://elibro-net.bdigital.sena.edu.co/es/lc/senavirtual/titulos/59186',
    },
    {
      referencia:
        'Función Pública. (sf). Decreto 1072 de 2015 Sector Trabajo. Recuperado el 22 de octubre de 2023, de ',
      link:
        'https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=72173',
    },
    {
      referencia:
        'Instituto de Investigaciones Marinas y Costeras: José Benito Vives de Andréis. INVEMAR. (s.f.). Manual de funciones. ',
      link:
        'https://www.invemar.org.co/redcostera1/invemar/docs/9627manual_de_funciones.PDF',
    },
    {
      referencia:
        'Ministerio de Salud y Protección Social. (2023). Matriz de priorización de necesidades de auditorías internas. ',
      link:
        'https://www.supersalud.gov.co/Paginas/B%C3%BAsqueda.aspx?k=matriz%20de%20priorizaci%C3%B3n#Default=%7B%22k%22%3A%22matriz%20de%20priorizaci%C3%B3n%22%2C%22l%22%3A9226%7D',
    },
    {
      referencia:
        'Navarrete Lozano Karla E. (2019). El control dentro del proceso administrativo. Qué es, objetivo, proceso, importancia y tipos. ',
      link:
        'https://www.gestiopolis.com/el-control-dentro-del-proceso-administrativo/',
    },
    {
      referencia:
        'Pérez Ana. (26 de abril de 2021). Tipos de estructuras organizativas, ¿Cuál es la mejor para tu empresa? ',
      link:
        'https://www.obsbusiness.school/blog/tipos-de-estructuras-organizativas-cual-es-la-mejor-para-tu-empresa',
    },
    {
      referencia:
        'Rodríguez Johanna . (01 septiembre 2021). Control de inventarios: definición, importancia y sistemas. ',
      link: 'https://blog.hubspot.es/sales/que-es-control-de-inventarios',
    },
    {
      referencia:
        'Salazar R. Jesús R. Universidad de los andes facultad de medicina. departamento de medicina preventiva y social. cátedra de epidemiologia, tema 11: vigilancia epidemiológica. ',
      link:
        'http://ula.ve/medicina/images/MedicinaPreventiva/epidemiologia/TEMA-.11-.pdf',
    },
    {
      referencia:
        'Salazar Molina Adafrancys. (2005). Estructuras organizacionales y tipos de organigramas. ',
      link:
        'https://www.gestiopolis.com/estructuras-organizacionales-y-tipos-de-organigramas/',
    },
    {
      referencia:
        'Santos Diego. (15 septiembre 2022). Recolección de datos: métodos, técnicas e instrumentos. ',
      link: 'https://blog.hubspot.es/marketing/recoleccion-de-datos',
    },
    {
      referencia:
        'Sordo Ana Isabel . (16 de mayo de 2022). ¿Qué es la comunicación empresarial?, introducción completa. ',
      link: 'https://blog.hubspot.es/marketing/comunicacion-empresarial',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Patricia Aristizabal',
          cargo: 'Responsable del Equipo',
          centro: 'Dirección General',
        },
        {
          nombre: 'Norma Constanza Morales Cruz',
          cargo: 'Responsable de Línea de Producción',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Luz Adriana Cárdenas González',
          cargo: 'Experta Temático',
          centro: 'Regional Antioquia - Centro de Servicios de salud',
        },
        {
          nombre: 'María Inés Machado López',
          cargo: 'Diseñadora Instruccional',
          centro:
            'Regional Norte de Santander - Centro de la Industria, la Empresa y los Servicios',
        },
        {
          nombre: 'Alix Cecilia Chinchilla Rueda',
          cargo: 'Asesora Metodológica',
          centro: 'Regional Distrito Capital - Centro de Diseño y Metrología',
        },
        {
          nombre: 'Rafael Neftalí Lizcano Reyes',
          cargo: 'Responsable Equipo Desarrollo Curricular',
          centro:
            'Regional Santander - Centro Industrial del Diseño y la Manufactura',
        },
        {
          nombre: 'Sandra Patricia Hoyos Sepúlveda',
          cargo: 'Revisor de Estilo',
          centro: 'Regional Distrito Capital - Centro de Diseño y Metrología',
        },
        {
          nombre: 'Juan Gilberto Giraldo Córtes',
          cargo: 'Diseñador Instruccional',
          centro: 'Regional Tolima -  Centro de Comercio y Servicios',
        },
        {
          nombre: 'María Inés Machado',
          cargo: 'Metodóloga',
          centro: 'Regional Tolima -  Centro de Comercio y Servicios',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Andrés Felipe Herrera Roldán',
          cargo: 'Diseñador de Contenidos Digitales',
          centro: 'Regional Tolima -  Centro de Comercio y Servicios',
        },
        {
          nombre: 'Oscar Daniel Espitia Marín',
          cargo: 'Desarrollador Fullstack',
          centro: 'Regional Tolima -  Centro de Comercio y Servicios',
        },
        {
          nombre: 'Gilberto Junior Rodríguez Rodríguez',
          cargo: 'Storyboard de Ilustración',
          centro: 'Regional Tolima -  Centro de Comercio y Servicios',
        },
        {
          nombre: 'Nelson Iván Vera Briceño',
          cargo: 'Produccióon Audiovisual',
          centro: 'Regional Tolima -  Centro de Comercio y Servicios',
        },
        {
          nombre: 'Oleg Litvin',
          cargo: 'Animador',
          centro: 'Regional Tolima -  Centro de Comercio y Servicios',
        },
        {
          nombre: 'Oscar Daniel Espitia Marín',
          cargo: 'Actividad Didáctica',
          centro: 'Regional Tolima -  Centro de Comercio y Servicios',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Gilberto Naranjo Farfán',
          cargo: 'Validación y vinculación en plataforma LMS',
          centro: 'Regional Tolima -  Centro de Comercio y Servicios',
        },
        {
          nombre: 'Jorge Bustos Gómez',
          cargo: 'Validación de contenidos accesibles',
          centro: 'Regional Tolima -  Centro de Comercio y Servicios',
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
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
