import {defineNuxtPlugin, useRuntimeConfig} from '#app'

export default defineNuxtPlugin(() => {
  const config = useRuntimeConfig()

  return {
    provide: {
      dbRequests: {
        async fetchAllServices(): Promise<Service[]> {
          return await $fetch(`${config.public.API_BASE_URL}services`)
        },

        async fetchAllGuarantees(): Promise<Guarantee[]> {
          return await $fetch(`${config.public.API_BASE_URL}guarantees`)
        },

        async fetchUser(login: string, password: string): Promise<User | null> {
          const users: User[] = await $fetch(`${config.public.API_BASE_URL}users`, {params: {login, password}})
          return users.length != 0 ? {login: users[0].login, role: users[0].role} : null
        },

        async loginExists(login: string): Promise<boolean> {
          const users: User[] = await $fetch(`${config.public.API_BASE_URL}users`, {params: {login}})
          return users.length != 0
        },

        async createUser(user: UserRegistration): Promise<void> {
          throw new Error('Not implemented.')
        },

        async fetchAllOffers(category: string): Promise<Category[]> {
          const offers: any = await $fetch(`${config.public.API_BASE_URL}offers`)
          return offers[category]
        }
      }
    }
  }
})
