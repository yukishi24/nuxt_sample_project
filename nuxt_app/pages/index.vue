<!-- テンプレート -->
<template>
  <div>
    <div>{{$store.state.message}}</div>
    <div>カウント：{{$store.state.count}}</div>
    <button v-on:click="onClick">カウントアップ</button>
    <RouterLink to="/next">次ページへ</RouterLink>
  </div>
</template>

<!-- スクリプト -->
<script>
export default {
  methods:{
    onClick: function(){
      this.$store.commit("countup")
    }
  }
}
</script>

<!-- スタイル -->
<style>
</style>