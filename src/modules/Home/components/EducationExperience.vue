<template>
  <LayoutBox
    title="My Resume"
    :component-class="$style.summaryResume"
    id="experience">
    <div :class="$style.education">
      <div :class="$style.title">My Education</div>
      <div :class="$style.items">
        <div :class="$style.box">
          <div :class="$style.boxTitle">Bachelor of network engineering</div>
          <div :class="$style.company">
            <a
              href="https://uast.ac.ir/en"
              :class="$style.name"
              target="_blank">
              University of Applied Sciences
            </a>
            <span :class="$style.date">| 2015 - 2017</span>
          </div>
          <div :class="$style.description">
            The University of Applied Science and Technology (UAST) is a public
            university system administrated by Ministry of Science, Research and
            Technology with various branches all over the Provinces of Iran.
            This university helps to increase skill level of employed personnel
            in various sectors of economic field and graduates of higher
            education and professional skills that are lacking in
            administrative.
          </div>
        </div>
        <div :class="$style.box">
          <div :class="$style.boxTitle">Associate of software</div>
          <div :class="$style.company">
            <a href="https://iau.ir/" :class="$style.name" target="_blank">
              Islamic Azad university
            </a>
            <span :class="$style.date">| 2013 - 2015</span>
          </div>
          <div :class="$style.description">
            The Islamic Azad University is a private university system
            headquartered in Tehran, Iran. It is one of the largest
            comprehensive systems of universities in the world.Besides Iran, the
            university has international satellite branches in countries such as
            Afghanistan, the United Arab Emirates, Lebanon and the United
            Kingdom.
          </div>
        </div>
      </div>
    </div>
    <div :class="$style.experience">
      <div :class="$style.title">My Expericence</div>
      <div :class="$style.items">
        <div :class="$style.box">
          <div :class="$style.boxTitle">Frontend Developer</div>
          <div :class="$style.company">
            <a href="https://lendroll.ir/" target="_blank" :class="$style.name">
              Lendroll
            </a>
            <span :class="$style.date">| Apr 2023 - Present</span>
          </div>
          <div :class="$style.description">
            A company in the field of financial health that provides access to
            salaries at the moment for employees so that in case of urgent need
            for liquidity, they can withdraw from their salaries and do not need
            to borrow and obtain facilities. And to meet their medium and
            long-term financial needs, provide services of short-term
            micro-facilities and long-term macro-facilities.
          </div>
        </div>
        <div :class="$style.box">
          <div :class="$style.boxTitle">Frontend Developer</div>
          <div :class="$style.company">
            <a href="https://gapfilm.ir/" target="_blank" :class="$style.name">
              Gapfilm
            </a>
            <span :class="$style.date">| May 2021 - Apr 2023</span>
          </div>
          <div :class="$style.description">
            It is a large bank of the latest series and movies of the world, as
            well as a complete archive of old movies and series, which are
            presented in the form of subtitles and exclusive dubbing of Gapfilm.
          </div>
        </div>
        <div :class="$style.box">
          <div :class="$style.boxTitle">Frontend Developer</div>
          <div :class="$style.company">
            <a
              href="https://vrwebdesign.ir"
              target="_blank"
              :class="$style.name">
              Vrwebdesign
            </a>
            <span :class="$style.date">| Aug 2019 - Jul 2021</span>
          </div>
          <div :class="$style.description">
            A programming and software team that worked on personal and
            organizational projects with different technologies
          </div>
        </div>
        <div :class="$style.box">
          <div :class="$style.boxTitle">Frontend Developer</div>
          <div :class="$style.company">
            <a href="https://cashineh.com" target="_blank" :class="$style.name">
              Cashineh
            </a>
            <span :class="$style.date">| Jul 2018 - Aug 2019</span>
          </div>
          <div :class="$style.description">
            Shop from your favorite store through cashineh. When you buy from
            different stores through cashineh, after the store is approved, part
            of the amount you pay will be returned to your user account in
            cashineh.
          </div>
        </div>
        <div :class="$style.box">
          <div :class="$style.boxTitle">Frontend Developer</div>
          <div :class="$style.company">
            <a href="/" :class="$style.name">Freelancer/Self-employed</a>
            <span :class="$style.date">| Feb 2017 - Jun 2018</span>
          </div>
          <div :class="$style.description">
            I started taking freelance projects from freelance sites and learned
            the basics of programming.
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
