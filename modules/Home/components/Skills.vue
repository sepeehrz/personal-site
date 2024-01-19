<template>
  <div :class="$style.skillsWrapper" id="skills">
    <componentTitle title="skills" />
    <div :class="$style.skills">
      <div :class="$style.technical">
        <div :class="$style.title">TECHNICAL SKILLS</div>
        <div :class="$style.box">
          <div :class="$style.boxTitle">ui frameWork</div>
          <span>1</span>
          <span>2</span>
          <span>3</span>
          <span>4</span>
        </div>
        <div :class="$style.box">
          <div :class="$style.boxTitle">ui frameWork</div>
          <span>1</span>
          <span>2</span>
          <span>3</span>
          <span>4</span>
        </div>
      </div>
      <div :class="$style.soft">
        <div :class="$style.title">SOFT SKILLS</div>
        <div :class="$style.box">
          <div :class="$style.boxTitle">programing</div>
          <span>1</span>
          <span>2</span>
          <span>3</span>
          <span>4</span>
        </div>
        <div :class="$style.box">
          <div :class="$style.boxTitle">ui frameWork</div>
          <span>1</span>
          <span>2</span>
          <span>3</span>
          <span>4</span>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup></script>
<style lang="scss" module>
  .skillsWrapper {
    padding-bottom: 50px;
    background-color: #fff;
    padding: 50px 20% 0;
    .skills {
      display: flex;
      justify-content: space-between;
      > div {
        width: 50%;
      }
      .title {
        font-size: 20px;
        font-weight: bold;
        margin-bottom: 30px;
      }
      .box {
        padding-bottom: 20px;
        .boxTitle {
        }
      }
    }
  }
</style>
