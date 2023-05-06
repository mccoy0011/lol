<template lang="pug">
.content
  van-tabs
    van-tab(v-for="(item, index) in enemyInfo", :title="item.title")
      currentEnemy(:idx="index" :info="item.info" @showpopup="showPopup")
  van-popup(v-model:show="showHeroList" round position="bottom" :style="{ height: '40%' }")
    van-picker(title="选择英雄" show-toolbar :columns="info" :columns-field-names="pickerData" @confirm="onConfirm" @cancel="onCancel")
</template>

<script>
import data from '../assets/heroInfo.json'
import currentEnemy from './currentEnemy.vue'
export default {
  name: "enemyDetails",
  components: {
    currentEnemy
  },
  data() {
    return {
      showHeroList: false,
      info: data,
      pickerData: { text: 'name', value: 'skill'},
      currentIndex: null,
      enemyInfo: [
        { title: '上', info: { "name": "安妮", "skill": { "q": [ 4, 4, 4, 4, 4 ], "w": [ 8, 8, 8, 8, 8 ], "e": [ 12, 11, 11, 10, 10 ], "r": [ 130, 115, 100 ] } } },
        { title: '野', info: null },
        { title: '中', info: null },
        { title: '下', info: null },
        { title: '辅', info: null }
      ],
      currentEnemy: [
        {skillName: 'flash', timeout: 60, timer: null, originTimeout: 60},
        {skillName: 'transport', timeout: 300, timer: null, originTimeout: 300}
      ]
    }
  },
  methods: {
    showPopup(index) {
      this.currentIndex = index
      this.showHeroList = true
    },
    onConfirm(item) {
      this.enemyInfo[this.currentIndex].info = item.selectedOptions[0]
      console.log(this.enemyInfo)
    },
    onCancel() {
      this.showHeroList = false
    },

  },
  created() {
    console.log(this.info)
  }
}
</script>

<style scoped>

</style>