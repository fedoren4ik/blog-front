<template>
    <div class="login-form">
        <div style="position: absolute; top: 0; left: 0;"> <router-link to="/login">login</router-link></div>
        <div class="login-title">
            Registration
        </div>
        <form>
            <div class="login-field">
                <div class="name-field">
                    Name:
                </div>
                <input class="login-input" v-model="form.userName" name="userName"/>
            </div>
            <div class="login-field">
                <div class="name-field">
                    Surname:
                </div>
                <input class="login-input" v-model="form.userSurname" name="userSurname"/>
            </div>
            <div class="login-field">
                <div class="name-field">
                    E-mail:
                </div>
                <input class="login-input" v-model="form.userEmail" type="email" name="email"/>
            </div>
            <div class="login-field">
                <div class="name-field">
                    Password:
                </div>
                <input class="login-input" v-model="form.userPassword" type="password" name="password"/>
            </div>
            <div class="login-field">
                <div class="name-field">
                    Submit password:
                </div>
                <input class="login-input" v-model="form.submitPassword" type="password" name="submitPassword"/>
            </div>
            <div class="login-button-wrapper">
                <input class="login-button" type="submit" value="Sign in" @click="handleSubmit">
            </div>
        </form>
    </div>
</template>

<script type="text/ecmascript-6">
    export default {
        name: 'Login',
        data(){
            return {
                form: {
                    userName: '',
                    userSurname: '',
                    userEmail: '',
                    userPassword: '',
                    submitPassword: ''
                }
            }
        },
        methods: {
            handleSubmit () {
                alert('work!: ' + JSON.stringify(this.form))
            }
        }
    }
</script>

<style>
    .login-form {
        position: relative;
        max-width: 270px;
        max-height: 700px;
        margin: 150px auto 100px;
        background-color: #e5e5e5;
        padding: 80px 150px;
        text-align: center;
    }
    .login-title {
        font-size: 33px;
        margin-bottom: 10px;
    }
    .login-field {
        margin: 15px 0;
    }

    .login-input {
        margin-top: 5px;
        border: 1px lightblue solid;
        border-radius: 0.25rem;
        height: 35px;
        padding: 0 10px;
        font-size: 18px;
        color: #2c3e50;
        width: 250px;
    }

    .name-field {
        text-align: left;
    }

    .login-button-wrapper {
        margin-top: 10px;
    }

    .login-button {
        padding: 10px 50px;
        border-radius: 12px;
        border: 1px grey solid;
        text-decoration: none;
        cursor: pointer;
        outline: none;
    }

</style>