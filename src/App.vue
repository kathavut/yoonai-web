<template>
    <div id="app">
        <yoonai-preview></yoonai-preview>
        <yoonai-it-work></yoonai-it-work>
        <yoonai-features></yoonai-features>
        <yoonai-connected></yoonai-connected>
        <yoonai-need-more></yoonai-need-more>
        <yoonai-pick-price></yoonai-pick-price>
        <yoonai-footer></yoonai-footer>
    </div>
</template>

<script>
    import video_preview from './components/video_preview.vue'
    import it_work from './components/it_work.vue'
    import features from './components/features.vue'
    import get_connected from './components/get_connected.vue'
    import need_more from './components/need_more.vue'
    import pick_price from './components/pick_price.vue'
    import Footer from './components/footer.vue'
    export default {
        name: 'app',
        components:{
            'yoonai-preview':video_preview,
            'yoonai-it-work':it_work,
            'yoonai-features':features,
            'yoonai-connected':get_connected,
            'yoonai-need-more':need_more,
            'yoonai-pick-price':pick_price,
            'yoonai-footer':Footer 
        },
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
        font-size:16px;
        font-weight: 300;
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
        background-color: $color_5;
    }
    ._box{
        background-color: $color_5;
    }
    .yoonai-logo{
        width: 60px;
        height: 60px;
        background-image: url('./assets/logo.png');
        background-size: cover;
        background-color:#fff;
        display: block;
        border-radius: 30px;
        -webkit-border-radius: 30px;
        -moz-border-radius: 30px;
    }
    .yoonai-logo:after{
        content: 'YOONAI';
        position:absolute;
        left:70px;
        top:18px;
        color:#ffffff;
        font-size: 20px;
        font-weight: 400;
        letter-spacing: 3px;
    }
    .yoonai-icon{
        width: 60px;
        height: 60px;
        background-image: url('./assets/logo.png');
        background-size: cover;
        background-color:$color_1;
        display: inline-block;
        border-radius: 10px;
        -webkit-border-radius: 10px;
        -moz-border-radius: 10px;
    }
    .lang-bar-en{
        width: 24px;
        height: 24px;
        background-size: cover;
        background-color:$color_1;
        display: block;
        border-radius: 12px;
        -webkit-border-radius: 12px;
        -moz-border-radius: 12px;
        position:relative;
    }
    .lang-bar-en:before{
        content:'EN';
        position:absolute;
        top:4px;
        left:6px;
        color:#ffffff;
        font-size:10px;
    }
    .login_signup{
        position:absolute;
        z-index:99;
        top:20px;
        right :20px;
    }
    .login_signup a{
        margin:5px;
        padding:5px;
        color:#fff;
    }
    .caption{
        letter-spacing: 3px;
        font-weight: 300;
        font-size:20px;
    }
    a.active{
        padding:5px;
        border-radius: 20px;
        color:#fff;
        background-color: $color_1;
        padding: 10px 20px;
    }
    a.button {
        border: none;
        color: white;
        padding: 5px 20px;
        text-align: center;
        text-decoration: none;
        display: inline-block;
        cursor: pointer;
        border-radius: 20px;
        -webkit-border-radius: 20px;
        -moz-border-radius: 20px;
    }
    a.button:hover {
        background-color: $color_1;
        color: white;
    }
    footer{
        background-color: $color_4;
        padding-top:30px;
        color:#ffffff;
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
