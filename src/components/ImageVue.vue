<template>
  <div class="container-img">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="black" width="18px" height="18px"><path d="M0 0h24v24H0V0zm0 0h24v24H0V0z" fill="none"/><path d="M16.59 7.58L10 14.17l-3.59-3.58L5 12l5 5 8-8zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"/></svg>
    <h2>Upload Successfully</h2>
    <div :style="{ backgroundImage: 'url(' + src + ')' }" class="img">
    </div>
    <input type="text" v-model="src" ref="copyThis" @focus="$event.target.select()">
    <input type="submit" @click="copy" value="Copy Link">
    <!-- <button @click="copy">Copy link</button> -->
  </div>
</template>

<script>
export default {
  props: ['src'],
  name: 'Image',
  methods: {
    copy () {
      console.log(process.env.APIKEY)
      const copyTextarea = this.$refs.copyThis
      copyTextarea.focus()
      document.execCommand('copy')
    }
  }
}
</script>

<style scoped>
  input[type="submit"] {
    text-align: center;
      margin-left: -82px;
      height: 30px;
      width: 74px;
      background: #2F80ED;
      color: white;
      border-radius: 8px;
      padding: 17px;
      border: 0;
      font-family: 'Poppins', sans-serif;
      font-style: normal;
      font-weight: 500;
      font-size: 8px;
      line-height: 4px;
      text-align: center;
      letter-spacing: -0.035em;
  }
  h2 {
    font-size: 18px;
  }
  .container-img {
    text-align: center;
    margin-top: 39.5px;
  }
  svg{
    fill: #219653;
    width: 35px;
    height: 35px;
  }
  .img {
    width: 338px;
    height: 224px;
    border-radius: 12px;
    background-size: cover;
    margin: 0 auto;
    background-repeat: no-repeat;
    background-position: center center;
  }

  input[type="text"]{
    margin-top: 25px;
    width: 57%;
    height: 35px;
    color: #4F4F4F;
    border-radius: 8px;
    padding-right: 80px;
    border: 1px solid #E0E0E0;
  }

  button {
    background: #2F80ED;
    border-radius: 8px;
    cursor: pointer;
    border: none;
    padding: 8px 16px;
    color: white;
  }
</style>
