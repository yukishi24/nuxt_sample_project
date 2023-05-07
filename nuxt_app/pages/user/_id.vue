<!-- テンプレート -->
<template>
    <div>{{message}}</div>
</template>

<!-- スクリプト -->
<script>
export default {
    computed: {
    message: function() {
        let user_id = this.$route.params.id
        return "ユーザーID["+ user_id +"]のページです。"
    }
    }
}
</script>

<!-- スタイル -->
<style>
</style>