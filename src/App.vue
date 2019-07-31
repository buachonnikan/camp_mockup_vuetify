<template>
  <v-app>
    <v-content>
      <router-view/>
    </v-content>
  </v-app>
</template>

<script>

export default {
  name: 'App',
  components: {
    // HelloWorld
  },
  data () {
    return {
      //
    }
  }
}
</script>

<style>
  *{
    font-size: 16px;
    font-family: 'Sarabun', sans-serif;
  }
</style>
