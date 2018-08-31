<template>
    <div class="container">
        <div class="row">
            <div class="col-lg-3"></div>
            <div class="col-lg-6">
                <div id="ui">
                    <form class="form-group" @submit.prevent>
                        <div class="row">
                            <div class="col-lg-6">
                                <label>First Name:</label>
                                <input type="text" v-model="firstName" class="form-control" placeholder="Enter your First name..">
                            </div>
                            <div class="col-lg-6">
                                <label>First Name:</label>
                                <input type="text" v-model="lastName" class="form-control" placeholder="Enter your Last name..">
                            </div>
                        </div>
                        <label>E-mail</label>
                        <input type="email" v-model="Email" class="form-control" placeholder="Enter your E-mail">
                        <div class="row">
                            <div class="col-lg-6">
                                <label>Password:</label>
                                <input type="password" v-model="Password" class="form-control" placeholder="Enter New password..">
                            </div>
                            <div class="col-lg-6">
                                <label>Re-type Password:</label>
                                <input type="password" v-model="rePassword" class="form-control" placeholder="Re-type again..">
                            </div>
                        </div>
                        <select class="form-control">
                            <option>Choose Gender..</option>
                            <option>Male</option>
                            <option>Female</option>
                            <option>Others</option>
                        </select>
                        <input type="submit" name="submit" value="submit" v-on:click="_Register()" class="btn btn-primary btn-block">
                    </form>
                </div>
            </div>
            <div class="col-lg-3"></div>
        </div>
    </div>
</template>

<script>
    import axios from 'axios';  
    import bus from "./../bus.js";
    export default {
        props:['session'],
        data () {
            return {
                firstName:'kathavut',
                lastName:'',
                Email:'',
                Password:'',
                rePassword:''
            }
        },
        methods: {
            _Register() {
                axios.post(this.session.urlApi+'/signup', {
                    FirstName: this.firstName,
                    LastName:this.lastName,
                    Email:this.Email,
                    Password:this.Password
                }).then((response) => {
                    console.log(response);
                }).catch((error) => {
                    console.log(error);
                });
            }
        }
    }
</script>