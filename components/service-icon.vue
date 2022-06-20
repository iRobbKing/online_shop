<template>
  <NuxtLink to="#">
    <div>
      <div class="icon-wrapper">
        <img :src="imagePath" :alt="to">
      </div>
      <div class="icon-name">{{ capitalizedTo }}</div>
    </div>
  </NuxtLink>
</template>

<script setup lang="ts">
const props = defineProps<{
  to: string
  icon: string
}>()

const imagePath = computed(() => `/images/${props.icon}.png`)

const capitalizedTo = computed(() => props.to[0].toUpperCase() + props.to.slice(1, props.to.length))
</script>

<style scoped lang="scss">
$icon-size: 2.5vw;

a {
  text-decoration: none;
}

img {
  width: 100%;
  height: 100%;
}

.icon-wrapper {
  background-color: silver;
  width: $icon-size;
  height: $icon-size;
  padding: $icon-size;
  margin: 2vh;
  border-radius: 50%;
}

.icon-name {
  text-align: center;
}
</style>
