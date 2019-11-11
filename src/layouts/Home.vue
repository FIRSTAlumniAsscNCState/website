<template>
    <div class="layout">
        <nav class="navbar" role="navigation" aria-label="Main Navigation">
            <div class="container">
                <div class="navbar-brand">
                    <a href class="navbar-item">
                        <strong>
                            <g-link to="/">{{ $static.metadata.siteName }}</g-link>
                        </strong>
                    </a>
                </div>
                <div class="navbar-menu">
                    <div class="navbar-end">
                        <g-link class="navbar-item" to="/">Home</g-link>
                        <g-link class="navbar-item" to="/about/">About</g-link>
                    </div>
                </div>
            </div>
        </nav>
        <section class="section">
            <div class="container">
                <div class="content">
                    <slot />
                </div>
            </div>
        </section>
    </div>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<style lang="scss">
.header-anchor {
    margin-right: 0.3em;
    opacity: 0.5;
    transition: 0.25s;

    &:hover {
        opacity: 1;
        color: inherit;
    }
}
</style>
