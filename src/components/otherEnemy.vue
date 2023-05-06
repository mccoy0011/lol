<template lang="pug">
.content
  ul
    li(v-for="item in allEnemyInfo")
      .skill(v-for="ii in item", @click="startCountDown(ii)")
        .inner(:style="{height: timePersent(ii)}", :class="bgColor(ii)")
        p| {{ ii.skillName }}
        p| {{ ii.timeout }}
</template>

<script>

export default {
  name: "enemyFlash",
  data() {
    return {
      allEnemyInfo: [
        [
          {skillName: 'flash', timeout: 60, timer: null, originTimeout: 60},
          {skillName: 'transport', timeout: 300, timer: null, originTimeout: 300}
        ],
        [
          {skillName: 'flash', timeout: 300, timer: null, originTimeout: 300},
          {skillName: 'transport', timeout: 300, timer: null, originTimeout: 300}
        ],
        [
          {skillName: 'flash', timeout: 300, timer: null, originTimeout: 300},
          {skillName: 'transport', timeout: 300, timer: null, originTimeout: 300}
        ],
        [
          {skillName: 'flash', timeout: 300, timer: null, originTimeout: 300},
          {skillName: 'transport', timeout: 300, timer: null, originTimeout: 300}
        ],
        [
          {skillName: 'flash', timeout: 300, timer: null, originTimeout: 300},
          {skillName: 'transport', timeout: 300, timer: null, originTimeout: 300}
        ],
      ]
    }
  },
  methods: {
    bgColor(item) {
      let level = 'high'
      if(item.timeout > 5 && item.timeout < 30) {
        level = 'middle'
      } else if(item.timeout >= 30) {
        level = 'low'
      }
      return level
    },
    startCountDown(item) {
      if(item.timer) {
        clearInterval(item.timer)
        item.timer = null
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
    timePersent(item){
      return (((item.originTimeout - item.timeout) / item.originTimeout)*100).toFixed(2) + '%'
    }
  }
}
</script>

<style scoped lang="stylus">
.content
  width: 100%
  padding-top: 2vh
  .cir
    width: 60px;
    height: 120px;
    border-radius: 120px 0 0 120px;
    z-index: 3;
    background: sandybrown;

  ul
    list-style-type: none
    display: flex;
    justify-content space-around
    li
      width 18%
      .skill
        color: #333
        position: relative
        height: 8vh
        margin-bottom: 1vh
        background: #fff
        border-radius: 100px;
        line-height: 4vh;
        text-align: center
        border: 2px #3fecff solid;
        overflow: hidden;
        .inner
          position: absolute
          width: 100%;
          bottom: 0;
          left: 0;
          background: #6149f6
        .low
          background: #07c160
        .middle
          background: #ff976a
        .high
          background: #ee0a24
</style>