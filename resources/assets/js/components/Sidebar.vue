<template>
  <bs-drawer v-on:bs-drawer-opened="closeRight"
  ref="leftDrawer"
  side="left"
  :showDrawer="Status"
  btnTop="195px"
  bg="red"
  sidebar="md"
  class="bs-drawer__animate">
    <b-list-group>
        <b-list-group-item :to="{ name: 'Teachers' }">
          <fa icon="user" fixed-width/>
          Teachers
        </b-list-group-item>
        <b-list-group-item :to="{ name: 'Students' }">
          <fa icon="user" fixed-width/>
          Students
        </b-list-group-item>
        <b-list-group-item :to="{ name: 'Questions' }">
          <fa icon="user" fixed-width/>
          Questions
        </b-list-group-item>
        <b-list-group-item :to="{ name: 'Results' }">
          <fa icon="user" fixed-width/>
          Results
        </b-list-group-item>
    </b-list-group>

  </bs-drawer>
</template>

<script>

export default {
  name: "Sidebar",
  props: ['Status'],
  data: () => ({
    closeRight: false
  }),
  method: {
  }
}

</script>

<style scoped>
</style>
