module.exports = {
  environment: 'dev',
  database: {
    dbName:'backendata',
    host:'localhost',
    port:3306,
    user:'root',
    password: '920929'
  },
  security:{
    secretKey: 'dxdl',
    expiresIn: 60*60 * 24 // 24个小时过期时间
  },
  wx:{
    appId:'wx05c2a986d1584059',
    appSecret:'5b7a2e445a0d513d188d610c7cdb02e5',
    loginUrl:'https://api.weixin.qq.com/sns/jscode2session?appid=%s&secret=%s&js_code=%s&grant_type=authorization_code1'
  }
}