<template>
    <Layout v-html="$page.fileNode.content" />
</template>

<script>
export default {
    metaInfo: {
        title: "Hello, world!"
    }
};
</script>

<style>
.home-links a {
    margin-right: 1rem;
}
</style>

<page-query>
query {
  fileNode(path: "/homepage/") {
    id
    path
    content
  }
}
</page-query>