import type { NavigationGuard } from 'vue-router'
export type MiddlewareKey = string
declare module "/Users/yukishi/nuxt_workspace/nuxt_sample_project/nuxt_app/node_modules/nuxt/dist/pages/runtime/composables" {
  interface PageMeta {
    middleware?: MiddlewareKey | NavigationGuard | Array<MiddlewareKey | NavigationGuard>
  }
}