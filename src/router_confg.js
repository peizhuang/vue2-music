/**
 * Created by san on 2016/11/1.
 */
import ManagementDisplay from './components/managementdisplay.vue'

export  default [{
  path: "/",
  component: "<template></template>"
},
  {
    alias: "/",
    path: "/managementdisplay",
    component: ManagementDisplay
  }]

