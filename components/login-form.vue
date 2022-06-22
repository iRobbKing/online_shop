<template>
  <div class="login-from-wrapper">
    <form class="login-from" @submit.prevent>
      <slot></slot>
      <input type="submit" @click="submit">
      <h1 class="login-from-error">{{ error }}</h1>
    </form>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  submit(): void,
  error: string
}>()
</script>

<style lang="scss">
.login-from-wrapper {
  display: flex;
  justify-content: center;
}

.login-from {
  background-color: scale-color($app-color-theme, $lightness: -25%);
  top: 27vh;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
}

.login-from input {
  color: black;
  margin: 2vw;
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

@media screen and(max-width: $app-mobile-width) {
  .login-from {
    $width: 95vw;

    width: $width;
    min-height: calc($width + 10vw);
  }
}
</style>
