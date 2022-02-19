<template>
  <div class="login-container">
    <!-- 导航栏 -->
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
  </div>
</template>

<script>
export default {
  name: 'LoginIndex',
  components: {},
  props: {},
  data () {
    return {
      username: '',
      password: ''
    }
  },
  computed: {},
  watch: {},
  created () {},
  mounted () {},
  methods: {
    onSubmit (values) {
      console.log('submit', values)
    }
  }
}
</script>
<style scoped lang="less">
  .login-container{
    .tuotiao{
      font-size:33px;
    }
  }
</style>
