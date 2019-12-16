import request from '@/utils/request'

export function login(data) {
  console.log('test123', data)
  return request({
    url: '/index/login',
    method: 'get',
    params: { username: '22@qq.com', password: '22' }
  })
}

export function getInfo(token) {
  return request({
    url: '/index/login',
    method: 'get',
    params: { username: '22@qq.com', password: '22' }
  })
}

export function logout() {
  return request({
    url: '/user/logout',
    method: 'post'
  })
}

