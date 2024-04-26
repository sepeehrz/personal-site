<template>
  <LayoutBox
    title="My Resume"
    :component-class="$style.summaryResume"
    id="experience">
    <div :class="$style.education">
      <div :class="$style.title">My Education</div>
      <div :class="$style.items">
        <div :class="$style.box">
          <div :class="$style.boxTitle">Backend Developer</div>
          <div :class="$style.company">
            <a href="/" :class="$style.name">MetaKing Studios</a>
            <span :class="$style.date">| 2022 - Current</span>
          </div>
          <div :class="$style.description">
            MetaKing Studios aims to revolutionize the strategy genre, with its
            flagship game BLOCKLORDS, the world’s first MMO grand strategy game
            powered by web3.
          </div>
        </div>
      </div>
    </div>
    <div :class="$style.experience">
      <div :class="$style.title">My Expericence</div>
      <div :class="$style.items">
        <div :class="$style.box">
          <div :class="$style.boxTitle">Backend Developer</div>
          <div :class="$style.company">
            <a href="/" :class="$style.name">MetaKing Studios</a>
            <span :class="$style.date">| 2022 - Current</span>
          </div>
          <div :class="$style.description">
            MetaKing Studios aims to revolutionize the strategy genre, with its
            flagship game BLOCKLORDS, the world’s first MMO grand strategy game
            powered by web3.
          </div>
        </div>
        <div :class="$style.box">
          <div :class="$style.boxTitle">Backend Developer</div>
          <div :class="$style.company">
            <a href="/" :class="$style.name">MetaKing Studios</a>
            <span :class="$style.date">| 2022 - Current</span>
          </div>
          <div :class="$style.description">
            MetaKing Studios aims to revolutionize the strategy genre, with its
            flagship game BLOCKLORDS, the world’s first MMO grand strategy game
            powered by web3.
          </div>
        </div>
        <div :class="$style.box">
          <div :class="$style.boxTitle">Backend Developer</div>
          <div :class="$style.company">
            <a href="/" :class="$style.name">MetaKing Studios</a>
            <span :class="$style.date">| 2022 - Current</span>
          </div>
          <div :class="$style.description">
            MetaKing Studios aims to revolutionize the strategy genre, with its
            flagship game BLOCKLORDS, the world’s first MMO grand strategy game
            powered by web3.
          </div>
        </div>
        <div :class="$style.box">
          <div :class="$style.boxTitle">Backend Developer</div>
          <div :class="$style.company">
            <a href="/" :class="$style.name">MetaKing Studios</a>
            <span :class="$style.date">| 2022 - Current</span>
          </div>
          <div :class="$style.description">
            MetaKing Studios aims to revolutionize the strategy genre, with its
            flagship game BLOCKLORDS, the world’s first MMO grand strategy game
            powered by web3.
          </div>
        </div>
      </div>
    </div>
  </LayoutBox>
</template>
<script lang="ts" setup></script>
<style lang="scss" module>
  .summaryResume {
    @include media(sm) {
      display: flex;
      justify-content: space-between;
    }
    > div {
      width: 100%;
      @include media(sm) {
        width: 50%;
      }
    }
    .experience {
      text-align: center;

      @include media(sm) {
        text-align: left;
      }
    }
    .education {
      text-align: center;
      @include media(sm) {
        text-align: left;
      }
    }
    .title {
      color: $black-color;
      font-size: 35px;
      font-weight: bold;
    }
    .items {
      margin-top: 50px;
      padding-left: 15px;
      @include media(sm) {
        border-left: 2px solid $primary-color;
      }

      .box {
        margin-bottom: 20px;
        &:not(:last-child) {
          border-bottom: 2px solid $primary-color;
          padding-bottom: 30px;
        }
        @include media(sm) {
          &:not(:last-child) {
            border-bottom: unset;
            padding-bottom: 0;
          }
        }
        .boxTitle {
          font-size: 20px;
          font-weight: bold;
          position: relative;
          color: $black-color;
          @include media(sm) {
            &::before {
              content: '';
              width: 15px;
              height: 15px;
              background-color: $primary-color;
              position: absolute;
              left: -23px;
              top: 0;
              border-radius: 50%;
            }
          }
        }
        .company {
          padding: 10px 0;
          font-size: 12px;
          .name {
            color: $primary-color;
            cursor: pointer;
            text-decoration: underline;
          }
          .date {
            color: $text-color;
            padding-left: 5px;
          }
        }
        .description {
          line-height: 23px;
          color: $primary-text-color;
        }
      }
    }
  }
</style>
