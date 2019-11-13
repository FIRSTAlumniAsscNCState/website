<template>
    <div class="columns is-multiline is-3">
        <div class="column is-one-third" v-for="(member, i) in $static.leadership.data" :key="i">
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
                            <p class="title is-4">{{member.name}}</p>
                            <p class="subtitle is-6">{{member.title}}</p>
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

    .card {
        height: 100%;
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