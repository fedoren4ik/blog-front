<template>
  <div id="app">
    <div class="container">
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
  height: 100%;
  min-height: 100vh;
  width: 100%;
  min-width: 100%;
  overflow: hidden;
  position: relative;
}

.container {
  padding: 0 10px;
  margin: 0 auto;
}

.footer {
  bottom: 20px;
  position: absolute;
  width: 100%;
  text-align: center;
  height: 20px;
}
</style>
