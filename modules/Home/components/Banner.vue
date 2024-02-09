<template>
  <div :class="$style.banner" id="banner">
    <div :class="$style.content" class="container">
      <div :class="$style.image">
        <img src="../assets/images/face.jpg" alt="" />
      </div>
      <div :class="$style.description">
        <h2>Software Developer</h2>
        <div :class="$style.text">
          Professional software developer with 5+ years of experience in web
          applications and game development. Delivers a number of innovative and
          cutting-edge business solutions to a diverse group of clients within
          the company's global reach. Focuses on project management and
          production design skills to ensure that projects are completed on
          time.
        </div>
        <div :class="$style.list">
          <div>
            <span>Name: Sepehr Zarghami</span>
            <span>Birthday: 14 Feb 1992</span>
          </div>
          <div>
            <span>Degree: Master</span>
            <span>Experience: 6 Years</span>
          </div>
          <div>
            <span>Phone: +98 913 801 6954</span>
            <span>Email: shamim.sanisales7@gmail.com</span>
          </div>
        </div>
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
  .banner {
    background: linear-gradient(90deg, $primary-color 0, $secondary-color);
    padding: 20px 0;
    position: relative;
    @include media(md) {
      height: 100vh;
      display: flex;
      align-items: center;
      padding: 0;
    }
    .content {
      color: $white-color;
      @include media(md) {
        display: flex;
        align-items: center;
        justify-content: space-between;
      }
      .image {
        @include media(md) {
          width: 40%;
        }
        img {
          width: 100%;
          border-radius: 16px;
          box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.075);
        }
      }
      .description {
        text-align: center;
        margin-top: 30px;
        @include media(md) {
          width: 60%;
          margin-top: 0;
          padding-left: 20px;
        }
        @include media(lg) {
          padding-left: 50px;
        }
        @include media(xl) {
          padding-left: 100px;
        }
        .cv {
          background-color: $white-color;
          border: 1px solid $white-color;
          border-radius: 26px;
          padding: 10px 20px;
          margin-top: 30px;
          color: $title-color;

          &:hover {
            cursor: pointer;
          }
        }
        h2 {
          font-size: 1.75rem;
          color: $white-color;
        }
        .text {
          padding: 20px 0;
          font-size: 18px;
          line-height: 30px;
        }
        .list {
          @include media(md) {
            width: 80%;
          }
          > div {
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding-bottom: 10px;
          }
        }
      }
    }
    .arrow__down {
      display: none;
      position: absolute;
      bottom: 10px;
      left: 50%;
      transform: translateX(-50%);
      font-size: 40px;
      color: $white-color;
      animation: action 1s infinite alternate;
      cursor: pointer;

      @include media(md) {
        display: block;
      }
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
