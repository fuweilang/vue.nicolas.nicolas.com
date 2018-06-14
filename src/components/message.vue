<template>
    <div class='message'>
        <div>
            <p>{{this.user.name}}</p>
            <p>{{this.user.age}}</p>
            <button @click="setUser">改年龄</button>
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
    computed: {
        ...mapGetters({
            user: 'getUser'
        })
    },
    methods: {
        setUser() {
            this.$store.dispatch('setUser', {
                name: 'lily',
                age: 19
            });
        }
    }
};
</script>

<style scoped>
</style>
