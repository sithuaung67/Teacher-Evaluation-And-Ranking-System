<template>
  <bs-drawer v-on:bs-drawer-opened="closeRight"
  ref="leftDrawer"
  side="left"
  :showDrawer="false"
  :showToggleBtn="true"
  btnTop="195px"
  bg="transparent"
  sidebar="md"
  class="bs-drawer__animate">
    <b-list-group>
      <b-list-group-item href="#some-link">Awesome link</b-list-group-item>
      <b-list-group-item href="#" active>Link with active state</b-list-group-item>
      <b-list-group-item href="#">Action links are easy</b-list-group-item>
      <b-list-group-item href="#foobar" disabled>Disabled link</b-list-group-item>
    </b-list-group>

  </bs-drawer>
</template>

<script>

export default {
  name: "Sidebar",
  data: () => ({

  }),
  mounted(){
      $("#wrapper").toggleClass("toggled");
  }
}

</script>

<style scoped>
</style>
