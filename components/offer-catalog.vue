<template>
  <div>
    <select v-model="sortBy">
      <option value="game">Game</option>
      <option value="cost">Cost</option>
      <option value="amount">Amount</option>
    </select>
    <div class="catalog-wrapper">
      <offer-card
          v-for="(offer, i) in sortedOffers" :key="i"
          :game="offer.game"
          :seller="offer.seller"
          :cost="offer.cost"
          :amount="offer.amount ?? 1"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
const {$dbRequests} = useNuxtApp()
const $route = useRoute()

const offers = ref<Category[]>([])

onMounted(async () => {
  const category = $route.params.category as string
  const game = $route.params.game as string | undefined

  const fetchedOffers = await $dbRequests.fetchAllOffers(category)

  offers.value = game ?
      fetchedOffers.filter(offer => offer.game.toLowerCase().includes(game.toLowerCase())) :
      fetchedOffers
})

const sortBy = ref('game')

function sort(a: any, b: any): number {
  if (typeof a[sortBy.value] === 'string') {
    return a[sortBy.value].localeCompare(b[sortBy.value])
  }

  return a[sortBy.value] - b[sortBy.value]
}

const sortedOffers = computed(() => {
  const sorted = [...offers.value]
  sorted.sort(sort)
  return sorted
})
</script>

<style scoped lang="scss">
select {
  background-color: $app-color-theme;
  border-radius: 1rem;
  margin-top: 1rem;
  margin-left: 3rem;
}

.catalog-wrapper {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}
</style>
