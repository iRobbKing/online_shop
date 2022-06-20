import {defineNuxtPlugin} from '#app'

export default defineNuxtPlugin(() => {
  return {
    provide: {
      dbRequests: {
        async fetchAllServices(): Promise<Service[]> {
          return await $fetch(`http://localhost:51520/services`)
        },

        async fetchAllGuarantees(): Promise<Guarantee[]> {
          return await $fetch(`http://localhost:51520/guarantees`)
        },

        async fetchUser(login: string, password: string): Promise<User | null> {
          const users: User[] = await $fetch(`http://localhost:51520/users`, {params: {login, password}})
          return users.length != 0 ? {login: users[0].login, role: users[0].role} : null
        },

        async loginExists(login: string): Promise<boolean> {
          const users: User[] = await $fetch(`http://localhost:51520/users`, {params: {login}})
          return users.length != 0
        },

        async createUser(user: UserRegistration): Promise<void> {
          throw new Error('Not implemented.')
        }
      }
    }
  }
})
