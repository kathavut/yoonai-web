<template>
    <div class="container-fluid pcick_your_price">
        <div class="container" style="padding:50px 0px 50px 0px">
            <div align="left" style='margin:20px 0px 20px 0px'>
                <label class='caption'>PICK YOUR PRICE</label>
            </div>
            <div class="row">
                <div class="col-xs-6 col-sm-4 _pick_box">
                    <img src='../assets/pick-starter.png' class="_pick_img"/>
                    <ul class="_pick_price">
                        <li class="title">STARTER</li>
                        <li class="sub-title">Simple, yet effective tracking service for everyone</li>
                        <li>Your own mobile phone</li>
                        <li>1 asset / account</li>
                        <li>5 minute data interval</li>
                        <li>7 days data storage</li>
                        <li>FREE, always</li>
                        <li class="border-none">&nbsp;</li>
                        <li class="border-none">
                            <a href="#" class="button">TAKE THIS</a>
                        </li>
                    </ul>
                </div>
                <div class="col-xs-6 col-sm-4 _pick_box">
                    <img src='../assets/pick-basic.png' class="_pick_img"/>
                    <ul class="_pick_price">
                        <li class="title">BASIC</li>
                        <li class="sub-title">More detail, and cost-saving tracking service</li>
                        <li>Your own mobile phone</li>
                        <li>Max 5 assets / account</li>
                        <li>1 minute data interval</li>
                        <li>3 months data storage</li>
                        <li>Options available</li>
                        <li>Starting 100 THB / month</li>
                        <li class="border-none">
                            <a href="#" class="button">TAKE THIS</a>
                        </li>
                    </ul>
                </div>
                <div class="col-xs-6 col-sm-4 _pick_box">
                    <img src='../assets/pick-advanced.png' class="_pick_img"/>
                    <ul class="_pick_price">
                        <li class="title">ADVANCED</li>
                        <li class="sub-title">More detail, and cost-saving tracking service</li>
                        <li>Tracking Device provided</li>
                        <li>Unlimited assets / account</li>
                        <li>1 minute data interval</li>
                        <li>6 months data storage</li>
                        <li>Options available</li>
                        <li>Starting 200 THB / month</li>
                        <li class="border-none">
                            <a href="#" class="button">TAKE THIS</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
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
    ul{
        list-style-type: none;
        padding:20px;
    }
    li{
        padding:5px;
        border-bottom:1px solid #fff;
    }
    li.title{
        font-size:20px;
        border:none;
        text-align: center;
    }
    li.sub-title{
        padding-top: 20px;
        padding-bottom: 20px;
    }
    li.border-none{
        border:none;
        text-align: center;
        width:100%;
    }
    ._pick_box{
        position:relative;
        margin:0px;
        padding:0px;
    }
    ._pick_img{
        position:absolute;
        top:0px;
        left:-5px;
        width:100px;
        z-index:9999;
    }
    ._pick_price{
        background-color: #ade8f8;
        margin:20px 10px;
    }
    a.button{
        color:#00B1FF;
        border-color: #00B1FF;
        border-width:1px;
        border-style: solid;
        background-color: #ade8f8;
        margin:20px 5px;
    }
</style>

