<style lang="less">
  @fontSize :12px;
  * {
    font-size: @fontSize;
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  .content {
    height: 100%;
    width: 100%;
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
    height: 100%;;
    /*background-color: blue;*/
  }

  .m_tab_container > div {
    height: 100% !important;
  }


</style>
<template>
  <div class="content">
    <!-- <m-header fixed title="固定在顶部" class="header">
       <span slot="left" class="fa fa-angle-left return" >返回</span>
       <span slot="right"></span>
     </m-header>-->
    <tab-container v-model="active" swipeable="swipeable" class="m_tab_container">
      <tab-container-item id="netease">
        <netease></netease>
      </tab-container-item>
      <tab-container-item id="qq" style="height:100%;overflow: auto;">
        <qq></qq>
      </tab-container-item>
      <tab-container-item id="xiami">
        <xiami></xiami>
      </tab-container-item>
    </tab-container>
  </div>
</template>

<script type="es6">
  require('assets/font-awesome.min.css');
  import Netease from './components/netease.vue'
  import Qq from './components/qq.vue'
  import Xiami from './components/xiami.vue'
  import { TabContainer, TabContainerItem } from 'mint-ui';
  export default {
    data ()
    {
      return {
        swipeable: true,
        active: "qq",
        radio: "1",
        type: "",
        transitionName: ""
      }
    },
    name: 'app',
    components: {
      TabContainer,
      TabContainerItem,
      Netease,
      Qq,
      Xiami
    },
    methods: {}
  }
</script>

