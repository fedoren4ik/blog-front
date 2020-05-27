<template>
  <div id="app">
    <div style="padding-bottom: 20px;">
      <router-view></router-view>
    </div>
    <div class="footer">
      © Powered by Fedorenchik
    </div>
  </div>
</template>

<script>

export default {
  name: 'App'
}
</script>

<style>
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin: 0;
  height: 100%;
  width: 100%;
}

.footer {
  bottom: 0;
  position: absolute;
  width: 100%;
  text-align: center;
  height: 20px;
}
</style>
