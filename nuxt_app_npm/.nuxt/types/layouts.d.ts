import { ComputedRef, Ref } from 'vue'
export type LayoutKey = string
declare module "/Users/yukishi/nuxt_workspace/nuxt_sample_project/nuxt_app/node_modules/nuxt/dist/pages/runtime/composables" {
  interface PageMeta {
    layout?: false | LayoutKey | Ref<LayoutKey> | ComputedRef<LayoutKey>
  }
}