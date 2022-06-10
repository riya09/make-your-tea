<template>
  <div>
    <Header/>
    <div class="container">
    </div>
  </div>
</template>

<script>
import Header from "@/components/global/Header.vue"

export default {
  components: {
    Header,
  },
}
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Lobster&family=Open+Sans&display=swap");
* {
  margin: 0;
  padding: 0;
  font-family: sans-serif;
}
.container {
  display: grid;
  place-items: center;
  padding: 20px 10px;
}
</style>
