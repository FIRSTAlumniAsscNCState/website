<template>
    <HomeLayout>
        <div v-html="$static.homepageContent.content"></div>
    </HomeLayout>
</template>

<script>
export default {
    metaInfo: function() {
        return {
            title: this.$static.homepageContent.title
        };
    }
};
</script>

<style>
</style>

<static-query>
query {
  homepageContent: fileNode(path: "/home/homepage/") {
    id
    path
    content
    title
  }
  leadership(path: "/home/leadership/") {
    id
    path
    data {
      name
      title
    }
  }
}
</static-query>