<template>
    <div class="container-fluid">
        <div class="row">
            <div class="col-xs-12 col-sm-12 p-0 m-0" style='position:relative;'>
                <video id="videoPreview" autoplay muted loop>
                    <source src="../assets/preview.mp4" type="video/mp4">
                </video>
                <label class="txt-middle"><label class="txt-bb">KNOW</label> WHERE YOUR FLEETS ARE</label>
                <div style='position:absolute;z-index:99;top:30px;left :20px;'>
                    <div class="yoonai-logo"></div>
                </div>
                <div class="login_signup" align='right'>
                    <span class="lang-bar-en"></span>
                    <a href='#' class="button">LOG IN</a>
                    <a href='#' class="button active">SIGN UP FREE</a>
                </div>
            </div>
        </div>
        <!--<div class="container">
            <div class="row">
                <div class="col-xs-6 col-sm-6 p-0 m-0">
                    <div class="yoonai-logo"></div>
                </div>
                <div class="col-xs-6 col-sm-6 p-0 m-0" align="right">
                    <a href="#">PRICING</a><br>
                    <a href="#">FAQ</a><br>
                    <a href="#">MOBILE APPLICATIONS</a><br>
                    <a href="#">ABOUT YOONAI</a><br>
                    <a href="#">CONTACT</a><br>
                </div>
            </div>
            <div class="row">
                <div class="col-xs-6 col-sm-6 p-0 m-0">
                    <p>{{ copylight }}</p>
                </div>
                <div class="col-xs-6 col-sm-6 p-0 m-0" align="right">
                    <p>{{ copylight }}</p>
                </div>
            </div>
        </div>-->
    </div>
</template>

<script>
export default {
  data () {
    return {
        
    }
  }
}
</script>
<style scoped>
    .txt-middle{
        color:#ffffff;
        position: absolute;
        top: 50%;
        height: 5%;
        width:100%;
        text-align: center;
        font-size: 25px;
        font-weight: 200;
        letter-spacing: 5px;
    }
    .txt-bb{
        font-size:25px;
        font-weight: 500;
    }
</style>
