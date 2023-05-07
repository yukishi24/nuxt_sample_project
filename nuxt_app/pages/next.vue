<!-- テンプレート -->
<template>
    <div>
    <div>{{message}}</div>
    <RouterLink to="/">トップページへ</RouterLink>
    </div>
</template>

<!-- スクリプト -->
<script>
export default {
    data: function() {
    return {
        message: 'Hello NextPage!'
    }
    }
}
</script>

<!-- スタイル -->
<style>
</style>