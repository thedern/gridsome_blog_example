// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

// define global layouts so do not need to be imported page-by-page
import DefaultLayout from '~/layouts/Default.vue'
import BlogLayout from '~/layouts/Blog.vue'


export default function (Vue, { router, head, isClient }) {
  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout)
  Vue.component('BlogLayout', BlogLayout)
}
