<template>
  <div class="article">
    <ul class="type-ul">
      <li class="type-li" @click="changeType(2)">全部</li>
      <li class="type-li" @click="changeType(0)">技术</li>
      <li class="type-li" @click="changeType(1)">生活</li>
    </ul>
    <div class="nothing" v-if="!articles">文章列表为空</div>
    <ul class="article-ul" v-else>
      <transition name="li-fade" v-for="(article,index) in articles" :key="index">
        <li ref="article" class="article-li"
            v-show="currentType === 2 || currentType === article.type">
          <div class="time-comment">
            <span class="time">{{article.createTime | formatTime}}</span>
            <span class="comment"><i class="fa fa-eye"></i>{{article.readCount}}</span>
            <span class="like"><i class="fa fa-thumbs-up"></i>{{article.like}}</span>
            <span class="reading-count"><i class="fa fa-commenting"></i>{{article.comments.length}}</span>
          </div>
          <span class="title">{{article.title}}</span>
          <p class="content">{{omitWords(article.content)}}</p>
          <div class="button">
            <router-link :to="{path:'/article/'+article.title,query:{article:article}}">阅读全文</router-link>
          </div>
        </li>
      </transition>
    </ul>
    <router-view></router-view>
  </div>
</template>

<script type="text/ecmascript-6">
  import {formatTime} from '../../common/js/util';
  const ERR_NO = 0;
  const ALL = 2;
  //  const TEC = 0;
  //  const LIVE = 1;
  export default{
    data() {
      return {
        articles: {},
        currentType: ALL,
        currentArticle: {}
      };
    },
    created() {
      this.$http.get('/api/art').then((res) => {
        let data = res.body;
        if (data.erron === ERR_NO) {
          this.articles = data.data;
        }
      });
    },
    methods: {
      changeType(type) {
        this.currentType = type;
      },
      omitWords(content) {
        if (!content) {
          return;
        }
        let arr = content.split('');
        if (arr.length > 140) {
          arr = arr.splice(0, 140);
          arr.push('.....');
        }
        content = arr.join('');
        return content;
      }
    },
    filters: {
      formatTime(time) {
        return formatTime(time);
      }
    }
  };
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import '../../common/stylus/font-awesome.min.css';

  .article
    position: relative
    width: 100%
    background-color: #efefef
    .type-ul
      list-style: none
      text-align: center
      .type-li
        cursor: pointer
        display: inline-block
        width: 80px
        height: 46px
        line-height: 46px
        font-size: 15px
        color: rgb(7, 17, 27)
    .article-ul
      list-style: none
      margin: 0 15%
      background-color: #fff
      border-radius: 5px
      @media screen and (max-width: 640px)
        margin: 0 5%
      .li-fade-enter-active, .li-fade-leave-active
        transition: all 0.5s
      .li-fade-enter, .li-fade-leave-active
        opacity: 0
        transform: translateX(20px)
      .article-li
        position: relative
        height: 135px
        padding: 20px 0
        margin: 0 26px
        border-bottom: 1px solid #ddd
        @media screen and (max-width: 640px)
          height: 165px
        @media screen and (max-width: 400px)
          height: 195px
        &:last-child
          border: none
        .button
          cursor: pointer
          user-select: none
          position: absolute
          right: 0
          bottom: 20px
          height: 30px
          width: 96px
          line-height: 30px
          text-align: center
          background-color: #E67E22
          color: #fff
          & > a
            color: #fff
          &:hover
            box-shadow: 0 2px 5px 2px rgb(147, 153, 159)
        .title
          display: block
          height: 45px
          line-height: 45px
          font-size: 25px
          font-weight: 600
          color: rgb(7, 17, 27)
        .time-comment
          position: absolute
          top: 20px
          right: 0
          color: rgb(147, 153, 159)
          .time
            display: block
            line-height: 12px
            font-size: 12px
          .comment, .reading-count, .like
            display: inline-block
            line-height: 36px
            text-align: right
            font-size: 14px
            .fa-commenting, .fa-eye, .fa-thumbs-up
              margin: 0 5px
        .content
          width: 100%
          height: 90px
          padding-bottom: 20px
          line-height: 30px
          text-indent: 40px
          word-break: break-all
          overflow: hidden
          font-size: 20px
          font-weight: 400
          color: #aaa
          @media screen and (max-width: 640px)
            height: 142px
</style>
