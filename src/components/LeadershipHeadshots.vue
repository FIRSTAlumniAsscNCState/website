<template>
    <div class="columns is-multiline is-1 is-variable">
        <div class="column is-2" v-for="(member, i) in $static.leadership.data" :key="i">
            <div class="card">
                <div class="card-image">
                    <figure class="image is-1by1">
                        <g-image
                            :src="`/headshots/${member.name}.jpg`"
                            width="480"
                            height="480"
                            :alt="member.name"
                            fit="outside"
                        />
                    </figure>
                </div>
                <div class="card-content">
                    <div class="media">
                        <div class="media-content">
                            <p class="title is-6">{{member.name}}</p>
                        </div>
                    </div>
                </div>
                <div class="card-content">
                    <div class="media">
                        <div class="media-content">
                            <p class="subtitle is-7">{{member.title}}</p>
                        </div>
                    </div>
                </div>
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

.card {
    height: 100%;

    border-radius: 5px;

    img {
        border-top-left-radius: 5px;
        border-top-right-radius: 5px;
    }

    .card-content {
        padding: 1rem;
        display: flex;
        flex-direction: column;
    }
}
</style>

<static-query>
query {
  leadership(path: "/leadership/") {
    id
    path
    data {
      name
      title
    }
  }
}
</static-query>