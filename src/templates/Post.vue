<!-- postpage template generates a page for each post in our posts collection -->
<template>
  <BlogLayout>
    <div class="markdown-body" v-html="$page.post.content"/>
  </BlogLayout>
</template>

<!-- query is based on mocked up from graphQL explorer -->
<page-query>
  query PostReturn ($path: String!) {
    post: post(path: $path) {
      title
      content
    }
}
</page-query>

<script>
  export default {
    metaInfo() {
      return {
        title: this.$page.post.title
      }
    }
  }

</script>



