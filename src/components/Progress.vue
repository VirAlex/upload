<template>
  <div class="prog">
  <p>Progress:
    <!-- <progress :value='value' max="100"></progress> -->
  </p>
    <progress-bar :options="options" :value="value"/>
  </div>

</template>

<script>
import ProgressBar from 'vuejs-progress-bar'
export default {
  props: ['value'],
  name: 'Progress',
  components: {
    'progress-bar': ProgressBar
  },
  data () {
    return {
      uploadValue: this.value,
      options: {
        text: {
          color: '#FFFFFF',
          shadowEnable: true,
          shadowColor: '#000000',
          fontSize: 14,
          fontFamily: 'Helvetica',
          dynamicPosition: false,
          hideText: false
        },
        progress: {
          color: '#2dbd2d',
          backgroundColor: '#333333'
        },
        layout: {
          height: 35,
          width: 140,
          verticalTextAlign: 61,
          horizontalTextAlign: 43,
          zeroOffset: 0,
          strokeWidth: 30,
          progressPadding: 0,
          type: 'battery'
        }
      }
    }
  }
  // created () {
  //   this.uploadValue = setInterval((parseInt(this.time) + 1), 10000)
  // }
}
</script>

<style scoped>
  .prog{
    text-align: center;
    margin: 50% auto;
  }

  .progress-bar{
    width: auto !important;
  }
</style>
