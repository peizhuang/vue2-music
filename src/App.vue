<style lang="less" scoped>
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
  .return:before  {
    margin-right: .5em;
  }

</style>
<template>
  <div class="content">
   <!-- <m-header fixed title="固定在顶部" class="header">
      <span slot="left" class="fa fa-angle-left return" >返回</span>
      <span slot="right"></span>
    </m-header>-->
    <tab-container v-model="active" swipeable="swipeable">
      <tab-container-item id="tab-container1">
       asdfas
      </tab-container-item>
      <tab-container-item id="tab-container2">
       sadf
      </tab-container-item>
      <tab-container-item id="tab-container3">
       asdf
      </tab-container-item>
    </tab-container>
  </div>
</template>

<script type="es6">
  require('assets/font-awesome.min.css');
  import { TabContainer, TabContainerItem } from 'mint-ui';
  export default {
    data ()
    {
      return {
        swipeable:true,
        active:"tab-container1",
        radio: "1",
        type: "",
        transitionName: ""
      }
    },
    name: 'app',
    components: {
      TabContainer,
      TabContainerItem
    },
    methods: {}
  }
</script>

