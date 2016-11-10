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
    background-color: rgba(0, 0, 0, .8);
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
      span {
        margin-right: 1em;
      }
    }
  }

  .fullPage {
    height: 100%;
    width: 100%;
    position: absolute;
    top:0;
    left: 0;
    background-color: rgb(0,0,0);
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

  .m_tab_container {
    flex: 1;
    background-color: #eeeeee;
    /*background-color: blue;*/
  }

  .m_tab_container > div {
    height: 100% !important;
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
        <li><span @click="active='netease'">网易</span><span @click="active = 'qq'">QQ</span><span
          @click="active = 'xiami'">虾米</span></li>
        <li><span class="fa fa-search" @click="toggleFullPage"></span></li>
      </div>
      <tab-container v-model="active" swipeable="swipeable" class="m_tab_container">
        <tab-container-item id="netease" @click="toggleHeader">
          <netease></netease>
        </tab-container-item>
        <tab-container-item id="qq" style="height:100%;overflow: auto;">
          <qq></qq>
        </tab-container-item>
        <tab-container-item id="xiami">
          <xiami></xiami>
        </tab-container-item>
      </tab-container>
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
  import Netease from './components/netease.vue'
  import Qq from './components/qq.vue'
  import Xiami from './components/xiami.vue'
  import { TabContainer, TabContainerItem ,Header } from 'mint-ui';
  import { mapState,mapActions } from 'vuex'
  export default {
    data ()
    {
      return {
        swipeable: true,
        active: "qq",
        radio: "1",
        type: "",
        transitionName: "",
        fullPageShow:false

      }
    },
    computed: mapState([
      // 映射 state.count 到 store.this.count
      'headerShow'
    ]),

    name: 'app',
    components: {
      TabContainer,
      TabContainerItem,
      MHeader: Header,

      Netease,
      Qq,
      Xiami
    },
    methods: {
      ...mapActions([
        "toggleHeader"
      ]),
      toggleFullPage (){
        this.fullPageShow = !this.fullPageShow;
      }
    }
  }
</script>

