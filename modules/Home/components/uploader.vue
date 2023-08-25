<template>
  <div class="file-uploader">
    <label for="uploader" class="file-label">{{}}</label>
    <input id="uploader" ref="uploader" type="file" class="file-input" />
    <div class="file-information">
      <div class="file-name" />
      <div class="file-status">
        <span class="file-status-name">uploading</span>
        <span class="file-status-loading" />
        <button v-if="false" class="file-remove">*</button>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup></script>
<style lang="scss" scoped>
  .file {
    &-uploader {
      border: 1px solid red;
      width: 100%;
      padding: 10px;
    }

    &-label {
      display: inline-block;
      cursor: pointer;
      height: 43px;
      width: 100%;
      line-height: 43px;
      text-align: center;
      vertical-align: middle;
    }

    &-input {
      position: absolute;
      top: 0;
      height: 43px;
      width: 100%;
      opacity: 0;
      z-index: -1;
    }

    &-information {
      display: flex;
      justify-content: space-between;
      align-items: center;
      background-color: green;
      width: 80%;
      padding: 10px;
      margin-top: 10px;
      border-radius: 6px;
      color: #fff;

      .file-name {
      }

      .file-status {
        text-align: right;

        .file-status-name {
        }

        .file-status-loading {
          display: inline-block;
          border: 3px solid #000;
          border-top: 3px solid #f3f3f3;
          border-radius: 50%;
          width: 20px;
          height: 20px;
          animation: spin 2s linear infinite;
          line-height: 20px;
          vertical-align: middle;
        }

        .file-remove {
          background-color: #1b4b31;
          border-radius: 50%;
          width: 30px;
          height: 30px;
          border: none;
          color: #fff;
          line-height: 30px;
          font-size: 20px;
          vertical-align: middle;
          padding-top: 2.5px;

          &:hover {
            border: 1px solid #fff;
            cursor: pointer;
          }
        }
      }
    }
  }

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }

    100% {
      transform: rotate(360deg);
    }
  }
</style>
