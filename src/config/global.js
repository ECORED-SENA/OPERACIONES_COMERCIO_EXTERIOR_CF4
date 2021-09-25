export default {
  global: {
    componenteFormativo: 'Matriz de costos de la CDFI',
    descripcionCurso:
      'Este componente busca identificar cuál es la estructura básica de una matriz de costos dentro de la Cadena de Distribución Física Internacional, cuáles son sus actores u operadores logísticos y cómo se integran entre ellos.',
    imagenBannerPrincipal: require('@/assets/curso/banner-principal-img.svg'),
    fondoBannerPrincipal: require('@/assets/curso/banner-principal-bg.png'),
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
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Conceptualización de costos en la CDFI',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Conceptualización de costos',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Tipos de costeo',
            hash: 't_1_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.3',
            titulo: 'Estructura de una matriz de costos en la CDFI',
            hash: 't_1_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.4',
            titulo: 'Tipos de carga y su impacto en la CDFI',
            hash: 't_1_4',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.5',
            titulo: 'Operadores logísticos en la CDFI',
            hash: 't_1_5',
          },
        ],
      },
    ],
    subMenu: [
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
  referencias: [
    {
      referencia:
        'Ramírez Molinares, C. V., García Barbosa, M. y Pantoja Algarín, C. R. (2010). <em>Fundamentos y técnicas de costos.</em> Ed. Universidad Libre, sede Cartagena. ',
      link:
        'http://www.unilibre.edu.co/cartagena/pdf/investigacion/libros/ceac/FUNDAMENTOS_Y_TECNICAS DE COSTO.pdf',
    },
  ],
  glosario: [
    {
      termino: 'Arancel ad valoren',
      significado:
        'es un derecho que pagan por importaciones, su valor puede ser porcentual y está identificado en el arancel de aduanas.',
    },
    {
      termino: 'Cambios',
      significado:
        'operaciones cambiarias, referente a la conversión de moneda entre países.',
    },
    {
      termino: 'Costo',
      significado:
        'cantidad de dinero que se requiere para producir, comercializar o prestar un servicio.',
    },
    {
      termino: 'Exportación',
      significado:
        'salida de bienes y/o servicios del territorio aduanero nacional, hacia terceros países o hacia una zona franca.',
    },
    {
      termino: 'Importación',
      significado:
        'ingreso de bienes y/o servicios al territorio aduanero nacional, procedente de terceros países o de una zona franca.',
    },
    {
      termino: 'INCOTERMS',
      significado: 'términos del comercio internacional.',
    },
    {
      termino: 'IVA',
      significado:
        'impuesto al valor agregado, aplica para las operaciones de importación y su base es el estatuto tributario.',
    },
  ],
  complementario: [
    {
      texto:
        'Ramírez Molinares, C. V., García Barbosa, M. y Pantoja Algarín, C. R. (2010). <em>Fundamentos y técnicas de costos.</em> Ed. Universidad Libre, sede Cartagena.',
      tipo: 'Libro',
      link:
        'http://www.unilibre.edu.co/cartagena/pdf/investigacion/libros/ceac/FUNDAMENTOS_Y_TECNICAS DE COSTO.pdf',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Jaime Salazar Buitrago',
        cargo: 'Experta temática',
        centro:
          'Centro de Servicios Empresariales - Regional Norte de Santander',
      },
      {
        nombre: 'María Inés Machado López',
        cargo: 'Diseñadora instruccional',
        centro: 'Centro de Diseño y Metrología - Regional Distrito Capital',
      },
      {
        nombre: 'Andrés Felipe Velandia Espitia',
        cargo: 'Revisor metodológico y pedagógico',
        centro: 'Centro de Diseño y Metrología - Regional Distrito Capital',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Leyson Fabian Castaño Perez',
        cargo: 'Soporte organizacional',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
      {
        nombre: 'Blanca Flor Tinoco Torres',
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Walter Roa Serrano',
        cargo: 'Desarrollo front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Mauricio Santaella',
        cargo: 'Soporte front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Gilberto Junior Rodriguez Rodriguez',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'José Jaime Luis Tang Pinzón',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Lady Adriana Ariza Luque',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nelson Iván Vera Briceño',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Wilson Andrés Arenales Caceres',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Zuleidy Maria Ruiz Torres',
        cargo: 'Producción audiovisual',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'María Camila Ovalle Ospina',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Álvaro Andrés Angarita Ramirez',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
      {
        nombre: 'Daniel Felipe Varón Molina',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
    ],
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
