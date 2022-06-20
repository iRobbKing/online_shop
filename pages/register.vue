<template>
  <div>
    <login-form :submit="tryToRegister" :error="error">
      <input type="text" placeholder="Enter name" v-model.trim="login">
      <input type="password" placeholder="Enter password" v-model.trim="password">
      <input type="password" placeholder="Repeat password" v-model.trim="passwordRepeated">
    </login-form>
  </div>
</template>

<script setup lang="ts">
import {navigateTo} from '#app'

definePageMeta({middleware: 'auth'})

const {$dbRequests} = useNuxtApp()
const {user} = useLogin()

const login = ref('')
const password = ref('')
const passwordRepeated = ref('')
const error = ref('')

async function loginExists(): Promise<boolean> {
  return await $dbRequests.loginExists(login.value)
}

function validateLogin(): boolean {
  return /^[a-zA-Z0-9]{6,20}$/.test(login.value)
}

function validatePassword(): boolean {
  return /^[a-zA-Z0-9!@#$%^&*]{6,40}$/.test(password.value)
}

async function tryToRegister(): Promise<void> {
  const loginTaken = await loginExists()
  const loginCorrect = await validateLogin()
  const passwordCorrect = validatePassword()
  const passwordsSame = password.value === passwordRepeated.value

  if (loginTaken) {
    error.value = 'This login has been already taken.'
    return
  }

  if (!loginCorrect) {
    error.value = 'Incorrect login.'
    return
  }

  if (!passwordCorrect) {
    error.value = 'Incorrect password.'
    return
  }

  if (!passwordsSame) {
    error.value = 'Passwords do not match.'
    return
  }

  // await $dbRequests.createUser({login: login.value, password: password.value})
  user.value = {login: login.value, role: 'user'}
  navigateTo('/account')
}
</script>
