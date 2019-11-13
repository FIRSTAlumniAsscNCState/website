<template>
    <div class="columns">
        <div class="column">
            <h1 class="title">
                We are the
                <span class="has-text-ncsu">
                    <i>FIRST</i> Alumni Association at NC State.
                </span>
            </h1>
            <h2 class="subtitle">
                We provide volunteering, networking, and social opportunities to alumni of
                <i>FIRST</i> programs at NCSU.
            </h2>
            <div class="buttons">
                <a href="https://www.firstinspires.org" target="_blank" class="button">
                    What is&nbsp;
                    <i>FIRST</i>?
                </a>
                <a href="https://www.ncsu.edu" target="_blank" class="button">What is NC State?</a>
            </div>
        </div>
        <div class="column is-paddingless is-hidden-touch">
            <Navbar />
        </div>
    </div>
</template>

<script>
import Navbar from "~/components/Navbar.vue";

export default {
    components: {
        Navbar
    }
};
</script>

<style lang="scss" scoped>
</style>