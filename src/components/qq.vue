<style lang="less" scoped>
  #root {
    height: 100%;
    width: 100%;
    flex-flow: column nowrap;
    disply:flex;
    .tab_menus {
      background-color: #212E40;
      display:flex;
      li {
        text-align: center;
        padding: 1em;
        flex: 1;
        color: #63707F;
        position: relative;
        /*transition: color .5s;*/
      }
      .active {
        color: #407C5F;
        /*border-bottom: 2px solid #407C5F;*/
        font-weight: bold;
      }
    }
    .m_tab_container {
      height: 100%;
      width: 100%;
      flex: 1;
    }
  }
  #slide {
    position: absolute;
    border: 1px solid #407C5F;
    display: block;
    width: 100%;
    bottom: 0;
    left: 0;
    transition: transform .2s cubic-bezier(.645,.045,.355,1);
  }
</style>

<template>
  <div id="root">
    <div class="tab_menus">
      <li :class="{active:active=='commend'}" @click="active='commend'" ><span id="slide" :style="trans"></span>推荐</li>
      <li :class="{active:active=='new'}" @click="active='new'">最新</li>
      <li :class="{active:active=='hot'}" @click="active='hot'">最热</li>
      <li :class="{active:active=='search'}" @click="active='search'">搜索</li>
    </div>
    <tab-container v-model="active" swipeable="swipeable" class="m_tab_container" >
      <tab-container-item id="commend" >
        <div>
          推荐
        </div>
      </tab-container-item>
      <tab-container-item id="new" >
        <div>
          最新
        </div>
      </tab-container-item>
      <tab-container-item id="hot">
        <div>
          最热
        </div>
      </tab-container-item>
      <tab-container-item id="search">
        <div>
          搜索
        </div>
      </tab-container-item>
    </tab-container>
  </div>

</template>

<script type="es6">
  import axios from 'axios'
  import { TabContainer, TabContainerItem } from 'mint-ui';

  /* axios.post("http://192.168.1.103:8000/ebe/index/data", {withCredentials: true}).then(function (d) {
   alert(d);
   }).catch(function (e) {
   alert("error:", e);
   });*/

  export default {
    data ()
    {
      return {
        trans:{transform:'translateX(0)'},
        swipeable: true,
        active: "commend"
      }
    },
    components:{
      TabContainer,
      TabContainerItem
    },
    computed: {},
    watch:{
      active(val){
        switch (val){
          case "commend":
                this.trans={transform:'translateX(0%)'};
                break;
          case "new":
                this.trans={transform:'translateX(100%)'};
                break;
          case "hot":
                this.trans={transform:'translateX(200%)'};
                break;
          case "search":
            this.trans={transform:'translateX(300%)'};
            break;
        }
      }
    }
  }

</script>
