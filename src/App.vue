<template>
  <main class="overflow-hidden">
    <component :is="layoutName">
      <router-view></router-view>
    </component>
    <loading :active.sync="isLoading" :is-full-page="true" background-color="#495057"/>
  </main>
</template>

<script>
import Loading from 'vue-loading-overlay'

import config from './config'

export default {
  name: 'app',
  components: {
    Loading
  },
  data() {
    return {
      title: config.appTitle
    }
  },
  computed: {
    layoutName () {
      return this.$store.getters.layoutName
    },
    isLoading () {
      return this.$store.getters.isLoading
    }
  }
}
</script>