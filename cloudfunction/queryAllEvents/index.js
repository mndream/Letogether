/**
 * 查询函数
 * 查询数据库中所有协游项目的信息。
 */
// 云函数入口文件
const cloud = require('wx-server-sdk')
// 初始化云函数
cloud.init()
// 数据库变量
const db = cloud.database()

// 云函数入口函数
exports.main = async(event, context) => {
  const wxContext = cloud.getWXContext()
  var res = await db
    .collection('events')
    .orderBy('event.date', 'desc')
    .orderBy('event.time', 'desc')
    .orderBy('event.score', 'desc')
    .get()
  if (res.data.length > 0) {
    return {
      query: true,
      queryRes: res,
    }
  } else {
    return {
      query: false,
      queryRes: res,
    }
  }
}