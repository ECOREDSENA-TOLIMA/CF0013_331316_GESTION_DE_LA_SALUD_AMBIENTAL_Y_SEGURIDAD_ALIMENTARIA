<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
      
    .row.justify-content-center.align-items-center.mb-4(data-aos="fade-down")
      .col-12
        p.mb-4 Bienvenidos a este componente formativo relacionado con el plan de acción: metodologías, recursos y lineamientos administrativos, que corresponde con las bases misionales de la organización que posibilitan la puesta en marcha de los diferentes planes de acción y de ejecución, así como los procedimientos, los manuales y los métodos de priorización.  
        p Le invitamos a observar el siguiente vídeo en donde encontrará de manera general información concerniente con el tema relacionado a los planes de acción, desde el orden administrativo, mediante el uso de metodologías y recursos disponibles para tal fin:
    
    figure
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/_vrbhCegGNo" title="Plan de acción: metodologías, recursos y lineamientos administrativos" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
      figcaption Video: Plan de acción: metodologías, recursos y lineamientos administrativos

</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
