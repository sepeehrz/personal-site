<template>
  <LayoutBox :with-title="false" :component-class="$style.footer">
    <div :class="$style.social">
      <a href="https://t.me/sepeehrz" target="_blank">
        <svgLoader name="telegram" size="14" :color="'#fff'" />
      </a>
      <a href="https://github.com/sepeehrz" target="_blank">
        <svgLoader name="github" size="14" :color="'#fff'" />
      </a>
      <a href="https://www.linkedin.com/in/sepehr-zarghami/" target="_blank">
        <svgLoader name="linkedin" size="14" :color="'#fff'" />
      </a>
      <a href="https://www.instagram.com/sepeehrz/" target="_blank">
        <svgLoader name="instagram" size="14" :stroke="'#fff'" />
      </a>
    </div>
    <div :class="$style.copyright">
      ©
      <a :class="$style.name" href="https://sepeehrz.ir">Sepehr</a>
      . All Rights Reserved. Designed by
      <a :class="$style.name" href="https://sepeehrz.ir">Sepehr Zarghami</a>
    </div>
  </LayoutBox>
</template>
<script lang="ts" setup></script>
<style lang="scss" module>
  .footer {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    .social {
      display: flex;
      align-items: center;
      justify-content: center;
      > a {
        margin-left: 10px;
        background: linear-gradient(90deg, $primary-color 0, $secondary-color);
        width: 40px;
        height: 40px;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 40px;
        &:hover {
          background-color: #ccc;
          cursor: pointer;
        }
      }
    }
    .copyright {
      color: $black-color;
      font-size: 15px;
      margin-top: 20px;
      text-align: center;
      @include media(sm) {
        font-size: 18px;
      }
      .name {
        font-weight: bold;
        color: $black-color;
        text-decoration: none;
      }
    }
  }
</style>
