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
                <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
                    <input type="hidden" name="cmd" value="_s-xclick" />
                    <input type="hidden" name="hosted_button_id" value="MCBSG7EC7QRQU" />
                    <input
                        class="paypal-image"
                        type="image"
                        src="https://www.paypalobjects.com/en_US/i/btn/btn_donateCC_LG.gif"
                        border="0"
                        title="PayPal - The safer, easier way to pay online!"
                        alt="Donate with PayPal button"
                    />
                    <button type="submit" class="button is-paypal">
                        <span class="icon">
                            <i class="fab fa-paypal"></i>
                        </span>
                        <span>Donate</span>
                    </button>
                </form>
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
.paypal-image {
    display: none;
}
</style>