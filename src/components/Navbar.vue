<template>
    <nav class="navbar" role="navigation" aria-label="Main Navigation">
        <div class="container">
            <!-- <div class="navbar-brand">
                <a href class="navbar-item">
                    <strong>
                        <g-link to="/">{{ $static.metadata.siteName }}</g-link>
                    </strong>
                </a>
            </div>-->
            <div class="navbar-menu">
                <div class="navbar-end">
                    <div class="navbar-item has-dropdown is-hoverable">
                        <a class="navbar-link">About us</a>

                        <div class="navbar-dropdown is-right">
                            <g-link
                                v-for="(heading, i) in $static.homepage.headings"
                                :key="i"
                                class="navbar-item"
                                :to="heading.anchor"
                            >{{heading.value}}</g-link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </nav>
</template>

<script>
export default {};
</script>

<style>
</style>

<static-query>
query {
  metadata {
    siteName
  }
  homepage(path: "/content/md/") {
    headings {
      value
      anchor
    }
  }
}
</static-query>