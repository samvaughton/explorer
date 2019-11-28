import { Context } from '@nuxt/types'
export default function (ctx: Context) {
  ctx.$axios.onError(error => {
    if (error.code === '404') {
      ctx.redirect('/')
    }
  })
}
