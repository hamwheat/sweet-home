<template>
  <div class="scene">
    <div class="background">
      <div class="sun"></div>
      <!-- <div class="mountains">
        <div v-for="i in 3" :key="i" class="mountain"></div>
      </div> -->
      <div class="mountains">
        <div v-for="i in 3" :key="i" class="mountain"></div>
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
      </div>
    </div>
    <div class="lighthouse-group">
      <div class="land">
        <div class="land-grass"></div>
      </div>
      <div class="lighthouse">
        <div class="top"></div>
        <div class="glass"></div>
        <div class="balcony"></div>
        <div v-for="i in 4" :key="i" class="row"></div>
      </div>
    </div>
  </div>
</template>

<script setup></script>

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

$lightblue-color: lightblue;
$light: #ffffff;
$sunsh: #f5de19;
$bottom: #6d0005;
$grass: #44882d;

$land-1: #8fbc2f;
$land-2: #556b2f;

$boatSpeed: 80s;

$bg: radial-gradient(ellipse at center, #f2c5bd 10%, #945986 100%);
$red: #8d3c46;
$white: #f2f2f2;
$green: #778733;
$ocean: #4283a1;
$rail: #636363;

.mountains {
  width: 130%;
  height: 250px;
  bottom: 40px;
  z-index: 3;
  box-sizing: border-box;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: flex-end;

  .mountain {
    transform: rotate(-45deg);
    position: relative;

    &:nth-child(1) {
      width: 250px;
      height: 250px;
      right: 220px;
      background: slategray;
      z-index: -3;
    }

    &:nth-child(2) {
      width: 300px;
      height: 300px;
      right: 350px;
      background: linear-gradient(-225deg, #7c8d9e, #7c8d9e 50%, lightslategray 50%);
      z-index: -1;
    }

    &:nth-child(3) {
      width: 230px;
      height: 230px;
      right: 383px;
      background: rgba(112, 128, 144, 1);
      z-index: -4;
    }
  }
}

*,
*:before,
*:after {
  box-sizing: inherit;
}

* {
  position: absolute;
}

*:before,
*:after {
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
  background-image: linear-gradient(to bottom, #73daf9, #e5f7fe);
  overflow: hidden;
  z-index: 1;
}

// .mountains {
//   width: 100%;
//   height: 250px;
//   bottom: 80px;
//   z-index: 3;

//   .mountain {
//     width: 250px;
//     height: 250px;
//     background-color: $medium;
//     right: 50px;
//     bottom: -40px;
//     transform: rotate(45deg);
//     border-radius: 3px;

//     &:after {
//       width: 100%;
//       height: 100%;
//       opacity: 0.7;
//       background-image: linear-gradient(135deg, $dark 0%, $medium 20%, $aqua 40%);
//     }
//   }

//   .mountain:nth-child(1) {
//     right: 220px;
//     width: 240px;
//     height: 240px;
//     z-index: 2;
//   }

//   .mountain:nth-child(2) {
//     right: 350px;
//     width: 260px;
//     height: 260px;
//   }

//   .mountain:nth-child(3) {
//     right: 130px;
//     width: 200px;
//     height: 200px;
//     z-index: 3;
//     bottom: -70px;

//     &:after {
//       background-image: linear-gradient(135deg, $dark 0%, $medium 6%, $aqua 20%);
//     }
//   }
// }

.sea {
  width: 100%;
  height: 170px;
  bottom: 0;
  left: 0;
  z-index: 4;
  background-color: lightblue;
  opacity: 1;

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
    background-image: linear-gradient(to bottom, #6d1e5a2e 0%, transparent 100%);
    z-index: -1;
    animation: boatShadow 100s linear infinite;
  }

  .boat-bottom {
    bottom: 0;
    left: 0;
    -webkit-clip-path: polygon(0 70%, 100% 70%, 85% 100%, 15% 100%);
    clip-path: polygon(0 70%, 100% 70%, 85% 100%, 15% 100%);
    background-color: #e8da43;
    width: 100%;
    height: 100px;

    &:before {
      left: 0;
      bottom: 0;
      height: 100%;
      width: 50%;
      background-color: #e8da43;
    }

    &:after {
      background-color: #d2bd39;
      width: 100%;
      height: 50%;
      left: 0;
      bottom: -35%;
    }

    .squares {
      width: 100%;
      height: 8px;
      bottom: 20px;
      left: 2px;

      .square {
        background-color: #f2f2f2;
        width: 7px;
        height: 7px;
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
    background-color: #ffffff;
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
    background-color: #ffffff;
    z-index: 33;
    clip-path: polygon(0% 100%, 50% 0%, 50% 100%);
    transform: scaleX(-1);
  }

  &:nth-of-type(1) {
    left: 15%;
    top: 10%;
    animation: boat 4s infinite ease;
  }

  &:nth-of-type(2) {
    right: 15%;
    bottom: 29%;
    animation: waves 4s infinite ease;

    &:after {
      transform: scaleX(-1);
      left: 13%;
      height: 100px;
      bottom: -99px;
    }
  }
}

.sun {
  position: absolute;
  top: 10%;
  right: 10%;
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background-image: radial-gradient(circle at 50%, #ffffff 50%, #f5de19);
  box-shadow: 0px 0px 40px #f5de19, inset 0px 0px 100px #f5de19;
  animation: sun 5s linear infinite;
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
    background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMDY3IDc5LjE1Nzc0NywgMjAxNS8wMy8zMC0yMzo0MDo0MiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTUgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjQ3OThENjIxNjM0NTExRTlBRDcxODhCMzQyM0FCN0EwIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjQ3OThENjIyNjM0NTExRTlBRDcxODhCMzQyM0FCN0EwIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6NDc5OEQ2MUY2MzQ1MTFFOUFENzE4OEIzNDIzQUI3QTAiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6NDc5OEQ2MjA2MzQ1MTFFOUFENzE4OEIzNDIzQUI3QTAiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz4nvDvOAAAABlBMVEXcuUXCjk1OwG03AAAARUlEQVR42mJgJAAYSFDAAATUUoCskH4KUJ1HuQJkMWIVYA1kihWQHpvUVwAJemIVYEssA6sAa3QTUIAtmihRQOfYBAgwAFtpA5VFMQvIAAAAAElFTkSuQmCC);
    border-radius: 10px;
    transform: skewX(35deg);

    .land-grass {
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 32px;
      transition-property: background-position;
      transition-timing-function: ease-in-out;
      background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMDY3IDc5LjE1Nzc0NywgMjAxNS8wMy8zMC0yMzo0MDo0MiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTUgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjJFRkNENjRENjM0NTExRTk5RDQwQUQ5N0EyM0RBM0JDIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjJFRkNENjRFNjM0NTExRTk5RDQwQUQ5N0EyM0RBM0JDIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6MkVGQ0Q2NEI2MzQ1MTFFOTlENDBBRDk3QTIzREEzQkMiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6MkVGQ0Q2NEM2MzQ1MTFFOTlENDBBRDk3QTIzREEzQkMiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz7Mv2hcAAAAElBMVEXcuUUAbT1tXRIAwgAAAADCjk0qQzGwAAAAYklEQVR42szRUQrAIAwD0LZr73/lbVZw8cMUHGP5asNDUMVJhIKD5AugioW2jJkDdyzycsn6OxBghoW1JLunCsBiDgcRzzV6xlYB6+wAuVIHufwJwFwE8+G74K2/KIJTgAEALaUOscCas1sAAAAASUVORK5CYII=);
    }
  }

  .lighthouse {
    position: absolute;
    margin: auto;
    right: 0;
    left: -50%;
    bottom: 7.9%;
    box-sizing: border-box;

    &:before {
      right: 0;
      left: 0;
      margin: 0 auto;
      height: 24px;
      width: 12px;
      background: #4f1c15;
      bottom: 0;
      z-index: 1;
      border-radius: 6px 6px 0 0;
    }

    &:after {
      right: 0;
      left: 0;
      margin: 0 auto;
      background: #8f8f8f;
      width: 98px;
      bottom: -16px;
      height: 16px;
    }

    .glass {
      width: 50px;
      height: 32px;

      position: relative;
      margin: 0 auto;

      background: #b0b0b0;
      box-shadow: 0 -26px 0 -6px #b2daed, 0 -30px 0 -6px #999;

      &:before {
        width: 2px;
        height: 20px;
        background: $white;
        left: -36px;
        right: 0;
        margin: 0 auto;
        top: -20px;
        box-shadow: 12px 0 0 $white, 24px 0 0 $white, 36px 0 0 $white;
      }

      &:after {
        content: "";
      }
    }

    .top {
      width: 38px;
      height: 18px;
      background: $red;
      border-radius: 18px 18px 0 0;
      margin: 0 auto 24px;
      position: relative;

      &:before {
        background: $red;
        height: 30px;
        width: 2px;
        right: 0;
        left: 0;
        margin: auto;
        top: -30px;
      }
    }

    .balcony {
      margin: 0 auto;
      position: relative;
      border-top: 16px solid #8f8f8f;
      border-left: 10px solid transparent;
      border-right: 10px solid transparent;
      width: 76px;

      &:after {
        left: -10px;
        right: 0;
        margin: 0 auto;
        width: 76px;
        top: -28px;
        height: 2px;
        background: $rail;
      }

      &:before {
        width: 2px;
        height: 12px;
        background: $rail;
        left: -10px;
        top: -28px;
        box-shadow: 9px 0 0 $rail, 18px 0 0 $rail, 27px 0 0 $rail, 37px 0 0 $rail, 47px 0 0 $rail, 56px 0 0 $rail, 65px 0 0 $rail, 74px 0 0 $rail;
      }
    }

    .row {
      width: 60px;
      height: 0;
      position: relative;
      margin: 0 auto;
      border-left: 3px solid transparent;
      border-right: 3px solid transparent;
      border-bottom: 50px solid $white;

      &:before {
        left: -3px;
        border-top-color: transparent;
        border-right-color: transparent;
        border-left-color: transparent;
        border-bottom-color: $white;
        border-width: 0 3px 50px 58px;
        border-style: inherit;
      }

      &:after {
        left: 30px;
        width: 28px;
        border-left: 0 solid transparent;
        border-right: 3px solid transparent;
        border-bottom: 50px solid rgba(0, 0, 0, 0.1);
        border-style: inherit;
      }
    }

    .row + .row {
      width: 66px;
      border-bottom: 50px solid $white;

      &:before {
        border-bottom-color: $white;
        border-width: 0 3px 50px 64px;
      }

      &:after {
        left: 33px;
        width: 31px;
      }
    }

    .row + .row + .row {
      width: 72px;
      border-bottom: 50px solid $white;

      &:before {
        border-bottom-color: $white;
        border-width: 0 3px 50px 70px;
      }

      &:after {
        left: 36px;
        width: 34px;
      }
    }

    .row + .row + .row + .row {
      width: 78px;
      border-bottom: 50px solid $white;

      &:before {
        border-bottom-color: $white;
        border-width: 0 3px 50px 76px;
      }
      &:after {
        left: 39px;
        width: 37px;
      }
    }
  }
}

@keyframes sun {
  50% {
    box-shadow: 0px 0px 60px 20px #f5de19, inset 0px 0px 100px #f5de19;
  }
}

@keyframes twinkle {
  0%,
  100% {
    opacity: 1;
  }
  50% {
    opacity: 0.3;
  }
}

@keyframes wave {
  0%,
  100% {
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
  80%,
  100% {
    transform: translateX(-20vw) scale(0.8);
  }
}

@keyframes boatShadow {
  0% {
    transform: skewX(35deg) translateX(15px);
  }
  50%,
  100% {
    transform: skewX(-55deg) translateX(-35px);
  }
}

@keyframes lightRotate {
  0%,
  100% {
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
