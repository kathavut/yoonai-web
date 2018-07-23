<template>
    <div id="app" class="container-fluid">
        <div class="row">
            <div class="col-xs-12 col-sm-12 p-0 m-0">
                <img src="./assets/logo.png" alt="">
                <video id="videoPreview" autoplay muted loop>
                    <source src="./assets/demo.mp4" type="video/mp4">
                </video>
            </div>
        </div>
        <hr>
        <div class="row">
            <div class="col-xs-6 col-sm-3 p-0 m-0 box1">
                HOW IT WORKS
            </div>
            <div class="col-xs-6 col-sm-3 p-0 box2">
                FEATURES
            </div>
            <div class="col-xs-6 col-sm-3 p-0 box3">
                GET CONNECTED
            </div>
            <div class="col-xs-6 col-sm-3 p-0 box4">
                NEED MORE
            </div>
        </div>
        <div class="row">
            <div class="col-xs-12 col-sm-12 p-0" align="ceter">PICK YOUR PRICE</div>
        </div>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      title:'สวัสดี Yoonai'
    }
  }
}
</script>

<style lang="scss">
    $mm:0px;
    $color_1:#00B1FF;
    $color_2:#0D5EBF;
    $color_3:#002969;
    $color_4:#373535;
    *{
        font-family: 'Prompt', sans-serif;
    }
    body{
        margin:0px;
        padding:0px;
    }
    #videoPreview {
        position: fixed;
        right: 0;
        bottom: 0;
        min-width: 100%; 
        /*min-height: 100%;*/
    }
    .box1{
        height:200px;
        width:100%;
        color:#fff;
        background-color: $color_1;
    }
    .box2{
        height:200px;
        width:100%;
        color:#fff;
        background-color: $color_2;
    }
    .box3{
        height:200px;
        width:100%;
        color:#fff;
        background-color: $color_3;
    }
    .box4{
        height:200px;
        width:100%;
        color:#fff;
        background-color: $color_4;
    }
</style>
