<template>
  <div :class="$style.slider">
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
    <div :class="$style.arrow__down">
      <svgLoader name="arrow-down" />
    </div>
  </div>
</template>
<script lang="ts" setup></script>
<style lang="scss" module>
  .slider {
    height: 100vh;
    background: $primary-color;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    .content {
      display: flex;
      width: 50vw;
      align-items: center;
      justify-content: space-between;
      color: #fff;
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
          -webkit-text-stroke: 1px #fff;
        }
        text-align: center;
        h3 {
          font-size: 30px;
        }
        .cv {
          background-color: $primary-color;
          color: #fff;
          border: 1px solid #fff;
          border-radius: 10px;
          padding: 10px 20px;
          &:hover {
            background-color: #fff;
            color: #000;
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
      color: #fff;
      animation: action 1s infinite alternate;
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
