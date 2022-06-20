<template>
  <div id="search-wrapper">
    <input type="text" v-model="search">
    <input type="submit">
  </div>
</template>

<script setup lang="ts">
const search = ref('')
</script>

<style scoped lang="scss">
#search-wrapper {
  height: 30vh;
  background-image: url('~/images/games.jpg');
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: inset 0 -25px 50px black;
}

$input-width: 30vw;
$input-height: calc($app-text-size + 14px);
$input-border-radius: calc($input-height / 2);

input {
  border: none;
}

input[type="text"] {
  height: $input-height;
  width: $input-width;
  border-radius: $input-border-radius 0 0 $input-border-radius;
  border-right: none;
  color: black;
  padding-left: 2vh;
}

input[type="submit"] {
  height: $input-height;
  width: calc($input-height * 5);
  border-radius: 0 $input-border-radius $input-border-radius 0;
  background-color: red;
}
</style>
