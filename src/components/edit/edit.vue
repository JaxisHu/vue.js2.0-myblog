<template>
  <div class="edit-wrapper">
    <div class="left">
      <router-link to="/article">
        <div class="back-btn">回首页</div>
      </router-link>
      <ul class="left-ul">
        <li class="left-li" :class="{'active':!isEdition}" @click="selectMenu('write')">写文章</li>
        <li class="left-li" :class="{'active':isEdition}" @click="selectMenu('edit')">编辑文章</li>
      </ul>
    </div>
    <div class="mid" v-show="isEdition">
      <h2 class="edit-title"><i class="fa fa-file"></i>文章编辑</h2>
      <ul class="edition-ul">
        <li class="edition-li" v-for="(article,index) in articles" :key="index" @click="selectArticle(index)">
          <h3 class="title">{{article.title}}</h3>
          <p class="content">{{article.content}}</p>
        </li>
      </ul>
    </div>
    <div class="right" ref="right">
      <div class="workspace-wrapper">
        <input class="text" type="text" value="无标题文档" ref="text">
        <div class="area-wrapper">
          <textarea class="text-area" placeholder="写点什么..." ref="textArea"></textarea>
        </div>
      </div>
      <div class="workspace-bottom">
        <div class="btn-submit">提交</div>
        <div class="btn-delete" v-show="isEdition">删除</div>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  const ERR_OK = 0;
  export default{
    data() {
      return {
        articles: [],
        topMenu: 'write',
        isEdition: true
      };
    },
    created() {
      this.$http.get('/api/art').then((res) => {
        let body = res.body;
        if (body.erron === ERR_OK) {
          this.articles = body.data;
        }
      });
    },
    methods: {
      selectMenu(menu) {
        if (menu === 'write') {
          this.topMenu = 'write';
          this.isEdition = false;
          this.$refs.text.value = '无标题文档';
          this.$refs.textArea.value = '';
          this.$refs.right.style.width = '83%';
        } else {
          this.topMenu = 'edit';
          this.isEdition = true;
          this.$refs.right.style.width = '57%';
        }
      },
      selectArticle(index) {
        this.$refs.text.value = this.articles[index].title;
        this.$refs.textArea.value = this.articles[index].content;
      }
    }
  };
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import '../../common/stylus/font-awesome.min.css'
  .edit-wrapper
    z-index: 99
    position: absolute
    top: 0
    left: 0
    overflow: hidden
    min-height: 550px
    width: 100%
    height: 100%
    font-size: 0
    .left
      display: inline-block
      vertical-align: top
      width: 17%
      height: 100%
      background-color: #3F3F3F
      .back-btn
        box-sizing: border-box
        cursor: pointer
        user-select: none
        height: 36px
        line-height: 36px
        margin: 20px
        text-align: center
        font-size: 14px
        color: #ec7259
        border: 1px solid #ec7259
        border-radius: 4px
        &:hover
          border-color: #ff9f6f
          color: #ff9f6f
      .left-ul
        width: 100%
        .left-li
          cursor: pointer
          user-select: none
          padding: 10px 20px
          font-size: 14px
          color: #fff
          border-left: 3px solid #3F3F3F
          &:hover
            background-color: #646464
            border-left-color: #646464
          &.active
            background-color: #646464
            border-left-color: #ec7259
    .mid
      box-sizing: border-box
      display: inline-block
      vertical-align: top
      height: 100%
      width: 26%
      overflow: auto
      color: #555
      background-color: #fff
      border-right: 1px solid #ddd
      .edit-title
        padding: 20px
        font-size: 18px
        border-bottom: 1px solid #ddd
        .fa
          padding-right: 10px
      .edition-ul
        width: 100%
        .edition-li
          box-sizing: border-box
          cursor: pointer
          height: 100px
          padding: 10px 20px
          border-bottom: 1px solid #ddd
          border-left: 3px solid #fff
          &:last-child
            border-bottom: none
          &:hover
            background-color: #ddd
            border-left-color: #ec7259
          .title
            margin-bottom: 20px
            line-height: 30px
            font-size: 20px
          .content
            line-height: 14px
            white-space: nowrap
            text-overflow: ellipsis
            overflow: hidden
            font-size: 14px
    .right
      display: inline-block
      vertical-align: top
      width: 57%
      height: 100%
      .workspace-wrapper
        width: 100%
        height: 100%
        .text
          box-sizing: border-box
          width: 100%
          padding: 20px 30px
          font-size: 26px
          font-weight: 400
          border: none
          background-color: #fff
          outline: none
        .area-wrapper
          box-sizing: border-box
          height: 100%
          width: 100%
          padding: 30px 20px 170px 20px
          background-color: #fff
          border-top: 1px solid #ddd
          .text-area
            display: inline-block
            height: 100%
            width: 100%
            resize: none
            border: none
            outline: none
      .workspace-bottom
        margin-top: -80px
        clear: both
        .btn-submit
          display: inline-block
          cursor: pointer
          user-select: none
          height: 36px
          line-height: 36px
          margin: 10px 30px
          padding: 0 30px
          text-align: center
          font-size: 15px
          border: 1px solid #ea6f5a
          border-radius: 4px
          color: #ea6f5a
        .btn-delete
          display: inline-block
          cursor: pointer
          user-select: none
          height: 36px
          line-height: 36px
          margin: 10px 30px 10px 0
          padding: 0 30px
          text-align: center
          font-size: 15px
          background-color: #ea6f5a
          border-radius: 4px
          color: #fff
</style>
