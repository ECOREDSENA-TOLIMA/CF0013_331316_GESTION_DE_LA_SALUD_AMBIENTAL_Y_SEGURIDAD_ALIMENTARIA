<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Plan de acción

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-down")
      .col-12.col-md-8.col-lg-7
        p Para iniciar la revisión de los conceptos relacionados con el plan de acción, es importante resaltar otros temas que hacen parte del proceso. El plan de acción es una herramienta de tipo administrativo, por medio de la cual la organización o empresa traza una línea de actividades con el fin de obtener un resultado positivo en el alcance de los objetivos empresariales propuestos. Los planes de acción están encaminados hacia diversas áreas de la empresa y se requiere de una adecuada proyección de objetivos (general y específicos) así como los recursos tangibles (materiales tecnología, físicos, económicos y financieros) e intangibles (recurso humano: conocimiento, experiencia, motivación) para alcanzar el cumplimiento de las actividades propuestas.  
        p Este tipo de herramientas sirven para organizar las actividades y planificar de manera adecuada, lo que contribuye en disminuir el margen de error, optimizar los recursos e ir avanzando poco a poco en el alcance de las metas propuestas. Las características generales de un plan de acción se pueden describir como: 
        ul.lista-ul.ms-3
          li.mb-0
            span.icon ✔ 
            | Permite desglosar los objetivos de largo, corto y mediano plazo, de forma que se puedan alcanzar. 
          li.mb-0
            span.icon ✔ 
            | Permite describir las actividades a realizar para alcanzar cada objetivo propuesto. 
          li.mb-0
            span.icon ✔ 
            | El plan de acción responde a una o varias necesidades en específico. 
          li.mb-0
            span.icon ✔ 
            | El plan de acción puede estar acompañado de ilustraciones, gráficas, diagramas y demás herramientas necesarias para la descripción y alcance de indicadores, por ejemplo. 
      .col-10.col-md-4.col-lg-5
        img(src='@/assets/curso/temas/tema1/tema1-1.png', alt='')  

    p.mb-5(data-aos="fade-down") El plan de acción por lo general puede tener los siguientes momentos para su elaboración: 

    .row.justify-content-center.align-items-center.mb-5 
      .col-12.d-none.d-md-block.mb-5(data-aos="fade-down")
        ImagenInfografica.color-acento-botones
          template(v-slot:imagen)
            figure
              img(src='@/assets/curso/temas/tema1/info-1a.svg', alt='')
          .tarjeta.color-primario.p-3(x="8%" y="32%" numero="1")
            p.mb-1 Tener presente el método SMART para la definición de objetivos. El método SMART consiste en: 
            p.mb-1 S #[em -Specific] (específico). 
            p.mb-1 M #[em -Measurable] (medible). 
            p.mb-1 A #[em -Achievable] (alcanzable). 
            p.mb-1 R #[em -Realistic] (realista).
            p.mb-1 T #[em -Time- bound] (tiempo limitado).
          .tarjeta.color-primario.p-3(x="47.5%" y="32%" numero="2")
            p Se deben describir los pasos necesarios para lograr los objetivos planeados.
          .tarjeta.color-primario.p-3(x="14.6%" y="56%" numero="3")
            p Asignar acorde con los recursos definidos, los elementos requeridos y el talento humano que va a ejecutar las acciones. Puede que no se asignen desde el principio, por tanto, se deben convertir en una acción a tener en cuenta en el desarrollo del plan.
          .tarjeta.color-primario.p-3(x="72.5%" y="56%" numero="4")
            p Sugiere definir tareas a realizar primero (prioridad alta) y cuales reprogramar (tareas flexibles). Darles prioridad y definir la secuencia a seguir para completar tareas y poder comenzar otras. En muchos casos, la ejecución de una actividad depende de otra, esto debe destacarse en la priorización.
          .tarjeta.color-primario.p-3(x="26%" y="81%" numero="5")
            p Asignar fechas límites de actividades proyectadas y de acontecimientos puntuales (hitos) según la completitud de la actividad o comienzo de una nueva fase. Tener en cuenta la herramienta de diagrama de Gantt, proyectando tareas prioritarias, hitos y fechas límite.
          .tarjeta.color-primario.p-3(x="64%" y="81%" numero="6")
            p Una supervisión ágil y fluida requiere herramientas tipo #[em software]. Medir indicadores es clave, muestra el cumplimiento o incumplimiento de metas establecidas, en la revisión de avances, evaluar al equipo ejecutor y así avanzar en nuevas tareas o reforzar las que no se han cumplido.
      .col-12.d-block.d-md-none
        figure.mb-3(data-aos="fade-down")
          img(src='@/assets/curso/temas/tema1/info-1b.svg', alt='')
        .row
          .col-12.mb-4(data-aos="fade-down")
            .tarjeta.color-secundario.p-4
              p.mb-3 #[b Proyección de objetivos]
              p.mb-1 Tener presente el método SMART para la definición de objetivos. El método SMART consiste en: 
              p.mb-1 S #[em -Specific] (específico). 
              p.mb-1 M #[em -Measurable] (medible). 
              p.mb-1 A #[em -Achievable] (alcanzable). 
              p.mb-1 R #[em -Realistic] (realista).
              p.mb-1 T #[em -Time- bound] (tiempo limitado).
          .col-12.mb-4(data-aos="fade-down")
            .tarjeta.color-secundario.p-4
              p.mb-3 #[b Organizar y describir tareas]
              p.mb-1 Se deben describir los pasos necesarios para lograr los objetivos planeados.
          .col-12.mb-4(data-aos="fade-down")
            .tarjeta.color-secundario.p-4
              p.mb-3 #[b Definir asignación de recursos]
              p.mb-1 Asignar acorde con los recursos definidos, los elementos requeridos y el talento humano que va a ejecutar las acciones. Puede que no se asignen desde el principio, por tanto, se deben convertir en una acción a tener en cuenta en el desarrollo del plan.
          .col-12.mb-4(data-aos="fade-down")
            .tarjeta.color-secundario.p-4
              p.mb-3 #[b Priorización de tareas]
              p.mb-1 Sugiere definir tareas a realizar primero (prioridad alta) y cuales reprogramar (tareas flexibles). Darles prioridad y definir la secuencia a seguir para completar tareas y poder comenzar otras. En muchos casos, la ejecución de una actividad depende de otra, esto debe destacarse en la priorización.
          .col-12.mb-4(data-aos="fade-down")
            .tarjeta.color-secundario.p-4
              p.mb-3 #[b Concretar plazos e hitos]
              p.mb-1 Asignar fechas límites de actividades proyectadas y de acontecimientos puntuales (hitos) según la completitud de la actividad o comienzo de una nueva fase. Tener en cuenta la herramienta de diagrama de Gantt, proyectando tareas prioritarias, hitos y fechas límite.
          .col-12.mb-4(data-aos="fade-down")
            .tarjeta.color-secundario.p-4
              p.mb-3 #[b Supervisión y adaptación al plan de acción]
              p.mb-1 Una supervisión ágil y fluida requiere herramientas tipo #[em software]. Medir indicadores es clave, muestra el cumplimiento o incumplimiento de metas establecidas, en la revisión de avances, evaluar al equipo ejecutor y así avanzar en nuevas tareas o reforzar las que no se han cumplido.
      
    p.mb-5(data-aos="fade-down") En conclusión, el plan de acción corresponde con las tareas que deben ejecutar en cada área o unidad para aportar a las estrategias del plan operativo o plan estratégico, lo cual permite monitorear, tener adecuado seguimiento y la respectiva evaluación.

    .row.justify-content-center.align-items-center.mb-5(data-aos="zoom-in-down")
      .col-12.col-lg-10
        .row.tarjeta.color-secundario-c.p-4
          .col-10.col-md-3.col-lg-3
            img(src='@/assets/curso/temas/tema1/tema1-2.png', alt='')
          .col-12.col-md-9.col-lg 
            p.mb-0 Para que el plan de acción sea operativo y efectivo se debe tener presente elementos adicionales como los niveles de jerarquía, responsabilidad, manual de funciones, actividades y tareas de cada área. Es importante conocer que las dinámicas organizativas se estructuran según los métodos y procedimientos que son internos en las organizaciones. Estas estructuras son la base de la operatividad en las diversas áreas de la empresa, por tanto, se hace necesario a nivel general conocer los grados de autoridad y responsabilidad acorde con las diversas jerarquías de la empresa. 

    p.mb-3(data-aos="fade-down") En la organización empresarial se destacan dos tipos de estructuras que son las centralizadas y las descentralizadas. Las estructuras centralizadas se caracterizan porque los cargos de nivel directivo sobresalen al resto de los miembros de la empresa; por otro lado, las estructuras descentralizadas se caracterizan porque los cargos directivos asignan las responsabilidades en niveles intermedios o bajos.
    p.mb-5(data-aos="fade-down") A nivel organizativo se destacan: la estructura organizativa funcional, la jerárquica, la estructura lineal, la estructura matricial y la estructura por división, como se describe brevemente a continuación:

    TabsC.color-acento-botones.mb-5(data-aos="zoom-in-down")
      .py-3.py-md-4(titulo="Estructura organizativa funcional")
        .row
          .col-md-5.mb-4.mb-md-0
            figure
              img(src='@/assets/curso/temas/tema1/tema1-3.png', alt='')
          .col-md-7
            h4 Estructura organizativa funcional
            p Tiene como objetivo dar soporte a los diversos niveles jerárquicos, es decir, frente a cada nivel de jerarquía se encuentra un especialista o jefe de sección. Este tipo de sistema combate la multiplicidad de funciones y el trabajo se enfoca en los objetivos concretos. 
      .py-3.py-md-4(titulo="Estructura organizativa lineal o <em>staff</em>")
        .row
          .col-md-5.mb-4.mb-md-0
            figure
              img(src='@/assets/curso/temas/tema1/tema1-4.png', alt='')
          .col-md-7
            h4 Estructura organizativa lineal o #[em staff]
            p Es una estructura que mezcla las relaciones de autoridad directa con aquel asesoramiento que ejercen consultores externos a la empresa. En este tipo de dinámica, los asesores o agentes consultores cubren los requerimientos de la empresa, no hay una amenaza sobre la autoridad y las actividades suelen realizarse con tiempos y recursos más óptimos. 
      .py-3.py-md-4(titulo="Estructura organizativa matricial")
        .row
          .col-md-5.mb-4.mb-md-0
            figure
              img(src='@/assets/curso/temas/tema1/tema1-5.png', alt='')
          .col-md-7
            h4 Estructura organizativa matricial
            p Es la unión de varios recursos y materiales para ejecutar tareas específicas y cuando se finalice la tarea o proyecto, la estructura se disuelve. Como característica principal, las personas que integran los equipos pueden o no hacer parte de la empresa y tienen como jefes uno que es general y el otro que es responsable de la actividad específica. 
            p Este tipo de estructura se divide en dos: 
            ul.lista-ul.ms-3
              li
                span.icon ✔ 
                | Distribución vertical (cada departamento o área está dedicada a una función específica). 
              li
                span.icon ✔ 
                | Distribución horizontal (integración de los trabajadores de diversas áreas con un proyecto específico). 
      .py-3.py-md-4(titulo="Estructura organizativa por división")
        .row
          .col-md-5.mb-4.mb-md-0
            figure
              img(src='@/assets/curso/temas/tema1/tema1-6.png', alt='')
          .col-md-7
            h4 Estructura organizativa por división
            p Se organiza bajo tres líneas claves que son productos, clientes o zona geográfica. 
            ul.lista-ul.ms-3
              li
                span.icon ✔ 
                | Estructura por productos: esta estructura se divide en grupos y cada uno se hace cargo de un producto en específico.  
              li
                span.icon ✔ 
                | Estructura por zona geográfica: es aquella estructura que se divide por grandes estructuras acorde con las cadenas organizativas.  Los directivos están a cargo de cada zona acorde con lo asignado. 
              li
                span.icon ✔ 
                | Estructura por clientes: depende de la necesidad de solución de los clientes, llegando a tener procesos de atención al usuario más concretos y bien definidos.
      .py-3.py-md-4(titulo="Estructura organizativa jerárquica")
        .row
          .col-md-5.mb-4.mb-md-0
            figure
              img(src='@/assets/curso/temas/tema1/tema1-7.png', alt='')
          .col-md-7
            h4 Estructura organizativa jerárquica
            p Más utilizada a nivel empresarial. Es la creación de pequeñas dependencias vigiladas por uno o varios cargos superiores. Concentra la autoridad y poder sobre otras dependencias. Permite organizar los niveles de autoridad, responsabilidad y actividades asignadas hasta llegar al nivel de mayor autoridad.
            p La división vertical debe distribuir responsabilidades de decisión, para alcanzar objetivos. Tiene varios niveles:
            ul.lista-ul.ms-3
              li
                span.icon ✔ 
                | Nivel superior o estratégico: responsable de elaborar estrategias y políticas empresariales. Define objetivos a largo plazo y toma decisiones sobre necesidades y requerimientos. Se ubica al presidente, el director, el gerente. 
              li
                span.icon ✔ 
                | Nivel medio o táctico: encargado de regular acciones y actividades que se desarrollan en el nivel inferior u operativo. Se ubica el gerente de ventas, el gerente de producción.
              li
                span.icon ✔ 
                | Nivel inferior u operativo: ejecutan previa programación las tareas rutinarias de la organización. Se ubican      los obreros, los empleados administrativos, por ejemplo.

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-down")
      .col-12.col-md-8.col-lg-7
        p Adicional, a la necesidad de comprender los tipos de estructuras organizacionales, es necesario recordar que todo colaborador de la empresa u organización debe conocer el #[b manual de funciones], ya que este es una herramienta de gestión del talento humano, que establece las funciones y competencias laborales que hacen parte de todos los empleos de la organización. En este manual de funciones debe existir claridad respecto a los requerimientos de conocimientos, experiencia y las competencias que sean exigidas y necesarias para el desempeño del cargo.  
        p El manual de funciones se construye teniendo en cuenta elementos claves como la misión, objetivos y funciones, estructura, procesos (de tipo misional, estratégico, apoyo, evaluación y seguimiento) y los cargos de la institución.
        p Todo manual de funciones debe contener la siguiente información: 
        ul.lista-ul.ms-3
          li.mb-0
            span.icon ✔ 
            | Identificación y ubicación del empleo. 
          li.mb-0
            span.icon ✔ 
            | Contenido funcional (contiene el propósito principal y la descripción de funciones esenciales del empleo).
          li.mb-0
            span.icon ✔ 
            | Conocimientos básicos o esenciales, competencias de tipo comportamental y requisitos de experiencia y formación académica necesarios para el desempeño de funciones.
      .col-10.col-md-4.col-lg-5
        img(src='@/assets/curso/temas/tema1/tema1-8.png', alt='')  

    p.mb-5(data-aos="fade-down") Los objetivos principales del manual de funciones se describen a continuación:

    .row.justify-content-center.align-items-center.mb-5 
      .col-12.d-none.d-md-block(data-aos="zoom-in-down")
        ImagenInfografica.color-acento-botones
          template(v-slot:imagen)
            figure
              img(src='@/assets/curso/temas/tema1/info-2a.svg', alt='')
          .tarjeta.color-acento-contenido.p-3(x="50%" y="10%" numero="+")
            p #[b ESTABLECER ACTIVIDADES:] las actividades realizadas al interior de la empresa para la obtención de los objetivos misionales.
          .tarjeta.color-acento-contenido.p-3(x="70%" y="22%" numero="+")
            p #[b ALINEAR PUESTOS DE TRABAJO] con estructura organizacional definida (cualquiera que se haya escogido). Debe existir armonía entre la estructura organizacional y los puestos de trabajo definidos, esto actúa positiva o negativamente en la productividad y financieramente en la operación.
          .tarjeta.color-acento-contenido.p-3(x="76%" y="49%" numero="+")
            p #[b OPTIMIZAR LA PRODUCTIVIDAD] de la empresa por medio del análisis en las actividades operativas teniendo en cuenta la forma en que se desarrolla, tiempos, acciones y todos los requerimientos de formación y capacitación.
          .tarjeta.color-acento-contenido.p-3(x="68%" y="77%" numero="+")
            p #[b INDUCCIÓN DE PERSONAL,] contar con un método de inducción del personal que ingresa nuevo a la empresa, y de igual manera permite valorar la productividad y desempeño del empleado en el marco del puesto de trabajo.
          .tarjeta.color-acento-contenido.p-3(x="50%" y="87%" numero="+")
            p #[b CONCRETAR EL PERFIL DEL PERSONAL] que se requiere para la ejecución de las actividades permitiendo la búsqueda y la selección del personal que se requiere en la empresa. 
          .tarjeta.color-acento-contenido.p-3(x="34%" y="77%" numero="+")
            p #[b CUMPLIMIENTO DE INSTRUCCIONES] de trabajo. Agrupar, intervenir y prevenir sus modificaciones de origen arbitrario.     
          .tarjeta.color-acento-contenido.p-3(x="25%" y="49%" numero="+")
            p #[b ESTABLECER RESPONSABILIDADES] por fallas o errores, de una manera más simple. 
          .tarjeta.color-acento-contenido.p-3(x="30%" y="23%" numero="+")
            p #[b INCREMENTAR LA EFICIENCIA] de los empleados, dándoles las indicaciones de lo que deben hacer y cómo lo deben de realizar, mejorando de esta manera la coordinación del trabajo e impidiendo las réplicas.
      .col-12.d-block.d-md-none
        figure.mb-3(data-aos="fade-down")
          img(src='@/assets/curso/temas/tema1/info-2b.svg', alt='')

    p.mb-5(data-aos="fade-down") Para la elaboración del manual de funciones, es necesario contar con los siguientes elementos: 

    .row.justify-content-center.mb-4
      .col-12.col-lg-12.mb-2.mb-md-0(data-aos="zoom-in-down")
        figure 
          img.d-none.d-md-block(src='@/assets/curso/temas/tema1/info-3a.svg', alt='')
          img.d-block.d-md-none(src='@/assets/curso/temas/tema1/info-3b.svg', alt='')

    p.mb-3(data-aos="fade-down") Para finalizar, se debe tener en cuenta que el contenido de un manual puede variar acorde con los requerimientos de la empresa, por tanto, adicional a los elementos descritos en los párrafos anteriores, es necesario como complemento:  portada, misión y visión, índice, hojas de autorización del área, política de calidad (cuando sea aplicable) objetivo(s) del manual, bitácora de revisiones y modificaciones a políticas y procedimientos, formatos, artículos y anexos.
    p.mb-5(data-aos="fade-down") Para la revisión de los elementos básicos del manual de funciones, se deben diferenciar los términos que se definen a continuación:

    .row.mb-5(data-aos="zoom-in-down")
      .col-sm-6.col-lg-4.mb-4.mb-lg-0.d-flex.align-items-stretch
        .tarjeta--boton.color-primario.p-4
          .row.justify-content-center.mb-3
            .col-7.col-lg-6
              figure
                img(src='@/assets/curso/temas/tema1/tema1-9.svg', alt='')
          h4.text-center Función
          p Corresponde con el desarrollo de diferentes actividades realizadas para alcanzar el logro de los objetivos propuestos.
      .col-sm-6.col-lg-4.mb-4.mb-lg-0.d-flex.align-items-stretch
        .tarjeta--boton.color-primario.p-4
          .row.justify-content-center.mb-3
            .col-7.col-lg-6
              figure
                img(src='@/assets/curso/temas/tema1/tema1-10.svg', alt='')
          h4.text-center Actividad
          p Es el conjunto de acciones que se realizan para cumplir con los objetivos determinados. Son todas aquellas acciones que se ejecutan para cumplir con las funciones del cargo.
      .col-sm-6.col-lg-4.mb-4.mb-sm-0.d-flex.align-items-stretch
        .tarjeta--boton.color-primario.p-4.w-100
          .row.justify-content-center.mb-3
            .col-7.col-lg-6
              figure
                img(src='@/assets/curso/temas/tema1/tema1-11.svg', alt='')
          h4.text-center Tarea
          p Es una unidad de trabajo de tipo especifica. La tarea es considerada como una parte de una actividad.

    .tarjeta.color-acento-contenido.p-4.p-md-5.mb-5(data-aos="fade-down")
      .row.justify-content-around.align-items-center
        .col-8.col-sm-6.col-md-4.mb-4.mb-md-0
          img(src='@/assets/curso/temas/tema1/tema1-12.png', alt='')
        .col-md.col-lg-6
          p.mb-4 El siguiente documento informa sobre el manual de funciones de una organización #[b (Instituto de investigaciones marinas y costeras José Benito Vives de Andréis -INVEMAR-)], detallando cada uno de los elementos que le contienen tanto a nivel de la empresa como del (los) candidatos y los cargos que  allí son necesarios para el funcionamiento de la misma, para acceder al documento.
          
          a.boton.color-acento-botones.texto-blanco(href="https://www.invemar.org.co/redcostera1/invemar/docs/9627manual_de_funciones.PDF" target="_blank" type="application/pdf")
            span Descargar
            i.fas.fa-file-download

    Separador
    #t_1_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 1.1 Metodologías

    p.mb-3(data-aos="fade-down") Conceptos correspondientes a los procesos, procedimientos y estándares de calidad, son necesarios para entender las metodologías que hacen parte del plan de acción.
    p.mb-5(data-aos="fade-down") Primero se debe hacer la diferenciación entre los conceptos de proceso y procedimiento. Acorde con lo expuesto en la ISO 9000, el proceso se define como el #[em “conjunto de actividades mutuamente relacionadas que al interactuar juntas convierten los elementos de entrada en resultados”]. Por otro lado, el procedimiento es la forma en que se ejecutan una serie de pasos para obtener un resultado específico. A continuación, se describen los elementos claves para diferenciar el proceso y el procedimiento respectivamente. 

    .tarjeta--container.row.mb-5(data-aos="zoom-in-down")
      .col-md.tarjeta.color-primario.p-5
        .row.justify-content-center.mb-4
          .col-6
            figure
              img(src='@/assets/curso/temas/tema1/tema1-13.png', alt='')
        ul.lista-ul.ms-3
          li.mb-0
            span ✔ 
            | Tienen en cuenta un objetivo general.  Suelen integrarse varios procesos lo que se denomina, Mapa de procesos. 
          li.mb-0
            span ✔ 
            | Interactúan varias personas de diferentes áreas de la organización. 
          li.mb-0
            span ✔ 
            | Está distribuido por etapas. 
          li.mb-0
            span ✔ 
            | Su práctica es continua.
          li.mb-0
            span ✔ 
            | Son dinámicos (pueden cambiar con frecuencia).
          li.mb-0
            span ✔ 
            | Parten de la necesidad y la voluntad de lograr un resultado. Se dividen en procesos estratégicos, misionales y de apoyo. 

      .col-md.tarjeta.color-secundario.p-5
        .row.justify-content-center.mb-4
          .col-6
            figure
              img(src='@/assets/curso/temas/tema1/tema1-14.png', alt='')
        ul.lista-ul.ms-3
          li.mb-0
            span ✔ 
            | Tiene en cuenta los objetivos específicos. 
          li.mb-0
            span ✔ 
            | Lo ejecuta una persona o una misma área. 
          li.mb-0
            span ✔ 
            | Se organiza por pasos o tareas.
          li.mb-0
            span ✔ 
            | Su práctica es discontinua.
          li.mb-0
            span ✔ 
            | Son estáticos (por lo general no cambian).
          li.mb-0
            span ✔ 
            | Parten con el objetivo de ejecutar una tarea de manera completa por medio de guías definidas.

    p.mb-5(data-aos="fade-down") En el siguiente gráfico, puede observarse la diferencia entre proceso y procedimiento, teniendo en cuenta los aspectos que cada uno de estos involucra:

    .row.justify-content-center.mb-5
      .col-12.mb-2.mb-md-0(data-aos="fade-left")
        .titulo-sexto.color-acento-contenido
          p.titulo.pb-0.mb-0 <b>Figura 1. </b> <i>Ejemplo proceso y procedimiento </i>
        figure 
          img(src='@/assets/curso/temas/tema1/fig-1.svg', alt='En la figura 1 se muestra un ejemplo de proceso y procedimiento por medio de un diagrama de flujo.')
          figcaption Nota. Adaptado de Blogspot y Researchgate.
      .col-12.d-block.d-md-none(data-aos="fade-left")
        a.anexo.mb-4(:href="obtenerLink('/downloads/Figura_1_Ejemplo_proceso_y_procedimiento.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-pdf.svg")
          .anexo__texto
            p #[b Anexo]. Figura 1. Ejemplo proceso y procedimiento 

    p.mb-5(data-aos="fade-down") El manual de procesos es también conocido como el manual de procedimientos y es aquel que le permite a la empresa un funcionamiento correcto ya que por medio de este se organizan todos los elementos necesarios para la gestión de la organización (políticas, normas, reglamentos). Los aspectos positivos del manual son: la optimización del tiempo, el control a nivel interno, mejorar los procesos, favorecer la comunicación, asignar responsabilidades, definir expectativas y capacitar a los colaboradores internos en el marco de las actividades que se deben realizar, una breve descripción al respecto es la siguiente:

    .row.justify-content-center.mb-5(data-aos="fade-down")
      .col-12.col-lg-10.col-md-11.mb-2.mb-md-0
        PasosA.color-primario(tipo="n")
          .row.align-items-center(data-aos="fade-left")
            .col-md-6.mb-4.mb-md-0
              h4 Elementos básicos
              p Los elementos básicos que conforman el manual de procedimientos son los siguientes: 
              ul.lista-ul.ms-3
                li.mb-0
                  span.icon ✔ 
                  | Título.   
                li.mb-0
                  span.icon ✔ 
                  | Marco normativo.
                li.mb-0
                  span.icon ✔ 
                  | Objetivo del documento. 
                li.mb-0
                  span.icon ✔ 
                  | Responsables y personal que realiza la revisión.
                li.mb-0
                  span.icon ✔ 
                  | Describir cada uno de los procesos. 
                li.mb-0
                  span.icon ✔ 
                  | Estructurar el diagrama de flujo. 
                li.mb-0
                  span.icon ✔ 
                  | Organizar el glosario de términos. 
            .col-md-6
              figure
                img(src='@/assets/curso/temas/tema1/tema1-15.png', alt='')
          .row.align-items-center(data-aos="fade-right")
            .col-md-6.mb-4.mb-md-0
              figure
                img(src='@/assets/curso/temas/tema1/tema1-16.png', alt='')
            .col-md-6.text-start
              h4 Actividades
              p Por lo general, cada manual de procedimiento debe contener las siguientes actividades: 
              ul.lista-ul.ms-3
                li.mb-0
                  span.icon ✔ 
                  | Nombre del procedimiento.
                li.mb-0
                  span.icon ✔ 
                  | Objetivo.
                li.mb-0
                  span.icon ✔ 
                  | Políticas y normas de operación.
                li.mb-0
                  span.icon ✔ 
                  | Descripción narrativa del procedimiento.

          .row.align-items-center(data-aos="fade-left")
            .col-md-6.mb-4.mb-md-0
              h4 Responsable
              p Nombre completo del área y/o puesto que realiza la actividad (mayúsculas y minúsculas), y corresponder con la estructura orgánica. Si una misma área realiza actividades continuas; va el nombre en la primera, y al inicio de cada hoja (de continuar la actividad). Se usan siglas, cuando la nomenclatura es extensa.
            .col-md-6
              figure
                img(src='@/assets/curso/temas/tema1/tema1-17.png', alt='')
          .row.align-items-center(data-aos="fade-right")
            .col-md-6.mb-4.mb-md-0
              figure
                img(src='@/assets/curso/temas/tema1/tema1-18.png', alt='')
            .col-md-6.text-start
              h4 Número
              p Enuncia las actividades en orden lógico acorde con la aparición de cada una y en el marco de las alternativas de solución. Se recomienda usar números arábigos. 
          .row.align-items-center(data-aos="fade-left")
            .col-md-6.mb-4.mb-md-0
              h4 Descripción de la actividad
              p Se detallan todas las actividades partícipes del procedimiento en una forma secuencial, clara y precisa en el marco del cómo, cuándo y dónde se llevan a cabo estas. Escribir el inicio del procedimiento describiendo: “Inicia procedimiento”. Cada actividad empieza con un verbo indicativo en tercera persona del singular.
            .col-md-6
              figure
                img(src='@/assets/curso/temas/tema1/tema1-19.png', alt='')
          .row.align-items-center(data-aos="fade-right")
            .col-md-6.mb-4.mb-md-0
              figure
                img(src='@/assets/curso/temas/tema1/tema1-20.png', alt='')
            .col-md-6.text-start
              h4 Tiempo
              p Se debe tener presente el tiempo necesario para la ejecución de cada actividad, cuantificando por días hábiles, si no es posible establecer el tiempo, se debe poner el tiempo total del procedimiento y su respectiva justificación.

    p.mb-5(data-aos="fade-down") Algunas consideraciones que deben tenerse en cuenta en las actividades del manual de procedimientos son las siguientes:

    .row.justify-content-center.mb-5
      .col-12.col-lg-10.col-md-11.mb-2.mb-md-0(data-aos="fade-left")
        .titulo-sexto.color-acento-contenido
          p.titulo.pb-0.mb-0 <b>Figura 2. </b> <i>Consideraciones de las actividades del manual de procedimientos</i>
        figure 
          img.d-none.d-md-block(src='@/assets/curso/temas/tema1/fig-2a.svg', alt='En la figura 2 se muestra las consideraciones de las actividades del manual de procedimientos, nombre del procedimiento, objetivo, políticas y normas de operación y descripción narrativa del procedimiento.')
          img.d-block.d-md-none(src='@/assets/curso/temas/tema1/fig-2b.svg', alt='En la figura 2 se muestra las consideraciones de las actividades del manual de procedimientos, nombre del procedimiento, objetivo, políticas y normas de operación y descripción narrativa del procedimiento.')

    p.mb-3(data-aos="fade-down") En toda descripción se debe tener en cuenta los siguientes elementos: ¿Quién o qué área lo hace?, ¿Cómo lo hace?, ¿Cuándo lo hace? y ¿Dónde lo hace?.
    p.mb-5(data-aos="fade-down") Para realizar una descripción gráfica y secuencial de las actividades que integran los procedimientos se puede hacer mediante un diagrama de flujo, aquí, cada actividad debe ser identificada con su respectivo número, agregándole por fuera del símbolo al que le corresponda a la actividad, ubicándolo en el ángulo superior derecho, acorde con la numeración de actividades la cual corresponde con la descripción narrativa. Los símbolos básicos del flujograma son los siguientes:

    .row.justify-content-center.mb-5
      .col-12.mb-2.mb-md-0(data-aos="fade-left")
        .titulo-sexto.color-acento-contenido
          p.titulo.pb-0.mb-0 <b>Figura 3. </b> <i>Diagrama de flujo </i>
        figure 
          img(src='@/assets/curso/temas/tema1/fig-3.svg', alt='En la figura 3 se muestran los símbolos básicos de un diagrama de flujo.')
      .col-12.d-block.d-md-none(data-aos="fade-left")
        a.anexo.mb-4(:href="obtenerLink('/downloads/Figura_3_Diagrama_de_flujo.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-pdf.svg")
          .anexo__texto
            p #[b Anexo]. Figura 3. Ejemplo proceso y procedimiento 

    p.mb-3(data-aos="fade-down") El diagrama de flujo puede ser trabajado por columnas y se deben proyectar tantas columnas como sean necesarias para las áreas responsables que participan dentro del procedimiento. Por temas de orden, se sugiere un máximo de tres columnas; si se da el caso que en un procedimiento participen más de tres áreas, estas se deben agrupar acorde con el área jerárquica descendente del titular, esto con fin de prevenir una aglomeración de columnas que dificultan tanto la elaboración, como la comprensión del diagrama.
    p.mb-5(data-aos="fade-down") Para una correcta ejecución de los planes de acción se deben conocer las diversas metodologías que se pueden desarrollar, tanto para el diseño de los planes, programas y proyectos como para la definición de prioridades. Pero antes de comenzar con la revisión de estos temas, es importante conocer aquellos conceptos relacionados con los estándares de calidad, ya que esto ayudará en la comprensión de las metodologías en las que se va a profundizar más adelante. 

    .row.justify-content-center.align-items-center.mb-5(data-aos="zoom-in-down")
      .col-12.col-lg-10
        .row.align-items-center.tarjeta.color-secundario-c.p-4
          .col-10.col-md-3.col-lg-4
            img(src='@/assets/curso/temas/tema1/tema1-21.png', alt='')
          .col-12.col-md-9.col-lg 
            p.mb-0 La calidad en términos generales, se define como la propiedad que tiene una cosa u objeto, que define su valor, y la satisfacción que genera en quien hace uso de la misma. En el marco de la salud, la calidad es definida como el grado en que los servicios de salud ofertados pueden ayudar a que el individuo y la población en general puedan aumentar los resultados sanitarios planteados; y la calidad ambiental es aquella que representa las condiciones y características del ambiente en torno a la disponibilidad de acceder a los recursos naturales, a los ambientes con condiciones sanitarias óptimas y por tanto comprende la ausencia de agentes nocivos para la salud de la población. 

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-down")
      .col-10.col-md-4.col-lg-5
        img(src='@/assets/curso/temas/tema1/tema1-22.png', alt='')  
      .col-12.col-md-8.col-lg-7
        p El estándar de calidad es definido como el punto de referencia que se tiene en cuenta para determinar si un objeto, servicio o proceso, por ejemplo, cumplen con las expectativas del usuario y también con las que están reguladas normativamente. Por tanto, el estándar de calidad es aquel que se debe cumplir, es decir, es parte del proceso evaluativo por parte de los entes que regulan el sector. Algunos estándares de calidad pueden ser catalogados como de obligatorio cumplimiento y otros, como aquellos que son superiores y que pueden aplicar para procesos de certificación o acreditación según sea el caso. Es así como en salud ambiental y sanitaria es necesario cumplir con los estándares de calidad definidos para que la población pueda contar con el hábitat saludable y con las óptimas condiciones de salud relacionadas con las condiciones ambientales.  

    p.mb-5(data-aos="fade-down") Tal y como ya fue revisado en este mismo programa, las actas de inspección, vigilancia y control, sirven de ejemplo para identificar los estándares de calidad esperados a nivel sanitario. A continuación, se enuncian algunos criterios contenidos dentro del acta general de IVC sanitaria revisados en los riesgos ambientales, del consumo y sanitarios según la salud pública. 

    .row.justify-content-center.align-items-center.mb-5
      .col-12.col-lg-10(data-aos="fade-right")
        .titulo-sexto.color-acento-contenido.mb-1
          p.titulo.pb-0.mb-0 #[b Tabla 1.] #[i Ejemplo estándares de calidad IVC Sanitaria] 
        .tabla-a.color-acento-contenido
          table(style="min-width:auto")
            caption Nota: adaptado de Histórico.santander.gov.co.
            thead
              tr.cabecera-a.text-center
                th(style="width:15%") No 
                th 3.1 Abastecimiento de agua
            tbody
              tr
                td 3.1.1
                td.text-start El establecimiento está conectado a la red del sistema de acueducto o el sistema que lo supla.
              tr
                td 3.1.2
                td.text-start El establecimiento cuenta con el suministro y tiene acceso a agua potable.
              tr
                td 3.1.3
                td.text-start Las instalaciones de suministro en el interior, están organizadas y construidas para su normal funcionamiento con la dotación requerida para el servicio continuo y con presión suficiente en todos los lugares de consumo.
              tr
                td 3.1.4
                td.text-start El establecimiento tiene tanques para el almacenamiento del agua potable, los cuales se encuentran protegidos y con la capacidad requerida para garantizar el abastecimiento en todas las instalaciones. 
              tr
                td 3.1.5
                td.text-start El establecimiento realiza de manera semestral o cuando sea requerido, la limpieza y desinfección de los tanques de almacenamiento de agua potable.

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-down")
      .col-12.col-md-8.col-lg-8
        p Adicional a lo anterior, es importante tener en cuenta que los estándares de calidad pueden generarse a partir de los lineamientos gubernamentales, pero también pueden ser parte del sistema de gestión de calidad de la organización, lo cual complementa las acciones en calidad dirigidas a los procesos de mejora continua fundamentales dentro del proceso de atención en salud, área de salud ambiental. 
        p Los estándares de calidad tienen como objetivo central responder positivamente ante la auditoría externa de las organizaciones. En el marco de la evaluación de los modelos de estándares, se establecen los requerimientos de los cuales sin su cumplimiento no se puede contar con la certificación correspondiente. Tener una certificación externa genera una garantía hacia terceros del correcto funcionamiento del sistema de calidad de la organización o un área específica. 
        p Los estándares de calidad no gubernamentales más utilizados por las entidades son las normas ISO - #[em “Norma definida por la Organización Internacional de Normalización que se aplica a los productos y servicios”]. Se pueden encontrar las siguientes: 
      .col-10.col-md-4.col-lg-4
        img(src='@/assets/curso/temas/tema1/tema1-23.png', alt='')  

    .row.justify-content-center.mb-5(data-aos="fade-down")
      .col-lg-6.d-flex.align-items-stretch
        .tarjeta-avatar-b.mb-3
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/temas/tema1/tema1-24.png' alt='')
          .tarjeta.color-primario
            .p-4
              h4 ISO 9000:2015 
              p Corresponde con el Sistema de gestión de la calidad, específicamente las bases y el vocabulario. 
      .col-lg-6.d-flex.align-items-stretch
        .tarjeta-avatar-b.mb-3
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/temas/tema1/tema1-25.png' alt='')
          .tarjeta.color-primario
            .p-4
              h4 ISO 9001:2015 
              p Corresponde con el Sistema de gestión de la calidad, específicamente los requisitos. 
      .col-lg-6.d-flex.align-items-stretch
        .tarjeta-avatar-b.mb-3
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/temas/tema1/tema1-26.png' alt='')
          .tarjeta.color-primario
            .p-4
              h4 ISO 9002:2016 
              p Corresponde con el Sistema gestión de la calidad, específicamente las directrices para la aplicación de la Norma ISO 9001:2015. 
      .col-lg-6.d-flex.align-items-stretch
        .tarjeta-avatar-b.mb-3
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/temas/tema1/tema1-27.png' alt='')
          .tarjeta.color-primario
            .p-4
              h4 ISO 9004:2018 
              p Corresponde con el Sistema de Gestión de la calidad, específicamente la calidad de la organización y los lineamientos para lograr el éxito sostenido.

    p.mb-3(data-aos="fade-down") Para concluir, es necesario tener en cuenta el contraste entre cada línea de estándares de calidad que se pueden encontrar en el marco de las actividades relacionadas con la salud ambiental y sanitaria. Recordar que anteriormente se revisaron los lineamientos del Sistema Obligatorio de Garantía de la Calidad, y los de inspección, vigilancia y control sanitaria en el marco del componente de salud ambiental. 
    p.mb-5(data-aos="fade-down") En el siguiente resumen, se describen los estándares de calidad en relación a los lineamientos de inspección, vigilancia y control sanitarios, y del Sistema Obligatorio de Garantía de la Calidad –SOGC-.

    .row.justify-content-center.align-items-center.mb-5
      .col-12.col-lg-12(data-aos="fade-right")
        .titulo-sexto.color-acento-contenido.mb-1
          p.titulo.pb-0.mb-0 #[b Tabla 2.] #[i Tabla resumen presentación estándares de calidad] 
        .tabla-a.color-acento-contenido
          table(style="min-width:auto")
            thead
              tr.cabecera-a.text-center
                td(style="width:25%")
                td
            tbody
              tr
                th(rowspan="3") Sistema Obligatorio Garantía de la Calidad SOGC
                td.text-start 
                  p SUH: Sistema único de habilitación. El proceso de habilitación está regulado por la resolución 3100 de 2019. Contiene estándares de calidad enfocados en la capacidad técnico administrativa, la suficiencia patrimonial y financiera; y la capacidad tecnológica y científica.
                  p Ejemplo 1: Numeral 11.1.2, Estándar de infraestructura, Generalidades de las condiciones de orden, aseo, limpieza y desinfección, estándar de calidad número 41: Las condiciones de orden, aseo, limpieza y desinfección son evidentes y responden a un proceso dinámico de acuerdo con los servicios prestados.
              tr
                td.text-start
                  p SUA: Sistema Único de Acreditación. Manual de Acreditación en Salud Ambulatorio y Hospitalario de Colombia, versión 3.1. 
                  p Ejemplo 1: Grupo de estándares asistenciales, Salida y seguimiento.  Estándar de calidad 52. Código: (AsSAL2) La organización asegura un plan de coordinación con otras organizaciones y comunidades relevantes en la prevención de enfermedades y la promoción, protección y mejoramiento de la salud de la población a la que presta sus servicios. 
                  p #[b Criterios:] 
                  ul.lista-ul.ms-3
                    li.mb-0
                      span.icon ✔ 
                      | La organización asegura que las políticas, directrices, procesos y procedimientos para la prevención de enfermedades y promoción de la salud están alineados con las normas nacionales y territoriales de salud pública. 
                    li.mb-0
                      span.icon ✔ 
                      | La organización asegura la existencia y aplicación de directrices y/ o procedimientos para el seguimiento de la prevención de las enfermedades y la salud después de la salida del paciente. 
              tr
                td.text-start 
                  p PAMEC: Programa de Auditoría      para el Mejoramiento de la Calidad con enfoque en seguridad del paciente. 
                  p Ejemplo 1:  Procesos institucionales, código 4.2.4, estándar de calidad: la institución cuenta con un programa de orientación y formación a las personas que usan los equipos para garantizar un funcionamiento seguro, consistente y preciso. 
              tr
                th Inspección, vigilancia y control sanitario
                td.text-start
                  p Estándares de calidad de inspección, vigilancia y control:
                  p Ejemplo 1 - Acta general, condiciones sanitarias, estándar de calidad: El establecimiento mantiene las condiciones de en orden, aseo y cuenta con un programa de limpieza y desinfección para las instalaciones y equipos documentado e implementado.
                  p Ejemplo 2 - Acta de inspección, vigilancia y control sanitario establecimientos veterinarios y afines, condiciones específicas, estándar de calidad: Dispone de área específica para desarrollar procedimientos invasivos o intervenciones quirúrgicas independiente y que cuente con superficies de fácil limpieza y desinfección. 
              tr
                th Estándares de calidad para certificación institucional
                td.text-start 
                  p Normas ISO - Norma técnica colombiana. 
                  p Ejemplo 1: NTC-ISO 9001 cuarta edición. Numeral 8.2, requisitos para los productos y servicios, 8.2.1 comunicación con el cliente, estándar de calidad: la comunicación con los clientes debe incluir tratar las consultas, los contratos o los pedidos, incluyendo los cambios. 
                  p Ejemplo 2: ISO 9001:2008, numeral 6.3. Infraestructura, estándar de calidad:  la organización debe determinar, proporcionar y mantener la infraestructura necesaria para lograr la conformidad con los requisitos del producto. 

    p.mb-3(data-aos="fade-down") Teniendo en cuenta los elementos generales de los estándares de calidad, se procede a realizar la revisión de las metodologías que existen para el diseño de planes, programas y proyectos, así como aquellas que existen para el establecimiento de prioridades. 
    p La planeación es la generación de una idea que lleva a la formulación de objetivos.  Son parte del planeamiento:
    ul.lista-ul.ms-3.mb-4
      li.mb-0
        span.icon ✔ 
        | Acciones estratégicas: representa los planteamientos y direccionamiento. 
      li.mb-0
        span.icon ✔ 
        | Acciones tácticas: operativa, realización de lo pensado o planteado en la acción estratégica.
    p.mb-5(data-aos="fade-down") El concepto de planeamiento, es el paso inicial para entrar en materia de las metodologías, en el siguiente recurso encontrará una mayor explicación al respecto:

    .row.mb-5(data-aos="fade-down")
      .col-12.col-md-6
        img(src='@/assets/curso/temas/tema1/tema1-ac.png', alt='')
      .col-12.col-md-6
        LineaTiempoD.color-secundario
          div(numero="1" titulo="Planeamiento") 
            p El planeamiento ofrece ventajas al ayudar a identificar objetivos claros, determinar la estructura, establecer metas y planificar políticas, programas, procedimientos, reglas y estrategias. Incluye coordinación de los colaboradores internos de la organización, recursos disponibles e identificar procedimientos eficientes para el logro de los objetivos.
          div(numero="2" titulo="Herramientas") 
            p Las herramientas del planeamiento, incluye los elementos con que se cuenta para poner en práctica lo calculado.
          div(numero="3" titulo="Proyecciones") 
            p Corresponde con los pronósticos basados en los datos estadísticos pasados.
          div(numero="4" titulo="Pronósticos") 
            p Son las predicciones del comportamiento a futuro basándose en aspectos subjetivos.
          div(numero="5" titulo="Planes") 
            p Son todas las acciones planeadas a futuro.
          div(numero="6" titulo="Programas") 
            p Forma de llevar a cabo los planes.
          div(numero="7" titulo="Proyectos") 
            p Procedimiento que se lleva a cabo.
          div(numero="8" titulo="Presupuestos") 
            p Representa todo el plan integral de una manera cuantitativa.
          div(numero="4" titulo="Procedimientos") 
            p Permiten organizar el paso a paso de un proceso.
    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-down")
      .col-12.col-md-8.col-lg-8
        p Para este componente, sólo se van a revisar las metodologías establecidas para los planes, programas y proyectos específicos. 
        p #[b Proyectos.] El proyecto es el resultado del análisis de todas las opciones estratégicas y se debe dar prioridad a cada una de éstas, seleccionando aquel que tiene un desempeño único como condición para lograr los objetivos estratégicos, y de igual manera la misión y la visión empresarial. 
        p En los proyectos estratégicos, se puede tener en cuenta la modernización tecnológica, la reingeniería organizacional, el plan global de mercado, de calidad total, de servicio al cliente y plan estratégico de talento humano. 
        p Para la selección de los proyectos es indispensable tener en cuenta los siguientes elementos: 
        ul.lista-ul.ms-3
          li.mb-0
            span.icon ✔ 
            | Visión y misión corporativa. 
          li.mb-0
            span.icon ✔ 
            | Los objetivos corporativos. 
      .col-10.col-md-4.col-lg-4
        img(src='@/assets/curso/temas/tema1/tema1-28.png', alt='')  

    p.mb-3(data-aos="fade-down") #[b Metodologías para el diseño de un proyecto.] El diseño del proyecto es uno de los momentos iniciales en donde se pueden plantear las ideas, métodos, recursos y documentos necesarios para dejar como entregables. El diseño debe incorporar la estructuración de objetivos y la utilización de medios visuales para notificar mejor esos objetivos. 
    p.mb-5(data-aos="fade-down") A nivel general, el diseño de un proyecto cuenta con los pasos que van desde la proyección de las metas y objetivos claves hasta la puesta en marcha y consolidación de la meta definida. 

    SlyderF.mb-5(columnas="col-lg-6 col-xl-4" data-aos="fade-down-right")
      .tarjeta.color-primario.p-4
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/tema1/carrucel-1.png' alt='')
        h4.text-center Fase 1
        p Estructuración de los objetivos del proyecto. Tener en cuenta formularlos basados en estos elementos: específicos, alcanzables, realistas y de duración limitada. Se debe dejar organizado el cronograma y los entregables del proyecto.
      .tarjeta.color-primario.p-4
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/tema1/carrucel-2.png' alt='')
        h4.text-center Fase 2
        p.text-start Se deben establecer los resultados del proyecto. Estos resultados describen en mayor detalle las tareas específicas que se van alcanzar con el proyecto.
      .tarjeta.color-primario.p-4
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/tema1/carrucel-3.png' alt='')
        h4.text-center Fase 3
        p.text-start En esta fase se suelen conocer los principales riesgos y limitaciones. Es importante utilizar un registro de riesgos que permita analizar, documentar y poder resolver los diversos riesgos que surjan alrededor del proyecto. 
      .tarjeta.color-primario.p-4
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/tema1/carrucel-4.png' alt='')
        h4.text-center Fase 4
        p.text-start Utilizar medios visuales para definir mejor la estrategia del proyecto. Este tipo de estrategias permiten comunicar a los miembros del equipo el fin del proyecto. 
      .tarjeta.color-primario.p-4
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/tema1/carrucel-5.png' alt='')
        h4.text-center Fase 5
        p.text-start Proyección del presupuesto. Algunas veces, el presupuesto lo asigna la dirección/gerencia, debe alinearse con lo formulado. Hasta la aprobación del presupuesto, se asignan: garantes del proyecto, escritura de documentos y formulación de tareas. 
      .tarjeta.color-primario.p-4
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/tema1/carrucel-6.png' alt='')
        h4.text-center Fase 6
        p.text-start Organizar un plan de contingencia el cual respalda lo proyectado. Esta fase de plan de contingencia permitirá la resolución de inconvenientes que surjan con optimización de la eficiencia. 
      .tarjeta.color-primario.p-4
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/tema1/carrucel-7.png' alt='')
        h4.text-center Fase 7
        p.text-start Se realiza la documentación de acontecimientos, que permite la realización de actividades a tiempo, detectando las desviaciones presentadas durante la ejecución. La documentación se debe realizar de principio hasta el fin del proyecto. 

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-down")
      .col-12.col-md-8.col-lg-8
        p Las herramientas más populares en el diseño de un proyecto son: 
        ul.lista-ul.ms-3
          li.mb-0
            span.icon ✔ 
            | El diagrama de flujo: por medio de este se puede visualizar el paso a paso del proyecto. 
          li.mb-0
            span.icon ✔ 
            | El diagrama de Gantt: por medio de este gráfico de barras horizontales se logra visualizar el cronograma del proyecto. Las barras muestran las tareas del proyecto y la longitud de las barras definen la cantidad de tiempo que tardarán en realizarse a completitud. 
          li.mb-0
            span.icon ✔ 
            | La estructura de desglose del trabajo (WBS): por medio de esta estrategia se desglosan todas las tareas del proyecto, permitiendo proyectar los entregables y siempre teniendo en cuenta los objetivos del proyecto.
          li.mb-0
            span.icon ✔ 
            | Mapas mentales: por medio del mapa mental se puede visualizar el proyecto y las tareas. 
          li.mb-0
            span.icon ✔ 
            | Diagrama de PERT: por medio de este diagrama se puede realizar proyección, organización y diseño de tareas. Buen uso de esta herramienta en proyectos complejos y en aquellos que es indispensable la proyección del tiempo.
  
      .col-10.col-md-4.col-lg-4
        img(src='@/assets/curso/temas/tema1/tema1-29.png', alt='')  

    p.mb-5(data-aos="fade-down") La siete (7) fases presentadas, corresponden de forma general con las de mayor uso para la formulación de proyectos, sin embargo, es importante describir otras metodologías que, aunque no son de uso común, pueden usarse de acuerdo con los objetivos o propósitos trazados, estas son: 

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-down")
      .col-12
        TabsA.color-acento-botones(data-aos="fade-down")
          .tarjeta.color-primario.p-4(titulo="Metodología <em>Agile</em>")
            h4 Metodología <em>Agile</em> 
            p Usa ciclos de desarrollo con lanzamientos cortos y usuales, denominados #[em sprints]; su objetivo es obtener información de los beneficiarios acerca de las necesidades encontradas. Esta retroalimentación, permite contar con una estrategia de mejora continua durante todo el proceso. Esta metodología se caracteriza por ser creativa, dinámica y flexible. Permite la interacción con los individuos, presencia de #[em software] de trabajo, trabajo articulado con el cliente y respuestas ante los cambios. 
            p Para su desarrollo requiere: 
            ul.lista-ul.ms-3
              li.mb-0
                span.icon ✔ 
                | #[b Inicio:] objetivos del #[em sprint].
              li.mb-0
                span.icon ✔ 
                | #[b Desarrollo:] seguimiento diario.
              li.mb-0
                span.icon ✔ 
                | #[b Cierre:] revisión de cumplimiento. 
            p Esta metodología permite la adaptación y el ajuste de los objetivos planteados en el proyecto, genera la posibilidad de tener resultados que cumplan con las expectativas. Presenta otros tipos de estrategias acorde con las necesidades que se buscan suplir:  
            ul.lista-ul.ms-3
              li.mb-0
                span.icon ✔ 
                | #[em Scrum.]
              li.mb-0
                span.icon ✔ 
                | #[em Kanban.]
              li.mb-0
                span.icon ✔ 
                | #[em XP-Extrem Manufacturing.]
              li.mb-0
                span.icon ✔ 
                | #[em Lean.]
          .tarjeta.color-primario.p-4(titulo="Metodología Cascada - <em>Waterfal</em>")
            h4 Metodología Cascada - <em>Waterfal</em> 
            p Se realiza por medio de la división del proyecto en procesos a realizar de manera secuencial hasta obtener la meta definida. Los procesos en los que se divide son: inicio, planeación, realización, seguimiento y cierre. Permite controlar todos los elementos generados en cada fase. 
            ul.lista-ul.ms-3
              li.mb-0
                span.icon ✔ 
                | #[b Inicio:] estructuración del proyecto y consentimiento.
              li.mb-0
                span.icon ✔ 
                | #[b Planificación:] proyectar los diversos planes de gestión. 
              li.mb-0
                span.icon ✔ 
                | #[b Ejecución:] puesta en marcha de tareas planeadas para dar cumplimiento a los objetivos planeados. 
              li.mb-0
                span.icon ✔ 
                | #[b Monitorización y control:] se vigilan las tareas realizadas y se realiza comparación con la proyección inicial. Acorde con los resultados, se aplican los correctivos necesarios.  
              li.mb-0
                span.icon ✔ 
                | #[b Cierre:] fin del proyecto teniendo en cuenta tres posibles resultados: cumplimiento de todas las tareas proyectadas, cumplimiento parcial de algunas tareas proyectadas y el incumplimiento de lo planeado, lo que convierte el proyecto en inviable o de difícil ejecución.

          .tarjeta.color-primario.p-4(titulo="Metodología de Cadena Crítica")
            h4 Metodología de Cadena Crítica 
            p Está basada en la identificación constante de todas las limitaciones que se presentan en la ejecución del proyecto.
            p Se basa en los siguientes principios: 
            ul.lista-ul.ms-3
              li.mb-0
                span.icon ✔ 
                | El reconocimiento de las restricciones que pueden afectar al proyecto.
              li.mb-0
                span.icon ✔ 
                | La priorización de las tareas dentro de la cadena crítica. 
              li.mb-0
                span.icon ✔ 
                | Dejar de lado el resto de las tareas que no estén priorizadas en la cadena crítica.                      
          .tarjeta.color-primario.p-4(titulo="Metodología Híbrida")
            h4 Metodología Híbrida 
            p Requiere que los tiempos de ejecución sean cortos y también flexibles. Este método consiste básicamente en realizar mejora continua de los procesos, acomodarse a los cambios que se generen y crear todos los escenarios que tengan dinamismo y colaboración. Se realiza por medio de la metodología en cascada y la metodología ágil, por tanto, se prioriza tanto el cliente como el producto. 

    p.mb-4(data-aos="fade-down") En relación a la metodología #[em Agile], se usan diferentes #[em software] para su implementación, que se explican brevemente:

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-down")
      .col-12
        AcordionA(tipo="a" clase-tarjeta="tarjeta color-primario-c" data-aos="fade-left")
          .row(titulo="<em>Scrum</em>")
            .col-6.mb-4.mb-md-0
              p Se generan #[em sprints] en períodos de 1 mes. En este tiempo se proyectan objetivos, se trabaja su ejecución y se hace seguimiento en el marco de las necesidades de los clientes.  
              p El método #[em Scrum] se trabaja en equipo, con proyectos complejos, por tener alto flujo de cambios a último momento. Se basa en: transparencia, revisión continua y ajuste.  
            .col-md-6
              img(src='@/assets/curso/temas/tema1/tema1-33.png', alt='') 
          .row(titulo="<em>Kanban</em>")
            .col-6.mb-4.mb-md-0
              p Se enfoca en las actividades más relevantes y utiliza las denominadas tarjetas de tipo visual (son adhesivas y se ponen sobre un tablero o pizarra). El objetivo es priorizar las tareas pendientes de realizar, para que el trabajo global fluya. El método recibe soporte mediante plataformas como #[em Trello] y la combinación con otros métodos con el diagrama de #[em Gantt]. 
            .col-md-6
              img(src='@/assets/curso/temas/tema1/tema1-33.png', alt='') 
          .row(titulo="<em>XP-Extreme Manufacturing</em>")
            .col-6.mb-4.mb-md-0
              p Este método se basa en potencializar las relaciones de tipo interpersonal asegurando éxito en el proyecto. Divide el proyecto en fases y, realizando en cada una un ciclo completo de análisis, diseño, desarrollo y pruebas. Idóneo para proyectos con requisitos imprecisos y muy cambiantes, al poner el énfasis en la retroalimentación continua entre el cliente y el equipo de desarrollo. 
            .col-md-6
              img(src='@/assets/curso/temas/tema1/tema1-33.png', alt='') 
          .row(titulo="<em>Lean</em>")
            .col-6.mb-4.mb-md-0
              p En este método se tiene como objetivo darle mayor valor al cliente y disminuir la posibilidad de que se presente desperdicio de los recursos, respondiendo a los cambios del mercado y a la satisfacción de las demandas del consumidor, todo esto enmarcado en la mínima utilización de recursos posibles y eliminando los desperdicios que no aportan valor
            .col-md-6
              img(src='@/assets/curso/temas/tema1/tema1-33.png', alt='') 

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-down")
      .col-12.col-md-8.col-lg-8
        p.mb-4(data-aos="fade-down") Como se indicó anteriormente, la metodología que atañe a este componente formativo, solamente revisará planes, programas y proyectos específicos, en relación a los programas, se encuentran la siguiente descripción:
        ul.lista-ul.ms-3
          li.mb-0
            span.icon ✔ 
            | #[b Programas.] Los programas sirven para darle ejecución a los planes y contienen recursos para la obtención de los resultados esperados. Un programa es considerado como un proceso que debe ser sistemático, coherente y lógico. Acorde con el programa de formación Gestión de la Salud Ambiental y Seguridad Sanitaria, los tipos de programas que se pueden proyectar buscan mejorar las condiciones de salud por medio del impacto positivo de la problemática de salud existente. 
        p.mb-4(data-aos="fade-down") Dadas las proyecciones de este tipo de programas, es necesario que los programas se retroalimenten de manera permanente en función de los resultados y el logro de los objetivos. Para la planeación y desarrollo de los programas se cuenta con la siguiente metodología:
      .col-10.col-md-4.col-lg-4
        img(src='@/assets/curso/temas/tema1/tema1-34.png', alt='')  

    TabsC.color-acento-botones.mb-5(data-aos="zoom-in-down")
      .py-3.py-md-4(titulo="Diagnóstico")
        .row
          .col-md-5.mb-4.mb-md-0
            figure
              img(src='@/assets/curso/temas/tema1/tema1-35.png', alt='')
          .col-md-7
            p Se debe definir la situación actual de la población objeto, -por ejemplo-, que se desea impactar. En el marco de los programas orientados a impactar las condiciones de salud en el ámbito de salud ambiental de las personas, se debe tener en cuenta la caracterización de tipo demográfico, poblacional y territorial. Esta caracterización tiene en cuenta el ambiente socioeconómico, el entorno físico, los hábitos personales de salud y las prioridades de salud. En este diagnóstico es importante realizar un análisis de la oferta y demanda de los servicios de salud y también de la organización en la prestación pública de los servicios de salud.
      .py-3.py-md-4(titulo="Planificación")
        .row
          .col-md-5.mb-4.mb-md-0
            figure
              img(src='@/assets/curso/temas/tema1/tema1-36.png', alt='')
          .col-md-7
            p Es necesario proyectar los requerimientos en términos de recursos: humanos, económicos, logísticos; y realizar su distribución acorde con las acciones a desarrollar, el tiempo estimado y el número de personas que se desea impactar.
            p Durante la planificación también se deben generar las siguientes actividades: 
            ul.lista-ul.ms-3
              li.mb-0
                span.icon ✔ 
                | Introducción, antecedentes, justificación, y objetivos del programa. 
              li.mb-0
                span.icon ✔ 
                | Definir metas e indicadores. 
              li.mb-0
                span.icon ✔ 
                | Actividades y procedimientos. 
              li.mb-0
                span.icon ✔ 
                | Proyectar los entregables de la ejecución del programa o describir el resultado esperado. 
              li.mb-0
                span.icon ✔ 
                | Participantes; es necesario dejar claro el universo del programa; población a la que está dirigido. Así como la organización interna del programa; indicar los colaboradores internos del programa. 
              li.mb-0
                span.icon ✔ 
                | Cronograma (fecha inicial/final); si es continuo, el cronograma estará enfocado en la ejecución de las actividades incluidas en el desarrollo. 
              li.mb-0
                span.icon ✔ 
                | Conocer posibles riesgos/restricciones que sean relevantes.
      .py-3.py-md-4(titulo="Ejecución")
        .row
          .col-md-5.mb-4.mb-md-0
            figure
              img(src='@/assets/curso/temas/tema1/tema1-37.png', alt='')
          .col-md-7
            p Se operativiza el programa teniendo en cuenta todos los elementos definidos en la planificación.
      .py-3.py-md-4(titulo="Evaluación")
        .row
          .col-md-5.mb-4.mb-md-0
            figure
              img(src='@/assets/curso/temas/tema1/tema1-38.png', alt='')
          .col-md-7
            //- h4 Evaluación
            p Esta fase valora los resultados obtenidos mediante la implementación del programa teniendo en cuenta aspectos susceptibles de mejorar. Se puede concretar otros aspectos relevantes en torno a lo definido inicialmente, lo que permite tener control del programa.
            p Debe contener aspectos claves como:
            .row 
              .col-12.col-md-6
                ul.lista-ul.ms-3
                  li.mb-0
                    span.icon ✔ 
                    | Introducción 
                  li.mb-0
                    span.icon ✔ 
                    | Antecedentes 
                  li.mb-0
                    span.icon ✔ 
                    | Justificación
                  li.mb-0
                    span.icon ✔ 
                    | Objetivos 
                  li.mb-0
                    span.icon ✔ 
                    | Metas 
                  li.mb-0
                    span.icon ✔ 
                    | Universo 
                  li.mb-0
                    span.icon ✔ 
                    | Organización 
              .col-12.col-md-6
                ul.lista-ul.ms-3
                  li.mb-0
                    span.icon ✔ 
                    | Recursos 
                  li.mb-0
                    span.icon ✔ 
                    | Actividades 
                  li.mb-0
                    span.icon ✔ 
                    | Información 
                  li.mb-0
                    span.icon ✔ 
                    | Supervisión 
                  li.mb-0
                    span.icon ✔ 
                    | Evaluación 
                  li.mb-0
                    span.icon ✔ 
                    | Cronograma 
                  li.mb-0
                    span.icon ✔ 
                    | Bibliografía
 
    p.mb-5(data-aos="fade-down") Una explicación más detallada respecto de los elementos claves que debe contener un programa puede encontrarla en el siguiente cuadro:

    .row.justify-content-center.align-items-center.mb-5
      .col-12.col-lg-12(data-aos="fade-right")
        .titulo-sexto.color-acento-contenido.mb-1
          p.titulo.pb-0.mb-0 #[b Tabla 3.] #[i Elementos claves que debe contener un programa] 
        .tabla-a.color-acento-contenido
          table(style="min-width:auto")
            thead
              tr.cabecera-a.text-center
                td(style="width:25%") Elemento
                td Descripción
            tbody
              tr
                th Introducción
                td.text-start Resume el contenido general incluyendo propósitos, objetivos y procedimientos a tener en cuenta. 
              tr
                th Antecedentes
                td.text-start Son todos los elementos que dieron origen al programa teniendo en cuenta aspectos demográficos, históricos, socioculturales y socioeconómicos. 
              tr
                th Justificación
                td.text-start Describe el por qué, y el para, mediante la definición del problema, la trascendencia, la factibilidad y la vulnerabilidad. 
              tr
                th Objetivos
                td.text-start Define los logros que se desean obtener con la ejecución del programa. Estos objetivos deben ser claros y de fácil medición. 
              tr
                th Metas
                td.text-start Permiten tener la traducción cuantitativa de los objetivos. Se deben definir en términos porcentuales o números absolutos. 
              tr
                th Universo
                td.text-start Describe la población objeto a la que está dirigida la propuesta del programa. 
              tr
                th Organización
                td.text-start Enuncian los niveles jerárquicos de la institución que participan en la planeación, realización y control del programa.
              tr
                th Recursos
                td.text-start Describe los recursos humanos (perfil y experiencia ocupacional), materiales (detallar número, tipo y costos de los insumos, equipos y demás elementos) y financieros (valor total para operativizar el programa). 
              tr
                th Actividades
                td.text-start Describe las actividades y procedimientos que se ejecutan acorde con los recursos que participan. 
              tr
                th Información
                td.text-start Contempla todos los aspectos relacionados que se requiere conocer respecto a la problemática, actores y espacios involucrados.
              tr
                th Supervisión
                td.text-start Identifica las posibles desviaciones con el fin de implementar las acciones correctivas que se deban realizar. Esta supervisión está enfocada en dar apoyo y asesoría al personal que hace parte de la ejecución del programa. 
              tr
                th Evaluación
                td.text-start Permite definir el alcance de los objetivos, metas y por tanto el impacto del programa. 
              tr
                th Cronograma
                td.text-start Consiste en los tiempos determinados para dar cumplimiento al programa. Puede tener en cuenta el diagrama de #[em Gantt]. 
              tr
                th Bibliografía
                td.text-start Referencia todos aquellos referentes de consulta, que se tuvieron en cuenta para la formulación del programa. 

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-down")
      .col-12
        p.mb-4(data-aos="fade-down") Y en relación a los planes, es importante tener presente, que la formulación y puesta en marcha a este respecto, es de suma importancia para la consecución de metas y objetivos.
        ul.lista-ul.ms-3
          li.mb-0
            span.icon ✔ 
            | #[b Planes.] Los planes son aquellos que permiten organizar un proceso paso a paso, son usados en la planificación estratégica, la cual programa los objetivos a largo plazo. Por medio del plan de acción se le permite a la organización describir con exactitud cómo se van a lograr los objetivos estratégicos definidos. 
        p.mb-4(data-aos="fade-down") Los pasos esenciales para el diseño de un plan de acción son:

    SlyderF.mb-5(columnas="col-lg-6 col-xl-4" data-aos="fade-down-right")
      .tarjeta.color-primario.p-4
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/tema1/carrucel-2a.png' alt='')
        p Se deben crear de manera correcta los objetivos, tanto los de largo, mediano y corto plazo. 
      .tarjeta.color-primario.p-4
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/tema1/carrucel-2b.png' alt='')
        p Definir las estrategias que se requieren para alcanzar las metas. 
      .tarjeta.color-primario.p-4
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/tema1/carrucel-2c.png' alt='')
        p Concretar las tareas y jerarquizarlas acorde con el nivel de urgencia, importancia y las que se puedan abordar como elementos menos urgentes. 
      .tarjeta.color-primario.p-4
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/tema1/carrucel-2d.png' alt='')
        p Exponer los tiempos de inicio y de fin de cada actividad a realizar. 
      .tarjeta.color-primario.p-4
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/tema1/carrucel-2e.png' alt='')
        p Asignar las personas líderes y responsables de las actividades proyectadas.
      .tarjeta.color-primario.p-4
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/tema1/carrucel-2f.png' alt='')
        p Realizar la ejecución del plan acorde con los objetivos planteados, la ruta definida y los responsables a cargo. 

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-down")
      .col-12.col-md-8.col-lg-8
        p.mb-4(data-aos="fade-down") Acorde con lo expuesto anteriormente, y además de conocer las metodologías para el diseño de los planes, programas y proyectos, contar con aquellos métodos que sirven como apoyo en la identificación de prioridades que deben ser abordadas. #[b La metodología de priorización] debe estar orientada hacia los procesos que impactan con mayor fuerza al usuario y a los procesos de calidad de la institución. Para realizar esta priorización se cuenta con varias técnicas, aunque se destacan las siguientes: la matriz de priorización, y el diagrama de Pareto. La elección de cualquiera de estas, requiere de la evaluación de criterios esenciales los cuales son: 
        ul.lista-ul.ms-3
          li.mb-0
            span.icon ✔ 
            | Identificar los costos de no calidad los cuales impactan en la sostenibilidad financiera. 
          li.mb-0
            span.icon ✔ 
            | Aspectos de rentabilidad empresarial y social.
          li.mb-0
            span.icon ✔ 
            | Nivel de satisfacción del cliente interno y externo. 
          li.mb-0
            span.icon ✔ 
            | Calidad en los procesos de atención. 
      .col-10.col-md-4.col-lg-4
        img(src='@/assets/curso/temas/tema1/tema1-39.png', alt='')  

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-down")
      .col-12.col-md-6
        img(src='@/assets/curso/temas/tema1/tema1-40.svg', alt='') 
      .col-10.col-md-6.cajon.color-primario-c.p-4
        p.mb-0 #[b Metodología Matriz de priorización:] este tipo de metodología se caracteriza por presentar un grupo de criterios que cuentan con un ponderado versus el grupo de opciones que conllevan a una calificación por medio de matemática esencial. Para realizar una matriz de priorización se debe tener en cuenta elementos claves como: conocer el objetivo de utilizar la matriz, definir o revisar las opciones con las cuales se va a construir la matriz, formular los criterios, asignar la respectiva ponderación a cada criterio, calificar cada opción acorde con el criterio determinado y enfrentar todas las opciones entre sí, acorde con el número total criterios existentes. 

    p.mb-5(data-aos="fade-down") La siguiente tabla indica a manera de ejemplo la matriz de priorización para una población de la tercera edad, respecto al acceso a servicios de salud, los criterios se explican más adelante:

    .row.justify-content-center.align-items-center.mb-5
      .col-12.col-lg-12(data-aos="fade-right")
        .titulo-sexto.color-acento-contenido.mb-1
          p.titulo.pb-0.mb-0 #[b Tabla 4.] #[i Ejemplo 1 - matriz de priorización ] 
        .tabla-a.color-acento-contenido
          table(style="min-width:1924px")
            caption
              p.mb-0 Nota 1: Se multiplicó la calificación de 1,2,3,4,5 con el peso del criterio. 
              p.mb-0 Nota 2: Se sumaron horizontalmente los totales de los resultados obtenidos entre peso y criterio. 
              p.mb-0 Nota 3: Se eligió el puntaje más alto. 
              p.mb-0 Indicando que la opción de la IPS 2, corazón y salud, es la mejor opción.
            thead
              tr.cabecera-a.text-center
                td
                  p #[b Criterio]
                  p #[b Opción]
                td Accesibilidad
                td Peso 
                td Total
                td Seguridad del paciente
                td Peso
                td Total 
                td Pertinencia 
                td Peso
                td Total 
                td Oportunidad
                td Peso
                td Total 
                td Continuidad
                td Peso
                td Total 
                td Puntaje
            tbody
              tr
                td IPS 1
                td 3
                td 35 %
                td 1.05
                td 4
                td 25 %
                td 1 
                td 2 
                td 20 %
                td 0.4
                td 1 
                td 15 %
                td 0.15
                td 2
                td 5 %
                td 0.1
                td 2.7
              tr
                td IPS 2
                td 5
                td 35 %
                td 1.75
                td 3
                td 25 %
                td 1.75
                td 3
                td 20 %
                td 0.6
                td 5
                td 15 %
                td 0.75
                td 3
                td 5 %
                td 0.15
                td 4
              tr
                td IPS 3
                td 3
                td 35 %
                td 1.05
                td 3
                td 25 %
                td 1.75
                td 4
                td 20 %
                td 0.8
                td 3
                td 15 %
                td 0.46
                td 3
                td 5 %
                td 0.15
                td 3.2
              tr
                td IPS 3
                td 3
                td 35 %
                td 1.05
                td 5
                td 25 %
                td 1.25
                td 2
                td 20 %
                td 0.4
                td 4
                td 15 %
                td 0.6
                td 2
                td 5 %
                td 0.1
                td 3.4

    p.mb-5(data-aos="fade-down") Para tener claridad respecto a la construcción de la matriz, y basándose en la tabla descrita antes, se invita a revisar las características del ejemplo que nos atañe: 

    .tarjeta.color-primario.p-4
      PasosB.color-acento-contenido
        .row(titulo="Paso 1")
          .col-md-6.mb-4.mb-md-0
            h4 Definir objetivo
            p El objetivo es elegir el mejor prestador de servicios en salud para la población adulta mayor.  
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema1/tema1-41.png', alt='')
        .row(titulo="Paso 2")
          .col-md-6.mb-4.mb-md-0
            h4 Opciones
            p En de las opciones indagadas, se cuentan con las más reconocidas en la zona cercana a la vivienda del grupo de personas: 
            ul.lista-ul.ms-3
              li.mb-0
                span.icon ✔ 
                | IPS 1: salud y vida. 
              li.mb-0
                span.icon ✔ 
                | IPS 2:  corazón y salud. 
              li.mb-0
                span.icon ✔ 
                | IPS 3:  dinámica. 
              li.mb-0
                span.icon ✔ 
                | IPS 4:  nueva vida. 
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema1/tema1-42.png', alt='')
        .row(titulo="Paso 3")
          .col-md-6.mb-4.mb-md-0
            h4 Criterios de elección
            p Los criterios para elegir el mejor prestador de servicios son:
            ul.lista-ul.ms-3
              li.mb-0
                span.icon ✔ 
                | Pertinencia. 
              li.mb-0
                span.icon ✔ 
                | Accesibilidad. 
              li.mb-0
                span.icon ✔ 
                | Continuidad en la atención. 
              li.mb-0
                span.icon ✔ 
                | Oportunidad en las citas médicas. 
              li.mb-0
                span.icon ✔ 
                | Seguridad del paciente incluyendo condiciones sanitarias óptimas. 
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema1/tema1-43.png', alt='')
        .row(titulo="Paso 4")
          .col-md-6.mb-4.mb-md-0
            h4 Accesibilidad
            p Lo más importante es la accesibilidad. Luego las condiciones de seguridad, de tercera está la pertinencia, después la oportunidad y por último la continuidad (para nuestro ejemplo):
            ul.lista-ul.ms-3
              li.mb-0
                span.icon ✔ 
                | Accesibilidad: 35%.
              li.mb-0
                span.icon ✔ 
                | Seguridad del paciente incluyendo condiciones sanitarias óptimas: 25%.
              li.mb-0
                span.icon ✔ 
                | Pertinencia: 20%.
              li.mb-0
                span.icon ✔ 
                | Oportunidad: 15%.
              li.mb-0
                span.icon ✔ 
                | Continuidad: 5%.
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema1/tema1-44.png', alt='')
        .row(titulo="Paso 5")
          .col-md-6.mb-4.mb-md-0
            p Para este ejemplo, cada opción puede tener una puntuación de 1 a 5 por cada criterio evaluado, siendo 1 la calificación más baja y 5 la calificación más alta. lo más bajo y 5 lo más alto. Observar el resultado de la priorización:
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema1/tema1-45.png', alt='')

    p.mb-5(data-aos="fade-down") En el campo de salud, pueden existir variedad de matrices acorde con los criterios que se deseen evaluar. A continuación, se muestran dos ejemplos de matrices. 

    .row.justify-content-center.align-items-center.mb-5
      .col-12.col-lg-12(data-aos="fade-right")
        .titulo-sexto.color-acento-contenido.mb-1
          p.titulo.pb-0.mb-0 #[b Tabla 5.] #[i Ejemplo 2 - matriz de priorización de auditorías internas] 
        .tabla-a.color-acento-contenido
          table(style="min-width:auto")
            caption Nota. Supersalud, Auditorías Internas de Gestión, formato IGFL01, versión 3.
            thead
              tr.cabecera-a.text-center
                th Nivel de criticidad del riesgo
                th Importancia estratégica del proceso
                th Recursos económicos aplicados
                th Expectativas de la Alta Dirección
                th Planes de Mejoramiento
            tbody
              tr
                td 
                  p.mb-1 0 Riesgo Bajo.
                  p.mb-1 1 Riesgo Moderado.
                  p.mb-1 3 Riesgo Alto.
                  p.mb-1 5 Riesgo Extremo.
                td 
                  p.mb-1 0 El proceso no está asociado a ningún programa estratégico institucional.
                  p.mb-1 1 El proceso está asociado a un programa estratégico institucional.
                  p.mb-1 3 El proceso está asociado a dos o más programas estratégicos institucionales.
                td 
                  p.mb-1 1 Procesos ubicados en el tercer rango de la lista.
                  p.mb-1 3 Procesos ubicados en el segundo rango de la lista.
                  p.mb-1 5 Procesos ubicados en el primer rango de la lista.
                td 
                  p.mb-1 0 no se presentan expectativas sobre el proceso.
                  p.mb-1 3 Secretaría General y directores.
                  p.mb-1 5 Superintendencias delegadas. 
                td 
                  p.mb-1 0 procesos que no presenten hallazgos con entes auditores.
                  p.mb-1 1 Procesos que presenten un solo hallazgo con cualquier ente auditor.
                  p.mb-1 3 Procesos que presenten de 2 a 4 hallazgos con cualquier ente auditor. 
                  p.mb-1 5 Procesos que presentan 5 o más hallazgos con cualquier ente auditor. 
              tr
                td 30 %
                td 25 %
                td 20 %
                td 15 %
                td 10 %

    .tarjeta.color-acento-contenido.p-4.p-md-5.mb-5(data-aos="fade-down")
      .row.justify-content-around.align-items-center
        .col-8.col-sm-6.col-md-4.mb-4.mb-md-0
          img(src='@/assets/curso/temas/tema1/tema1-12.png', alt='')
        .col-md.col-lg-6
          p.mb-4 La matriz de priorización de necesidades de auditorías internas de gestión, informa sobre los criterios e indicadores a tener en cuenta, informando sobre los rasgos y puntajes de criticidad, estrategia del proceso, recursos, expectativas y planes, que deben ser considerados en la formulación del riesgo, para consultar la matriz.
          a.boton.color-acento-botones.texto-blanco(href="https://www.supersalud.gov.co/Paginas/B%C3%BAsqueda.aspx?k=matriz%20de%20priorizaci%C3%B3n#Default=%7B%22k%22%3A%22matriz%20de%20priorizaci%C3%B3n%22%2C%22l%22%3A9226%7D" target="_blank" type="application/pdf")
            span Descargar
            i.fas.fa-file-download

    p.mb-5(data-aos="fade-down") En el marco de los procesos de mejora continua, como es el caso del programa de auditoría para el mejoramiento de la atención en salud – PAMEC, se cuenta con una matriz de priorización que tiene en cuenta las variables de riesgo, costo y volumen en el marco de las acciones de mejora que se establezcan a nivel institucional, que se aprecia a continuación: 

    .row.justify-content-center.align-items-center.mb-5
      .col-12.col-lg-12(data-aos="fade-right")
        .titulo-sexto.color-acento-contenido.mb-1
          p.titulo.pb-0.mb-0 #[b Tabla 6.] #[i Ejemplo matriz de priorización en función de las acciones de mejora continua] 
        .tabla-a.color-acento-contenido
          table(style="min-width:auto")
            caption Nota Hospital Rosario Pumarejo de López. Programa de auditoría para el mejoramiento continuo de la calidad en la E.S.E HRPL. 2020. 
            thead
              tr.cabecera-a.text-center
                th(colspan="3") Matriz de priorización
              tr
                th Riesgo
                th Costo
                th Volumen
            tbody
              tr.cabecera-a.text-center
                th Califique como 1 o 2 
                th Califique como 1 o 2 
                th Califique como 1 o 2 
              tr 
                td.text-start Cuando la institución, el usuario y/o los clientes internos no corren ningún riesgo o existe un riesgo leve si no se efectúa la acción de mejoramiento.
                td.text-start Si al no realizarse el mejoramiento no se afectan o se afectan levemente las finanzas y la imagen de la institución.
                td.text-start La ejecución del mejoramiento no tendría una cobertura o alcance amplio en la institución o en los usuarios internos o externos o el impacto es leve.
              tr.cabecera-a.text-center
                th Califique como 3 
                th Califique como 3 
                th Califique como 3 
              tr
                td.text-start Cuando la institución, el usuario y/o los clientes internos corren un riesgo medio si no se efectúa la acción de mejoramiento.
                td.text-start Si al no realizarse el mejoramiento se afectan moderadamente las finanzas y la imagen de la institución.
                td.text-start Si la ejecución de la acción de mejoramiento tendría una cobertura o alcance medio en la institución o en los usuarios internos y externos.
              tr.cabecera-a.text-center
                th Califique como 4 o 5 
                th Califique como 4 o 5 
                th Califique como 4 o 5 
              tr
                td.text-start Cuando la institución, el usuario y/o los clientes internos corren un riesgo alto o se puede presentar un evento adverso o incidente si no se efectúa la acción de mejoramiento.
                td.text-start Si al no realizarse el mejoramiento se afectan notablemente las finanzas y la imagen de la institución.
                td.text-start Si la ejecución de la acción de mejoramiento tendría una cobertura o alcance amplio en la institución o en los usuarios internos y externos.

    .tarjeta.color-acento-contenido.p-4.p-md-5.mb-5(data-aos="fade-down")
      .row.justify-content-around.align-items-center
        .col-8.col-sm-6.col-md-4.mb-4.mb-md-0
          img(src='@/assets/curso/temas/tema1/tema1-46.svg', alt='')
        .col-md.col-lg-6
          p Metodología Diagrama de Pareto: por medio de esta herramienta se puede asignar la prioridad a los problemas de calidad, por medio del diagnóstico de las causas y la solución de las mismas. El diagrama de Pareto es un gráfico que permite clasificar de izquierda a derecha en un orden de tipo descendente las causas o factores detectados en función de un fenómeno específico.  Acorde con el principio o regla de Pareto, se sugiere que el 80 % de las consecuencias proviene del 20 % de las causas; este fue el fundamento empírico del creador del Diagrama, el señor Vilfredo Pareto. Por medio del diagrama se puede conocer los problemas que tengan una representación del 80 %. 

    p.mb-3(data-aos="fade-down") Los pasos para realizar el diagrama de Pareto son: 

    ul.lista-ul.ms-3(data-aos="fade-down")
      li.mb-0
        span.icon ✔ 
        | Definir la situación problema.
      li.mb-0
        span.icon ✔ 
        | Enunciar las causas o categorías en función de la situación problemática. Se debe incluir el tiempo.
      li.mb-0
        span.icon ✔ 
        | Realizar la recolección de datos.
      li.mb-0
        span.icon ✔ 
        | Organizar las causas de mayor a menor teniendo en cuenta los datos recolectados y las medidas implicadas en estos datos.
      li.mb-0
        span.icon ✔ 
        | Calcular los datos recolectados, teniendo en cuenta el acumulado, el porcentaje y el porcentaje acumulado.
      li.mb-0
        span.icon ✔ 
        | Se debe generar la gráfica de las causas. En el eje X se ponen las causas y en el eje Y izquierdo (frecuencia de la causa) y el Y derecho (porcentaje acumulado de 0 a 100 %); el eje Y derecho es el que sirve para graficar la curva acumulada. 
      li.mb-0
        span.icon ✔ 
        | Se debe analizar el diagrama.

    p.mb-5(data-aos="fade-down") Para comprender el concepto tener en cuenta el ejemplo que se ofrece a través de la siguiente tabla, y que se encuentra graficado en la figura 4: resultado ejemplo diagrama de Pareto, que encuentra más adelante.

    .row.justify-content-center.align-items-center.mb-5
      .col-12.col-lg-10(data-aos="fade-right")
        .titulo-sexto.color-acento-contenido.mb-1
          p.titulo.pb-0.mb-0 #[b Tabla 7.] #[i Ejemplo. Diagrama de Pareto] 
        .tabla-a.color-acento-contenido
          table(style="min-width:auto")
            thead
              tr.cabecera-a.text-center
                th Queja de los usuarios 
                th Tipo de queja 
                th Frecuencia
                th Frecuencia acumulada
                th Porcentaje
                th Porcentaje acumulado
            tbody
              tr
                td Q1
                td Falta de pertinencia en el diagnóstico médico.
                td 26
                td 26
                td 30 %
                td 30 %
              tr
                td Q2
                td Poca accesibilidad para poblaciones lejanas. 
                td 20
                td 46
                td 23 %
                td 53 %
              tr
                td Q3
                td No continuidad en los tratamientos médicos.
                td 16
                td 62
                td 19 %
                td 72 %
              tr
                td Q4
                td Problemas de oportunidad para consulta médica especializada. 
                td 9
                td 71
                td 10 %
                td 83 %
              tr
                td Q5
                td Aumento en el número de eventos adversos.
                td 4
                td 75
                td 5 %
                td 87 %

    .row.justify-content-center.mb-5
      .col-12.col-lg-10.col-md-11.mb-2.mb-md-0(data-aos="fade-left")
        .titulo-sexto.color-acento-contenido
          p.titulo.pb-0.mb-0 <b>Figura 4. </b> <i>Resultado ejemplo diagrama de Pareto </i>
        figure 
          img(src='@/assets/curso/temas/tema1/fig-4.svg', alt='En la figura 4 se muestra el resultado del ejemplo del diagrama de Pareto, graficado en un plano cartesiano.')

    p.mb-5(data-aos="fade-down") Acorde con el resultado del ejemplo, el 72% está concentrado en las 3 primeras causas. Con esto se puede deducir que la priorización en torno a las problemáticas identificadas, va a comenzar con esas quejas. 

    Separador
    #t_1_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 1.2 Actividades
    
    p.mb-5(data-aos="fade-down") Los procedimientos son definidos como un grupo de actividades relacionadas entre sí, las cuales se muestran de forma cronológica y ayudan a precisar el quién, qué, cómo, cuándo, dónde y con qué se debe desarrollar cada actividad. Por lo general, el procedimiento debe estar conformado por el objetivo, las normas de ejecución, los formatos a utilizar y demás documentos que se incluyan dentro de las actividades como necesarios para la ejecución de lo requerido. 

    .row.justify-content-center.mb-5(data-aos="fade-down")
      .col-12.col-lg-10
        .cajon.color-primario.p-4.px-lg-5
          p.mb-0 La actividad es, por tanto, el grupo de acciones alineadas entre sí y de ejecución secuencial realizadas por un grupo responsable y previamente asignado.

    p.mb-3(data-aos="fade-down") Se recomienda que la redacción de actividades se realice de la siguiente manera: 
    
    ul.lista-ul.ms-3.mb-5(data-aos="fade-down")
      li.mb-0
        span.icon ✔ 
        | Utilizar verbos sustantivados: admisión, almacenamiento, acompañamiento, por ejemplo.
      li.mb-0
        span.icon ✔ 
        | Dar respuesta al cómo, de qué, con qué, quién y para qué.

    p.mb-3(data-aos="fade-down") Es necesario aclarar la diferencia entre actividad y tarea; la tarea corresponde con una unidad específica en el orden de trabajo, se crea como parte de una actividad; la actividad es la descripción del tipo de orden de trabajo, para una mejor comprensión, se ofrece el siguiente ejemplo: 
    p.mb-5(data-aos="fade-down") Las actividades se establecen mediante los tiempos asumidos para su desarrollo, y pueden ser:


    .row.mb-5(data-aos="zoom-in-down")
      .col-sm-6.col-lg-4.mb-4.mb-lg-0.d-flex.align-items-stretch
        .tarjeta--boton.color-primario.p-4
          .row.justify-content-center.mb-3
            .col-7.col-lg-6
              figure
                img(src='@/assets/curso/temas/tema1/tema1-47.svg', alt='') 
          p Actividades a corto plazo: son aquellas que representan prioridad y tiene una fecha concreta. 
      .col-sm-6.col-lg-4.mb-4.mb-lg-0.d-flex.align-items-stretch
        .tarjeta--boton.color-primario.p-4
          .row.justify-content-center.mb-3
            .col-7.col-lg-6
              figure
                img(src='@/assets/curso/temas/tema1/tema1-48.svg', alt='')
          p Actividades a mediano plazo: corresponde con aquellas actividades con margen de cumplimiento anual o bianual. Por lo general las actividades a mediano plazo se dan como resultado de las de corto plazo. 
      .col-sm-6.col-lg-4.mb-4.mb-sm-0.d-flex.align-items-stretch
        .tarjeta--boton.color-primario.p-4.w-100
          .row.justify-content-center.mb-3
            .col-7.col-lg-6
              figure
                img(src='@/assets/curso/temas/tema1/tema1-49.svg', alt='')
          p Actividades a largo plazo: corresponde con las metas más lejanas en tiempo y dependen del cumplimiento de las actividades de corto y mediano plazo. Por lo general se establecen para un período de 5 a 10 años. 

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-down")
      .col-12.col-md-8.col-lg-8
        p Recordar que para el cumplimiento efecto de las actividades se cuenta con el cronograma de trabajo, el cual se puede representar en el Diagrama de Gantt para su fácil ejecución y seguimiento. 
        p.mb-3 La estandarización de procedimientos es necesaria para la planeación general y la gestión de todas las actividades que impactan la calidad en los procesos dentro de la organización. Cada procedimiento documentado y estandarizado puede cubrir uno o varios elementos del sistema de calidad general los cuales están interrelacionados entre sí.  Por medio de la estandarización de procedimientos, la cual se lleva a cabo en las mismas estructuras y formatos, se pueden obtener los siguientes beneficios: 
        ul.lista-ul.ms-3
          li.mb-0
            span.icon ✔ 
            | Favorecer la familiaridad del cliente interno y externo con las actividades a realizar y los formatos que se requieren para llevarla a cabo.
          li.mb-0
            span.icon ✔ 
            | Aumenta la aplicación eficaz de los sistemas de calidad establecidos.
          li.mb-0
            span.icon ✔ 
            | Disminuir la variación de parámetros dentro de los procesos.
          li.mb-0
            span.icon ✔ 
            | Lograr la automatización de actividades recurrentes. 
          li.mb-0
            span.icon ✔ 
            | Hacer delegación de procesos, lo que favorece los resultados globales. 
          li.mb-0
            span.icon ✔ 
            | Facilidad para el control de los procesos.
          li.mb-0
            span.icon ✔ 
            | Unificar los procesos.
          li.mb-0
            span.icon ✔ 
            | Reducción de costos de no calidad.
          li.mb-0
            span.icon ✔ 
            | Disminuir la dependencia de la organización a las personas.
          li.mb-0
            span.icon ✔ 
            | Dar cumplimiento a todos los requisitos reglamentarios que le sean exigidos a la organización.
          li.mb-0
            span.icon ✔ 
            | Conocer las necesidades de formación y capacitación. 
      .col-10.col-md-4.col-lg-4
        img(src='@/assets/curso/temas/tema1/tema1-50.png', alt='')  

    p.mb-5(data-aos="fade-down") Para tener las especificaciones requeridas para la estandarización de los procedimientos, se deben realizar los siguientes pasos: 

    .row.justify-content-center.mb-5(data-aos="fade-down")
      .col-12.col-lg-10.col-md-11.mb-2.mb-md-0
        PasosA.color-primario(tipo="n")
          .row.align-items-center(data-aos="fade-left")
            .col-md-6.mb-4.mb-md-0
              h4 Análisis
              p Analizar los procesos que se van a incluir. 
            .col-md-6
              figure
                img(src='@/assets/curso/temas/tema1/tema1-51.png', alt='')
          .row.align-items-center(data-aos="fade-right")
            .col-md-6.mb-4.mb-md-0
              figure
                img(src='@/assets/curso/temas/tema1/tema1-52.png', alt='')
            .col-md-6.text-start
              h4 Crear diagramas
              p Crear diagramas en bloques que evidencien la secuencia y continuidad de los procesos globales externos (proveedores, compras) y de los procesos internos de la organización (atención al usuario, capacitación, mantenimiento). 
          .row.align-items-center(data-aos="fade-left")
            .col-md-6.mb-4.mb-md-0
              h4 Resultados de diagramas
              p El resultado de los diagramas puede ser abiertos, cerrados o combinados dependiendo de la naturaleza de los procesos y la interacción de los mismos. 
            .col-md-6
              figure
                img(src='@/assets/curso/temas/tema1/tema1-53.png', alt='')
          .row.align-items-center(data-aos="fade-right")
            .col-md-6.mb-4.mb-md-0
              figure
                img(src='@/assets/curso/temas/tema1/tema1-54.png', alt='')
            .col-md-6.text-start
              h4 Diagrama de flujo
              p También se puede utilizar el diagrama de flujo como herramienta para la estandarización de los procedimientos, el cual explica por medio de símbolos todas las actividades que hacen parte de un procedimiento.

    p.mb-5(data-aos="fade-down") Acorde con la estructura del macroproceso de la organización, se puede decir que los tipos de procedimientos a nivel general están enfocados en cubrir las necesidades de los procesos estratégicos, los procesos misionales y los procesos de apoyo de la organización. Para comprender los tipos de procedimientos estandarizados, se ejemplifica mediante el mapa de procesos de una Empresa Social de Salud: 
    
    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-down")
      .col-12
        TabsA.color-acento-botones(data-aos="fade-down")
          .tarjeta.color-primario.p-4(titulo="Procesos misionales")
            h4 Procesos misionales
            p Proceso de Consulta externa 
            ul.lista-ul.ms-3
              li.mb-0
                span.icon ✔ 
                | Procedimiento consulta por enfermería.
              li.mb-0
                span.icon ✔ 
                | Procedimiento consulta por medicina general.
              li.mb-0
                span.icon ✔ 
                | Procedimiento consulta por odontología general.
              li.mb-0
                span.icon ✔ 
                | Procedimiento consulta por psicología.
            p Proceso de Detección temprana y específica
            ul.lista-ul.ms-3
              li.mb-0
                span.icon ✔ 
                | Protección específica - Procedimiento de vacunación.
              li.mb-0
                span.icon ✔ 
                | Protección específica - Procedimiento de atención preventiva en salud bucal.
              li.mb-0
                span.icon ✔ 
                | Protección específica - Procedimiento de atención en planificación familiar. (hombres y mujeres).
            p Procesos Apoyo diagnóstico y complementación terapéutica.
            ul.lista-ul.ms-3
              li.mb-0
                span.icon ✔ 
                | Procedimiento de atención en laboratorio clínico.
              li.mb-0
                span.icon ✔ 
                | Procedimiento de atención de toma de muestras de laboratorio clínico.
              li.mb-0
                span.icon ✔ 
                | Procedimiento de atención de toma e interpretación de radiografías odontológicas.
              li.mb-0
                span.icon ✔ 
                | Procedimiento de esterilización.
            p Proceso de Urgencias y hospitalización
            ul.lista-ul.ms-3
              li.mb-0
                span.icon ✔ 
                | Procedimiento de transporte asistencial básico TAB .
            p Proceso de Salud pública
            ul.lista-ul.ms-3
              li.mb-0
                span.icon ✔ 
                | Procedimiento de vigilancia en salud pública.
              li.mb-0
                span.icon ✔ 
                | Procedimiento Plan de intervenciones colectivas.
          .tarjeta.color-primario.p-4(titulo="Procesos estratégicos")
            h4 Procesos estratégicos 
            ul.lista-ul.ms-3
              li.mb-0
                span.icon ✔ 
                | Direccionamiento estratégico.
              li.mb-0
                span.icon ✔ 
                | Gestión de la calidad. 
              li.mb-0
                span.icon ✔ 
                | Atención al usuario, referencia y contrarreferencia   
          .tarjeta.color-primario.p-4(titulo="Procesos de apoyo")
            h4 Procesos de apoyo 
            p Proceso de Gestión del talento humano
            ul.lista-ul.ms-3
              li.mb-0
                span.icon ✔ 
                | Procedimiento de administración del recurso humano.
            p Proceso de Gestión financiera
            ul.lista-ul.ms-3
              li.mb-0
                span.icon ✔ 
                | Procedimiento de caja.
              li.mb-0
                span.icon ✔ 
                | Procedimiento de facturación.
              li.mb-0
                span.icon ✔ 
                | Procedimiento de tesorería.
            p Procesos de Gestión de recursos físicos
            ul.lista-ul.ms-3
              li.mb-0
                span.icon ✔ 
                | Procedimiento de mantenimiento. 
            p Proceso de Gestión de la información
            ul.lista-ul.ms-3
              li.mb-0
                span.icon ✔ 
                | Procedimiento de archivo. 
            p Proceso de Auditorías y asesorías
            ul.lista-ul.ms-3
              li.mb-0
                span.icon ✔ 
                | Procedimiento de asesoría jurídica. 
  







</template>

<script>
export default {
  name: 'Tema1',
  components: {},
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
