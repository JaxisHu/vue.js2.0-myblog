<template>
    <div class="comment-wrapper">
      <input-area></input-area>
      <div class="no-comments" v-if="comments.length === 0">暂无评论</div>
      <div class="comments" v-else>
        <h4 class="comments-title">{{comments.length}}条评论</h4>
        <ul class="comment-ul">
          <li class="comment-li" v-for="(comment,index) in comments">
            <h5 class="comment-name">{{comment.name}}</h5>
            <h6 class="comment-time">{{comment.commentTime | format}}</h6>
            <p class="comment-content">{{comment.content}}</p>
            <span class="comment-like" @click="changeUp(index)">
            <i class="fa" :class="showHand(index)"></i>
            {{comment.like}}人赞
          </span>
            <span class="comment-comment" @click="showTablet(index)">
            <i class="fa fa-comment-o"></i>
            回复
          </span>
            <ul class="incomment-ul">
              <li class="incomment-li" v-for="(incomment,index1) in comment.comment">
                <p class="incomment-content"><span class="incomment-name">{{incomment.name}}: </span>{{incomment.content}}
                </p>
                <span class="incomment-time">{{incomment.commentTime | format}}</span>
              </li>
              <transition name="input-area">
                <input-area v-show="tablet[index]"></input-area>
              </transition>
            </ul>
          </li>
        </ul>
      </div><!--comments-->
    </div><!--comment-wrapper-->
</template>

<script type="text/ecmascript-6">
  import {formatTime} from '../../common/js/util';
  import inputArea from '../inputArea/inputArea';
  export default {
    data() {
      return {
        isUp: [],
        tablet: []
      };
    },
    props: {
      comments: Array
    },
    filters: {
      format(time) {
        return formatTime(time);
      }
    },
    methods: {
      changeUp(index) {
        this.isUp.splice(index, 1, !this.isUp[index]);
      },
      showTablet(index) {
        this.tablet.splice(index, 1, !this.tablet[index]);
      },
      showHand(index) {
        return {
          'fa-thumbs-up': this.isUp[index],
          'fa-thumbs-o-up': !this.isUp[index]
        };
      }
    },
    created() {
      if (this.comments) {
        for (let i = 0; i < this.comments.length; i++) {
          this.isUp[i] = false;
          this.tablet[i] = false;
        }
      }
    },
    components: {
      inputArea
    }
  };
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import '../../common/stylus/font-awesome.min.css';

  .comment-wrapper
    .comments
      margin-top: 40px
      .comments-title
        padding-bottom: 20px
        font-weight: 200
        border-bottom: 1px solid #ddd
      .comment-ul
        .comment-li
          padding: 20px 0
          border-bottom: 1px solid #ddd
          font-size: 0
          &:last-child
            border: none
          .comment-name
            display: inline-block
            margin-bottom: 15px
            line-height: 25px
            font-size: 25px
            font-weight: 400
            border-bottom: 1px dashed #aaa
          .comment-time
            font-size: 12px
            color: rgb(147, 153, 159)
          .comment-content
            margin: 15px 0
            line-height: 1.5
            font-size: 16px
            word-break: break-all
          .comment-like, .comment-comment
            cursor: pointer
            user-select: none
            display: inline-block
            margin-right: 10px
            font-size: 14px
            color: #999
            .fa
              display: inline-block
              width: 15px
              height: 15px
              font-size: 16px
          .comment-comment
            &:hover
              color: #111
          .incomment-ul
            margin: 20px 0
            padding: 0 30px
            border-left: 2px solid #eee
            .input-area-enter-active, .input-area-leave-active
              transition: all 0.5s
            .input-area-enter, .input-area-leave-active
              opacity: 0
              transform: translateY(-10px)
            .incomment-li
              padding: 10px 0
              border-bottom: 1px dashed #bbb
              .incomment-content
                display: inline-block
                word-break: break-all
                line-height: 18px
                font-size: 14px
                .incomment-name
                  margin-right: 5px
                  font-size: 15px
                  color: #00CED1
              .incomment-time
                display: inline-block
                margin: 10px 0 10px 0
                font-size: 12px
                color: #aaa
    .no-comments
      margin: 40px auto
      text-align: center
      font-size: 30px
      font-weight: 200
      color: #aaa
</style>
