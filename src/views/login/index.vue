<template>
  <div class="login-container">
    <!-- 导航栏 -->
<<<<<<< HEAD
    <van-nav-bar
      class="page-nav-bar"
      title="登录"
    >
      <van-icon
        slot="left"
        name="cross"
        @click="$router.back()"
      />
    </van-nav-bar>
    <!-- /导航栏 -->

    <!-- 登录表单 -->
    <!--
      表单验证：
        1、给 van-field 组件配置 rules 验证规则
          参考文档：https://youzan.github.io/vant/#/zh-CN/form#rule-shu-ju-jie-gou
        2、当表单提交的时候会自动触发表单验证
           如果验证通过，会触发 submit 事件
           如果验证失败，不会触发 submit
     -->
    <van-form ref="loginForm" @submit="onSubmit">
      <van-field
        v-model="user.mobile"
        name="mobile"
        placeholder="请输入手机号"
        :rules="userFormRules.mobile"
        type="number"
        maxlength="11"
      >
        <i slot="left-icon" class="toutiao toutiao-shouji"></i>
      </van-field>
      <van-field
        v-model="user.code"
        name="code"
        placeholder="请输入验证码"
        :rules="userFormRules.code"
        type="number"
        maxlength="6"
      >
        <i slot="left-icon" class="toutiao toutiao-yanzhengma"></i>
        <template #button>
          <!--
            time: 倒计时时间
           -->
          <van-count-down
            v-if="isCountDownShow"
            :time="1000 * 60"
            format="ss s"
            @finish="isCountDownShow = false"
          />
          <van-button
            v-else
            class="send-sms-btn"
            native-type="button"
            round
            size="small"
            type="default"
            @click="onSendSms"
          >发送验证码</van-button>
        </template>
      </van-field>
      <div class="login-btn-wrap">
        <van-button class="login-btn" block type="info" native-type="submit">
          登录
        </van-button>
      </div>
    </van-form>
    <!-- /登录表单 -->
=======
    <van-nav-bar class="page-nav-bar" title="登录" />
    <!-- 登录表单 -->
    <van-form @submit="onSubmit">
      <van-cell-group inset>
        <van-field
          v-model="username"
          name="用户名"
          placeholder="请输入手机号"
        >
          <i slot="left-icon" class="tuotiao tuotiao-shouji"></i>
        </van-field>
        <van-field
          v-model="password"
          type="password"
          name="验证码"
          placeholder="请输入验证码"
        >
          <i slot="left-icon" class="tuotiao tuotiao-yanzhengma"></i>
          <template>
        </van-field>
      </van-cell-group>
      <div style="margin: 16px">
        <van-button  block type="primary" native-type="submit">登录</van-button>
      </div>
    </van-form>
    <!-- 登录表单 -->
>>>>>>> 06c83fedcdeb05cae8dd77f3b9f2401d3b006177
  </div>
</template>

<script>
<<<<<<< HEAD
import { login, sendSms } from '@/api/user'

=======
>>>>>>> 06c83fedcdeb05cae8dd77f3b9f2401d3b006177
export default {
  name: 'LoginIndex',
  components: {},
  props: {},
  data () {
    return {
<<<<<<< HEAD
      user: {
        mobile: '13911111111', // 手机号
        code: '246810' // 验证码
      },
      userFormRules: {
        mobile: [{
          required: true,
          message: '手机号不能为空'
        }, {
          pattern: /^1[3|5|7|8]\d{9}$/,
          message: '手机号格式错误'
        }],
        code: [{
          required: true,
          message: '验证码不能为空'
        }, {
          pattern: /^\d{6}$/,
          message: '验证码格式错误'
        }]
      },
      isCountDownShow: false // 是否展示倒计时
=======
      username: '',
      password: ''
>>>>>>> 06c83fedcdeb05cae8dd77f3b9f2401d3b006177
    }
  },
  computed: {},
  watch: {},
  created () {},
  mounted () {},
  methods: {
<<<<<<< HEAD
    async onSubmit () {
      // 1. 展示登陆中 loading
      this.$toast.loading({
        message: '登录中...',
        forbidClick: true, // 禁用背景点击
        duration: 0 // 持续时间，默认 2000，0 表示持续展示不关闭
      })

      // 2. 请求登录
      try {
        const { data } = await login(this.user)
        this.$store.commit('setUser', data.data)
        this.$toast.success('登录成功')

        // 登录成功，跳转回原来页面
        // back 的方式不严谨，后面讲功能优化的时候再说
        this.$router.back()
      } catch (err) {
        if (err.response.status === 400) {
          this.$toast.fail('手机号或验证码错误')
        } else {
          this.$toast.fail('登录失败，请稍后重试')
        }
      }
    },

    async onSendSms () {
      // 1. 校验手机号
      try {
        await this.$refs.loginForm.validate('mobile')
      } catch (err) {
        return console.log('验证失败', err)
      }

      // 2. 验证通过，显示倒计时
      this.isCountDownShow = true

      // 3. 请求发送验证码
      try {
        await sendSms(this.user.mobile)
        this.$toast('发送成功')
      } catch (err) {
        // 发送失败，关闭倒计时
        this.isCountDownShow = false
        if (err.response.status === 429) {
          this.$toast('发送太频繁了，请稍后重试')
        } else {
          this.$toast('发送失败，请稍后重试')
        }
      }
=======
    onSubmit (values) {
      console.log('submit', values)
>>>>>>> 06c83fedcdeb05cae8dd77f3b9f2401d3b006177
    }
  }
}
</script>
<<<<<<< HEAD

<style scoped lang="less">
.login-container {
  .toutiao {
    font-size: 36px;
  }

  .send-sms-btn {
    width: 152px;
    height: 46px;
    line-height: 46px;
    background-color: #ededed;
    font-size: 20px;
    color: #666;
  }

  .login-btn-wrap {
    padding: 53px 33px;
    .login-btn {
      background-color: #39c4a1;
      border: none;
    }
  }
}
=======
<style scoped lang="less">
  .login-container{
    .tuotiao{
      font-size:33px;
    }
  }
>>>>>>> 06c83fedcdeb05cae8dd77f3b9f2401d3b006177
</style>
