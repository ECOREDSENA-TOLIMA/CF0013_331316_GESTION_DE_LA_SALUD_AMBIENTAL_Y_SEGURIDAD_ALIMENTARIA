<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    p.mb-5 Las acciones correspondientes al plan de acción que toda empresa u organización debe formular, con el fin de realizar una prestación de servicios o venta de productos de calidad, teniendo en cuenta diferente metodologías y recursos de orden administrativo, posibilita alinear los procesos que se han trabajado en el orden de la gestión de la salud ambiental y la seguridad sanitaria, con esta información, se posibilita establecer acciones de mejora en el diseño de la documentación correspondiente, lo cual redundará en la satisfacción de las necesidades de los usuarios y la percepción de calidad en la prestación del servicio. Para dar cumplimiento con esto, se tendrán en cuenta algunas nociones presentadas en el siguiente mapa conceptual.

    .row.justify-content-center
      .col-lg-10.mb-5
        figure
          img(src="@/assets/curso/temas/sintesis.svg", alt="En la síntesis del componente plan de acción: metodologías, recursos y lineamientos administrativos contiene las acciones del plan de acción que la empresa formula para vender un producto o prestar un servicio, por medio de metodologías y recursos.")
      .col-auto
        a.anexo.mb-4(:href="obtenerLink('/downloads/sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
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
