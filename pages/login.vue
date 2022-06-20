<template>
  <div>
    <login-form :submit="tryToLogin" :error="error">
      <input type="text" placeholder="Enter name" v-model="login">
      <input type="password" placeholder="Enter password" v-model="password">
    </login-form>
  </div>
</template>

<script setup lang="ts">
definePageMeta({middleware: 'auth'})

const {$dbRequests} = useNuxtApp()
const {user} = useLogin()

const login = ref('')
const password = ref('')
const error = ref('')

async function tryToLogin(): Promise<void> {
  const fetchedUser = await $dbRequests.fetchUser(login.value, password.value)

  if (fetchedUser === null) {
    error.value = 'Login or password is incorrect.'
    return
  }

  user.value = fetchedUser
  navigateTo('/account')
}
</script>
