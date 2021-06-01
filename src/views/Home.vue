<template>
  <section class="py-5 product-panel">
    <div class="container">
      <span class="h8 bg-myGray px-3 py-1 rounded text-white fw-bold">魔法科技</span>
      <h1 class="h2 lh-base mt-1 mb-4 bg-">拍出會動的照片｜LivePhotos 魔法拍立得</h1>
      <div class="row g-4">
        <img src="@/assets/produt_image.jpg" class="col-7 product-img">
        <div class="col-5">
          <span>目標 $600,000</span>
          <p class="h1">$280,047</p>
          <div class="progress rounded-pill">
            <div class="progress-bar bg-warning " role="progressbar" style="width: 41%;">41%</div>
          </div>
          <div class="d-flex mt-4">
            <div class="w-50">
              <span class="h7">贊助人數</span>
              <p class="h2">1374 人</p>
            </div>
            <div class="w-50">
              <span class="h7">募資倒數</span>
              <p class="h2">27 天</p>
            </div>
          </div>
          <div class="d-flex mt-2">
            <img src="@/assets/icon_good01.svg">
            <img class="ms-4" src="@/assets/icon_good02.svg">
            <img class="ms-4" src="@/assets/icon_good03.svg">
            <img class="ms-4" src="@/assets/icon_good04.svg">
          </div>
          <div class="bg-white p-3 border-start border-3 border-warning rounded-5 mt-3">
            <p class="m-0">專案募資中！<br>
            在 2021/06/14 23:59 募資結束前，您都可以贊助我們！</p>
          </div>
          <div class="mt-4">
            <button type="button" class="btn btn-warning rounded-pill py-3 w-100"><span class="h5 fw-bold">贊助專案</span></button>
          </div>
          <div class="d-flex mt-2">
            <button type="button" class="btn btn-outline-gary border-2 flex-grow-1 me-2 rounded-pill py-3"><span class="h5 fw-bold">追蹤專案</span></button>
            <button type="button" class="btn btn-outline-gary border-2 flex-grow-1 rounded-pill py-3"><span class="h5 fw-bold">分享</span></button>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section class="pt-4 nav-border">
    <div class="container">
      <ul class="nav nav-pills" id="pills-tab" role="tablist">
        <li class="nav-item" role="presentation">
          <button class="nav-link pb-4 active" id="pills-introduce-tab" data-bs-toggle="pill" data-bs-target="#pills-introduce" type="button" role="tab" aria-controls="pills-home" aria-selected="true">專案介紹</button>
        </li>
        <li class="nav-item" role="presentation">
          <button class="nav-link pb-4" id="pills-quations-tab" data-bs-toggle="pill" data-bs-target="#pills-quations" type="button" role="tab" aria-controls="pills-profile" aria-selected="false">常見問答</button>
        </li>
        <li class="nav-item" role="presentation">
          <button class="nav-link pb-4" id="pills-schedule-tab" data-bs-toggle="pill" data-bs-target="#pills-schedule" type="button" role="tab" aria-controls="pills-contact" aria-selected="false">目前進度</button>
        </li>
        <li class="nav-item" role="presentation">
          <button class="nav-link pb-4" id="pills-message-tab" data-bs-toggle="pill" data-bs-target="#pills-message" type="button" role="tab" aria-controls="pills-contact" aria-selected="false">留言</button>
        </li>
      </ul>
    </div>
  </section>
  <section class="py-5 container">
    <div class="row g-5">
      <div class="col-8">
        <div class="tab-content" id="pills-tabContent">
          <div class="tab-pane fade show active" id="pills-introduce" role="tabpanel" aria-labelledby="pills-home-tab">
            <img src="@/assets/p1.jpg" alt="">
            <h3 class="h4 mt-4 ps-3 border-start border-5 border-warning font-photograph">施了魔法的照片</h3>
            <p class="lh-lg mt-1 mb-0 font-photograph">受就相法大夠局來畫師我只這然以放灣得的後人心年我物我年，或人有動與次出女親構算帶年行著所間女，外成認心香吸工並知日成展源大超時動為生葉衣致長山對精做英密差家他微熱建取示濟定心一，品定把別銀動，深青輪一物加，生明果。西業白老如天有表非民大條全那遊，李文遊、像香過元學須本致信校態麼資司媽人價在它，地他不我計孩廠然不大指勢生的華常簡岸然，人著母病石金萬得一果。</p>
            <img src="@/assets/p2.jpg" class="mt-4">
            <h3 class="h4 mt-4 ps-3 border-start border-5 border-warning font-photograph">留下當下的美好</h3>
            <p class="lh-lg mt-1 mb-0 font-photograph">受就相法大夠局來畫師我只這然以放灣得的後人心年我物我年，或人有動與次出女親構算帶年行著所間女，外成認心香吸工並知日成展源大超時動為生葉衣致長山對精做英密差家他微熱建取示濟定心一，品定把別銀動，深青輪一物加，生明果。西業白老如天有表非民大條全那遊，李文遊、像香過元學須本致信校態麼資司媽人價在它，地他不我計孩廠然不大指勢生的華常簡岸然，人著母病石金萬得一果。</p>
            <img src="@/assets/icon_heart.svg" class="mx-auto d-block mt-5">
            <div class="position-relative">
              <div class="progress mt-4" style="height: 3px;">
                <div class="progress-bar bg-warning" role="progressbar" style="width: 100%;"></div>
              </div>
              <span class="position-absolute start-50 top-50 translate-middle bg-white fw-bold h4 font-photograph px-3">贊助專案</span>
            </div>
            <label class="d-block mt-3">
              <p class="font-label mb-2">贊助方案</p>
              <select>
                <option value="">請選擇一個方案</option>
              </select>
            </label>
            <label class="d-block mt-3">
              <p class="font-label mb-2">收件人姓名</p>
              <input type="text">
            </label>
            <label class="d-block mt-3">
              <p class="font-label mb-2">聯絡電話</p>
              <input type="tel">
            </label>
            <label class="d-block mt-3">
              <p class="font-label mb-2">連絡信箱</p>
              <input type="email">
            </label>
            <label class="d-block mt-3">
              <p class="font-label mb-2">付款方式</p>
              <select>
                <option value="">請選擇一個方案</option>
              </select>
            </label>
            <button type="button" class="px-5 py-2 btn btn-warning rounded-pill mx-auto d-block mt-4"><span class="h4">贊助專案</span></button>
          </div>
          <div class="tab-pane fade" id="pills-schedule" role="tabpanel" aria-labelledby="pills-profile-tab">.schedule..</div>
          <div class="tab-pane fade" id="pills-quations" role="tabpanel" aria-labelledby="pills-profile-tab">.quations..</div>
          <div class="tab-pane fade" id="pills-message" role="tabpanel" aria-labelledby="pills-contact-tab">message...</div>
        </div>
      </div>
      <div class="col-4">
        <div class="border side-bar rounded-5 p-3">
          <div class="d-flex">
            <img src="@/assets/store_img.jpg" class="store-img">
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
$mainGray: #E8E8DB;
$mainGrayDeep: #636057;
$photographColor: #494846;
.font-label {
  color: #373A3C;
}
.font-photograph {
  color: $photographColor;
}
.product-panel {
  background-color: rgb(248, 249, 250);
}
.product-img {
  height: 441px;
}
.bg-myGray {
  background: #858377;
}
.btn-outline-gary {
  border-color: #858377;
}
.nav-link {
  color: $mainGrayDeep !important;
  &.active {
    background-color: white !important;
    color: $mainGrayDeep !important;
    font-weight: bold !important;
    border-bottom: 2px solid #FFDF65 !important;
  }
}
.nav-border {
  border-bottom: 2px solid $mainGray;
}
.side-bar {
  border-color: $mainGray !important;
}
.store-img{
  width: 100px;
  height: 100px;
}
input, select {
  width: 100%;
  background: #F7F7F7;
  border-radius: 4px;
  border-width: 0;
  padding: 8px 16px;
  color: #999999;
}
</style>