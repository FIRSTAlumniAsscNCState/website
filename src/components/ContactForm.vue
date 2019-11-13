<template>
    <form name="Homepage Contact Form" data-netlify="true" method="POST">
        <div class="columns">
            <div class="column">
                <div class="field">
                    <label for="name" class="label">Name</label>
                    <div class="control">
                        <input type="text" name="name" class="input" placeholder="Jane Smith" />
                    </div>
                    <p class="help">What's your first and last name?</p>
                </div>
                <div class="field">
                    <label for="name" class="label">Email</label>
                    <div class="control">
                        <input
                            type="email"
                            name="email"
                            class="input"
                            placeholder="jane@example.com"
                        />
                    </div>
                    <p class="help">What email can we contact you at?</p>
                </div>
            </div>
            <div class="column">
                <div class="field">
                    <label for="question" class="label">Question</label>
                    <div class="field-body">
                        <div class="field">
                            <div class="control">
                                <textarea
                                    name="question"
                                    class="textarea"
                                    placeholder="Explain how we can help you"
                                ></textarea>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="field is-grouped is-grouped-right">
            <p class="control">
                <button type="submit" class="button is-light">Submit</button>
            </p>
        </div>
    </form>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.column:nth-child(2) {
    .field {
        height: 100%;
        display: flex;
        flex-direction: column;
    }

    .control,
    textarea {
        height: 100%;
    }

    textarea {
        flex-grow: 1;
    }
}

textarea {
    height: 100% !important;
}
</style>