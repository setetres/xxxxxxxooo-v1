<template>
    <section class="application__content">
        <p v-if="error.statusCode === 404">
            Page not found
        </p>
        <p v-else>
            An error occurred
        </p>
        <p>
            <small>
                <nuxt-link to="/" class="link">
                    Go back
                </nuxt-link>
            </small>
        </p>
    </section>
</template>
<script>
    export default {
        props: {
            error: {
                type: Object,
                default: () => {}
            }
        },

        mounted() {
            this.$nextTick(() => {
            })
        },

        beforeRouteLeave(to, from, next) {
            setTimeout(function() {
                next()
            }, 100)
        },

        head() {
            return {
                title: 'XXXXXXXOOO — Error'
            }
        }
    }
</script>
