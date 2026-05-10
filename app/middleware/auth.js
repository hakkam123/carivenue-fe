export default defineNuxtRouteMiddleware((to, from) => {
  const token = useCookie('token')
  const userRaw = useCookie('user')

  const user = (() => {
    try { return JSON.parse(userRaw.value || '{}') }
    catch { return {} }
  })()

  if (!token.value && to.path.includes('/admin')) {
    return navigateTo('/auth/login')
  }

  if (to.path.includes('/admin') && user?.role !== 'admin') {
    return navigateTo('/')
  }
})