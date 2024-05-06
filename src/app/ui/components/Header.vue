<template>
  <LayoutBox
    :with-title="false"
    :with-space="false"
    :component-class="$style.header">
    <ul :class="$style.menu">
      <li v-for="(item, index) in menu" :key="index">
        <router-link
          :to="item.to"
          :class="[$route.hash === item.to.hash ? $style.active : '']">
          {{ item.name }}
        </router-link>
      </li>
    </ul>
  </LayoutBox>
</template>
<script lang="ts" setup>
  const menu = [
    {
      id: 1,
      name: 'home',
      to: {name: 'Home', hash: '#banner'}
    },
    {
      id: 2,
      name: 'experience',
      to: {name: 'Home', hash: '#experience'}
    },
    {
      id: 3,
      name: 'projects',
      to: {name: 'Home', hash: '#projects'}
    },
    {
      id: 4,
      name: 'skills',
      to: {name: 'Home', hash: '#skills'}
    },
    {
      id: 5,
      name: 'contact me',
      to: {name: 'Home', hash: '#contact-me'}
    }
  ];
</script>
<style lang="scss" module>
  .header {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 60px;
    @include media(sm) {
      padding: 0 50px;
    }
    .menu {
      display: flex;
      align-items: center;
      list-style-type: none;
      padding: 0;
      li {
        a {
          color: $black-color;
          margin: 0 5px;
          padding-bottom: 5px;
          cursor: pointer;
          font-size: 14px;
          position: relative;
          text-decoration: none;
          @include media(325) {
            margin: 0 10px;
          }
          @include media(sm) {
            margin: 0 15px;
            font-size: 16px;
          }
          &:hover {
            color: $primary-color;
            &::after {
              content: '';
              width: 100%;
              height: 2px;
              position: absolute;
              display: block;
              background: $primary-color;
              bottom: -3px;
              left: 0;
            }
          }
          &.active {
            color: $primary-color;
            &::after {
              content: '';
              width: 100%;
              height: 2px;
              position: absolute;
              display: block;
              background: $primary-color;
              bottom: -3px;
              left: 0;
            }
          }
        }
      }
    }
  }
</style>
