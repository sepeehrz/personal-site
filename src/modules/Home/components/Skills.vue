<template>
  <LayoutBox
    :with-title="false"
    :with-space="false"
    :component-class="$style.skills"
    id="skills">
    <div :class="$style.image"></div>
    <div :class="$style['skills-item']">
      <h2 :class="$style.title">Skills:</h2>
      <div :class="$style['skills-item-wrapper']">
        <ul :class="$style.list">
          <li
            v-for="(item, index) in skillsFirst"
            :key="index"
            :class="[item.isBold ? $style.bold : '']">
            {{ item.name }}
          </li>
        </ul>
        <ul :class="$style.list">
          <li
            v-for="(item, ind) in secondSkills"
            :key="ind"
            :class="[item.isBold ? $style.bold : '']">
            {{ item.name }}
          </li>
        </ul>
        <ul :class="$style.list">
          <li
            v-for="(item, indx) in thirdSkills"
            :key="indx"
            :class="[item.isBold ? $style.bold : '']">
            {{ item.name }}
          </li>
        </ul>
      </div>
    </div>
  </LayoutBox>
</template>
<script lang="ts" setup>
  import {useSkills} from '../controller/composables/skills';
  const {skillsFirst, secondSkills, thirdSkills} = useSkills();
</script>
<style lang="scss" module>
  .skills {
    display: flex;
    align-items: center;
    justify-content: space-between;
    .image {
      display: none;
      @include media(md) {
        display: block;
        background-image: url(../assets/images/skills.jpg);
        background-repeat: no-repeat;
        background-size: 100% 100%;
        height: 536px;
        border-radius: 10px 0 0 10px;
        width: 40%;
      }
    }
    .skills-item {
      width: 100%;
      padding: 25px 50px;
      @include media(md) {
        width: 60%;
      }
      .title {
        font-size: convertPxToRem(28);
        color: $primary-color;
        padding-bottom: 30px;
        text-align: left;
      }
      .skills-item-wrapper {
        @include media(sm) {
          display: flex;
          justify-content: space-between;
        }
        .list {
          padding: 0;
          list-style-type: none;
          li {
            font-size: convertPxToRem(18);
            font-weight: 500;
            padding-bottom: 15px;
            position: relative;
            &.bold {
              font-weight: bold;
            }
            &::before {
              content: '';
              position: absolute;
              left: -17px;
              top: 3px;
              width: 10px;
              height: 10px;
              background: $primary-color;
              border-radius: 15px;
            }
          }
        }
      }
    }
  }
</style>
