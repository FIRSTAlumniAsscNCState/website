<template>
    <ul>
        <li v-for="(member, i) in $static.leadership" :key="i">{{ member.name }}: {{member.title }}</li>
    </ul>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
</style>

<static-query>
query {
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