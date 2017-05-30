<template>
  <div class="navbar">
    <ul class="nav-ul">
      <li class="slide-down">
        <i class="fa fa-bars"></i>
      </li>
      <li class="nav-li">
        <router-link to="/article">博文</router-link>
      </li>
      <li class="nav-li">
        <router-link to="/other">其他</router-link>
      </li>
      <li class="nav-li">
        <router-link to="/contact">联系方式</router-link>
      </li>
    </ul>
    <div class="edit-btn" v-show="isManager"><router-link to="/mySuperEdition">编辑文章</router-link></div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default{
    data() {
      return {
        isManager: true
      };
    }
  };
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import '../../common/stylus/font-awesome.min.css';
  .navbar
    position: relative
    display: block
    user-select: none
    width: 100%
    box-shadow: 0 1px 5px 3px #999
    background-color: #fff
    .nav-ul
      list-style: none
      width: 370px
      text-align: center
      .slide-down
        display: none
        cursor: pointer
        height: 56px
        width: 56px
        margin: 0 auto
        line-height: 56px
        text-align: center
        font-size: 30px
        color: #a1a1a1
      .nav-li
        display: inline-block
        width: 100px
        height: 56px
        margin: 0 10px
        line-height: 54px
        font-size: 15px
        & > a
          display: block
          color: #a1a1a1
        .router-link-active
          border-bottom: 3px solid #E67E22
          color: #E67E22
    .edit-btn
      position: absolute
      right: 20px
      top: 10px
      display: inline-block
      cursor: pointer
      user-select: none
      height: 36px
      line-height: 36px
      text-align: center
      font-size: 15px
      background-color: #ea6f5a
      border-radius: 4px
      & > a
        padding: 0 20px
        color: #fff
  @media screen and (max-width: 640px)
    .navbar
      .nav-ul
        width: 100%
        &:hover
          box-shadow: -5px 0 5px 3px #999
          .nav-li
            display: block
        .slide-down
          display: block
        .nav-li
          display: none
          width: 100%
          margin: 0
          .router-link-active
            border-bottom: none
          &:hover
            display: block
</style>
