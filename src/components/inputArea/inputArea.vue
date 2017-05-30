<template>
  <div class="input-area">
    <input class="input-text" type="text" placeholder="您的昵称">
    <textarea class="text-area" rows="6" placeholder="写下您的评论..."></textarea>
    <div class="btn">发送</div>
  </div>
</template>

<script type="text/ecmascript-6">

</script>

<style lang="stylus" rel="stylesheet/stylus">
  .input-area
    .input-text, .text-area
      width: 100%
      box-sizing: border-box
      margin: 15px 0
      padding: 10px 15px
      font-size: 13px
      background-color: #FCFCFC
      border: 1px solid #aaa
      border-radius: 5px
      outline: none
      resize: none
      &:hover
        box-shadow: 0 0 10px 2px #ddd
    .btn
      cursor: pointer
      user-select: none
      width: 88px
      height: 38px
      right: 0
      line-height: 38px
      text-align: center
      font-size: 15px
      color: #fff
      background-color: #42c02e
      border-radius: 5px
      &:hover
        background-color: #42a02e
</style>
