
<template>
  <Layout>
    <h1>{{ $page.redditPost.title }}</h1>
    <img :src="$page.redditPost.img.images[0].source.url" alt="img">
  </Layout>
</template>



<page-query>

 query RedditPost ($path: String!) {
  redditPost: redditPost (path: $path) {
    title
    path
    thumbnail
    img {
      images {
        source {
          url
        }
      }
    }
  }
}
</page-query>

<script>
export default {
  metaInfo () {
    return {
      title: this.$page.redditPost.title
    }
  }
}
</script>