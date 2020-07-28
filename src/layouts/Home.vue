<template>
    <div class="layout">
        <Navbar />
        <section class="section">
            <div class="container">
                <MissionStatementHero />
            </div>
        </section>
        <section class="section">
            <div class="container box">
                <div class="content">
                    <slot />
                </div>
            </div>
        </section>
        <section class="section"></section>
        <footer class="footer">
            <div class="content container has-text-centered">
                <div class="columns">
                    <div class="column has-text-right is-three-quarters">
                        <p>
                            The
                            <strong>
                                <i>FIRST</i> Alumni Association at NC State
                            </strong> is a student organization of
                            <a
                                href="https://ncsu.edu"
                            >North Carolina State University</a>. We work closely with
                            <a href="http://www.firstnorthcarolina.org">
                                <i>FIRST</i> North Carolina
                            </a> and
                            <a
                                href="https://www.ece.ncsu.edu/"
                            >NC State's Electrical and Computing Engineering Department</a>.
                        </p>
                    </div>
                    <div class="column has-text-left">
                        <g-image src="~/assets/logo.png"></g-image>
                    </div>
                </div>

                <p class="is-size-7">
                    Website design by
                    <a href="https://samweaver.com">Sam Weaver</a>
                    , &copy; {{new Date().getFullYear()}}
                </p>
            </div>
        </footer>
    </div>
</template>

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

.layout {
    display: flex;
    flex-direction: column;
}

.footer {
    flex-grow: 1;
}
</style>

<script>
import MissionStatementHero from "~/components/MissionStatementHero.vue";

export default {
    components: {
        MissionStatementHero,
    },
};
</script>