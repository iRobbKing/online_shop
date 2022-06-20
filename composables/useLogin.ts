import {navigateTo} from '#app'

export function useLogin() {
  const user = useState<User>('user')
  const userLogged = useState<boolean>('userLogged')
  const userCookie = useCookie<User | undefined>('user')

  watch(userLogged, logged => {
    if (logged === false) {
      userCookie.value = undefined
    }
  })

  watch(user, newUser => {
    if (newUser.role === 'guest') {
      userLogged.value = false
      userCookie.value = undefined
    } else {
      userLogged.value = true
      userCookie.value = newUser
    }
  })

  function forceCookieRead(): void {
    if (userCookie.value) {
      user.value = userCookie.value
    }
  }

  forceCookieRead()

  return {user, userLogged, userCookie, forceCookieRead}
}
