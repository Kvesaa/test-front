<template>
    <div>
        <TopNav />
        <div class="content">
            <nuxt/>
        </div>
        <Footer />
    </div>
</template>

<script>
import TopNav from './partials/TopNav.vue'
import Footer from './partials/Footer.vue'

export default {
    components: {
        TopNav,
        Footer
    }

}
</script>

<style>
.content {
    padding-bottom: 20px;
    display: flex;
    flex-direction: column;
    min-height: 100vh;
}

.footer {
    position: sticky;
    bottom: 0;
    width: 100%;
    z-index: 9999;
}

</style>