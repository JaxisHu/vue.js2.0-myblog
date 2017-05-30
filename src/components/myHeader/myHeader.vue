<template>
  <div class="header">
    <img class="bg" :src="getBackground">
    <div class="black">
      <div class="title-avatar">
        <router-link to="/login"><span class="avatar"></span></router-link>
        <h1 class="title">KnightKiz</h1>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default{
    computed: {
      getBackground() {
        let ran = Math.round(Math.random() * 3 + 1);
        let back = 'back' + ran + '.jpg';
        return back;
      }
    }
  };
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .header
    user-select: none
    cursor: default
    position: relative
    height: 380px
    width: 100%
    overflow: hidden
    .bg
      position: absolute
      width: 100%
      @media screen and (max-width: 640px)
        width: 640px
        left: 50%
        margin-left: -320px
    .black
      position: absolute
      top: 0
      left: 0
      width: 100%
      height: 380px
      background-color: rgba(7, 17, 27, 0.6)
      .title-avatar
        position: relative
        width: 640px
        margin: 100px auto 0 auto
        text-align: center
        @media screen and (max-width: 640px)
          width: 100%
        .avatar
          cursor: pointer
          display: block
          height: 86px
          width: 86px
          margin: 0 auto
          border-radius: 50%
          background-image: url('avatar.jpg')
          background-repeat: no-repeat
          background-size: 86px 86px
        .title
          margin-top: 50px
          line-height: 48px
          font-size: 48px
          color: #fff
</style>
