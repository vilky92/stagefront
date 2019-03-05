<template>
    <div>
        <router-link class="item clickable":to="{name: 'get-employee-admin'}"tag="li">liste des employés</router-link>
        <router-link class="item clickable":to="{name: 'post-employee-admin'}"tag="li">désactiver un employé</router-link>
        <router-view/>
    </div>
</template>

<script>
export default {

}
</script>

<style>

</style>
