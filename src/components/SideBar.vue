<template>
  <section>
    <div class="border rounded-5 p-3">
      <div class="d-flex align-items-center">
        <img src="@/assets/store_img.jpg" class="store-img border rounded-circle border-3 border-warning">
        <div class="ps-3">
          <h3 class="h5 fw-bold">缺錢事務所</h3>
          <p class="m-0 fw-bold">已發起一個專案</p>
        </div>
      </div>
      <p class="py-3 m-0">需要點錢錢做些酷酷的東西，拜託各位乾爹乾媽囉！</p>
      <div class="d-flex justify-content-between">
        <div>
          <span class="text-white facebook-icon">
            <i class="fab fa-facebook-f"></i>
          </span>
          <span class="text-white youtube-icon ms-2">
            <i class="fab fa-youtube"></i>
          </span>
        </div>
        <a href="javascript:;" class="m-0 border rounded-pill px-3 py-2 lh-1 text-gray-bright">
          <i class="far fa-comment-dots"></i>
          <span class="h6 ms-1">聯絡我們</span>
        </a>
      </div>
    </div>
    <div class="bg-gray text-center mt-4 mb-3 py-2 border-end border-start border-3 rounded border-yellow">
      <span class="text-gray-dark h5 fw-bold">選擇一個方案來支持</span>
    </div>
    <ul>
      <li v-for="product in 3" :key="product" class="border border-gray rounded-4 mb-3">
        <img src="@/assets/plan_img.jpg" alt="plant" class="img-fluid">
        <div class="p-3">
          <p class="d-flex justify-content-between m-0 pb-2 border-bottom border-gray">
            <span class="d-block h7">限時優惠</span>
            <span>2 days 20:05:20</span>
          </p>
          <p class="h5 text-gray-dark m-0 py-2">買一送一，只有兩百組別錯過</p>
          <p class="h4">NT$ 1600</p>
          <div>
            <span class="inline-block bg-gray-bright px-3 py-1 h8 rounded-2">已被贊助88次</span>
            <span class="text-white inline-block bg-gray-dark px-3 py-1 h8 ms-2 rounded-2">
              限量<span class="text-yellow-bright">200</span>個
            </span>
            <p class="py-3 text-gray-bright m-0">受就相法大夠局來畫師我只這然以放灣得的後人心年我物我年，或人有動與次出女親構算帶年行著所間女。</p>
            <button type="button" class="btn m-bg-yellow w-100 rounded-pill support-btn fw-bold">贊助此專案</button>
          </div>
        </div>
      </li>
    </ul>
    
  </section>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.facebook-icon, .youtube-icon {
  text-align: center;
  line-height: 30px;
  display: inline-block;
  width: 30px;
  height: 30px;
  background: #858377;
  border-radius: 50%;
}
.bg-gray {
  background: #F8F9FA;
}
.border-yellow {
  border-color: #FFDF65 !important;
}
.border-gray {
  border: #E8E8DB;
}
.bg-gray-bright {
  background: #E8E8DB;
}
.bg-gray-dark {
  background: #858377;
}
</style>
