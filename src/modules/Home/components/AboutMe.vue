<template>
  <LayoutBox
    :with-title="false"
    :with-space="false"
    :component-class="$style.about"
    id="about-me">
    <div :class="$style.description">
      <h2 :class="$style.title">About Me:</h2>
      <div :class="$style.text">
        I have been working professionally in the programming field for almost
        5+ years. I have experience in implementing, developing and maintaining
        the projects of different companies. my main framework is vuejs and
        nuxtjs, and I have good experience in using these frameworks and tools
        related to them. I am sending you my resume to gain new experience and
        be effective in the company's progress. Hoping that we can work together
        and make a good experience.
      </div>
      <h2 :class="$style.title">Information:</h2>
      <div :class="$style.information">
        <div :class="$style.row">
          <div>
            <span>Name:</span>
            <span>Sepehr Zarghami</span>
          </div>
          <div>
            <span>Birthday:</span>
            <span>14 Feb 1992</span>
          </div>
        </div>
        <div :class="$style.row">
          <div>
            <span>Degree:</span>
            <span>Bachelor's</span>
          </div>
          <div>
            <span>Experience:</span>
            <span>5+ Years</span>
          </div>
        </div>
        <div :class="$style.row">
          <div>
            <span>Mobile:</span>
            <span>+98 937 338 9140</span>
          </div>
          <div>
            <span>Email:</span>
            <span>sepeehrz@gmail.com</span>
          </div>
        </div>
      </div>
      <button :class="$style.cv">Download CV</button>
    </div>
    <div :class="$style.image">
      <img src="../assets/images/information.png" alt="information" />
    </div>
  </LayoutBox>
</template>
<script lang="ts" setup></script>
<style lang="scss" module>
  .about {
    @include media(md) {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
    .image {
      display: none;
      @include media(md) {
        display: block;
        width: 40%;
      }
      text-align: center;
      img {
        width: 70%;
        @include media(xl) {
          width: 50%;
        }
      }
    }
    .description {
      width: 100%;
      padding: 15px;
      text-align: center;
      @include media(sm) {
        width: 80%;
        margin: 0 auto;
        padding: 20px 50px;
      }
      @include media(md) {
        width: 60%;
        margin: unset;
        text-align: left;
      }
      .title {
        font-size: convertPxToRem(28);
        color: $primary-color;
        padding-bottom: 30px;
        text-align: left;
      }

      .text {
        font-size: convertPxToRem(18);
        line-height: 30px;
        text-align: justify;
        padding-bottom: 30px;
        color: $black-color;
      }
      .information {
        margin-bottom: 30px;
        text-align: left;
        .row {
          padding-bottom: 20px;
          @include media(sm) {
            display: flex;
            align-items: center;
            justify-content: space-between;
          }

          > div {
            margin-bottom: 30px;
            @include media(sm) {
              margin-bottom: 0;
            }
            :first-child {
              color: $black-color;
              font-weight: bold;
              padding-right: 3px;
            }
          }
        }
      }
      .cv {
        width: 130px;
        height: 47px;
        border: none;
        border-radius: 26px;
        background: linear-gradient(90deg, $primary-color 0, $secondary-color);
        color: #fff;
        font-size: convertPxToRem(16);
        cursor: pointer;
        @include media(md) {
          margin: unset;
        }
      }
    }
  }
</style>
