
import { postscribe } from 'postscribe'

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(postscribe)
  nuxtApp.provide('postscribe', postscribe)
})