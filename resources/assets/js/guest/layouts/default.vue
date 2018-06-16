<template>
  <b-container fluid class="bv-example-row">
    <b-row class="mb-2">
        <b-col>
            <navbar/>
        </b-col>
    </b-row>

    <b-row class="mt-2">
        <b-col cols="3" v-if="user" v-on:toggle-sidebar="onToggleSidebar">
          <Sidebar :Status="SidebarStatus"/>
        </b-col>
        <b-col :cols=" user ? 9 : 12 ">
          <div class="page-content-wrapper">
            <child/>
          </div>
        </b-col>
    </b-row>
  </b-container>
</template>

<script>
import Navbar from '~/guest/components/Navbar'
import Sidebar from '~/guest/components/Sidebar'
import { mapGetters } from 'vuex'

export default {
  name: 'MainLayout',
  data : function() {
    return {
      SidebarStatus: true,
    }
  },
  methods: {
    onToggleSidebar: function () {
      this.SidebarStatus = false;
    }
  },
  computed: {
    ...mapGetters({
      user: 'auth/user'
    }),
  },
  components: {
    Navbar,
    Sidebar
  }

}
</script>


<style>
</style>
