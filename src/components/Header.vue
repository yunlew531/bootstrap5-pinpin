<template>
  <header class="py-3 border-bottom border-5 border-bottom-style">
    <div class="container d-flex align-items-center">
      <div class="d-flex align-items-center flex-grow-1">
        <a href="javascript:;" class="d-block img-logo"><h1 class="visually-hidden">拼拼</h1></a>
        <ul class="d-flex list-unstyled align-items-center m-0">
          <li class="ms-5"><a href="javascript:;" class="m-font-color text-decoration-none">關於</a></li>
          <li class="ms-5"><a href="javascript:;" class="m-font-color text-decoration-none">挖寶</a></li>
          <li class="ms-5"><a href="javascript:;" class="m-font-color text-decoration-none">我有個大膽的想法</a></li>
        </ul>
      </div>
      <div class="">
        <button type="button" class="btn m-bg-color m-bg-color rounded-pill btn-style">登入</button>
        <button type="button" class="btn btn-outline-secondary rounded-pill ms-3 btn-style">註冊</button>
      </div>
    </div>
  </header>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.img-logo {
  background: url(@/assets/logo.jpg) no-repeat center;
  background-size: cover;
  width: 111px;
  height: 40px;
}
.btn-style {
  padding: 7px 32px !important;
}
.border-bottom-style {
  border-color: #FFDF65 !important;
}
</style>