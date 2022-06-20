<template>
  <form class="login-from" @submit.prevent>
    <slot></slot>
    <input type="submit" @click="submit">
    <h1 class="login-from-error">{{ error }}</h1>
  </form>
</template>

<script setup lang="ts">
const props = defineProps<{
  submit(): void,
  error: string
}>()
</script>

<style lang="scss">
.login-from {
  $width: 25vw;
  $height: 35vh;

  background-color: scale-color($app-color-theme, $lightness: -25%);
  width: $width;
  height: $height;
  top: calc(50vh - $height * .6);
  left: calc(50vw - $width * .75);
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
}

.login-from input {
  color: black;
  padding: .5rem;
  border: none;
  border-radius: 2rem;
  transition: .3s all;
}

.login-from input[type="submit"]:hover {
  background-color: #626262;
}

.login-from-error {
  color: red;
}
</style>
