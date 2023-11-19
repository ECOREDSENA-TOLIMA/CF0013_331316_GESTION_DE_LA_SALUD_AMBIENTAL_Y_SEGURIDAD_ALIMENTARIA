<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Recursos
      
    .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.mb-5(data-aos="fade-down-left")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/tema2/tema2-1.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Se denominan recursos a todos aquellos elementos que están disponibles para darle solución a una necesidad u operativizar los planes, programas y proyectos. Para que exista una adecuada consecución de recursos, es necesario realizar una proyección efectiva acorde con el tipo de tareas programadas. La correcta identificación de los recursos ayuda a manejar los costos y mejorar los indicadores de eficiencia.

    p.mb-5(data-aos="fade-down") De acuerdo con la asignación de actividades, y metas que se pretenden lograr en los planes de acción, los recursos pueden ser de tipo:

    TabsC.color-acento-botones.mb-5(data-aos="zoom-in-down")
      .py-3.py-md-4(titulo="Recursos humanos")
        .row
          .col-md-5.mb-4.mb-md-0
            figure
              img(src='@/assets/curso/temas/tema2/tema2-3.png', alt='')
          .col-md-7
            p Grupo de personas que hacen parte del plan, programa o proyecto. En los recursos humanos es importante describir los perfiles profesionales y ocupacionales que van a hacer parte del equipo. En cuanto al seguimiento de estos recursos, necesario evaluar el nivel de productividad, el cual se calcula así:
            .row.justify-content-center.align-items-center
              .col-md-11.col-lg-10
                img(src='@/assets/curso/temas/tema2/tema2-2.svg', alt='')
            p Acorde con la estructura de la empresa, se puede tener el siguiente recurso humano: 
            ul.lista-ul.ms-3
              li.mb-0
                span.icon ✔ 
                | Obreros: calificados y no calificados. 
              li.mb-0
                span.icon ✔ 
                | Empleados: calificados y no calificados.
              li.mb-0
                span.icon ✔ 
                | Supervisores: permiten vigilar el correcto cumplimiento de las actividades propuestas. 
              li.mb-0
                span.icon ✔ 
                | Personal técnico. 
              li.mb-0
                span.icon ✔ 
                | Mando medio: es el responsable de hacer sinergia entre la alta dirección y el personal operativo. 
              li.mb-0
                span.icon ✔ 
                | Alta dirección: son quienes definen toda la planeación estratégica. 
      .py-3.py-md-4(titulo="Recursos financieros")
        .row
          .col-md-5.mb-4.mb-md-0
            figure
              img(src='@/assets/curso/temas/tema2/tema2-4.png', alt='')
          .col-md-7
            p Corresponde con el presupuesto general del plan, programa o proyecto. Se debe realizar el presupuesto general y el presupuesto provisional por cada tarea. Es indispensable tener un margen de error con el fin de cubrir las eventualidades y posibles retrasos en el plan, programa o proyecto. Dentro de los recursos financieros se deben incluir todos los demás recursos, tanto los humanos como los materiales. En el marco del seguimiento a los recursos financieros se puede calcular el costo actual del proyecto, el cual se puede realizar sumando todos los gastos relacionados con el proyecto hasta el tiempo actual de ejecución. 
            p Es importante tener en cuenta que los recursos financieros pueden ser propios o ajenos: 
            ul.lista-ul.ms-3
              li.mb-0
                span.icon ✔ 
                | Propios: dinero en efectivo o en bancos, capital, utilidades, inventarios y cuentas por cobrar. 
              li.mb-0
                span.icon ✔ 
                | Ajenos: préstamos financieros y cuentas por cobrar. 
      .py-3.py-md-4(titulo="Recursos materiales")
        .row
          .col-md-5.mb-4.mb-md-0
            figure
              img(src='@/assets/curso/temas/tema2/tema2-5.png', alt='')
          .col-md-7
            p Elementos a utilizar por el equipo para la ejecución del plan, programa o proyecto. Tener presente lo que la organización/empresa ya tiene y sirve, lo que se debe comprar y aquellos elementos a alquilar. En el seguimiento de los recursos materiales, se puede calcular la disponibilidad del bien o el equipo comparando el número de horas proyectadas para el equipo Vs. el número de horas disponibles del bien. 
            p Los recursos materiales pueden ser tangibles o intangibles: 
            ul.lista-ul.ms-3
              li.mb-0
                span.icon ✔ 
                | Instalaciones: terrenos, edificios, entre otros.
              li.mb-0
                span.icon ✔ 
                | Equipos: cómputo, transporte, producción y comunicación, entre otros.
              li.mb-0
                span.icon ✔ 
                | Maquinaria de producción, de construcción, entre otros.
              li.mb-0
                span.icon ✔ 
                | Materiales y suministros como los inventarios, artículos de oficina, productos para realizar limpieza, entre otros.
              li.mb-0
                span.icon ✔ 
                | Mobiliario disponible.
              li.mb-0
                span.icon ✔ 
                | Herramientas de producción, atención, entre otros.
              li.mb-0
                span.icon ✔ 
                | Y demás que puedan aplicarse acorde con la estructura misional de la empresa. 
      .py-3.py-md-4(titulo="Recursos técnicos")
        .row
          .col-md-5.mb-4.mb-md-0
            figure
              img(src='@/assets/curso/temas/tema2/tema2-6.png', alt='')
          .col-md-7
            p Por medio de estos, los recursos humanos, financieros y materiales cumplen sus respectivas funciones, como por ejemplo la administración estratégica, métodos utilizados, sistemas de información, los derechos sobre las patentes, entre otros.  

    p.mb-5(data-aos="fade-down") Para el seguimiento a los recursos existen otros tipos de indicadores que serán revisados más adelante, sobre el tema de los mecanismos de control de los resultados. Para el cálculo de los recursos es necesario contar con varias herramientas, como las acciones de recolección y procesamiento de datos, ya que por medio de estas se realiza la evaluación de la información sobre los criterios definidos previamente de una manera sistemática, los cual ayuda a tener respuestas importantes, comprobar supuestos realizados y verificar los resultados.

    Separador
    #t_2_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 2.1 Técnicas de recolección y procesamiento de datos

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-down")
      .col-12.col-md-8.col-lg-7
        p Las técnicas para la recolección y el procesamiento de los datos es un método que se utiliza para medir los datos e información provenientes de diferentes fuentes de información con el objetivo de plantear una perspectiva general, dar respuesta a los interrogantes que se generen, valorar los resultados y prever futuros eventos. Por medio de la recolección y el procesamiento de los datos se pueden obtener los siguientes beneficios: 
        ul.lista-ul.ms-3
          li.mb-0
            span.icon ✔ 
            | Análisis de tipo cuantitativos o cualitativos de los criterios que estén siendo evaluados. 
          li.mb-0
            span.icon ✔ 
            | Permite crear una base de datos que puede servir como fuente de referencia para la formulación o seguimiento de otros planes, programas y proyectos. 
          li.mb-0
            span.icon ✔ 
            | Se pueden conocer las oportunidades de mejora.
        p En estrategias generales para la recolección de datos se pueden identificar: la observación directa, la aplicación de cuestionarios o encuestas, la evaluación de grupos, las entrevistas directas, los formularios, las fuentes abiertas, el monitoreo de redes sociales, el análisis de sitios web y el historial de conversaciones. 
        p En las actividades enfocadas en el sector salud se pueden encontrar algunas estrategias de recolección de datos, tal como se observa en la siguiente figura:
      .col-10.col-md-4.col-lg-5
        img(src='@/assets/curso/temas/tema2/tema2-7.png', alt='')   

    .row.justify-content-center.mb-5
      .col-12.col-lg-10.col-md-11.mb-2.mb-md-0(data-aos="fade-left")
        .titulo-sexto.color-acento-contenido
          p.titulo.pb-0.mb-0 <b>Figura 5. </b> <i>Técnicas de recolección de datos</i>
        figure 
          img.d-none.d-md-block(src='@/assets/curso/temas/tema2/fig-5a.svg', alt='En la figura 5 se muestra las técnicas de recolección de datos cualitativas y cuantitativas.')
          img.d-block.d-md-none(src='@/assets/curso/temas/tema2/fig-5b.svg', alt='En la figura 5 se muestra las técnicas de recolección de datos cualitativas y cuantitativas.')

    p.mb-5(data-aos="fade-down") Los aspectos generales de las técnicas se pueden describir como:
    
    .row.mb-5(data-aos="zoom-in-down")
      .col-sm-6.col-lg-4.mb-4.mb-lg-0.d-flex.align-items-stretch
        .tarjeta--boton.color-primario.p-4
          .row.justify-content-center.mb-3
            .col-7.col-lg-6
              figure
                img(src='@/assets/curso/temas/tema2/tema2-8.svg', alt='')
          h4.text-center Observación
          p Es el registro visual de una situación en tiempo real. Para esta observación se deben definir los objetivos, planear los aspectos de validez y confiabilidad y preparar a las personas que van a realizar la observación.
      .col-sm-6.col-lg-4.mb-4.mb-lg-0.d-flex.align-items-stretch
        .tarjeta--boton.color-primario.p-4
          .row.justify-content-center.mb-3
            .col-7.col-lg-6
              figure
                img(src='@/assets/curso/temas/tema2/tema2-9.svg', alt='')
          h4.text-center Encuesta
          p Consiste en información de la población objeto de estudio. Se realiza por medio de entrevista o cuestionario. La encuesta -preparada con anticipación-, requiere conocer el campo de aplicación, contacto con líderes y aspectos personales del encuestador (conocimientos, presentación personal, etc.). 
      .col-sm-6.col-lg-4.mb-4.mb-sm-0.d-flex.align-items-stretch
        .tarjeta--boton.color-primario.p-4.w-100
          .row.justify-content-center.mb-3
            .col-7.col-lg-6
              figure
                img(src='@/assets/curso/temas/tema2/tema2-10.svg', alt='')
          h4.text-center Cuestionario
          p Su objetivo es obtener respuestas puntuales sobre la problemática abordada. Debe contar con un orden lógico de las preguntas referenciando un mismo tema; precisa de observaciones por parte del encuestado y la identificación del encuestador. 

    p.mb-5(data-aos="zoom-in-down") Las características de los instrumentos que se apliquen deben cumplir con los siguientes elementos: 

    .tarjeta--container.row.mb-5(data-aos="zoom-in-down")
      .col-md.tarjeta.color-primario.p-5
        .row.justify-content-center.mb-4
          .col-6
            figure
              img(src='@/assets/curso/temas/tema2/tema2-11.svg', alt='')
        
        h4 Confiabilidad
        p Se considera que un instrumento es confiable cuando todos los datos obtenidos son iguales al ser aplicados a los mismos sujetos en dos momentos diferentes. 
      .col-md.tarjeta.color-secundario.p-5
        .row.justify-content-center.mb-4
          .col-6
            figure
              img(src='@/assets/curso/temas/tema2/tema2-12.svg', alt='')
        h4 Validez
        p Se da cuando un instrumento logra medir lo que pretende medir.

    p.mb-5(data-aos="fade-down") En el marco de las acciones en salud pública, se deben tener en cuenta que los datos utilizados para la vigilancia epidemiológica se relacionan con diferentes factores y variables, tal como se explica en la siguiente figura:

    .row.justify-content-center.mb-5
      .col-12.col-lg-12.col-md-12.mb-2.mb-md-0(data-aos="fade-left")
        .titulo-sexto.color-acento-contenido
          p.titulo.pb-0.mb-0 <b>Figura 6. </b> <i>Factores y variables de la vigilancia epidemiológica</i>
        figure 
          img.d-none.d-md-block(src='@/assets/curso/temas/tema2/fig-6a.svg', alt='En la figura 6 se muestran los factores y variables de la vigilancia epidemiológica.')
          img.d-block.d-md-none(src='@/assets/curso/temas/tema2/fig-6b.svg', alt='En la figura 6 se muestran los factores y variables de la vigilancia epidemiológica.')

    p.mb-5(data-aos="fade-down") El procesamiento de los datos se puede realizar por medio de técnicas de filtrado, análisis y visualización de los datos. Para realizar un adecuado procesamiento de datos se cuenta con las siguientes etapas:

    SlyderF.mb-5(columnas="col-lg-6 col-xl-4" data-aos="fade-down-right")
      .tarjeta.color-primario.p-4
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/tema2/carrucel-3a.svg' alt='')
        h4 Recopilación de datos
        p Obtención de datos de fuentes disponibles.
      .tarjeta.color-primario.p-4
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/tema2/carrucel-3b.svg' alt='')
        h4 Preparación de datos
        p Se le denomina preprocesamiento y consiste en verificar los datos en busca de errores. 
      .tarjeta.color-primario.p-4
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/tema2/carrucel-3c.svg' alt='')
        h4 Entrada de datos
        p Se ingresan los datos en la computadora la cual cuenta con sistema elegido para el procesamiento. 
      .tarjeta.color-primario.p-4
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/tema2/carrucel-3d.svg' alt='')
        h4 Procesamiento
        p Se usan técnicas de filtrado, análisis y visualización de datos incluyendo los denominados algoritmos de aprendizaje. 
      .tarjeta.color-primario.p-4
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/tema2/carrucel-3e.svg' alt='')
        h4 Interpretación de los datos
        p Los datos son llevados a gráficos, videos, imágenes, textos para que sean utilizados por quienes lo requieran.
      .tarjeta.color-primario.p-4
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/tema2/carrucel-3f.svg' alt='')
        h4 Almacenamiento de datos
        p Los datos son almacenados para futuras consultas.

    p.mb-5(data-aos="fade-down") La consolidación y presentación de los datos recolectados se puede realizar por medio de tablas, gráficas o mapas que pueden facilitar el análisis y por ende la interpretación. 

    Separador
    #t_2_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 2.2 Ejecución de planes

    .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.mb-5(data-aos="fade-down-left")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/tema2/tema2-13.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Para apropiar el concepto de ejecución del plan, es necesario recordar lo visto anteriormente respecto a que es un plan. Todo plan puede ser proyectado hacia diversas áreas: económicas, de salud pública, de salud ambiental, de educación, a nivel regional, municipal e institucional, por ejemplo. El plan es la base para que se generen los programas, proyectos, funciones y por último actividades.  Los elementos claves del plan corresponden con: 

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-down")
      .col-12.col-md-8.col-lg-8
        ul.lista-ul.ms-3
          li.mb-0
            span.icon ✔ 
            | El propósito del plan / corresponde al qué hacer. 
          li.mb-0
            span.icon ✔ 
            | El origen y la fundamentación del plan / corresponde al por qué hacer.
          li.mb-0
            span.icon ✔ 
            | La misión, visión y los objetivos / corresponde al para qué hacer. 
          li.mb-0
            span.icon ✔ 
            | Las metas / corresponde al cuánto se quiere hacer.
          li.mb-0
            span.icon ✔ 
            | La localización / corresponde al dónde se va hacer.
          li.mb-0
            span.icon ✔ 
            | Las actividades, metas y técnicas / corresponde al cómo se va hacer. 
          li.mb-0
            span.icon ✔ 
            | La programación y cronograma / corresponde al cuándo se va hacer. 
          li.mb-0
            span.icon ✔ 
            | El destinatario o población objeto / corresponde al quiénes están dirigidos. 
          li.mb-0
            span.icon ✔ 
            | Los recursos humanos / corresponde al quiénes lo van hacer. 
          li.mb-0
            span.icon ✔ 
            | Los recursos financieros, materiales y técnicos / corresponde al con qué se va hacer.
          li.mb-0
            span.icon ✔ 
            | El marco jurídico / corresponde al qué se debe observar.
      .col-10.col-md-4.col-lg-4
        img(src='@/assets/curso/temas/tema2/tema2-14.png', alt='')  

    p.mb-5(data-aos="fade-down") En la siguiente figura, pueden apreciarse las fases generales en la ejecución del plan, las cuales representan a su vez, las estrategias de cumplimiento. 

    .row.justify-content-center.mb-5
      .col-12.col-lg-10.col-md-12.mb-2.mb-md-0(data-aos="fade-left")
        .titulo-sexto.color-acento-contenido
          p.titulo.pb-0.mb-0 <b>Figura 7. </b> <i>Estrategia de ejecución del plan</i>
        figure 
          img.d-none.d-md-block(src='@/assets/curso/temas/tema2/fig-7a.svg', alt='En la figura 7 se muestra la estrategia de ejecución del plan, que lleva el siguiente orden: plan, programa, proyecto y por último actividades.')
          img.d-block.d-md-none(src='@/assets/curso/temas/tema2/fig-7b.svg', alt='En la figura 7 se muestra la estrategia de ejecución del plan, que lleva el siguiente orden: plan, programa, proyecto y por último actividades.')
          figcaption Nota. Adaptado de Plan estratégico de negocios, Alfredo Cipriano Luna González. 

    p.mb-5(data-aos="fade-down") Las estrategias para la ejecución de los planes son la ejecución de programas, proyectos y actividades, una breve descripción de cada uno de estos corresponde con: 

    .p-5.cajon.color-secundario-c.mb-5
      .row.justify-content-center.align-items-center
        .col-md-5.col-12
          img(src='@/assets/curso/temas/tema2/tema2-15.svg', alt='')  
        .col-md-7.col-12
          .tarjeta.color-primario.p-3.mb-2
            h4 PROYECTOS
            p.mb-0 Posibilitan el cumplimiento de las actividades operativas por medio de la materialización de los planes y programas. Durante la ejecución del proyecto se realiza la combinación de todos los recursos. En general el proyecto debe permitir el logro de productos y resultados acordes con los recursos de tipo humano, financiero, material y técnico respectivamente. 
          .tarjeta.color-white.p-3.mb-2
            h4 PROGRAMAS 
            P.mb-0 Actúan como medio o puente entre el plan y se define como un grupo organizado de diversos medios para lograr el objetivo planeado. 
          .tarjeta.color-primario.p-3
            h4 ACTIVIDADES
            P.mb-0 Es la estrategia más operativa en el marco de la ejecución del plan. Para su definición es importante tener en cuenta que se pueden formular a corto, mediano y largo plazo.  

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-down")
      .col-12.col-md-8.col-lg-8
        p En la ejecución de los planes se debe contar con recursos humanos, financieros y materiales. En este último pueden existir elementos tangibles que requieren ser registrados dentro de un sistema de inventarios. Los inventarios permiten controlar y gestionar los recursos que se almacenan. Por medio de un control de inventarios se pueden conocer qué elementos se deben movilizar de manera rápida, cuáles deben ser gestionados de manera continua debido a su nivel de utilización y cuáles deben contar con recursos adicionales para el almacenaje correcto.
        p Es importante tener presente que toda empresa debe contar con un sistema de inventarios, ya sea que su actividad productiva esté conectada con la venta, o que estos inventarios sean parte de los bienes que posee la organización para la ejecución de sus actividades misionales o en función de la ejecución de los programas, proyectos o planes estratégicos. Todo sistema de inventarios, requiere de algunos elementos como: 
      .col-10.col-md-4.col-lg-4
        img(src='@/assets/curso/temas/tema2/tema2-16.png', alt='')  

    .row.mb-5(data-aos="zoom-in-down")
      .col-sm-6.col-lg-3.mb-4.mb-lg-0.d-flex.align-items-stretch
        .tarjeta--boton.color-primario.p-4
          .row.justify-content-center.mb-3
            .col-7.col-lg-6
              figure
                img(src='@/assets/curso/temas/tema2/tema2-17.svg', alt='')
          h4.text-center Definición de objetivos
          p Definición de los objetivos del sistema de inventarios. Para esta proyección de objetivos es importante tener en cuenta el número de existencias, el porcentaje de rotación de cada elemento y las exigencias del medio. 
      .col-sm-6.col-lg-3.mb-4.mb-lg-0.d-flex.align-items-stretch
        .tarjeta--boton.color-primario.p-4
          .row.justify-content-center.mb-3
            .col-7.col-lg-6
              figure
                img(src='@/assets/curso/temas/tema2/tema2-18.svg', alt='')
          h4.text-center Políticas del sistema de inventarios
          p Pueden contribuir a realizar acciones desde la parte operativa hasta comerciales, teniendo en cuenta la capacidad instalada del lugar en donde se almacena los elementos y el comportamiento de los precios en el mercado. 
      .col-sm-6.col-lg-3.mb-4.mb-sm-0.d-flex.align-items-stretch
        .tarjeta--boton.color-primario.p-4.w-100
          .row.justify-content-center.mb-3
            .col-7.col-lg-6
              figure
                img(src='@/assets/curso/temas/tema2/tema2-19.svg', alt='')
          h4.text-center Planes y normas
          p Definir los planes y las normas para tener en cuenta en el marco de las labores a corto, mediano y largo plazo. El inventario debe contar con las normas que sean de obligatorio cumplimiento. 
      .col-sm-6.col-lg-3.mb-4.mb-sm-0.d-flex.align-items-stretch
        .tarjeta--boton.color-primario.p-4.w-100
          .row.justify-content-center.mb-3
            .col-7.col-lg-6
              figure
                img(src='@/assets/curso/temas/tema2/tema2-20.svg', alt='')
          h4.text-center Sistemas y procedimientos
          p Se deben elegir sistemas y procedimientos que favorezcan los requerimientos de los inventarios: definir máximos y mínimos, realizar control de entradas - salidas y definir los requerimientos a futuro.

    p.mb-5(data-aos="fade-down") Los métodos para el control de los inventarios, pueden verse afectados por la forma en que se ha llevado a cabo la gestión del inventario, como, por ejemplo: el tiempo, la demanda y los costos. Adicional a estos elementos, es necesario conocer los tipos de inventarios los cuales se describen a continuación: 

    .row.justify-content-center.align-items-center.mb-5
      .col-12.col-lg-10(data-aos="fade-right")
        .titulo-sexto.color-acento-contenido.mb-1
          p.titulo.pb-0.mb-0 #[b Tabla 8.] #[i Tipos de inventarios] 
        .tabla-a.color-acento-contenido
          table(style="min-width:auto")
            caption Nota. Cruz Fernández, A. (2017). Gestión de inventarios.
            thead
              tr.cabecera-a.text-center
                td(style="width:25%")
                td
            tbody
              tr
                th Acorde con el momento
                td.text-start
                  ul.lista-ul.ms-3
                    li.mb-0
                      span.icon ✔ 
                      | Inventario inicial. 
                    li.mb-0
                      span.icon ✔ 
                      | Inventario final. 
              tr
                th Acorde con la periodicidad
                td.text-start 
                  ul.lista-ul.ms-3
                    li.mb-0
                      span.icon ✔ 
                      | Inventario intermitente. 
                    li.mb-0
                      span.icon ✔ 
                      | Inventario perpetuo. 
              tr
                th Acorde con la forma
                td.text-start 
                  ul.lista-ul.ms-3
                    li.mb-0
                      span.icon ✔ 
                      | Inventario de materias primas. 
                    li.mb-0
                      span.icon ✔ 
                      | Inventario de productos de fabricación o en curso. 
                    li.mb-0
                      span.icon ✔ 
                      | Inventario de productos terminados. 
                    li.mb-0
                      span.icon ✔ 
                      | Inventarios de suministros de fábrica. 
                    li.mb-0
                      span.icon ✔ 
                      | Inventario de mercancías. 
              tr
                th Acorde con la función
                td.text-start
                  ul.lista-ul.ms-3
                    li.mb-0
                      span.icon ✔ 
                      | Inventario de tránsito. 
                    li.mb-0
                      span.icon ✔ 
                      | Inventario de ciclo. 
                    li.mb-0
                      span.icon ✔ 
                      | Inventario de seguridad. 
                    li.mb-0
                      span.icon ✔ 
                      | Inventario de previsión. 
                    li.mb-0
                      span.icon ✔ 
                      | Inventario de desacoplamiento. 
              tr
                th Y acorde con otros elementos
                td.text-start 
                  ul.lista-ul.ms-3
                    li.mb-0
                      span.icon ✔ 
                      | Inventario físico. 
                    li.mb-0
                      span.icon ✔ 
                      | Inventario máximo. 
                    li.mb-0
                      span.icon ✔ 
                      | Inventario mínimo.
                    li.mb-0
                      span.icon ✔ 
                      | Inventario disponible.
                    li.mb-0
                      span.icon ✔ 
                      | Inventario en línea.  

    p.mb-5(data-aos="fade-down") Para la ejecución de los inventarios es importante conocer los criterios, los cuales son: 

    .BGIMG01.mb-5.p-4(data-aos="fade-down")
      SlyderA(tipo="b")
        .row
          .col-md-7.mb-4.mb-md-0
            h4 Temporalidad
            p Los inventarios deben realizarse como mínimo 1 vez al año. Existen otras opciones tales como las semestrales, trimestrales o la ejecución de los inventarios acorde con las exigencias que se presente. 
          .col-md-5
            figure
              img(src='@/assets/curso/temas/tema2/tema2-21.png', alt='')
        .row
          .col-md-7.mb-4.mb-md-0
            h4 Inventario cíclico
            p Por medio de la dinámica de tipo cíclica, se lleva a cabo el conteo de los bienes o productos de forma continua sin detener las actividades de otras áreas de la empresa. 
          .col-md-5
            figure
              img(src='@/assets/curso/temas/tema2/tema2-22.png', alt='')
        .row
          .col-md-7.mb-4.mb-md-0
            h4 Inventario por familias
            p Es el conteo del inventario teniendo en cuenta la agrupación por familias de productos o materias primas. 
          .col-md-5
            figure
              img(src='@/assets/curso/temas/tema2/tema2-23.png', alt='')
        .row
          .col-md-7.mb-4.mb-md-0
            h4 Inventario por estanterías
            p Por medio de las estanterías se pueden clasificar los productos y de esta manera agilizar el proceso de inventario acorde con la organización de las existencias en las estanterías.
          .col-md-5
            figure
              img(src='@/assets/curso/temas/tema2/tema2-24.png', alt='')

    .row.justify-content-center.align-items-center.mb-5 
      .col-12.col-lg-10(data-aos="zoom-in-down")
        ImagenInfografica.color-acento-botones
          template(v-slot:imagen)
            figure
              img(src='@/assets/curso/temas/tema2/info-3a.svg', alt='')
          .tarjeta.color-acento-contenido.p-3(x="1%" y="10%" numero="1")
            p Se califican elementos o mercancías según cantidad y costo. Con la siguiente distribución: 
            ul.lista-ul.ms-3
              li.mb-0
                span.icon ✔ 
                | Artículos tipo A: 20 % del inventario, baja frecuencia de ventas y representa el 80 % del valor. 
              li.mb-0
                span.icon ✔ 
                | Artículos tipo B: 40 % del inventario, moderada frecuencia de ventas y representan el 15 % del valor. 
              li.mb-0
                span.icon ✔ 
                | Artículos tipo C: 40 % del inventario, alta frecuencia de venta y representan el 5% del valor.  
            p Los porcentajes de distribución varían según las políticas de la empresa.
          .tarjeta.color-acento-contenido.p-3(x="37%" y="10%" numero="2")
            p Por medio de este método, se pueden identificar los elementos que ingresan al inventario para que sean los primeros en utilizarse. Es ideal cuando existen fechas de caducidad, como es el caso de los medicamentos, alimentos, químicos, entre otros. 
          .tarjeta.color-acento-contenido.p-3(x="75%" y="10%" numero="3")
            p Este método consiste en definir el monto del pedido que ayude a controlar los gastos de inventario por medio de tener el mismo nivel del inventario con pedidos oportunos. 
          .tarjeta.color-acento-contenido.p-3(x="1%" y="87%" numero="4")
            p Consiste en dar salida de primero a los artículos que hayan ingresado de manera más reciente. Para utilizar este método es necesario que los elementos almacenados no tengan fecha de caducidad. 
          .tarjeta.color-acento-contenido.p-3(x="37%" y="87%" numero="5")
            p Por medio de este método se realiza el conteo de una determinada parte del inventario, lo que puede favorecer la definición de inconsistencias de manera oportuna, sin tener que estar haciendo inventarios totales con frecuencia.   
          .tarjeta.color-acento-contenido.p-3(x="75%" y="87%" numero="6")
            p Este método tiene en cuenta los precios más bajos. Cada lote debe ser evaluado de la siguiente manera: multiplicar cada precio por el número de unidades existentes a ese valor, luego el resultado se suma y se divide entre la suma del total de unidades.
    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-down")
      .col-12.col-md-8.col-lg-8
        p Adicional al método elegido, se puede complementar con los siguientes elementos de implementación: 
        ul.lista-ul.ms-3
          li.mb-0
            span.icon ✔ 
            | Clasificar los inventarios existentes
          li.mb-0
            span.icon ✔ 
            | Determinar la frecuencia de revisión de inventario lo cual permite conocer los elementos útiles, los que requieren cambio o aquellos que están próximos a vencer. Tener en cuenta que existe un inventario denominado perpetuo (de revisión diaria) y otro inventario periódico el cual puede ser evaluado semanal, quincenal o mensualmente.
          li.mb-0
            span.icon ✔ 
            | Determinar los mínimos y máximos, lo cual permite conocer a profundidad cuántos deben existir para cumplir con la demanda. 
          li.mb-0
            span.icon ✔ 
            | Realizar seguimiento a las salidas de los elementos, lo cual permite conocer las existencias, así como las salidas. Este seguimiento posibilita tomar decisiones de compra, de contratación, de proveedores y de innovación de productos.
          li.mb-0
            span.icon ✔ 
            | Garantizar que la información del inventario esté actualizada. Para esto se puede implementar el uso de software, el cual genera un sistema de control que soporta la parte documental. Manejar el inventario por medio de un software, permite realizar el control del inventario por medio del uso de hojas de cálculo, estas funcionan como base de datos. Para ingresar los datos a la hoja de cálculo, es importante tener en cuenta los siguientes datos: número y nombre del artículo, la descripción, área, el estante o contenedor del artículo, proveedor, la unidad y la cantidad. 
      .col-10.col-md-4.col-lg-4
        img(src='@/assets/curso/temas/tema2/tema2-25.png', alt='')  

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-down")
      .col-10.col-md-4.col-lg-4
        img(src='@/assets/curso/temas/tema2/tema2-26.png', alt='') 
      .col-12.col-md-8.col-lg-8
        p Para finalizar la revisión de los inventarios, es importante tener en cuenta los productos a los que se les realiza el inventario. A tener en cuenta: 
        ul.lista-ul.ms-3
          li.mb-0
            span.icon ✔ 
            | Clasificación del producto según su naturaleza. 
          li.mb-0
            span.icon ✔ 
            | Clasificación del producto según el destino: de consumo inmediato o de tipo industrial como lo son las máquinas o las materias primas. 
          li.mb-0
            span.icon ✔ 
            | Clasificación por motivo de compra, la cual puede ser racionales o emocionales. 
          li.mb-0
            span.icon ✔ 
            | Clasificación acorde con la relación con otros productos, estos pueden ser los productos que ustituyen otros, los productos que complementan el otro y los productos que son independientes. 
          li.mb-0
            span.icon ✔ 
            | Clasificación de los productos acorde con la naturaleza de estos.  En este escenario se puede encontrar: 
          ul.lista-ul.ms-3.mb-2
            li.mb-0
              span.icon • 
              | Productos no duraderos. 
            li.mb-0
              span.icon • 
              | Productos duraderos. 
            li.mb-0
              span.icon • 
              | Productos de consumo: básicos, de emergencia, de comparación, de especialidad, de consumo. 
          p Como resultado del control de inventarios, se logra establecer las estrategias de reaprovisionamiento, la cual consiste en definir los criterios y procedimientos a tener en cuenta para volver a adquirir los materiales o productos necesarios. 









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
