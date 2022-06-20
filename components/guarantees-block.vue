<template>
  <div>
    <guarantee-item v-for="(guarantee, i) in guarantees" :key="i" :title="guarantee.title" :text="guarantee.text" />
  </div>
</template>

<script setup lang="ts">
const {$dbRequests} = useNuxtApp()

const guarantees = ref<Guarantee[]>([])

onMounted(async () => {
  guarantees.value = await $dbRequests.fetchAllGuarantees()
})
</script>

<style scoped lang="scss">
div {
  display: flex;
  padding: 4vh;
}
</style>
