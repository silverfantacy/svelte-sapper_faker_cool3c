<script>
  export let name;
  export let userinfoActive;
</script>

<div class="nav-user_info-block" class:active={userinfoActive}>
  <div class="info-block_information d-flex justify-content-center align-items-center mb-2 d-md-none">
    <span class="mr-2">{name}</span>
    <img src="https://driver.cool3c.com/modify/45b39b65-6bb4-4cea-a86d-a3cc97faebb1-w200.png" alt="">
  </div>
  <div class="container">
    <div class="input-group input-group-sm flex-nowrap mb-2 d-md-none">
      <div class="input-group-prepend">
        <span class="input-group-text" id="addon-wrapping">
          <i class="fas fa-search"></i>
        </span>
      </div>
      <input type="text" class="form-control" placeholder="搜尋" aria-label="搜尋" aria-describedby="addon-wrapping">
    </div>
    <button type="button" class="btn btn-danger btn-sm btn-block mb-2">
      <i class="far fa-edit fa-fw"></i>寫一篇文章
    </button>
  </div>
  <div style="border-bottom: 1px solid #d9d9d9" class="pb-1 mb-2">
    <a class="dropdown-item" href="#"><i class="far fa-list-alt fa-fw mr-2"></i>文章管理</a>
    <a class="dropdown-item" href="#"><i class="far fa-id-card fa-fw mr-2"></i>作者管理</a>
  </div>
  <div style="border-bottom: 1px solid #d9d9d9" class="pb-1 mb-2">
    <a class="dropdown-item" href="#"><i class="fab fa-fort-awesome fa-fw mr-2"></i>Join the force</a>
    <a class="dropdown-item" href="#"><i class="fab fa-fort-awesome-alt fa-fw mr-2"></i>Dark side</a>
  </div>
  <div>
    <a class="dropdown-item" href="#"><i class="fas fa-user-alt fa-fw mr-2"></i>個人資料</a>
    <a class="dropdown-item" href="#"><i class="fas fa-book fa-fw mr-2"></i>聯絡管道</a>
    <a class="dropdown-item" href="#"><i class="fas fa-cog fa-fw mr-2"></i>設定</a>
    <a class="dropdown-item" href="#"><i class="fas fa-power-off fa-fw mr-2"></i>登出</a>
  </div>
</div>
