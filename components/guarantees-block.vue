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
  margin-top: 4vh;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
}
</style>
