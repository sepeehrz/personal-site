<template>
  <div :class="$style.slider" id="banner">
    <div :class="$style.content">
      <div :class="$style.image">
        <img src="../assets/images/face.jpg" alt="" />
      </div>
      <div :class="$style.title">
        <h1>sepehr zarghami</h1>
        <h3>
          i'm
          <br />
          Senior Software Developer
        </h3>
        <button :class="$style.cv">download CV</button>
      </div>
    </div>
    <div
      :class="$style.arrow__down"
      @click="$router.push({name: 'Home', hash: '#experience'})">
      <svgLoader name="arrow-down" />
    </div>
  </div>
</template>
<script lang="ts" setup></script>
<style lang="scss" module>
  .slider {
    height: 100vh;
    background: linear-gradient(90deg, $primary-color 0, $secondary-color);
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    .content {
      display: flex;
      width: 50vw;
      align-items: center;
      justify-content: space-between;
      color: $white-color;
      .image {
        width: 400px;
        img {
          max-width: 100%;
          border-radius: 50%;
          box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.075) !important;
        }
      }
      .title {
        h1 {
          font-size: 60px;
          color: $primary-color;
          -webkit-text-stroke: 1px $white-color;
        }
        text-align: center;
        h3 {
          font-size: 30px;
        }
        .cv {
          background-color: $white-color;
          color: $white-color;
          border: 1px solid $white-color;
          border-radius: 10px;
          padding: 10px 20px;
          margin-top: 30px;
          color: $title-color;
          &:hover {
            cursor: pointer;
          }
        }
      }
    }
    .arrow__down {
      position: absolute;
      bottom: 10px;
      left: 50%;
      transform: translateX(-50%);
      font-size: 40px;
      color: $white-color;
      animation: action 1s infinite alternate;
      cursor: pointer;
    }
  }
  @keyframes action {
    0% {
      transform: translateY(0);
    }
    100% {
      transform: translateY(-15px);
    }
  }
</style>
