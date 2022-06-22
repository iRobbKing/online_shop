<template>
  <div id="search-wrapper">
    <input type="text" v-model="search">
    <input type="submit" @click="goToOffers">
  </div>
</template>

<script setup lang="ts">
import {navigateTo} from '#app'

const search = ref('')

function goToOffers(): void {
  navigateTo(`/offers-accounts-${search.value}`)
}
</script>

<style scoped lang="scss">
#search-wrapper {
  height: 30vh;
  background-image: url('/images/games.jpg');
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
  width: calc($input-width / 5);
  min-width: 60px;
  border-radius: 0 $input-border-radius $input-border-radius 0;
  background-color: red;
  color: white;
}
</style>
