<template>
  <div id="app">
    <img src='./assets/logo.png'>
    <router-view/>
    <div class="footer">
      <router-link :to="{path: '/user'}">User</router-link>
      <router-link :to="{path: '/message'}">Message</router-link>
    </div>
  </div>
</template>

<script>
export default {
    name: 'App'
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
a {
    cursor: pointer;
}
</style>
