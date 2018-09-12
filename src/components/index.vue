<template>
    <div id="yoonai-index">
        <!--- Preview --->
        <div class="pPreview">
            <video autoplay muted loop>
                <source :src="require('../assets/preview.mp4')" type="video/mp4">
            </video>
            <label class="txt-preview">
                <span>{{msg.preview.label_1[lang]}}</span> {{msg.preview.label_2[lang]}}
            </label>
<!--
            <div style="position:absolute;top:20px;width:100%;">
                <div class="pos-f-t">
                    <div class="collapse" id="navbarToggleExternalContent">
                      <div class="bg-dark p-4">
                        <h5 class="text-white h4">Collapsed content</h5>
                        <span class="text-muted">Toggleable via the navbar brand.</span>
                      </div>
                    </div>
                    <nav class="navbar navbar-dark">
                      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                      </button>
                    </nav>
                </div>
            </div>
-->
            <div style="position:absolute;top:20px;width:100%;">
                <div class="container brink">
                    <div class="row">
                        <div class="col">
                            <div class="yoonai-logo"></div>
                        </div>
                        <div class="col text-right">
                            <div align="right">
                                <span class="lang-bar" v-bind:class="lang" v-on:click="lang=(lang == 'th')?'en':'th'"></span>
                            </div>
                            <a href="login" class="btn">{{msg.login[lang]}}</a>
                            <a href="signup" class="btn active">{{msg.signup[lang]}}</a>
                      </div>
                    </div>
              </div>
            </div>
        </div>
        <!-- HOW IT WORKS --->
        <div class="pItWork container brink">
            <div class="row space">
                <div class="col-sm-6">
                    <div class='caption' style='margin-bottom: 25px'>{{msg.it_work.caption[lang]}}</div>
                    {{msg.it_work.detail[lang]}}
                </div>
                <div class="col-sm-6">
                    <img class="img-fluid" :src="require('../assets/img/it_works.png')"></img>
                </div>
            </div>
        </div>
        <!-- Features -->
        <div class="pFeatures container-fluid">
            <div class="container brink">
                <div class="row space">
                    <div class="col-md-8">
                        <div class='caption' style='margin-bottom: 25px'>{{msg.feature.caption[lang]}}</div>
                        <div align='right'>
                            <ul>
                                <li>{{msg.feature.information[lang]}}</li>
                                <li>{{msg.feature.route_tracking[lang]}}</li>
                                <li>{{msg.feature.ping[lang]}}</li>
                                <li>{{msg.feature.speed[lang]}}</li>
                                <li>{{msg.feature.distance[lang]}}</li>
                                <li>{{msg.feature.communication[lang]}}</li>
                                <li>{{msg.feature.route_alert[lang]}}</li>
                                <li>{{msg.feature.corporate[lang]}}</li>
                            </ul>
                            <div class="row">
                                <div class="col"><span class="yoonai-icon"></span></div>
                                <div class="col align-self-center">
                                    <img class="img-fluid" style="min-width: 50px" :src="require('../assets/img/app-store.png')"/>
                                </div>
                                <div class="col align-self-center">
                                    <img class="img-fluid" style="min-width: 50px" :src="require('../assets/img/google-play.png')"/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4 align-self-end">
                        <img class="img-fluid" style="min-width: 100px" :src="require('../assets/img/features.png')" />
                    </div>
                </div>
            </div>
        </div>
        <!-- GET CONNECTED -->
        <div class="container-fluid pConnected">
            <div class="container brink">
                <div class="row space">
                    <div class="col-sm-6">
                        <div class='caption' style='margin-bottom: 25px'>{{msg.connected.caption[lang]}}</div>
                        <img class="img-fluid" :src="require('../assets/img/get_connected.png')" />
                    </div>
                    <div class="col-sm-6 align-self-center">
                        <div style="margin:0px 0px 50px;">
                            {{msg.connected.detail[lang]}}
                        </div>
                        <a href="signup" class="btn">{{msg.signup[lang]}}</a>
                    </div>
                </div>
            </div>
        </div>
        <!-- NEED MORE --->
        <div class="container brink pNeedMore">
            <div class="row space">
                <div class="col-sm-6 col-md-6">
                    <div class="container">
                        <div class="caption" style="margin-bottom:50px;">{{msg.need_more.caption[lang]}}</div>
                        <div style="margin:0px 0px 50px;">
                            {{msg.need_more.detail[lang]}}
                      </div>
                        <a href="moreDetail" class="btn">{{msg.need_more.more[lang]}}</a>
                    </div>
                </div>
                <div class="col-sm-6 col-md-6">
                    <img class="img-fluid" :src="require('../assets/img/need_more.png')" />
                </div>
            </div>
        </div>
        <!-- PICK YOUR PRICE -->
        <div class="container-fluid pPickPrice">
            <div class="container brink">
                <div class="row space">
                    <div class="col"><div class='caption' style='margin-bottom: 25px'>{{msg.pick.caption[lang]}}</div></div>
                </div>
                <div class="row">
                    <div class="box col-md-4">
                        <img class="img-fluid" :src="require('../assets/img/pick-starter.png')"/>
                        <ul>
                            <li class="title">{{msg.pick.starter.title[lang]}}</li>
                            <li class="sub-title">{{msg.pick.starter.l1[lang]}}</li>
                            <li>{{msg.pick.starter.l2[lang]}}</li>
                            <li>{{msg.pick.starter.l3[lang]}}</li>
                            <li>{{msg.pick.starter.l4[lang]}}</li>
                            <li>{{msg.pick.starter.l5[lang]}}</li>
                            <li>{{msg.pick.starter.l6[lang]}}</li>
                            <li class="border-none">&nbsp;</li>
                            <li class="border-none">
                                <a href="#" class="btn">{{msg.take_this[lang]}}</a>
                            </li>
                        </ul>
                    </div>
                    <div class="box col-md-4">
                        <img class="img-fluid" :src="require('../assets/img/pick-basic.png')"/>
                        <ul>
                            <li class="title">{{msg.pick.basic.title[lang]}}</li>
                            <li class="sub-title">{{msg.pick.basic.l1[lang]}}</li>
                            <li>{{msg.pick.basic.l2[lang]}}</li>
                            <li>{{msg.pick.basic.l3[lang]}}</li>
                            <li>{{msg.pick.basic.l4[lang]}}</li>
                            <li>{{msg.pick.basic.l5[lang]}}</li>
                            <li>{{msg.pick.basic.l6[lang]}}</li>
                            <li>{{msg.pick.basic.l7[lang]}}</li>
                            <li class="border-none">
                                <a href="#" class="btn">{{msg.take_this[lang]}}</a>
                            </li>
                        </ul>
                    </div>
                    <div class="box col-md-4">
                        <img class="img-fluid" :src="require('../assets/img/pick-advanced.png')"/>
                        <ul>
                            <li class="title">{{msg.pick.advance.title[lang]}}</li>
                            <li class="sub-title">{{msg.pick.advance.l1[lang]}}</li>
                            <li>{{msg.pick.advance.l2[lang]}}</li>
                            <li>{{msg.pick.advance.l3[lang]}}</li>
                            <li>{{msg.pick.advance.l4[lang]}}</li>
                            <li>{{msg.pick.advance.l5[lang]}}</li>
                            <li>{{msg.pick.advance.l6[lang]}}</li>
                            <li>{{msg.pick.advance.l7[lang]}}</li>
                            <li class="border-none">
                                <a href="#" class="btn">{{msg.take_this[lang]}}</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <yoonai-footer></yoonai-footer>
    </div>
</template>
<script>
    import axios from 'axios';  
    import bus from "./../bus.js";
    
    import Footer from './footer.vue';

    export default {
        props:['session'],
        components: {
            'yoonai-footer':Footer 
        },
        created: function () {
            this.lang = this.session.lang;
        },
        mounted(){
            console.log('mounted');
            /*axios.get(this.conf.url_api+"/api/session",{ headers: { Pragma: 'no-cache'} })
                .then((response)=>{
                    this.lang = response.data.lang;
                    this.view_count = response.data.views;
                })
                .catch((error)=>{
                    console.log(error);
                });*/
        },
        data() {
            return {
                view_count:0,
                lang:'th',
                msg: {
                    signup:{
                        'en':'SIGN UP FREE',
                        'th':'ลงทะเบียนฟรี'
                    },
                    login:{
                        'en':'LOG IN',
                        'th':'เข้าสู่ระบบ'
                    },
                    take_this:{
                        'en':'TAKE THIS',
                        'th':'เลือก'
                    },
                    preview:{
                        label_1:{
                            'en':'KNOW',
                            'th':'รู้'
                        },
                        label_2:{
                            'en':'WHERE YOUR FLEETS ARE',
                            'th':'ว่าคุณอยู่ที่ได'
                        }
                    },
                    it_work:{
                        caption:{
                            'en':'HOW IT WORKS',
                            'th':'ทำงานอย่างไร'
                        },
                        detail:{
                            'en':'Free Vehicle Tracking has been providing FREE vehicle tracking services worldwide for many years, and we are proud of our history in providing no-cost tracking services to those that need it. However, we feel that the time is right to expand our horizons, and we want to share this exciting news of the changes to come!',
                            'th':'การติดตามยานพาหนะฟรีได้ให้บริการติดตามยานพาหนะฟรีทั่วโลกเป็นเวลาหลายปีและเรามีความภาคภูมิใจในประวัติของเราในการให้บริการการติดตามผลโดยไม่เสียค่าใช้จ่ายแก่ผู้ที่ต้องการใช้งาน อย่างไรก็ตามเรารู้สึกว่าเวลาเหมาะสมสำหรับการขยายขอบเขตอันไกลโพ้นของเราและเราต้องการแบ่งปันข่าวที่น่าตื่นเต้นนี้เกี่ยวกับการเปลี่ยนแปลงที่จะเกิดขึ้น!'
                        }
                    },
                    feature:{
                        caption:{
                            'en':'FEATURES',
                            'th':'คุณสมบัติ'
                        },
                        information:{
                            'en':'Vehicle Information',
                            'th':'ข้อมูลยานพาหนะ'
                        },
                        route_tracking:{
                            'en':'Route Tracking',
                            'th':'การติดตามเส้นทาง'
                        },
                        ping:{
                            'en':'Vehicle Ping',
                            'th':'Vehicle Ping [th]'
                        },
                        speed:{
                            'en':'Speed Limit Alert',
                            'th':'แจ้งเตือนความเร็วเกิน'
                        },
                        distance:{
                            'en':'Distance Alert',
                            'th':'แจ้งเตือนระยะทาง'
                        },
                        communication:{
                            'en':'Lost Communication Alert',
                            'th':'แจ้งเตือนการสื่อสารที่หายไป'
                        },
                        route_alert:{
                            'en':'Route Alert',
                            'th':'แจ้งเตือนเส้นทาง'
                        },
                        corporate:{
                            'en':'Corporate Account',
                            'th':'Corporate Account [th]'
                        }
                    },
                    connected:{
                        caption:{
                            'en':'GET CONNECTED',
                            'th':'การเชื่อมต่อ'
                        },
                        detail:{
                            'en':'Free Vehicle Tracking has been providing FREE vehicle tracking services worldwide for many years, and we are proud of our history in providing no-cost tracking services to those that need it. However, we feel that the time is right to expand our horizons, and we want to share this exciting news of the changes to come!',
                            'th':'การติดตามยานพาหนะฟรีได้ให้บริการติดตามยานพาหนะฟรีทั่วโลกเป็นเวลาหลายปีและเรามีความภาคภูมิใจในประวัติของเราในการให้บริการการติดตามผลโดยไม่เสียค่าใช้จ่ายแก่ผู้ที่ต้องการใช้งาน อย่างไรก็ตามเรารู้สึกว่าเวลาเหมาะสมสำหรับการขยายขอบเขตอันไกลโพ้นของเราและเราต้องการแบ่งปันข่าวที่น่าตื่นเต้นนี้เกี่ยวกับการเปลี่ยนแปลงที่จะเกิดขึ้น!'
                        }
                    },
                    need_more:{
                        caption:{
                            'en':'NEED MORE',
                            'th':'รายละเอียด'
                        },
                        detail:{
                            'en':'Free Vehicle Tracking has been providing FREE vehicle tracking services worldwide for many years, and we are proud of our history in providing no-cost tracking services to those that need it. However, we feel that the time is right to expand our horizons, and we want to share this exciting news of the changes to come!',
                            'th':'การติดตามยานพาหนะฟรีได้ให้บริการติดตามยานพาหนะฟรีทั่วโลกเป็นเวลาหลายปีและเรามีความภาคภูมิใจในประวัติของเราในการให้บริการการติดตามผลโดยไม่เสียค่าใช้จ่ายแก่ผู้ที่ต้องการใช้งาน อย่างไรก็ตามเรารู้สึกว่าเวลาเหมาะสมสำหรับการขยายขอบเขตอันไกลโพ้นของเราและเราต้องการแบ่งปันข่าวที่น่าตื่นเต้นนี้เกี่ยวกับการเปลี่ยนแปลงที่จะเกิดขึ้น!'
                        },
                        more:{
                            'en':'MORE DETAIL',
                            'th':'รายละเอียด เพิ่มเติม'
                        }
                    },
                    pick:{
                        caption:{
                            'en':'PICK YOUR PRICE',
                            'th':'เลือกราคาของคุณ'
                        },
                        starter:{
                            title:{
                                'en':'STARTER',
                                'th':'เริ่มต้น'
                            },
                            l1:{
                                'en':'Simple, yet effective tracking service for everyone',
                                'th':'บริการติดตามที่เรียบง่าย แต่มีประสิทธิภาพสำหรับทุกคน'
                            },
                            l2:{
                                'en':'Your own mobile phone',
                                'th':'โทรศัพท์มือถือของคุณเอง'
                            },
                            l3:{
                                'en':'1 asset / account',
                                'th':'1 สินทรัพย์ / บัญชี'
                            },
                            l4:{
                                'en':'5 minute data interval',
                                'th':'ช่วงข้อมูล 5 นาที'
                            },
                            l5:{
                                'en':'7 days data storage',
                                'th':'จัดเก็บข้อมูล 7 วัน'
                            },
                            l6:{
                                'en':'FREE, always',
                                'th':'ฟรีเสมอ'
                            }
                        },
                        basic:{
                            title:{
                                'en':'BASIC',
                                'th':'ขั้นพื้นฐาน'
                            },
                            l1:{
                                'en':'More detail, and cost-saving tracking service',
                                'th':'รายละเอียดเพิ่มเติมและบริการติดตามการประหยัดค่าใช้จ่าย'
                            },
                            l2:{
                                'en':'Your own mobile phone',
                                'th':'โทรศัพท์มือถือของคุณเอง'
                            },
                            l3:{
                                'en':'Max 5 assets / account',
                                'th':'สูงสุด 5 รายการ / บัญชี'
                            },
                            l4:{
                                'en':'1 minute data interval',
                                'th':'ช่วงข้อมูล 1 นาที'
                            },
                            l5:{
                                'en':'3 months data storage',
                                'th':'จัดเก็บข้อมูล 3 เดือน'
                            },
                            l6:{
                                'en':'Options available',
                                'th':'Options available [th]'
                            },
                            l7:{
                                'en':'Starting 100 THB / month',
                                'th':'เริ่มต้น 100 บาท / เดือน'
                            }
                        },
                        advance:{
                            title:{
                                'en':'ADVANCED',
                                'th':'ขั้นสูง'
                            },
                            l1:{
                                'en':'More detail, and cost-saving tracking service',
                                'th':'รายละเอียดเพิ่มเติมและบริการติดตามการประหยัดค่าใช้จ่าย'
                            },
                            l2:{
                                'en':'Tracking Device provided',
                                'th':'มีอุปกรณ์ติดตามให้'
                            },
                            l3:{
                                'en':'Unlimited assets / account',
                                'th':'ไม่จำกัด สินทรัพย์ / บัญชี'
                            },
                            l4:{
                                'en':'1 minute data interval',
                                'th':'ช่วงข้อมูล 1 นาที'
                            },
                            l5:{
                                'en':'6 months data storage',
                                'th':'จัดเก็บข้อมูล 6 เดือน'
                            },
                            l6:{
                                'en':'Options available',
                                'th':'Options available [th]'
                            },
                            l7:{
                                'en':'Starting 200 THB / month',
                                'th':'เริ่มต้น 200 บาท / เดือน'
                            }
                        }
                    }
                }
            };
        }
    }
</script>