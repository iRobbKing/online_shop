<template>
  <div>
    <service-icon v-for="(service, i) in services" :key="i" :to="service.name" :icon="service.icon"/>
  </div>
</template>

<script setup lang="ts">
const {$dbRequests} = useNuxtApp()

const services = ref<Service[]>([])

onMounted(async () => {
  services.value = await $dbRequests.fetchAllServices()
})
</script>

<style scoped lang="scss">
div {
  display: flex;
  justify-content: space-around;
}
</style>
