<style rel="stylesheet/less" scoped lang="less">
  div {
    width: 100%;
    height: 100%;
    background-color: #000000;
    position: absolute;
    top: 0;;
  }
</style>

<template>
  <div>
    <h1>managementdisplay</h1>
  </div>
</template>

<script type="text/ecmascript-6">
  import { mapState,mapMutations,mapGetters,mapActions } from 'vuex'
  export default {

    data(){
      return {}

    },
    computed: {
      ...mapState(['count'])

    },
    methods: {
      ...mapMutations(['add']),
      ...mapGetters(['stateChange']),
      ...mapActions(['fireAdd'])


    }
    ,
    watch: {
      "$route" (){
        /*  this.add();
         this.stateChange();
         this.fireAdd();
         alert(this.count);*/

      /*  this.$store.commit("add");
        this.$store.getters.stateChange;
        this.$store.dispatch("fireAdd");
        alert(this.$store.state.count);*/


      }
    }
  }
</script>
