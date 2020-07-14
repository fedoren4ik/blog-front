<template>
    <div class="login-form-wrapper">
        <div class="login-form">
            <div class="login-form-inner">
                <div class="login-title">
                    Login
                </div>
                <form class="form-wrapper">
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
                        <router-link to="/registration">
                          <div class="to-registration">Registration</div>
                        </router-link>
                    </div>
                    <div class="login-button-wrapper">
                        <input class="login-button" type="submit" value="Login" @click="handleSubmit">
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script type="text/ecmascript-6">
   export default {
       name: 'Login',
       data(){
           return {
               form: {
                   userEmail: '',
                   userPassword: '',
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
/*login*/
.login-form-wrapper {
    width: 100%;
}
.login-form {
    max-width: 800px;
    max-height: 700px;
    margin: 150px auto 100px;
    background-color: #e5e5e5;
    text-align: center;
}
.login-form-inner {
    padding: 50px 30px;
    max-width: 400px;
    margin: 0 auto;
}

.login-title {
    font-size: 33px;
    margin-bottom: 10px;
}

.form-wrapper {
    margin: 0 auto;
}
.login-field {
    max-width: 350px;
    margin: 15px auto;
}

.login-input {
    border: 1px lightblue solid;
    border-radius: 0.25rem;
    height: 35px;
    padding: 0 10px;
    font-size: 18px;
    color: #2c3e50;
    width: 100%;
    max-width: inherit;
    box-sizing: border-box;
    margin-top: 5px;
}

.name-field {
    text-align: left;
}

.to-registration {
    text-align: right;
    font-size: 12px;
    cursor: pointer;
    color: #2c3e50;
    text-decoration: none;
    max-width: 400px;
    width: 100%;
    box-sizing: border-box;
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
/*end of login */
/*media for login component */
@media screen and (max-width: 450px) {
    .login-form {
        margin: 70px 0;
    }
    .login-form-wrapper {
        padding-bottom: 50px;
    }
}
/*end of login media*/
</style>
