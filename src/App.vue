<template>

  <nav class="navbar-pc" id="menu">
    <div class="wrapper">
      <p class="logo">
        一个测试页面
      </p>
      <ul class="tabs">
        <li data-menuanchor="welcome">
          <a :href=" '#' + fullPageOptions.anchors[0] ">欢迎</a>
        </li>
        <li data-menuanchor="about">
          <a :href=" '#' + fullPageOptions.anchors[1] ">关于我</a>
        </li>
        <li data-menuanchor="skill">
          <a :href=" '#' + fullPageOptions.anchors[2] ">技术栈</a>
        </li>
      </ul>
    </div>
  </nav>

  <fullPage :options="fullPageOptions">
    <div class="section">
      <welcome/>
    </div>
    <div class="section">
      <about/>
    </div>
    <div class="section">
      <skill/>
    </div>
  </fullPage>

</template>

<script setup>
import {reactive} from "vue";
import Welcome from "@/pages/welcome.vue";
import About from "@/pages/about.vue";
import Skill from "@/pages/skill.vue";

const fullPageOptions = reactive({
  licenseKey: 'hahaha', // 产品密钥
  menu: '#menu', // 菜单
  anchors: ['welcome', 'about', 'skill'], // 锚点
})

</script>

<style lang="scss" scoped>

.section {
  overflow: hidden;

  &::before {
    //content: "";
    //position: absolute;
    //left: 18%;
    //bottom: 0%;
    //width: 60%;
    //height: 600px;
    //background-image: linear-gradient(0deg, var(--text-color-light), transparent);
    //z-index: 5;
    //border-radius: 0px;
    //transform: rotate3d(1, 1, 1, 45deg) translateY(388px);
  }

  &::after {
    //content: "";
    //position: absolute;
    //right: 0%;
    //top: 50%;
    //transform: translateY(-50%);
    //bottom: 0;
    //width: 40px;
    //height: 100%;
    //background-image: linear-gradient(-90deg, #0000001c, transparent);
    //z-index: 9;
    //border-radius: 0 10px 10px 0;
  }

}

/* 背景色 */
.fp-section:nth-child(1) {
  //background-color: var(--background-color);
  display: flex !important;
  flex-direction: column !important;
  justify-content: normal !important;
}

.fp-section:nth-child(2) {
  background-color: var(--vic-background-color);
}

.fp-section:nth-child(3) {
  background-color: var(--background-color);
}

:deep(.fp-watermark) {
  display: none !important;
}

/* 菜单样式 */
.navbar-pc {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100px;
  z-index: 99;
  display: flex;
  align-items: center;
  justify-content: center;

  .wrapper {
    height: 60px;
    width: 75%;
    padding: 0 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: var(--text-color-light);
    border-radius: 50px;

    /* 毛玻璃效果 */
    background-size: 4px 4px;
    backdrop-filter: saturate(50%) blur(4px);
    -webkit-backdrop-filter: saturate(50%) blur(4px);
    background-image: radial-gradient(transparent 1px, var(--secondary-color) 1px);

    .logo {
      display: flex;
      align-items: center;
      font-size: 18px;
      color: var(--text-color);
    }

    .tabs {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 12px;
      list-style: none;
      padding: 0;
      margin: 0 48px;
      font-size: 18px;

      @media screen and (max-width: 768px) {
        display: none;
      }

      @media screen and (max-width: 1280px) {
        font-size: 20px;
      }

      li {
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;

        a {
          margin: 0 12px;
          color: var(--text-color);
          text-decoration-line: none;

          &:hover {
            color: var(--primary-color);
            transition: color 0.3s ease;
          }
        }

        &.active {
          a {
            color: var(--primary-color);
          }
        }
      }
    }

    &::after {
      content: '';
      position: absolute;
      width: 100%;
      height: 2px;
      bottom: 0;
      left: 0;
      background: -webkit-gradient(linear, left top, right top, from(rgba(0, 0, 0, 0)), color-stop(var(--text-color-light)), to(rgba(0, 0, 0, 0)));
      background: -o-linear-gradient(left, rgba(0, 0, 0, 0), var(--text-color-light), rgba(0, 0, 0, 0));
      background: linear-gradient(90deg, rgba(0, 0, 0, 0), var(--text-color-light), rgba(0, 0, 0, 0));
    }

  }

}
</style>
