<template>
    <div class="login-page">
      <div class="login-page__container">
        <div class="login-page__container__background">
        </div>
        <div class="login-page__container__login-form">
            <div class="login-page__container__login-form__form">
                <h2>Login to continue</h2>
                <div class="login-page__container__login-form__form__separator">
                  <input type="text" id="username" value="" required>
                  <span class="login-page__container__login-form__form__separator--floating-label">Username</span>
                </div>
                <div class="login-page__container__login-form__form__separator">
                  <input type="password" id="password" value="" required>
                  <span class="login-page__container__login-form__form__separator--floating-label">Password</span>
                </div>
                <div class="login-page__container__login-form__form__infos">
                    <label>
                        <input type="checkbox" name="rememberMe" value="rememberMe"> Remember me
                    </label>
                    <a href="#">Forgot Password?</a>
                </div>
                <button type="submit" @click="signin">Login</button>
            </div>
        </div>
      </div>
    </div>
</template>

<script>
export default {
    name: "home",
    data() {
        return {
          homeList: [
            "home item 1",
            "home item 2",
            "home item 3"
          ]
        }
    },
    methods: {
      signin: function() {
        this.$router.push('/friends'); 
      },
    }
}
</script>