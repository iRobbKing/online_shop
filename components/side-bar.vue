<template>
  <aside>
     <ul>
        <li v-for="(link, i) in pageLinks" :key="i">
          <NuxtLink :to="link.to">{{ link.name }}</NuxtLink>
        </li>
     </ul>
  </aside>
</template>

<script setup lang="ts">
const defaultPagesLinks: PageLink[] = [
    {name: 'Main', to: '/'}
]
const loggedPagesLinks: PageLink[] = [
    {name: 'Account', to: '/account'}
]
const guestPagesLinks: PageLink[] = [
  {name: 'Login', to: '/login'},
  {name: 'Register', to: '/register'}
]

const pageLinks = computed(() => {
  const {userLogged} = useLogin()
  const computedPagesLinks = userLogged.value ? loggedPagesLinks : guestPagesLinks
  return [...defaultPagesLinks, ...computedPagesLinks]
})
</script>

<style scoped lang="scss">
li {
  padding: 1vh 1vh 1vh 3vw;
  transition: .25s ease-in-out;
}

li:hover {
  background-color: scale-color($app-color-theme, $lightness: +15%);
}

a {
  text-decoration: none;
}
</style>
