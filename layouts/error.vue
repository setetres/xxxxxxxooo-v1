<template>
    <section class="application__content">
        <div class="vinyl">
            <p v-if="error.statusCode === 404">
                F IN CHAT — Page not found
            </p>
            <p v-else>
                An error occurred
            </p>
            <small>
                <nuxt-link to="/" class="link">
                    Go back
                </nuxt-link>
            </small>
        </div>
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
