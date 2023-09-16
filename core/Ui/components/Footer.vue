<template>
  <div :class="$style.footer">
    <div :class="$style.social">
      <a href="https://t.me/sepeehrz" target="_blank">
        <svgLoader name="telegram" size="14" />
      </a>
      <a href="https://github.com/sepeehrz" target="_blank">
        <svgLoader name="github" size="14" />
      </a>
      <a href="https://www.linkedin.com/in/sepehr-zarghami/" target="_blank">
        <svgLoader name="linkedin" size="14" />
      </a>
      <a href="https://www.instagram.com/sepeehrz/" target="_blank">
        <svgLoader name="instagram" size="14" />
      </a>
    </div>
    <div :class="$style.copyright">
      ©
      <a :class="$style.name" href="https://sepeehrz.ir">Sepehr</a>
      . All Rights Reserved. Designed by
      <a :class="$style.name" href="https://sepeehrz.ir">Sepehr Zarghami</a>
    </div>
  </div>
</template>
<script lang="ts" setup></script>
<style lang="scss" module>
  .footer {
    background: linear-gradient(90deg, $primary-color 0, $secondary-color);
    height: 250px;
    margin-top: 40px;
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
        background-color: #fff;
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
      color: #fff;
      font-size: 18px;
      margin-top: 20px;
      .name {
        font-weight: bold;
        color: #fff;
        text-decoration: none;
      }
    }
  }
</style>
