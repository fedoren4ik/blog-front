<template>
    <div class="registration-form-wrapper">
        <div class="registration-form">
            <div class="registration-form-inner">
                <div style="position: absolute; top: 0; left: 0;"> <router-link to="/">login</router-link></div>
                <div class="registration-title">
                    Registration
                </div>
                <form>
                    <div class="registration-field">
                        <div class="name-field">
                            Name:
                        </div>
                        <input class="registration-input" v-model="form.userName" name="userName"/>
                    </div>
                    <div class="registration-field">
                        <div class="name-field">
                            Surname:
                        </div>
                        <input class="registration-input" v-model="form.userSurname" name="userSurname"/>
                    </div>
                    <div class="registration-field">
                        <div class="name-field">
                            E-mail:
                        </div>
                        <input class="registration-input" v-model="form.userEmail" type="email" name="email"/>
                    </div>
                    <div class="registration-field">
                        <div class="name-field">
                            Password:
                        </div>
                        <input class="registration-input" v-model="form.userPassword" type="password" name="password"/>
                    </div>
                    <div class="registration-field">
                        <div class="name-field">
                            Submit password:
                        </div>
                        <input class="registration-input" v-model="form.submitPassword" type="password" name="submitPassword"/>
                    </div>
                    <div class="registration-button-wrapper">
                        <input class="registration-button" type="submit" value="Sign in" @click="handleSubmit">
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
/* registration style */
.registration-form-wrapper {
    width: 100%;
}
.registration-form {
    max-width: 800px;
    max-height: 700px;
    margin: 150px auto 100px;
    background-color: #e5e5e5;
    text-align: center;
    position: relative;
}
.registration-form-inner {
    padding: 50px 30px;
    max-width: 400px;
    margin: 0 auto;
}

.registration-title {
    font-size: 33px;
    margin-bottom: 10px;
}
.registration-field {
    margin: 15px auto;
    max-width: 350px;
}

.registration-input {
    margin-top: 5px;
    border: 1px lightblue solid;
    border-radius: 0.25rem;
    height: 35px;
    padding: 0 10px;
    font-size: 18px;
    color: #2c3e50;
    width: 100%;
    box-sizing: border-box;
}

.name-field {
    text-align: left;
}

.registration-button-wrapper {
    margin-top: 10px;
}

.registration-button {
    padding: 10px 50px;
    border-radius: 12px;
    border: 1px grey solid;
    text-decoration: none;
    cursor: pointer;
    outline: none;
}
/* end registration style */
/* media for registration */
@media screen and (max-width: 450px) {
    .registration-form {
        margin: 70px 0;
    }
    .registration-form-wrapper {
        padding-bottom: 50px;
    }
}
/* end registration media*/
</style>
