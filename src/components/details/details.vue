<template>
    <div class="details-wrapper">
      <h1 class="title">{{article.title}}</h1>
      <div class="author">
        <img class="avatar" src="./avatar.jpg">
        <div class="author-right">
          <span class="time">{{article.createTime | format}}</span>
          <span class="reading-count">阅读 {{article.readCount}}</span>
          <span class="comment">评论 {{article.comments.length}}</span>
          <span class="like">点赞 {{article.like}}</span>
        </div>
      </div>
      <div class="content">
        {{article.content}}
      </div>
      <div class="like-block" @click="changeUp()" :class="{'up':isUp}">
      <span class="left">
        <i class="fa fa-thumbs-o-up"></i>
        <span class="zan">赞</span>
      </span>
        <span class="right">
        {{article.like}}
      </span>
      </div>
      <comments :comments="article.comments"></comments>
    </div>
</template>

<script type="text/ecmascript-6">
  import {formatTime} from '../../common/js/util';
  import comments from '../comments/comments';
  export default {
    data() {
      return {
        isUp: false,
        article: {}
      };
    },
    created() {
      this.article = this.$route.query.article;
    },
    methods: {
      changeUp() {
        this.isUp = !this.isUp;
      }
    },
    filters: {
      format(createTime) {
        return formatTime(createTime);
      }
    },
    components: {
      comments
    }
  };
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import '../../common/stylus/font-awesome.min.css'
  .details-wrapper
    margin: 0 auto
    max-width: 640px
    .title
      margin: 20px
      text-align: center
      line-height: 1.3
      font-size: 34px
    .author
      margin: 20px 0 15px 0
      line-height: 24px
      font-size: 0
      color: #969696
      .avatar
        box-sizing: border-box
        height: 48px
        width: 48px
        padding: 5px
        border: 1px solid #ccc
        border-radius: 50%
      .author-right
        display: inline-block
        vertical-align: top
        margin-left: 20px
        .time
          display: block
          font-size: 12px
        .reading-count
          display: inline-block
          margin-right: 10px
          font-size: 12px
        .comment
          display: inline-block
          margin-right: 10px
          font-size: 12px
    .content
      word-break: break-all
      padding-bottom: 30px
      margin-bottom: 20px
      line-height: 1.7
      font-weight: 400
      font-size: 16px
      border-bottom: 1px solid #dedede
    .like-block
      cursor: pointer
      user-select: none
      width: 180px
      height: 60px
      margin-bottom: 35px
      font-size: 0
      color: #ea6f5a
      border: 1px solid #ea6f5a
      border-radius: 30px
      &:hover
        background-color: #FFEFD5
      .left
        display: inline-block
        margin: 20px 0
        padding: 0 30px
        line-height: 20px
        font-size: 19px
        font-weight: 400
        border-right: 1px solid #ea6f5a
        .fa
          display: inline-block
          width: 15px
          height: 15px
          line-height: 15px
          margin-right: 5px
          color: #ea6f5a
      .right
        display: inline-block
        margin: 0 20px
        line-height: 60px
        font-size: 19px
      &.up
        background-color: #ea6f5a
        color: #ffffff
        .left
          border-right: 1px solid #fff
          .fa
            color: #fff
</style>
