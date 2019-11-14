<template>
    <div class="columns is-multiline is-1 is-variable">
        <div class="column is-half">
            <figure class="image is-5by4">
                <g-image src="~/assets/gallery/20190308-19210403.jpg" fit="outside" />
            </figure>
        </div>
        <div class="column is-half">
            <figure class="image is-5by4">
                <g-image src="~/assets/gallery/20190309-09272357.jpg" fit="outside" />
            </figure>
        </div>
        <div class="column is-half">
            <figure class="image is-5by4">
                <g-image src="~/assets/gallery/20190310-10402868.jpg" fit="outside" />
            </figure>
        </div>
        <div class="column is-half">
            <figure class="image is-5by4">
                <g-image src="~/assets/gallery/20190315-16535261.jpg" fit="outside" />
            </figure>
        </div>
        <div class="column is-half">
            <div class="content">
                <span class="tag">
                    Some photos by&nbsp;
                    <a href="https://dannylevenson.com/">Danny Levenson</a>
                </span>
            </div>
        </div>
    </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
figure {
    margin: 0;
}
.columns {
    align-items: stretch;
}
</style>