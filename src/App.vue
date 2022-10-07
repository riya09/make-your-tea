<template>
  <div>
    <Header/>
    <div class="container">
      <Container/>
    </div>
  </div>
</template>

<script>
import Header from "@/components/global/Header.vue"
import Container from "@/components/content/Container.vue"

export default {
  components: {
    Header,
    Container,
  },
}
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Lobster&family=Open+Sans&display=swap");
:root {
  --ripe-mango:hsl(46, 98%, 56%);
  --cornflower:hsl(195, 66%, 76%);
  --frost:hsl(207, 41%, 58%);
  --lotion:hsl(45, 100%, 98%);
  --white: hsl(0, 0%, 100%);
  --naples-yellow:hsl(46, 98%, 68%);
}
* {
  margin: 0;
  padding: 0;
  font-family: sans-serif;
}
body {
  background-color: var(--lotion);
}
.container {
  display: grid;
  place-items: center;
  padding: 20px 10px;
}
</style>
