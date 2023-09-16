<template>
  <div :class="$style.wrapper">
    <componentTitle title="quality" />
    <div :class="$style.knows">
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
              MetaKing Studios aims to revolutionize the strategy genre, with
              its flagship game BLOCKLORDS, the world’s first MMO grand strategy
              game powered by web3.
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
              MetaKing Studios aims to revolutionize the strategy genre, with
              its flagship game BLOCKLORDS, the world’s first MMO grand strategy
              game powered by web3.
            </div>
          </div>
          <div :class="$style.box">
            <div :class="$style.boxTitle">Backend Developer</div>
            <div :class="$style.company">
              <a href="/" :class="$style.name">MetaKing Studios</a>
              <span :class="$style.date">| 2022 - Current</span>
            </div>
            <div :class="$style.description">
              MetaKing Studios aims to revolutionize the strategy genre, with
              its flagship game BLOCKLORDS, the world’s first MMO grand strategy
              game powered by web3.
            </div>
          </div>
          <div :class="$style.box">
            <div :class="$style.boxTitle">Backend Developer</div>
            <div :class="$style.company">
              <a href="/" :class="$style.name">MetaKing Studios</a>
              <span :class="$style.date">| 2022 - Current</span>
            </div>
            <div :class="$style.description">
              MetaKing Studios aims to revolutionize the strategy genre, with
              its flagship game BLOCKLORDS, the world’s first MMO grand strategy
              game powered by web3.
            </div>
          </div>
          <div :class="$style.box">
            <div :class="$style.boxTitle">Backend Developer</div>
            <div :class="$style.company">
              <a href="/" :class="$style.name">MetaKing Studios</a>
              <span :class="$style.date">| 2022 - Current</span>
            </div>
            <div :class="$style.description">
              MetaKing Studios aims to revolutionize the strategy genre, with
              its flagship game BLOCKLORDS, the world’s first MMO grand strategy
              game powered by web3.
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup></script>
<style lang="scss" module>
  .wrapper {
    padding: 50px 20%;
    background-color: $white-color;
    .knows {
      display: flex;
      justify-content: space-between;
      > div {
        width: 50%;
      }
      .experience {
      }
      .education {
      }
      .title {
        color: $title-color;
        font-size: 35px;
        font-weight: bold;
      }
      .items {
        margin-top: 50px;
        border-left: 2px solid $primary-color;
        padding-left: 15px;
        .box {
          margin-bottom: 20px;
          .boxTitle {
            font-size: 20px;
            font-weight: bold;
            position: relative;
            color: $title-color;
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
  }
</style>
