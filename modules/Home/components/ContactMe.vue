<template>
  <div :class="$style.contact">
    <componentTitle title="contact" />
    <div :class="$style.form">
      <div :class="$style.field">
        <span>Name</span>
        <input type="text" />
      </div>
      <div :class="$style.field">
        <span>Email</span>
        <input type="text" />
      </div>
      <textarea
        name="message"
        rows="10"
        cols="30"
        placeholder="Write your text" />
      <button :class="$style.send">send message</button>
    </div>
  </div>
</template>
<script lang="ts" setup></script>
<style lang="scss" module>
  .contact {
    .form {
      max-width: 700px;
      margin: 0 auto;
      .field {
        position: relative;
        &::after {
          content: '';
          width: 1px;
          height: 30px;
          top: 4px;
          left: 55px;
          background: #cdcdcd;
          position: absolute;
          display: inline-block;
        }

        input {
          border: 1px solid #ccc;
          width: 100%;
          margin-bottom: 10px;
          height: 38px;
          border-radius: 8px;
          padding: 0 10px 0 60px;
          outline: none;
        }
        span {
          position: absolute;
          top: 8px;
          left: 8px;
          color: #000;
        }
      }
      textarea {
        border: 1px solid #ccc;
        outline: none;
        border-radius: 8px;
        padding: 16px;
        width: 100%;
        resize: none;
      }
      .send {
        width: 170px;
        height: 47px;
        margin: 10px auto 0;
        border: none;
        border-radius: 26px;
        background: linear-gradient(90deg, $primary-color 0, $secondary-color);
        color: #fff;
        font-size: 16px;
        padding: 12px 0;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
      }
    }
  }
</style>
