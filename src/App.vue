<template>
    <div id="app">
        <div class="container-fluid">
            <div class="row">
                <div class="col-xs-12 col-sm-12 p-0 m-0">
                    <video id="videoPreview" autoplay muted loop>
                        <source src="./assets/preview.mp4" type="video/mp4">
                    </video>
                </div>
            </div>
        </div>
        <div class="container">
            <h1>HOW IT WORKS</h1>
            <div class="row">            
                <div class="col-xs-6 col-sm-6 p-0 m-0">
                    <div>
                    Free Vehicle Tracking has been providing FREE vehicle tracking services worldwide for many years, and we are proud of our history in providing no-cost tracking services to those that need it. However, we feel that the time is right to expand our horizons, and we want to share this exciting news of the changes to come!
                    </div>
                </div>
                <div class="col-xs-6 col-sm-6 p-0 m-0">
                    <img src="./assets/it_works.png" style="width:100%"/>
                </div>
            </div>
        </div>
        <div class="container">
            <div  class='row'>
                <div class="col-xs-6 col-sm-9 p-0 m-0">
                    FEATURES
                </div>
                <div class="col-xs-6 col-sm-3 p-0 m-0">
                    FEATURES
                </div>
            </div>
        </div>
        <div class="container-fluid _get_connected">
            <div class="container">
                <h1>GET CONNECTED</h1>
                <div  class='row'>
                    <div class="col-xs-6 col-sm-6 p-0 m-0">
                        <img src="./assets/need_more.png" style="width:100%"/>
                    </div>
                    <div class="col-xs-6 col-sm-6 p-0 m-0">
                        <div>
                        Free Vehicle Tracking has been providing FREE vehicle tracking services worldwide for many years, and we are proud of our history in providing no-cost tracking services to those that need it. However, we feel that the time is right to expand our horizons, and we want to share this exciting news of the changes to come!
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="container">
            <h1>NEED MORE</h1>
            <div  class='row'>
                <div class="col-xs-6 col-sm-6 p-0 m-0">
                    <div>
                    Free Vehicle Tracking has been providing FREE vehicle tracking services worldwide for many years, and we are proud of our history in providing no-cost tracking services to those that need it. However, we feel that the time is right to expand our horizons, and we want to share this exciting news of the changes to come!
                    </div>
                </div>
                <div class="col-xs-6 col-sm-6 p-0 m-0">
                    <img src="./assets/need_more.png" style="width:100%"/>
                </div>
            </div>
        </div>
        <div class="container-fluid pcick_your_price">
            <div class="container">
                <h1>PICK YOUR PRICE</h1>
                <div class="row">
                    <div class="col-xs-6 col-sm-3">
                        <div class="_box">ssss</div>
                    </div>
                    <div class="col-xs-6 col-sm-3">
                        <div class="_box">ssss</div>
                    </div>
                    <div class="col-xs-6 col-sm-3">
                        <div class="_box">ssss</div>
                    </div>
                    <div class="col-xs-6 col-sm-3">
                        <div class="_box">ssss</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      title:'YOUNAI',
      company:'Chysoft Co.,Ltd.'
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
    $color_5:#99DDFF;
    *{
        font-family: 'Prompt', sans-serif;
    }
    body{
        margin:0px;
        padding:0px;
    }
    #videoPreview {
        position: sticky; 
        top: 0px;
        width:100%;
        min-width: 100%; 
        min-height: 100%;
    }
    ._get_connected{
        background-color: $color_1;
        color:#FFFFFF;
    }
    .pcick_your_price{
        background-color: $color_1;
    }
    ._box{
        background-color: $color_5;
    }
    @media (min-width: 576px) {
        
    }
    @media (min-width: 768px) {
        
    }
    @media (min-width: 992px) {
        
    }
    @media (min-width: 1200px) {
        
    }
</style>
