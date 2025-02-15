<template>
  <div class="scene">
    <div class="background">
      <div class="stars">
        <div v-for="i in 60" :key="i" class="star"></div>
      </div>
      <div class="moon">
        <div class="moon-hole-1"></div>
        <div class="moon-hole-2"></div>
        <div class="moon-hole-3"></div>
        <div class="moon-halo"></div>
      </div>
      <div class="mountains">
        <div v-for="i in 4" :key="i" class="mountain"></div>
      </div>
      <div class="sea">
        <div v-for="i in 30" :key="i" class="wave"></div>
        <div class="boat">
          <div class="boat-bottom">
            <div class="squares">
              <div class="square"></div>
              <div class="square"></div>
              <div class="square"></div>
              <div class="square"></div>
            </div>
          </div>
          <div class="boat-behind"></div>
          <div class="boat-top-left"></div>
          <div class="boat-top-right"></div>
        </div>
        <!--        <div class="boat">-->
        <!--          <div class="sail"></div>-->
        <!--          <div class="sail"></div>-->
        <!--          <div class="base"></div>-->
        <!--        </div>-->
      </div>
    </div>
    <div class="lighthouse-group">
      <div class="land"></div>
      <div class="lighthouse-holder">
        <div class="shadow"></div>
        <div class="lighthouse"></div>
        <div class="top">
          <div class="light-container">
            <div class="light"></div>
          </div>
          <div class="middle"></div>
          <div class="roof">
            <div class="roof-light"></div>
          </div>
        </div>
        <div class="windows">
          <div v-for="i in 4" :key="i" class="window"></div>
        </div>
        <div class="door">
          <div class="stairs"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import {ref} from "vue";

let isDoom = ref(false) // 是否开启doom模式

</script>

<style scoped lang="scss">
@use "sass:math";

$x-dark: #29284c;
$dark: #4c4b82;
$medium: #717ae1;
$light: #b9befa;
$x-light: #d6d9f6;
$aqua: #75e2fa;
$grey: #9e9ebe;
$yellow: #f7f2b4;

$boatSpeed: 80s;

*, *:before, *:after {
  box-sizing: inherit;
}

* {
  position: absolute;
}

*:before, *:after {
  content: "";
  position: absolute;
}

.scene {
  height: 100%;
  width: 100%;
}

.background {
  width: 100%;
  height: 100%;
  background: linear-gradient(
          $x-dark 0%,
          $dark 10%,
          $medium 60%,
          $aqua 90%
  );
  overflow: hidden;
  z-index: 1;
}

.mountains {
  width: 100%;
  height: 250px;
  bottom: 65px;
  z-index: 3;

  .mountain {
    width: 250px;
    height: 250px;
    background-color: $medium;
    right: 50px;
    bottom: -40px;
    transform: rotate(45deg);
    border-radius: 3px;

    &:after {
      width: 100%;
      height: 100%;
      opacity: 0.7;
      background-image: linear-gradient(135deg, $dark 0%, $medium 20%, $aqua 40%);
    }
  }

  .mountain:nth-child(2) {
    right: 220px;
    width: 240px;
    height: 240px;
    z-index: 2;
  }

  .mountain:nth-child(3) {
    right: 350px;
    width: 260px;
    height: 260px;
  }

  .mountain:nth-child(4) {
    right: 130px;
    width: 200px;
    height: 200px;
    z-index: 3;
    bottom: -70px;

    &:after {
      background-image: linear-gradient(135deg, $dark 0%, $medium 6%, $aqua 20%);
    }
  }
}

.sea {
  width: 100%;
  height: 170px;
  bottom: 0;
  left: 0;
  z-index: 4;
  //background: linear-gradient(#5748cc, #3c709b);
  background: linear-gradient($dark, $medium);
  opacity: 0.6;

  .wave {
    background-color: $light;
    height: 3px;
    border-radius: 100%;
    opacity: 0.2;
  }

  @for $i from 1 through (30) {
    $size: math.random(100) + 50px;
    .wave:nth-of-type(#{$i}) {
      bottom: math.random(170) + px;
      left: math.random(100) + vw;
      width: $size;
      opacity: math.random(5) * 0.1;
      animation-delay: math.random(3) + s;
      animation: wave 5s linear infinite;
    }
  }
}

.boat {
  height: 150px;
  width: 120px;
  z-index: 3;
  bottom: 90px;
  opacity: 1;
  animation: boat $boatSpeed linear infinite;

  &:after {
    width: 80px;
    height: 50px;
    left: 22px;
    bottom: -50px;
    background-image: linear-gradient(to bottom, #6d1e5a 0%, transparent 100%);
    z-index: -1;
    animation: boatShadow 100s linear infinite;
  }

  .boat-bottom {
    bottom: 0;
    left: 0;
    -webkit-clip-path: polygon(0 70%, 100% 70%, 85% 100%, 15% 100%);
    clip-path: polygon(0 70%, 100% 70%, 85% 100%, 15% 100%);
    background-color: $x-dark;
    width: 100%;
    height: 100px;

    &:before {
      left: 0;
      bottom: 0;
      height: 100%;
      width: 50%;
      background-color: $x-dark;
    }

    &:after {
      background-color: $x-dark;
      width: 50%;
      height: 10px;
      left: 0;
      bottom: 10px;
    }

    .squares {
      width: 100%;
      height: 8px;
      bottom: 20px;
      left: 2px;
    }

    .square {
      background-color: #ffad54;
      width: 5px;
      height: 5px;
      bottom: 0px;
    }

    .square:nth-of-type(1) {
      left: 10px;
    }

    .square:nth-of-type(2) {
      left: 40px;
    }

    .square:nth-of-type(3) {
      left: 70px;
    }

    .square:nth-of-type(4) {
      left: 100px;
    }
  }

  .boat-behind {
    width: 40px;
    height: 10px;
    background-color: $x-dark;
    bottom: 30px;
    left: 40px;

    &:after {
      width: 50%;
      height: 100%;
      left: 0;
      background-color: $x-dark;
    }
  }

  .boat-top-left {
    background-color: $x-dark;
    -webkit-clip-path: polygon(0% 100%, 50% 0%, 50% 100%);
    clip-path: polygon(0% 100%, 50% 0%, 50% 100%);
    width: 95%;
    height: 75%;
    bottom: 37px;
  }

  .boat-top-right {
    right: 0%;
    bottom: 37px;
    width: 95%;
    height: 60%;
    background-color: $x-dark;
    z-index: 33;
    clip-path: polygon(0% 100%, 50% 0%, 50% 100%);
    transform: scaleX(-1);
  }
}

.boat:nth-of-type(1) {
  left: 15%;
  top: 10%;
  animation: boat 4s infinite ease;
  // transform:scale(0.8);
}

.boat:nth-of-type(2) {
  right: 15%;
  bottom: 29%;
  animation: waves 4s infinite ease;

  &:after {
    transform: scaleX(-1);
    left: 13%;
    height: 100px;
    bottom: -99px
  }
}


.stars {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1;

  .star {
    border-radius: 50%;
    background-color: $light;
    animation: twinkle 5s linear infinite;
  }

  @for $i from 1 through (60) {
    $size: math.random(4) + px;
    $top: math.random(100) + vh;
    $left: math.random(100) + vw;
    .star:nth-of-type(#{$i}) {
      width: $size;
      height: $size;
      top: $top;
      left: $left;
      animation-delay: math.random(5) + s;
    }
  }
}

.moon {
  width: 125px;
  height: 125px;
  z-index: 4;
  box-shadow: 0 0 10px rgba(255, 255, 255, 0.5);
  background-color: #fff;
  border-radius: 50%;
  top: 25%;
  right: 10%;
  transform: translate(-50%, -50%);

  .moon-hole-1 {
    width: 35px;
    height: 35px;
    background-color: #f0f0e3;
    border-radius: 50%;
    left: 60%;
    top: 50%;
    z-index: 3;
    transform: translate(-50%, -50%);
    border-radius: 50%;
  }

  .moon-hole-2 {
    width: 13px;
    height: 13px;
    background-color: #f0f0e3;
    left: 84%;
    top: 55%;
    z-index: 2;
    transform: translate(-50%, -50%);
    border-radius: 50%;
  }

  .moon-hole-3 {
    width: 20px;
    height: 20px;
    background-color: #f0f0e3;
    left: 65%;
    top: 75%;
    z-index: 1;
    transform: translate(-50%, -50%);
    border-radius: 50%;
  }

  .moon-halo {
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: #fff;
    opacity: 0.2;
    width: 150px;
    height: 150px;
    border-radius: 50%;
    transform-origin: 0 0;
    animation: shine 3s ease-in-out infinite alternate;

    &:before {
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      background-color: #fff;
      opacity: 0.2;
      width: 180px;
      height: 180px;
      border-radius: 50%;
      transform-origin: 0 0;
      animation-delay: 200ms;
      animation: shine 3s ease-in-out infinite alternate;
    }

    &:after {
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      background-color: #fff;
      opacity: 0.2;
      width: 222px;
      height: 222px;
      border-radius: 50%;
      transform-origin: 0 0;
      animation-delay: 400ms;
      animation: shine 3s ease-in-out infinite alternate;
    }

  }

}

.lighthouse-group {
  width: 50%;
  height: 100%;
  bottom: 0;
  left: 0;
  z-index: 2;

  .land {
    width: 400px;
    height: 60px;
    left: -30px;
    bottom: 0;
    background-image: linear-gradient(to top, $x-dark 80%, $medium 100%);
    border-radius: 10px;
    transform: skewX(35deg);
  }

  .lighthouse-holder {
    height: 450px;
    width: 100px;
    bottom: 80px;
    left: 180px;

    .lighthouse {
      width: 100%;
      height: 100%;
      background-color: $x-light;
      transform: perspective(600px) rotateX(20deg);

      &:after {
        width: 100%;
        height: 100%;
        opacity: 1;
        background-image: linear-gradient(
                to right,
                rgba($x-light, 0.6) 0%,
                $x-dark 8%,
                transparent 70%,
                rgba($x-light, 0.4) 100%
        );
      }
    }

    .top {
      width: 94px;
      height: 60px;
      left: 3px;
      top: -15px;
      $lightSpeed: 20s;

      .light-container {
        height: 40px;
        width: 35vw;
        bottom: 2px;
        left: 40px;
        transform-style: preserve-3d;
        transform-origin: left bottom;
        transform: perspective(500px) rotateY(0deg);
        animation: lightRotate $lightSpeed linear infinite;

        .light {
          width: 50%;
          height: 80%;
          transform-style: preserve-3d;
          transform-origin: left center;
          transform: perspective(500px) rotateY(-35deg);
          background: linear-gradient(90deg, $yellow -100%, rgba(255, 255, 255, 0) 100%);
        }
      }

      .middle {
        width: 88px;
        height: 35px;
        left: 2px;
        bottom: 7px;
        border: 2px solid $x-dark;
        border-radius: 3px;
        background-image: repeating-linear-gradient(
                90deg,
                $x-dark,
                $x-dark 4px,
                $grey 4px,
                rgba(255, 255, 255, 0) 21px
        );
        background-position: -2px 0;

        &:before {
          width: 100%;
          height: 100%;
          z-index: -1;
          background-color: $yellow;
          box-shadow: 0 0 10px $x-light, 0 0 20px $yellow, 0 0 30px $yellow,
          0 0 40px $yellow, 0 0 70px $yellow;
        }
      }

      .roof {
        width: 0;
        height: 0;
        left: -3px;
        bottom: 42px;
        border-left: 50px solid rgba(255, 255, 255, 0);
        border-right: 50px solid rgba(255, 255, 255, 0);
        border-bottom: 40px solid $x-dark;

        &:before {
          width: 14px;
          height: 14px;
          left: -7px;
          bottom: -7px;
          background-color: $x-dark;
          border-radius: 50%;
        }

        &:after {
          width: 4px;
          height: 14px;
          left: -2px;
          bottom: 5px;
          background-color: $x-dark;
          border-radius: 3px;
        }

        .roof-light {
          width: 100%;
          height: 40px;
          left: -50px;
          clip-path: polygon(50% 0, 0% 100%, 100% 100%);
          background-image: linear-gradient(135deg, $x-dark 40%, rgba($yellow, 0.5) 100%);
        }
      }
    }

    .shadow {
      width: 117px;
      height: 50px;
      background-color: $x-dark;
      left: -32px;
      bottom: -70px;
      transform: skewX(-45deg);
    }

    .windows {
      width: 100%;
      height: 100%;
      $bottom: 90px;

      @for $i from 1 through (4) {
        .window:nth-of-type(#{$i}) {
          background-color: $x-dark;
          height: 25px;
          width: 15px;
          left: 43px;
          border-bottom: 2px solid rgba($light, 0.7);
          border-radius: 25px 25px 0 0;
          bottom: $bottom;
        }
        $bottom: $bottom + 90px;
      }
    }

    .door {
      background-color: $x-dark;
      height: 40px;
      width: 25px;
      left: 38px;
      bottom: -2px;
      border-radius: 2px 2px 0 0;

      .stairs {
        width: 27px;
        height: 28px;
        background-color: $x-dark;
        top: 34px;
        left: -1px;
        transform: perspective(100px) rotateX(45deg);
        background-image: repeating-linear-gradient(to bottom, $x-dark, $x-dark 4px, $light 4px, rgba(white, 0.1) 5px);
      }
    }
  }
}

@keyframes twinkle {
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: 0.3;
  }
}

@keyframes wave {
  0%, 100% {
    transform: translateX(0);
  }
  50% {
    transform: translateX(-10px);
  }
}

@keyframes boat {
  0% {
    transform: translateX(100vw) scale(0.8);
  }
  80%, 100% {
    transform: translateX(-20vw) scale(0.8);
  }
}

@keyframes boatShadow {
  0% {
    transform: skewX(35deg) translateX(15px);
  }
  50%, 100% {
    transform: skewX(-55deg) translateX(-35px);
  }
}

@keyframes lightRotate {
  0%, 100% {
    transform: perspective(500px) rotateY(0deg);
  }
  25% {
    transform: perspective(500px) rotateY(5deg);
  }
  75% {
    transform: perspective(500px) rotateY(-100deg);
  }
}

@keyframes shine {
  0% {
    transform: scale(1) translate(-50%, -50%);
  }
  100% {
    transform: scale(1.02) translate(-50%, -50%);
  }
}
</style>