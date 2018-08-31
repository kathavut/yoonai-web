<template>
    <div id="yoonai-login" class="container-fluid bg">
        <div class="row">
            <div class="col-md-4 col-sm-4 col-xs-12"></div>
            <div class="col-md-4 col-sm-4 col-xs-12">
                <form class="form-container">
                    <h1>Login Form</h1>
                    <div class="form-group">
                        <label for="inputEmail">Email</label>
                        <input type="email" class="form-control" id="inputEmail" placeholder="Email">
                    </div>
                    <div class="form-group">
                        <label for="inputPassword">Password</label>
                        <input type="password" class="form-control" id="inputPassword" placeholder="Password">
                    </div>
                    <div class="checkbox">
                        <label>
                            <input type="checkbox">Remember me
                        </label>
                    </div>
                    <button type="submit" class="btn btn-success btn-block">Submit</button>
                </form>
            </div>
            <div class="col-md-4 col-sm-4 col-xs-12"></div>
        </div>
    </div>
</template>

<script>
export default {
    props:['session'],
    data () {
        return {
            username:null,
            password:null,
            feedback:{
                username:null,
                password:null
            }
        }
    },
    methods:{
        onLogin(){
            console.log(arguments);
            if(!this.username){
                this.feedback.username = "okokojojo";
            }
        }
    }
}
</script>