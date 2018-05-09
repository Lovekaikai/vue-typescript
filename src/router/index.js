import Vue from 'vue'
import Router from 'vue-router'
import personalInformation from '@/components/subCom/personalInformation.vue'
import priceManage from '@/components/subCom/priceManage.vue'
import supplierManage from '@/components/subCom/supplierManage.vue'
import announceManage from '@/components/subCom/announceManage.vue'
import application from '@/components/subCom/application.vue'
import providerManage from '@/components/subCom/providerManage.vue'
import powerManage from '@/components/subCom/powerManage.vue'

import nowPrice from '@/components/subCom/subComPrice/nowPrice.vue'
import futurePrice from '@/components/subCom/subComPrice/futurePrice.vue'
import lastPrice from '@/components/subCom/subComPrice/lastPrice.vue'

import attention from '@/components/subCom/subComAnnounce/attention.vue'
import contact from '@/components/subCom/subComAnnounce/contact.vue'
import delivery from '@/components/subCom/subComAnnounce/delivery.vue'
import classification from '@/components/subCom/subComAnnounce/classification.vue'

import providerList from '@/components/subCom/subComProvide/providerList.vue'
import providerMessage from '@/components/subCom/subComProvide/providerMessage.vue'
import providerdetail from '../components/subCom/subComProvide/providerDetail.vue'
import providerEditor from '@/components/subCom/subComProvide/providerEditor.vue'
import providerAdd from '@/components/subCom/subComProvide/providerAdd.vue'

import suggestions from '@/components/subCom/subComApplication/suggestions.vue'
import receive from '@/components/subCom/subComApplication/receive.vue'
import sendTPl from '@/components/subCom/subComApplication/sendTPl.vue'

import suggestionDetail from '@/components/subCom/subComApplication/suggestionDetail.vue'
import receiveDetail from '@/components/subCom/subComApplication/receiveDetail.vue'
import sendDetail from '@/components/subCom/subComApplication/sendDetail.vue'

import dealFormTpl from '@/components/subCom/subComApplication/dealFormTpl.vue'
import reciveDealTpl from '@/components/subCom/subComApplication/reciveDealTpl.vue'
import sendDealTpl from '@/components/subCom/subComApplication/sendDealTpl.vue'

// 管理
import managementGroup from '@/components/subCom/subComManage/managementGroup.vue'
import managementNumber from '@/components/subCom/subComManage/managementNumber.vue'

// 添加管理员
import addManageMunber from '@/components/subCom/subComManage/subChildCom/addManageMunber.vue'
import manageList from '@/components/subCom/subComManage/subChildCom/manageList.vue'

// 添加管理组
import addManageGroup from '@/components/subCom/subComManage/subChildCom/addManageGroup.vue'
import managementGroupList from '@/components/subCom/subComManage/subChildCom/managementGroupList.vue'
import modifyManageGroup from '@/components/subCom/subComManage/subChildCom/modifyManageGroup.vue'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: personalInformation
    },
    {
      path: '/supplierManage',
      name: 'supplierManage',
      component: supplierManage
    },
    {
      path: '/application',
      name: 'application',
      component: application
    },
    {
      path: '/suggestions',
      component: suggestions
    },
    {
      path: '/receive',
      component: receive
    },
    {
      path: '/sendTPl',
      component: sendTPl
    },
    {
      path: '/sendDetail',
      component: sendDetail
    },
    {
      path: '/suggestionDetail',
      component: suggestionDetail
    },
    {
      path: '/receiveDetail',
      component: receiveDetail
    },
    {
      path: '/dealFormTpl',
      component: dealFormTpl
    },
    {
      path: '/sendDealTpl',
      component: sendDealTpl
    },
    {
      path: '/reciveDealTpl',
      component: reciveDealTpl
    },
    {
      path: '/powerManage',
      component: powerManage,
      redirect: '/powerManage/managementGroup',
      children: [
        {
          path: 'managementGroup',
          component: managementGroup,
          redirect: '/powerManage/managementGroup/managementGroupList',
          children: [
            {
              path: 'addManageGroup',
              component: addManageGroup
            },
            {
              path: 'managementGroupList',
              component: managementGroupList
            },
            {
              path: 'modifyManageGroup',
              component: modifyManageGroup
            }
          ]
        },
        {
          path: 'managementNumber',
          component: managementNumber,
          redirect: '/powerManage/managementNumber/manageList',
          children: [
            {
              path: 'addManageMunber',
              component: addManageMunber
            },
            {
              path: 'manageList',
              component: manageList
            }
          ]
        }
      ]
    },
    {
      path: '/providerManage',
      name: 'providerManage',
      component: providerManage,
      redirect: '/providerManage/providerList',
      children: [
        {
          path: 'providerList',
          component: providerList
        },
        {
          path: 'providerMessage',
          component: providerMessage
        },
        {
          path: 'providerDetail',
          component: providerdetail
        },
        {
          path: 'providerEditor',
          name: 'providerEditor',
          component: providerEditor
        },
        {
          path: 'providerAdd',
          name: 'providerAdd',
          component: providerAdd
        }
      ]

    },
    {
      path: '/priceManage',
      name: 'priceManage',
      component: priceManage,
      redirect: '/priceManage/nowPrice',
      children: [
        {
          path: 'nowPrice',
          component: nowPrice
        },
        {
          path: 'futurePrice',
          component: futurePrice
        },
        {
          path: 'lastPrice',
          component: lastPrice
        }
      ]
    },
    {
      path: '/announceManage',
      name: 'announceManage',
      component: announceManage,
      redirect: '/announceManage/attentionTpl',
      children: [
        {
          path: 'attentionTpl',
          component: attention
        },
        {
          path: 'contact',
          component: contact
        },
        {
          path: 'delivery',
          component: delivery
        },
        {
          path: 'classification',
          component: classification
        }
      ]
    }
  ]
})
