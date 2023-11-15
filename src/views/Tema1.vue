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
            p Una supervisión ágil y fluida requiere herramientas tipo software. Medir indicadores es clave, muestra el cumplimiento o incumplimiento de metas establecidas, en la revisión de avances, evaluar al equipo ejecutor y así avanzar en nuevas tareas o reforzar las que no se han cumplido.
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
              p.mb-1 Una supervisión ágil y fluida requiere herramientas tipo software. Medir indicadores es clave, muestra el cumplimiento o incumplimiento de metas establecidas, en la revisión de avances, evaluar al equipo ejecutor y así avanzar en nuevas tareas o reforzar las que no se han cumplido.
      
    p.mb-5(data-aos="fade-down") En conclusión, el plan de acción corresponde con las tareas que deben ejecutar en cada área o unidad para aportar a las estrategias del plan operativo o plan estratégico, lo cual permite monitorear, tener adecuado seguimiento y la respectiva evaluación.

    .row.justify-content-center.align-items-center.mb-5(data-aos="zoom-in-down")
      .col-12.col-lg-10
        .row.cajon.color-secundario-c.p-4
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
