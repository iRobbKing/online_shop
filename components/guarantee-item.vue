<template>
  <div>
    <h1>{{ title }}</h1>
    <p>{{ text }}</p>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  title: string
  text: string
}>()
</script>

<style scoped lang="scss">
div {
  display: flex;
  flex-wrap: wrap;
  padding: 2vh;
  justify-content: center;
  text-align: center;
}

h1 {
  display: block;
  font-size: 20px;
}

p {
  display: block;
}
</style>
