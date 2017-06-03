<template>
    <!--导航-->
    <menu></menu>
    <!--热门推荐-->
    <hot></hot>
</template>

<script>
    import Menu from './Menu.vue';
    import Hot from './Hot.vue';

    export default{
        components: {
            'menu': Menu,
            'hot': Hot
        }
    }
</script>