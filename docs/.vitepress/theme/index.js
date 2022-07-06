import DefaultTheme from 'vitepress/theme'
import MyLayout from './MyLayout.vue'
import './custom.css'
import { h } from 'vue'

export default {
  ...DefaultTheme,
  // override the Layout with a wrapper component that
  // injects the slots
  Layout: MyLayout
  // Layout() {
  //   return h(DefaultTheme.Layout, null, {
  //     // uncomment to test layout slots
  //     'doc-before': () => h('h1', {

  //     }),
  //     // 'aside-top': () => h('div', 'this could be huge'),
  //     // 'aside-mid': () => h('div', { style: { height: '300px' } }, 'Sponsors'),
  //     // 'aside-bottom': () => h('div', { style: { height: '300px' } }, 'Sponsors'),
  //   })
  // }
}