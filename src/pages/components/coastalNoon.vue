<template>
  <div class="scene">
    <div class="background">
      <div class="sun"></div>
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
      </div>
    </div>
    <div class="lighthouse-group">
      <div class="land"></div>
      <div class="lighthouse-holder">
        <div class="shadow"></div>
        <div class="lighthouse"></div>
        <div class="top">
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

$lightblue-color: lightblue;
$light: #ffffff;
$sunsh: #f5de19;
$bottom: #6d0005;
$grass: #44882d;

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
  background-image: linear-gradient(0deg, rgba(192, 222, 223, 1), rgba(173, 216, 230, 1));
  overflow: hidden;
  z-index: 1;
}

.mountains {
  width: 100%;
  height: 250px;
  bottom: 80px;
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
  background-color: lightblue;
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
      bottom: -99px
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

@keyframes sun {
  50% {
    box-shadow: 0px 0px 60px 20px #f5de19, inset 0px 0px 100px #f5de19;
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
          background-color: #ffffff;
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