<template>
  <div class="login-wrapper">
    <img class="loginbg" src="./loginbg.jpg">
    <div class="login">
      <h2 class="head">Super Donkey</h2>
      <form class="form">
        <h3 class="title">LOGIN</h3>
        <div class="content">
          <span class="wrong" v-show="somethingWrong">{{wrong}}</span>
          <div class="name">
            <span class="label">Manager</span>
            <input v-model="name" class="text" type="text" placeholder="if you are a Donkey">
          </div>
          <div class="password">
            <span class="label">Password</span>
            <input v-model="password" class="text" type="password" placeholder="just login">
          </div>
          <a class="github" href="#">star my Github to have right :-)</a>
          <button class="login-button" @click="checkLogin()">login</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default{
    data() {
      return {
        wrong: '',
        name: '',
        password: ''
      };
    },
    computed: {
      somethingWrong() {
        if (this.wrong === '') {
          return false;
        }
        return true;
      }
    },
    methods: {
      checkLogin() {
        if (this.name === '') {
          this.wrong = 'name is empty!!!';
        } else if (this.password === '') {
          this.wrong = 'password is empty!!!';
        }
      }
    }
  };
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import '../../common/stylus/inputText.stylus'
  .login-wrapper
    position: absolute
    top: 0
    left: 0
    overflow: hidden
    user-select: none
    width: 100%
    .loginbg
      width: 100%
      background-repeat: no-repeat
      @media screen and (max-width: 1280px)
        width: 1280px
    .login
      position: absolute
      top: 50%
      left: 50%
      width: 300px
      margin-left: -150px
      margin-top: -300px
      .head
        line-height: 60px
        text-align: center
        font-size: 30px
        font-family: '微软雅黑'
        color: #fff
      .form
        width: 300px
        box-shadow: 0 12px 30px -6px #000
        border-radius: 3px
        background-color: #fff
        .title
          ling-height: 25px
          padding: 20px 0
          text-align: center
          font-size: 25px
          border-bottom: solid 1px #E7E7E7
          color: #999
        .content
          padding: 20px 20px
          .wrong
            display: block
            line-height: 30px
            margin-bottom: 20px
            text-align: center
            font-size: 15px
            border-radius: 3px
            color: #fff
            background-color: #FF9578
          .name
            margin-bottom: 30px
            .label
              display: block
              margin-bottom: 5px
              font-size: 15px
              color: #a4a4a4
            .text
              my-input-text()
          .password
            .label
              display: block
              margin-bottom: 5px
              font-size: 15px
              color: #a4a4a4
            .text
              my-input-text()
          .github
            display: block
            margin: 5px 0
            text-align: center
            font-size: 12px
            color: #43A6EB
          .login-button
            display: block
            position: relative
            width: 140px
            height: 48px
            line-height: 48px
            margin: 30px auto
            padding: 0
            cursor: pointer
            font-size: 20px
            border: none
            border-radius: 4px
            color: #ffffff
            background-color: #43A6EB
            outline: none
            &:hover
              opacity: 0.8
</style>
