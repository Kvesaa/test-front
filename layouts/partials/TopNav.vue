<template>
    <div class="header">
        <b-navbar type="dark">
            <nuxt-link class="navbar-logooo" to="/">HomeLogo</nuxt-link>
            <b-navbar-nav>
                <li class="nav-item">
                    <nuxt-link class="nav-link" to="/conferences/indexc">Konferencije</nuxt-link>
                </li>
            </b-navbar-nav>
            <b-navbar-nav class="ml-auto">
                <li class="nav-item">
                    <nuxt-link class="nav-link" to="/auth/Role">Role</nuxt-link>
                </li>
                <li class="nav-item">
                    <nuxt-link class="nav-link" to="/auth/logout">Logout</nuxt-link>
                </li>
                <li class="nav-item">
                    <nuxt-link class="nav-link" to="/auth/login">Login</nuxt-link>
                </li>
                <li>
                    <nuxt-link class="nav-link" to="/auth/register">Register</nuxt-link>
                </li>
            </b-navbar-nav>
        </b-navbar>
    </div>
</template>

<style>
.header {
    background-color: #2A2A2A;
}
.nav-link {
    color: #FFFFFF!important;
}
.nav-link:hover {
    color: #D40E63!important;
    transition: 0.2s!important;
}

</style>