<style rel="stylesheet/less" lang="less" scoped>
  #root {
    height: 100%;
    width: 100%;
    display: flex;
    flex-flow: column nowrap;
    .tab_menus {
      background-color: #212E40;
      display: flex;
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
      overflow: auto;
      ul {
        padding: 8px 0;
      }
    }
  }

  .song {
    float: left;
    width: 50%;
    /*background-color: #273545;*/
    position: relative;
    color: #4D5B6B;
    font-weight: bold;
    img {
      width: 100%;
      display: block;
    }

    span {
      display: block;
      background-color: #273545;
      padding: 4px;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    }

    span:last-child {
      font-weight: normal;
      font-size: .8rem;
    }
  }

  .song:nth-child(odd) {
    padding: 5px 5px 5px 10px;
  }

  .song:nth-child(even) {
    padding: 5px 10px 5px 5px;
  }

  #slide {
    position: absolute;
    border: 1px solid #407C5F;
    display: block;
    width: 100%;
    bottom: 0;
    left: 0;
    transition: transform .1s cubic-bezier(.645, .045, .355, 1);
  }
</style>


<template>
  <div id="root">
    <div class="tab_menus">
      <li :class="{active:active=='commend'}" @click="active='commend'"><span id="slide" :style="trans"></span>推荐</li>
      <li :class="{active:active=='new'}" @click="active='new'">最新</li>
      <li :class="{active:active=='other'}" @click="active='other'">其他</li>
      <li :class="{active:active=='search'}" @click="active='search'">搜索</li>
    </div>
    <tab-container v-model="active" swipeable="swipeable" class="m_tab_container">
      <tab-container-item id="commend">
        <ul>
          <li v-for="song in songslist_commend" class="song" :dissid="song.dissid" @click="showDissInfo(song.dissid)">
            <img :src="song.imgurl" alt="">
            <span>{{ song.dissname }}</span>
            <span>{{song.creator.name}}</span>
          </li>
        </ul>
      </tab-container-item>
      <tab-container-item id="new">
        <ul>
          <li v-for="song in songslist_new" class="song">
            <img :src="song.imgurl" alt="">
            <span>{{ song.dissname }}</span>
            <span>{{song.creator.name}}</span>
          </li>
        </ul>
      </tab-container-item>
      <tab-container-item id="other">
        <ul>
          <li v-for="song in songslist_other" class="song">
            <img :src="song.imgurl" alt="">
            <span>{{ song.dissname }}</span>
            <span>{{song.creator.name}}</span>
          </li>
        </ul>
      </tab-container-item>
      <tab-container-item id="search">
        <div>
          搜索
        </div>
      </tab-container-item>
    </tab-container>
  </div>

</template>

<script type="text/ecmascript-6">
  //  import axios from 'axios'
  //  import $ from 'expose?$!jquery'
  import {TabContainer, TabContainerItem} from 'mint-ui';
  import {mapActions, mapMutations} from 'vuex'

  /* axios.post("http://192.168.1.103:8000/ebe/index/data", {withCredentials: true}).then(function (d) {
   alert(d);
   }).catch(function (e) {
   alert("error:", e);
   });*/

  export default {
    created(){
      this.init();
    },
    data ()
    {
      return {
        trans: {transform: 'translateX(0)'},
        swipeable: true,
        active: "commend",
        commend_init: false,
        other_init: false,
        new_init: false,
        songslist_commend: [],
        songslist_other: [],
        songslist_new: []
      }
    },
    components: {
      TabContainer,
      TabContainerItem
    },
    computed: {},
    methods: {
      //通过关键词获取歌曲列表
      getSongsListByWords: function (key) {
        $.ajax({
          url: "http://i.y.qq.com/s.music/fcgi-bin/search_for_qq_cp",
          type: "get",
          dataType: 'jsonp',
          jsonp: "callback",
          jsonpCallback: "jsonp4",
          data: {
            g_tk: "938407465",
            uin: 0,
            format: "jsonp",
            inCharset: "utf-8",
            outCharset: "utf-8",
            notice: 0,
            platform: "h5",
            needNewCode: 1,
            w: key,
            zhidaqu: 1,
            catZhida: 1,
            t: 0, //type 类型 {歌曲：0，专辑：8，歌词：7}
            flag: 1,
            ie: "utf-8",
            sem: 1,
            aggr: 0,
            perpage: 20,
            n: 20,
            p: 1,
            remoteplace: "txt.mqq.all",
            //                    _:1459991037831
            jsonpCallback: "jsonp4"
          },
          success (d) {
            console.log(d);
          },

          error (e) {
            alert(e);
          }
        });

      },

      //通过关键词获取专辑列表
      getAlbumsListByWords: function (key) {
        $.ajax({
          url: "http://i.y.qq.com/s.music/fcgi-bin/search_for_qq_cp",
          type: "get",
          dataType: 'jsonp',
          jsonp: "callback",
          jsonpCallback: "jsonp4",
          data: {
            g_tk: "938407465",
            uin: 0,
            format: "jsonp",
            inCharset: "utf-8",
            outCharset: "utf-8",
            notice: 0,
            platform: "h5",
            needNewCode: 1,
            w: key,
            zhidaqu: 1,
            catZhida: 1,
            t: 8, //type 类型 {歌曲：0，专辑：8，歌词：7}
            flag: 1,
            ie: "utf-8",
            sem: 1,
            aggr: 0,
            perpage: 20,
            n: 20,
            p: 1,
            remoteplace: "txt.mqq.all",
            //                    _:1459991037831
            jsonpCallback: "jsonp4"
          },
          success (d) {
            console.log(d);
          },

          error (e) {
            alert(e);
          }
        });
      },

      //通过歌手id获取歌曲列表
      getSongsListBySingermid: function (singermid) {
        $.ajax({
          url: "http://i.y.qq.com/v8/fcg-bin/fcg_v8_singer_track_cp.fcg",
          type: "get",
          dataType: 'jsonp',
          jsonpCallback: "MusicJsonCallback",
          data: {
            g_tk: "5381",
            loginUin: 0,
            hostUin: 0,
            format: "jsonp",
            inCharset: "GB2312",
            outCharset: "utf-8",
            notice: 0,
            platform: "yqq",
            jsonpCallback: "MusicJsonCallback",
            needNewCode: 0,
            singermid: singermid,
            order: "listen",
            begin: 0,  //默认从0开始
            num: 30,  //默认20条
            songstatus: 0
          },
          success (d) {
            console.log(d);
          },

          error (e) {
            alert(e);
          }
        })
      },

      //通过歌手id来获取专辑列表
      getAlbumsListBySingermid: function (singermid) {
        $.ajax({
          url: "http://i.y.qq.com/v8/fcg-bin/fcg_v8_singer_album.fcg",
          type: "get",
          dataType: 'jsonp',
          jsonpCallback: "MusicJsonCallback",
          data: {
            g_tk: "5381",
            loginUin: 0,
            hostUin: 0,
            format: "jsonp",
            inCharset: "GB2312",
            outCharset: "utf-8",
            notice: 0,
            platform: "yqq",
            jsonpCallback: "MusicJsonCallback",
            needNewCode: 0,
            singermid: singermid,
            order: "time",//{time:按时间排序，listen:按热度排序，score：按评分排序}
            begin: 21,  //默认从0开始
            num: 40,  //默认为每页20 条记录
            exstatus: 1
          },
          success (d) {
            console.log(d);
          },

          error (e) {
            alert(e);
          }
        });
      },

      //通过专辑id来获取 歌曲列表
      getSongsListByAlbumid: function (albumid) {
        $.ajax({
          url: "http://i.y.qq.com/v8/fcg-bin/fcg_v8_album_info_cp.fcg",
          type: "get",
          dataType: 'jsonp',
          jsonpCallback: "asonglist1459961045566",
          data: {
            platform: "h5page",
            albummid: albumid,
            g_tk: "938407465",
            uin: 0,
            format: "jsonp",
            inCharset: "utf-8",
            outCharset: "utf-8",
            notice: 0,
            platform: "h5",
            needNewCode: 1,
            jsonpCallback: "asonglist1459961045566"
          },
          success (d) {
            console.log(d);
          },

          error (e) {
            alert(e);
          }
        });
      },

      //获取专辑图片
      getAlbumPicture: function (albumid) {
        /// mid_album_300 后面的300代表图片大小（包含90,150,300）
        var src = "  http://i.gtimg.cn/music/photo/mid_album_300/" + albumid.charAt(albumid.length - 1) + "/" + albumid.charAt(albumid.length - 2) + "/" + albumid + ".jpg";
        return src;
      },

      //通过标签（推荐、最新、最热、好评）获取歌单
      getDissByTag: function (page, num, tag, successAction, errorAction) {
        $.ajax({
          url: "http://i.y.qq.com/s.plcloud/fcgi-bin/fcg_get_diss_by_tag.fcg",
          type: "get",
          dataType: 'jsonp',
          jsonpCallback: "MusicJsonCallback",
          data: {
            categoryId: 10000000,
            sortId: tag || 1,  //类型{推荐：5、最新：2、其他：0、1}
            sin: (page - 1) * num, //从第几个开始
            ein: page * num - 1, //到第几个结束
            format: "jsonp",
            g_tk: "5381",
            loginUin: 0,
            hostUin: 0,
            format: "jsonp",
            inCharset: "GB2312",
            outCharset: "utf-8",
            notice: 0,
            platform: "yqq",
            jsonpCallback: "MusicJsonCallback",
            needNewCode: 0
          },
          success (d) {
            successAction(d);
          },
          error (e) {
            errorAction(d);
          }
        });
      },
      //通过歌单id（dissid）来获取歌单信息
      getCDinfoByDissid: function (dissid) {
        $.ajax({
          url: "http://i.y.qq.com/qzone-music/fcg-bin/fcg_ucc_getcdinfo_byids_cp.fcg",
          type: "get",
          dataType: 'jsonp',
          jsonpCallback: "jsonCallback",
          data: {
            type: 1,
            json: 1,
            utf8: 1,
            onlysong: 0,
            jsonpCallback: "jsonCallback",
            nosign: 1,
            disstid: dissid,
            g_tk: "5381",
            loginUin: 0,
            hostUin: 0,
            format: "jsonp",
            inCharset: "GB2312",
            outCharset: "utf-8",
            notice: 0,
            platform: "yqq",
            jsonpCallback: "jsonCallback",
            needNewCode: 0
          },
          success (d) {
            console.log(d);
          },

          error (e) {
            alert(e);
          }
        });
      },

      //初始化
      init (){
        this.getDissByTag(1, 20, 5, (d) => {
          this.commend_init = true;
          for (let i in d.data.list) {
            this.songslist_commend.push(d.data.list[i]);
          }
        });
      },


      showDissInfo (dissid){
        this.getCDinfoByDissid(dissid);
      }
    },
    watch: {
      active(val){
        switch (val) {
          case "commend":
            this.trans = {transform: 'translateX(0%)'};
            break;
          case "new":
            this.trans = {transform: 'translateX(100%)'};
            if (!this.new_init)
              this.getDissByTag(1, 20, 2, (d) => {
                this.new_init = true;
                for (let i in d.data.list) {
                  this.songslist_new.push(d.data.list[i]);
                }

              });
            break;
          case "other":
            this.trans = {transform: 'translateX(200%)'};
            if (!this.other_init)
              this.getDissByTag(1, 20, 0, (d) => {
                this.other_init = true;
                for (let i in d.data.list) {
                  this.songslist_other.push(d.data.list[i]);
                }
              });
            break;
          case "search":
            this.trans = {transform: 'translateX(300%)'};
            break;
        }

      }
    }
  }
</script>
