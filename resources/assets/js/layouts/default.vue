<template>
  <b-container fluid class="bv-example-row">
    <b-row>
        <b-col>
            <navbar/>
        </b-col>
    </b-row class="mb-2">

    <b-row class="mt-2">
        <b-col cols="3" v-if="user">
          <Sidebar/>
        </b-col>
        <b-col :cols=" user.name ? 9 : 12 ">
          <div class="page-content-wrapper">
            <child/>
          </div>
        </b-col>
    </b-row>
  </b-container>
</template>

<script>
import Navbar from '~/components/Navbar'
import Sidebar from '~/components/Sidebar'
import { mapGetters } from 'vuex'

export default {
  name: 'MainLayout',

  components: {
    Navbar,
    Sidebar
  },
  computed: mapGetters({
    user: 'auth/user'
  }),
}
</script>


<style>
</style>
