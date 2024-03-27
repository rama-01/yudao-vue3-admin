import type { RouteMeta } from 'vue-router'

export const useRenderMenuTitle = () => {
  return {
    renderMenuTitle: (meta: RouteMeta) => {
      return <span>{meta.title}</span>
    }
  }
}
