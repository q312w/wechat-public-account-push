/* eslint-disable */

/**
 * 此项目配置为方便新人使用，已缩减至最简配置。
 * 如若想使用更多功能，请查考文档中的 【3. config参数说明】 
 * 自行添加属性，以支持更多个性化功能
 */
const USER_CONFIG = {

  // 使用微信测试号：公众号APP_ID
  APP_ID: 'wxf7de51df5f72a917',

  // 使用微信测试号：公众号APP_SECRET
  APP_SECRET: '049f2ccb59009476b082b4e4fe6dd932',

  PROVINCE: '河北',
  CITY: '石家庄',

  USERS: [
    {
      // 想要发送的人的名字
      name: '涵涵',
      // 使用微信测试号：扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'oajHf6piIUuNhJaiABWZkxc0ZRu0',
      // 使用微信测试号：你想对他发送的模板消息的模板ID
      useTemplateId: 'kGlJShyldT8tjJJKk9iQLH74xU0pRYnkA3YX91R5Uu4',
      // 新历生日, 仅用作获取星座运势, 格式必须为MM-DD
      horoscopeDate: '01-25',
      festivals: [
        // 注意：此条配置日期为阴历日期，因为`type`中 “生日” 之前有 * 符号
        {
          type: '*生日', name: '涵涵', year: '2003', date: '01-25',
        },
        // 注意：此条配置日期为阳历日期，因为`type`中 “生日” 之前没有 * 符号
        {
          type: '生日', name: '哥哥', year: '2002', date: '08-09',
        },
        {
          type: '节日', name: '相识纪念日', year: '2022', date: '05-27',
        },
      ],
      // 我们在一起已经有xxxx天了的配置
      customizedDateList: [
        // 在一起的日子
        { keyword: 'love_day', date: '2022-05-27' },
      ],
    },
  ],


  // 【推送完成提醒】模板id, 用来看自己有没有发送成功的那个模板
  CALLBACK_TEMPLATE_ID: 'kGlJShyldT8tjJJKk9iQLH74xU0pRYnkA3YX91R5Uu4',

  CALLBACK_USERS: [
    {
      name: '哥哥',
      // 使用微信测试号：自己的微信id，扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'oajHf6piIUuNhJaiABWZkxc0ZRu0',
    }
  ],

}

module.exports = USER_CONFIG

