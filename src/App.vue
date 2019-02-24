<template>
  <div id="app">
    <div>
      Hello
      <IconFont type="icon"
                name="icon-notSelected"
                color="f00"
                size="50" /> FontIcon
    </div>
    <div>
      Hello
      <IconFont type="svg"
                name="icon-notSelected"
                color="f00"
                size="50" /> SvgIcon
    </div>
    <div>
      Hello
      <IconFont type="icon"
                name="icon-hasSelected"
                color="0f0"
                size="50" /> FontIcon
    </div>
    <div>
      Hello
      <IconFont type="svg"
                name="icon-hasSelected"
                color="0f0"
                size="50" /> SvgIcon
    </div>
    <IconFont type="icon"
              name="icon-notSelected"
              color="f00"
              size="50" />
    <IconFont type="icon"
              name="icon-hasSelected"
              color="0f0"
              size="50" />
    <IconFont type="svg"
              name="icon-notSelected"
              color="f00"
              size="50" />
    <IconFont type="svg"
              name="icon-hasSelected"
              color="0f0"
              size="50" />
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  font-size: 50px;
  text-align: center;
  word-break: keep-all;
}
</style>
