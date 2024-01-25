<template>
  <div :class="$style.header">
    <div :class="$style.name">
      <svgLoader name="s" />
      <div>
        <div :class="$style.firstName">sepehr</div>
        <div :class="$style.lastName">zarghami</div>
      </div>
    </div>
    <ul :class="$style.menu">
      <li
        v-for="(item, index) in menu"
        :key="index"
        @click="activeMenu(index + 1)">
        <router-link
          :to="item.to"
          :class="[active === item.id ? $style.active : '']">
          {{ item.name }}
        </router-link>
      </li>
    </ul>
    <div :class="$style.number">+989373389140</div>
  </div>
</template>
<script lang="ts" setup>
  import {ref} from 'vue';
  const active = ref(1);

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
  function activeMenu(menuIndex: number) {
    active.value = menuIndex;
  }
</script>
<style lang="scss" module>
  .header {
    position: fixed;
    top: 0;
    padding: 0 50px;
    background: linear-gradient(90deg, $primary-color 0, $secondary-color);
    width: 100%;
    z-index: 10;
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 60px;
    .number {
      color: $primary-text-color;
    }
    .name {
      display: flex;
      color: $primary-text-color;
      > div {
        margin-left: 10px;
      }
      .firstName {
        font-size: 12px;
      }
      .lastName {
        font-size: 15px;
        padding-left: 5px;
      }
    }
    .menu {
      display: flex;
      align-items: center;
      list-style-type: none;
      li {
        a {
          color: $primary-text-color;
          margin: 0 15px;
          padding-bottom: 5px;
          cursor: pointer;
          font-size: 16px;
          position: relative;
          text-decoration: none;
          &:hover {
            color: $white-color;
            &::after {
              content: '';
              width: 100%;
              height: 2px;
              position: absolute;
              display: block;
              background: $white-color;
              bottom: -3px;
              left: 0;
            }
          }
          &.active {
            color: $white-color;
            &::after {
              content: '';
              width: 100%;
              height: 2px;
              position: absolute;
              display: block;
              background: $white-color;
              bottom: -3px;
              left: 0;
            }
          }
        }
      }
    }
  }
</style>
