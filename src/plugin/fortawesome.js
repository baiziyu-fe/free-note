/*
 * @Description: fortawesome 图标库
 * @Author: coding-bai
 * @Date: 2020-09-09 15:58:40
 * @LastEditTime: 2020-05-21 15:59:40
 * @LastEditors: coding-bai
 */
import Vue from 'vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faUserSecret } from '@fortawesome/free-solid-svg-icons'
import { faMarkdown } from '@fortawesome/free-brands-svg-icons'
// import { faUserSecret } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faUserSecret, faMarkdown)

Vue.component('font-awesome-icon', FontAwesomeIcon)
