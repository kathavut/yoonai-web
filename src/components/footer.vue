<template>
    <footer>
        <div class="container">
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
                    <p>{{ privacy }}</p>
                </div>
            </div>
        </div>
    </footer>
</template>

<script>
export default {
  data () {
    return {
        copylight:'Copylight 2018 chysoft.co.th',
        privacy:'Privacy Policy'
    }
  }
}
</script>
<style scoped>
    footer{
        font-size:12px !important;
    }
    a{
        color:#ffffff;
        font-size:12px;
    }
    p{
        margin-top:20px;
        margin-bottom:20px;
        color:#a9a9a9;
        font-size:12px;
    }
</style>
