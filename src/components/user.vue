<template>
    <div class='user'>
        <div>this is user</div>
        <div>
            <p>{{this.user.name}}</p>
            <p>{{this.user.age}}</p>
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
    created() {
        this.$ajax({
            method: 'get',
            url: '/p9ix5d!3/v2/recommend',
            responseType: 'json'
        }).then(res => {
            console.log(res);
        }).catch(error => {
            console.log(error);
        });
    }
};
</script>

<style lang='less' scoped>
.user {
    background: #888;
    p {
        color: #eee;
    }
}
</style>
