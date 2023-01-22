<template>
  <HomeView/>
</template>

<script>
import HomeView from './components/HomeView.vue'

export default {
  name: 'App',
  components: {
    HomeView
  }
}
</script>

<style lang="scss">
$screen-small: 480px;
$screen-medium: 769px;
$screen-large: 1024px;
$screen-larger: 1200px;
$screen-extra-large: 1400px;
$screen-huge: 1800px;

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-image: url("~@/assets/images/leaf.png");
  background-size: 600px;
  background-repeat: no-repeat;
  background-position: calc(50% - 600px) -40px;

  &:before {
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    width: 100%;
    height: 480px;
    transform: rotate(180deg);
    content: "";
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-image: url("~@/assets/images/leaf.png");
    background-size: 600px;
    background-repeat: no-repeat;
    background-position: calc(50% - 600px) top;
  }
}

@font-face {
  font-family: "Freebooter Scirpt";
  src: local("Freebooter Scirpt"),
   url(./fonts/FREEBSC_.ttf) format("truetype");
}

body {
  font-family: 'Merriweather', serif;
  font-size: 16px;
  line-height: 1.8;
  color: #4f7464;
}

a {
  text-decoration: none;
  color: inherit;

  &:hover {
    text-decoration: underline;
  }
}

.title {
  margin: 0;
  font-family: 'Freebooter Scirpt', serif;
  font-size: 54px;
  text-align: center;
  color: #2c3e50;
}

@media screen and (min-width: $screen-small) {
  .title {
    font-size: 64px;
  }
}

.heading {
  font-size: 28px;
  text-align: left;
  color: #2c3e50;
  flex: 1 0 100%;
}

.subtitle {
  font-size: 22px;
  text-align: left;
  color: #2c3e50;
  flex: 1 0 100%;
}

.important {
  font-size: 18px;
  text-align: center;
  color: #2c3e50;
}
</style>
