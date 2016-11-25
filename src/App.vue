<style rel="stylesheet/less" lang="less">
  @fontSize: 14px;
  * {
    font-size: @fontSize;
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: "hiragino sans gb", arial;
  }

  li {
    list-style: none;
  }

  .content {
    height: 100%;
    width: 100%;
    display: flex;
    flex-flow: column nowrap;
    background-color: #1D2835;
  }

  .body {
    flex: 1;
    display: flex;
    flex-flow: column nowrap;
    position: relative;
  }

  .headMenu {
    display: flex;

    li {
      flex: 1;
      text-align: center;
      padding: 1em;
      font-size: 1.2em;;
      color: white;

      a {
        margin-right: 1em;
        font-weight: bold;
        color: #5C6671;
        text-decoration: none;
      }

      .active {
        color: white;
      }

    }
    li:nth-child(2) {
      flex: 3;
    }

  }

  .fullPage {
    height: 100%;
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background-color: rgb(0, 0, 0);
    display: flex;
    flex-flow: column nowrap;
    .header {
      background: #1D2835 !important;
      color: #63707F;
      h1 {
        font-weight: bold;
        color: white;
      }
    }
    & > div {
      flex: 1;
      position: relative;
    }
  }

  #disscontainer {
    height: 100%;
    width: 100%;
    overflow: auto;
    background-color: #1D2335;
  }

  .return:before {
    margin-right: .5em;
  }

  .pageContaner {
    overflow: hidden;
    flex: 1;
    background-color: #eeeeee;
    background-color: #1D2335;
  }

  .footer {
    background-color: rgba(0, 0, 0, .8);
    padding: .5em 10px;
    color: white;
    display: flex;
    li {
      display: flex;
      justify-content: center;
    }
    .info {
      flex: 1;
      padding: 0 .8em;
      flex-flow: column nowrap;
    }
    .action {
      align-items: center;
      padding-right: 1em;
      span {
        font-size: 2em;
        padding-left: .5em;
        color: #31C27C;
        vertical-align: middle;
      }
    }
  }

  #songIcon {
    width: 3em;
    height: 3em;
  }

  #songTitle {
    color: #31C27C;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    font-weight: bold;
  }

  #singer {
    font-size: .8em;
  }

  #play {
    font-size: 2.5em;
  }


</style>
<template>
  <div class="content">
    <div class="body">
      <div class="headMenu">
        <li></li>
        <li>
          <router-link to="/netease" active-class="active">网易</router-link>
          <router-link to="/qq" active-class="active">QQ</router-link>
          <router-link to="/xiami" active-class="active">虾米</router-link>
        </li>
        <li><span class="fa fa-search" @click="toggleFullPage"></span></li>
      </div>
      <div class="pageContaner">
        <keep-alive>
          <router-view style="height: 100%"></router-view>
        </keep-alive>
      </div>
      <div class="fullPage" v-show="fullPageShow">
        <m-header title="固定在顶部" class="header" v-show="headerShow">
          <span slot="left" class="fa fa-angle-left return" @click="toggleFullPage">返回</span>
          <span slot="right"></span>
        </m-header>
        <div>
          <div id="disscontainer">
            <img :src="dissimgurl" alt="">
            <ul>
              <li v-for=""></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div class="footer">
      <li class="icon">
        <img src="https://y.gtimg.cn/music/photo_new/T002R300x300M000000jE4g74VS43p.jpg?max_age=2592000" alt=""
             id="songIcon">
      </li>
      <li class="info">
        <p id="songTitle">陪我去看海</p>
        <p id="singer">大冰</p>
      </li>
      <li class="action">
        <span id="lastSong" class="fa fa-backward"></span>
        <span id="play" class="play fa fa-play"></span>
        <span id="nextSong" class="fa fa-forward"></span>
        <span id="playList" class="fa fa-indent"></span>
      </li>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  require('assets/font-awesome.min.css');
  import {Header} from 'mint-ui';
  import {mapState, mapActions, mapMutations} from 'vuex'
  export default {
    data ()
    {
      return {
        swipeable: true,
        active: "qq",
        radio: "1",
        type: "",
        transitionName: "",
        fullPageShow: false
      }
    },
    computed: mapState({
      // 映射 state.count 到 store.this.count
      'headerShow': "headerShow",
      "qqpage": state => state.qq.qqpage
    }),
    name: 'app',
    components: {
      MHeader: Header
    },
    methods: {
      ...mapActions([
        "toggleHeader"
      ]),
      toggleFullPage (){
        this.fullPageShow = !this.fullPageShow;
        this.changeQQ();
      },

      "changeQQ"(){
        this.$store.commit("changeQQ")
      }

    }
  }
</script>

