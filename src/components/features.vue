<template>
    <div class="container-fluid" style='padding-top: 50px;'>
        <div class="container">
            <div  class='row'>
                <div class="col-xs-12 col-sm-6 p-0 m-0" align="right">
                    <div align="left" style='margin:20px 0px 20px 0px'>
                        <label class='caption'>FEATURES</label>
                    </div>
                    <ul class="_box features">
                        <li>Vehicle Information</li>
                        <li>Route Tracking</li>
                        <li>Vehicle Ping</li>
                        <li>Speed Limit Alert</li>
                        <li>Distance Alert</li>
                        <li>Lost Communication Alert</li>
                        <li>Route Alert</li>
                        <li>Corporate Account</li>
                    </ul>
                    <div aligin="right" style="margin-top:20px;margin-right:20px">
                        <table border="0" cellpadding="4">
                            <tr>
                                <td valign="bottom"><span class="yoonai-icon"></span></td>
                                <td valign="bottom"><img src="../assets/app-store.png" height="35" style="margin:4px;"/></td>
                                <td valign="bottom"><img src="../assets/google-play.png" height="35" style="margin:4px;"/></td>
                            </tr>
                        </table>
                    </div>
                </div>
                <div class="col-xs-12 col-sm-6 p-0 m-0">
                    <img src="../assets/features.png" style="width:100%;"/>
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
    }
    li{
        text-align: right;
        list-style-position: inside;
        padding:3px;
    }
    li::before {
        content: "\25AA"; color: #00B1FF;
        display: inline-block; width: 1em;
        margin-right:15px;
        font-size:20px;
    }
    ._box{
        background-color:#ffffff;
        margin-right: 25px;
        opacity: 0.8;
        filter: alpha(opacity=80);
    }
    .features{
        max-width:300px;
        padding:20px 10px;
    }
    .container-fluid{
        background: linear-gradient(to top, transparent, #ffffff),
            linear-gradient(to bottom, transparent, #ffffff),
            url("../assets/traffic.jpg");
        background-blend-mode: screen;
        -webkit-background-size: cover;
        -moz-background-size: cover;
        -o-background-size: cover;
        background-size: cover;        
    }
</style>

