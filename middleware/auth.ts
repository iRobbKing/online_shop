import {defineNuxtRouteMiddleware, navigateTo} from '#app'
import {useLogin} from '~/composables/useLogin'

export default defineNuxtRouteMiddleware((to, from) => {
  const {userLogged, forceCookieRead} = useLogin()

  forceCookieRead()

  if (userLogged.value) {
    if (['/login', '/register'].includes(to.path))
      return navigateTo('/account')
  } else {
    if (['/account'].includes(to.path))
      return navigateTo('/login')
  }
})
