<template>
  <div class="account-wrapper">
    <div class="account-info">Your login: {{ user.login }}</div>
    <div class="account-info">You are: {{ user.role }}</div>
    <button @click="logout">Logout</button>
  </div>
</template>

<script setup lang="ts">
definePageMeta({middleware: 'auth'})

const {user, userLogged} = useLogin()

function logout(): void {
  userLogged.value = false
  navigateTo('/')
}
</script>

<style scoped lang="scss">
.account-wrapper {
  padding: 2vw;
}

$margin: 1rem;

.account-info {
  margin: $margin;
  font-size: 24px;
}

button {
  cursor: pointer;
  color: black;
  font-size: 16px;
  border-radius: 2rem;
  margin-left: $margin;
  padding: 0 1rem 0 1rem;
}
</style>
