<template>
    <div>
        <component v-bind:is="view" v-bind:session="session"></component>
    </div>
</template>

<script>
    import Index from './components/index.vue';
    import Login from './components/login.vue';
    import Signup from './components/signup.vue';
    
    export default {
        props:['view','_session'],
        name: 'app',
        components:{
            'yoonai-index':Index,
            'yoonai-login':Login,
            'yoonai-signup':Signup
        },
        data() {
          return {
              session:null
          }
        },
        created: function () {
            var session = JSON.parse(this._session);
            this.session = {
                lang:session.lang,
                urlApi:session.urlApi
            }
        }
    }
</script>

<style lang="scss">
    @import './assets/scss/yoonai.scss';
</style>

