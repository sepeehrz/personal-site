<template>
  <div :class="$style.aboutMe">
    <componentTitle title="about" />
    <div :class="$style.aboutWrapper">
      <div :class="$style.image">
        <img src="../assets/images/face.jpg" alt="" />
      </div>
      <div :class="$style.aboutContent">
        <h2>Software Developer</h2>
        <div :class="$style.description">
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
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup></script>
<style lang="scss" module>
  .aboutMe {
    background-color: #fff;
    padding: 50px 20%;
    .aboutWrapper {
      display: flex;
      align-items: center;
      justify-content: space-between;
      .image {
        width: 40%;
        img {
          width: 100%;
          border-radius: 4px;
        }
      }
      .aboutContent {
        padding-left: 20px;
        width: 60%;
        h2 {
          font-size: 1.75rem;
          color: #000;
        }
        .description {
          padding: 20px 0;
          font-size: 18px;
          line-height: 30px;
          // text-align: left;
        }
        .list {
          width: 80%;
          margin: 0 auto;
          > div {
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding-bottom: 10px;
          }
        }
      }
    }
  }
</style>
