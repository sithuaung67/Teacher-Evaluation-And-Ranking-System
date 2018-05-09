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
        <b-list-group-item :to="{ name: 'Teachers' }" tag ="router-link">
          <fa icon="user" fixed-width/>
          Teachers
        </b-list-group-item>
        <b-list-group-item :to="{ name: 'Students' }" tag ="router-link">
          <fa icon="user" fixed-width/>
          Students
        </b-list-group-item>
        <b-list-group-item :to="{ name: 'Questions' }" tag ="router-link">
          <fa icon="user" fixed-width/>
          Questions
        </b-list-group-item>
        <b-list-group-item :to="{ name: 'Results' }" tag ="router-link">
          <fa icon="user" fixed-width/>
          Results
        </b-list-group-item>

    </b-list-group>

  </bs-drawer>
</template>

<script>

export default {
  name: "Sidebar",
  data: () => ({
    closeRight: false
  }),
  method: {
  }
}

</script>

<style scoped>
</style>
