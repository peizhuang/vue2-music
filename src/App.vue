<style lang="less" scoped>
  @fontSize :14px;
  * {
    font-size: @fontSize;
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    /*color: #2c3e50;*/
    background-color: #20A0FF;
    height: 100%;
    width: 100%;
    display: flex;
    flex-flow: column nowrap;
  }

  .header {
    width: 100%;
    height: 120px;
    position: relative;
  }

  .logo {
    float: left;
    width: 200px;
    padding: 20px;
  }

  .menu {
    position: absolute;
    right: 20px;
    top: 50%;
    transform: translateY(-50%);

  span {
    font-family: FontAwesome;
    font-style: normal;
    font-size: inherit;
    padding: .5em;
    background-color: #4D5D81;
    color: #E4B9C0;
    cursor: pointer;
  }

  }

  .content {
    flex: 1;
    display: flex;

  &
  >
  section {
    height: 100%;
  }

  .last {
    width: 120px;
    display: flex;
    align-items: center;
    justify-content: center;

  .lastPageBtn {
    font-size: 80px;
    color: rgb(119, 119, 119);
    cursor: pointer;

  &
  :hover {
    color: white;
  }

  }
  }
  .next {
    width: 120px;
    display: flex;
    align-items: center;
    justify-content: center;

  .nextPageBtn {
    font-size: 80px;
    color: rgb(119, 119, 119);
    cursor: pointer;

  &
  :hover {
    color: white;
  }

  }
  }
  .childContainer {
    flex: 1;
    background-color: white;
    overflow: hidden;
    position: relative;
  }

  }
  .pageRouter {

  }

  .rightToLeft-enter {
    transform: translateX(100%);
  }

  .rightToLeft-enter-active {
    animation: rightToLeftIn .5s;
  }

  .rightToLeft-leave {
    transform: translateX(0);
  }

  .rightToLeft-leave-active {
    animation: rightToLeftOut .5s;
  }

  .leftToRight-enter {
    transform: translateX(-100%);
  }

  .leftToRight-enter-active {
    animation: leftToRightIn .5s;
  }

  .leftToRight-leave {
    transform: translateX(0);
  }

  .leftToRight-leave-active {
    animation: leftToRightOut .5s;
  }

  @keyframes leftToRightIn {
    0% {
      transform: translateX(-100%);
    }
    100% {
      transform: translateX(0);
    }
  }

  @keyframes leftToRightOut {
    0% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(100%);
    }
  }

  @keyframes rightToLeftIn {
    0% {
      transform: translateX(100%);
    }
    100% {
      transform: translateX(0);
    }
  }

  @keyframes rightToLeftOut {
    0% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(-100%);
    }
  }

</style>
<template>
  <div id="app">
    <header class="header">
      <div class="logo">

      </div>
      <div class="menu">
        <span>Administrator</span><span class="fa fa-user"></span>
        <span class="fa fa-cog"></span>
        <span class="fa fa-power-off"></span>
      </div>
    </header>
    <div class="content">
      <section class="last">
        <span class="fa fa-angle-left lastPageBtn" @click="lastPage"></span>
      </section>
      <section class="childContainer">
        <transition :name="type">
          <keep-alive>
            <router-view></router-view>
          </keep-alive>
        </transition>
      </section>
      <section class="next">
        <span class="fa fa-angle-right nextPageBtn" @click="nextPage"></span>
      </section>
    </div>
    <!--<el-radio class="radio" v-model="radio" label="1">备选项</el-radio>
    <el-radio class="radio" v-model="radio" label="2">备选项</el-radio>-->
  </div>
</template>

<script type="es6">
  import Hello from './components/Hello'
  import { Radio } from 'element-ui'
  require('assets/font-awesome.min.css');
  var allPages = {
    publicuser: {
      name: "对公用户",
      url: "/publicuser"
    },
    privateuser: {
      name: "对私用户",
      url: "/privateuser"
    },
    managementdisplay: {
      name: "经营指标展示",
      url: "/managementdisplay"
    },
    managementsetting: {
      name: "经营指标设定",
      url: "/managementsetting"
    },
    trade: {
      name: "交易量对比",
      url: "/trade"
    },
    tradechange: {
      name: "交易量变化",
      url: "/tradechange"
    }
  }, allPagesArray = ["publicuser", "privateuser", "managementdisplay", "managementsetting", "trade", "tradechange"];

  function getUrl(currentUrl, type) {
    let currentIndex = 0, obj;
    for (let i in allPages) {
      if (currentUrl == allPages[i].url) {
        if (type == "last") {
          return allPages[allPagesArray[((currentIndex - 1) + 6) % 6]];
        } else {
          return allPages[allPagesArray[((currentIndex + 1) + 6) % 6]];
        }
      }
      currentIndex++;
    }
    return {};
  }

  export default {
    data ()
    {
      return {
        radio: "1",
        type: "",
        transitionName: ""
      }
    },
    name: 'app',
    components: {
      Hello,
      ElRadio: Radio
    },
    methods: {
      lastPage(){
        this.type = "rightToLeft";
        var page = getUrl(this.$route.path, "last");
        this.$router.push(page.url);
      },
      nextPage(){
        this.type = "leftToRight";
        var page = getUrl(this.$route.path);
        this.$router.push(page.url);
      }
    }/*,
     watch: {
     '$route' (to, from) {
     /!* const toDepth = to.path.split('/').length
     const fromDepth = from.path.split('/').length*!/
     this.transitionName = this.type;
     }
     }*/
  }
</script>

