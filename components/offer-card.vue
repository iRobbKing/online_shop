<template>
  <div class="offer-card" @click="openChat(seller)">
    <div>{{ game }}</div>
    <div>{{ seller }}</div>
    <div>{{ cost }}</div>
    <div v-if="amount !== 1">{{ amount }}</div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  game: string
  seller: string
  cost: number
  amount: number
}>()

const chatWith = useState<string>('seller')

function openChat(seller: string): void {
  chatWith.value = seller
  navigateTo('/chat')
}
</script>

<style scoped lang="scss">
$margin: 1rem;
$shadow-size: 5px;

.offer-card {
  background-color: scale-color($app-color-theme, $lightness: -12%);
  display: block;
  position: relative;
  width: 20vw;
  padding: 1rem;
  margin: $margin;
  border-radius: 5px;
  box-shadow: $shadow-size $shadow-size $shadow-size #595959;
  transition: .25s all;
  cursor: pointer;
  z-index: 0;
}

.offer-card:hover {
  margin: calc($margin + $shadow-size - 1px) calc(1rem - $shadow-size + 1px) calc(1rem - $shadow-size + 1px) calc($margin + $shadow-size - 1px);
  box-shadow: 1px 1px 0 #595959;
}
</style>
