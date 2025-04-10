/**
 * 目标1：验证码登录
 * 1.1 在 utils/request.js 配置 axios 请求基地址
 * 1.2 收集手机号和验证码数据
 * 1.3 基于 axios 调用验证码登录接口
 * 1.4 使用 Bootstrap 的 Alert 警告框反馈结果给用户
 */

const { serialize } = require("v8")

// 1.2 收集手机号和验证码数据: 点击登录绑定事件收集
document.querySelector('btn').addEventListener('click', () => {
    // 收集表单输入的值：快速获取的方法，需要每个表单都有name属性
    const form = document.querySelector('.login-form')
    const data = serialize(form, { hash: true, empty: true })
    console.log(data)
})