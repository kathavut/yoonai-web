<template>
    <footer>
        <div class="container">
            <div class="row">
                <div class="col">
                    <div class="yoonai-logo"></div>
                </div>
                <div class="col" align="right">
                    <a href="#">PRICING</a><br>
                    <a href="#">FAQ</a><br>
                    <a href="#">MOBILE APPLICATIONS</a><br>
                    <a href="#">ABOUT YOONAI</a><br>
                    <a href="#">CONTACT</a><br>
                </div>
            </div>
            <div class="row">
                <div class="col">
                    <p>{{ copylight }}</p>
                </div>
                <div class="col" align="right">
                    <p>{{ privacy }}</p>
                </div>
            </div>
        </div>
    </footer>
</template>

<script>
export default {
    props:['session'],
    data () {
        return {
            copylight:'Copylight &copy; 2018 chysoft.co.th',
            privacy:'Privacy Policy',
            msg:{
                en:{
                    hello:'HELLO WORLD'
                },
                th:{
                    hello:'สวัสดี'
                }
            }
        }
    }
}
</script>