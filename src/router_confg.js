/**
 * Created by san on 2016/11/1.
 */
import Qq from './components/qq.vue'
import Xiami from  './components/xiami.vue'
import  Netease from  './components/netease.vue'

export  default [{
  path: "/",
  component: "<template></template>",
  redirect: "/qq"
}, {
  path: "/qq",
  component: Qq
}, {
  path: "/xiami",
  component: Xiami
}, {
  path: "/netease",
  component: Netease
}
]

