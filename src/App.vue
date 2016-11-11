<style lang="less">
  @fontSize :12px;
  * {
    font-size: @fontSize;
    padding: 0;
    margin: 0;
    box-sizing: border-box;
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
  }

  .header {
    background-color: #1B2B3C;
    color: #63707F;
  }

  .header h1 {
    font-weight: bold;
  }

  .return:before {
    margin-right: .5em;
  }

  .pageContaner {
    flex: 1;
    background-color: #eeeeee;
    background-color: #1D2335;
  }

  .footer {
    background-color: rgba(0, 0, 0, .8);
    padding: 1em;
    color: white;
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
          <router-view></router-view>
        </keep-alive>
      </div>

      <div class="fullPage" v-show="fullPageShow">
        <m-header title="固定在顶部" class="header" v-show="headerShow">
          <span slot="left" class="fa fa-angle-left return" @click="toggleFullPage">返回</span>
          <span slot="right"></span>
        </m-header>
      </div>
    </div>
    <div class="footer">
      播放
    </div>
  </div>
</template>

<script type="es6">
  require('assets/font-awesome.min.css');
  import { Header } from 'mint-ui';
  import { mapState,mapActions ,mapMutations } from 'vuex'
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
      "qqpage": state=>state.qq.qqpage
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

