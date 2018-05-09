import axios from 'axios'
import qs from 'qs'
export default function req(url, param, callback, errCallback) {
  // let prefix = 'http://wx.ms.order.3ruler.com/'
  let prefix = ''
  param = param || {}

  try {
    param = JSON.stringify(param)
  } catch (e) {
    console.log('in req')
    console.error(e)
  }

  let _promise = new Promise(function (resolve, reject) {
    axios({
      url: prefix + url,
      method: 'post',
      header: {
        'content-type': 'application/x-www-form-urlencoded'
      },
      data: qs.stringify({ data: param })
    })
      .then(res => {
        // 登陆接口
        // let p = {
        //   ajax_act: 'login',
        //   data:
        //     '{"acct":"admin","password":"adminpass","code":"","cache_acct":0}'
        // }

        if (res.data.errcode === 0) {
          if (errCallback && typeof errCallback === 'function') {
            callback(res)
          } else {
            // Message.error('错了哦，这是一条错误消息')
          }
        } else {
          if (errCallback && typeof errCallback === 'function') {
            errCallback(res)
          } else {
            // Message.error(res.data.errmsg)
          }
        }
        resolve(res)
      })
      .catch(res => {
        console.log('请求失败')
        reject(res)
      })
  })
  return _promise
}
