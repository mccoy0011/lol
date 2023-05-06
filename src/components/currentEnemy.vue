<template lang="pug">
.content
  .no-data(v-if="!info")
    van-icon(name="closed-eye", size="50vw", color="#000" @click="showSelectHero")
  .en-info(v-else)
    .title
      | {{ info.name }}
    .speed
      span
        | 技能急速
      van-button(type="primary", @click="resetSpeed", size="small", color="#7232dd")
        |重置
      van-stepper(v-model="speed", min="0", step="10", button-size="10vw", input-width="10vw")
    ul.skills
      li(v-for="(val, key) in info.skill")
        .timer-box(@click="startCountDown(val[skillLevel[key].level -1], key)")
          p
            | {{ val[skillLevel[key].level -1] }}
        van-stepper(v-model="skillLevel[key].level", min="1", :max="val.length" step="1", input-width="6vw", button-size="6vw" @change="changeLevel")
        p
          | {{key}}
</template>

<script>
export default {
  name: 'currentEnemy',
  props: [ 'idx', 'info' ],
  data() {
    return {
      showHeroList: false,
      speed: 0,
      skillLevel: {
        q: {
          level: 0,
          timer: null,
          timeout: 0
        },
        w: {
          level: 0,
          timer: null,
          timeout: 0
        },
        e: {
          level: 0,
          timer: null,
          timeout: 0
        },
        r: {
          level: 0,
          timer: null,
          timeout: 0
        },
      }
    }
  },
  methods: {
    changeLevel(i) {
      console.log(i)
    },
    timePersent(item){
      const originTimeout = item
      return (((originTimeout - item) / originTimeout)*100).toFixed(2) + '%'
    },
    showSelectHero() {
      this.$emit('showpopup', this.idx)
    },
    resetSpeed() {
      this.speed = 0
    },
    startCountDown(item, key) {
      if(this.skillLevel[key].timer) {
        clearInterval(this.skillLevel[key].timer)
        this.skillLevel[key].timer = null
        item.timeout = item.originTimeout
      } else {
        item.timer = setInterval( () => {
          item.timeout--
          if(item.timeout <= 0) {
            clearInterval(item.timer)
            item.timer = null
            item.timeout = item.originTimeout
          }
        }, 1000)
      }
    },
    bgColor(item) {
      let level = 'high'
      if(item.timeout > 5 && item.timeout < 30) {
        level = 'middle'
      } else if(item.timeout >= 30) {
        level = 'low'
      }
      return level
    },
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
    .skills
      margin-top: 2vh;
      display: flex
      justify-content space-between
      li
        width: 20vw
        .timer-box
          position: relative
          height: 10vh
          border: 2px #409EFF solid;
          text-align: center;
          line-height: 10vh;
        p
          text-align: center
          font-size: 7vw
        .low
          background: #67C23A
        .middle
          background: #E6A23C
        .high
          background: #F56C6C
</style>