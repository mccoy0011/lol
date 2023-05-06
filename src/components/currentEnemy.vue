<template lang="pug">
.content
  .no-data(v-if="!info")
    van-icon(name="closed-eye", size="50vw", color="#000" @click="showSelectHero")
  .en-info(v-else)
    .title
      | {{ info.name }}
    .speed
      span| 技能急速
      van-button(type="primary", @click="resetSpeed", size="small", color="#7232dd")
        |重置
      van-stepper(v-model="speed", min="0", step="10", button-size="10vw", input-width="10vw")
</template>

<script>
export default {
  name: 'currentEnemy',
  props: [ 'idx', 'info' ],
  data() {
    return {
      showHeroList: false,
      speed: 0
    }
  },
  methods: {
    showSelectHero() {
      this.$emit('showpopup', this.idx)
    },
    resetSpeed() {
      this.speed = 0
    }
  },
  created() {
    console.log(this.info)
  }
}

</script>

<style scoped lang="stylus">
.content
  padding: 3vw
  font-size: 5vw
  .no-data
    padding-top: 5vh
    text-align: center
  .en-info
    .title
      text-align: center
      font-size: 10vw
      margin-bottom: 2vh
    .speed
      display: flex
      justify-content space-between
      span
        margin-right: 3vw
</style>