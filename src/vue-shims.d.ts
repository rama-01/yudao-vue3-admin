// import { ElMessageBoxShortcutMethod } from "element-plus/types/message-box";

declare module '*.vue' {
  import { ComponentOptions } from 'vue'
  const componentOptions: ComponentOptions
  export default componentOptions
}

/* declare module "vue" {
  interface Vue {
    $confirm: ElMessageBoxShortcutMethod;
  }
}
 */
