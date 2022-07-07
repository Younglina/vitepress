
<script setup>
// import { useData } from 'vitepress'
// import { ref } from 'vue'
import { MlHeatmap } from 'ml-heatmap'
import lcData from '../lcData.json'
import 'ml-heatmap/dist/style.css'
// import CssDoodle from 'css-doodle'

// const { theme } = useData()
// const { nav, sidebar } = theme.value
// let totalBlog = 0, allBlog = []
// for (let i of nav) {
//   totalBlog += (i.items ? i.items.length : 0)
//   allBlog = allBlog.concat(i.items || [])
// }

const submissionCalendar = JSON.parse(lcData.userCalendar.submissionCalendar)
let calendarData = Object.keys(submissionCalendar).map((key) => {
  let date = new Date(key * 1000)
  let day = date.getDate(), year = date.getFullYear(), month = date.getMonth() + 1
  return {
    date: `${year}-${month.toString().padStart(2, '0')}-${day.toString().padStart(2, '0')}`,
    count: submissionCalendar[key],
  }
})
</script>

<template>
  <div class="home-page">
    <!-- <css-doodle grid="48x1" click-to-update class="css-doodle">
      :doodle {
      grid-row-gap: 2px;
      width: 100%; height: 8em;
      }
      @row(1) {
      background: @pick('#FEE3EC','#F9C5D5','#F999B7','#F2789F');
      width: 10px; height: @rand(10%, 100%);
      }
    </css-doodle> -->
    <h1 class="name">Younglina</h1>
    <p class="tagline">Younglina写博客的地方.</p>
    <div class="article-item">
      <article class="article">
        <h2 class="title">算法刷题<img class="svg-img" src="/leetcode.svg" /></h2>
        <a class="details" href="https://leetcode.cn/u/younglina/" target="_blank">我的leetcode主页</a>
      </article>
      <article class="article">
        <h2 class="title">网站源码<img class="svg-img" src="/github.svg" /></h2>
        <a class="details" href="https://github.com/Younglina/vitepress/" target="_blank">我的GITHUB</a>
      </article>
      <article class="article">
        <h2 class="title">最新记录</h2>
        <a class="details" href="/vitepress/write/algorithms/leetCode200">2022-07-07</a>
        <br />
        <a class="details" href="/vitepress/write/algorithms/leetCode200">200.岛屿数量</a>
      </article>
    </div>
    <MlHeatmap class="heat-map" :data="calendarData" :year="2022" locale="cn" />
    <!-- <div style="display: flex;justify-content: center;align-items: center;">
    <img style="margin: 10px;height: 210px;width: 50%" src="https://github-readme-stats.vercel.app/api?username=Younglina&show_icons=true&theme=gruvbox">
    <img style="margin: 10px;height: 210px;width: 50%" src="https://leetcard.jacoblin.cool/younglina?theme=unicorn&site=cn">
  </div> -->
  </div>
</template>

<style>
.home-page {
  padding: 0 10%;
}

.heat-map {
  margin: 40px 0 !important;
  width: 100%;
}

.name {
  color: var(--vp-home-hero-name-color);
  font-size: 48px;
  line-height: 64px;
  font-weight: 700;
  padding-bottom: 10px;
}

.svg-img {
  display: inline-block;
  width: 16px;
  height: 16px;
  margin-left: 4px;
  margin-bottom: 4px;
}

.tagline {
  color: var(--vp-c-text-2);
  font-size: 20px;
  line-height: 28px;
  font-weight: 500;
  padding-bottom: 20px;
}

.article-item {
  display: flex;
  flex-wrap: wrap;
}

.article {
  border: 1px solid var(--vp-c-bg-soft);
  border-radius: 12px;
  padding: 24px;
  height: 126px;
  background-color: var(--vp-c-bg-soft);
  width: calc(93% / 3);
  padding: 24px;
  margin: 8px;
  display: inline-block;
}

.article .title {
  line-height: 24px;
  font-size: 16px;
  font-weight: 600;
}

.article .details {
  padding-top: 16px;
  line-height: 24px;
  font-size: 14px;
  font-weight: 500;
  color: var(--vp-c-text-2);
}
</style>