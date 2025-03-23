import React from 'react'
function Items() {
  return (
    <div>
        <div class="row row-cols-1 row-cols-md-2 g-4">
  <div class="col">
    <div class="card">
      <img src="./dosa.jpg" class="card-img-top" alt=""/>
      <div class="card-body">
        <h5 class="card-title">Dosa</h5>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card">
      <img src="./pulao.jpg" class="card-img-top" alt=""/>
      <div class="card-body">
        <h5 class="card-title">Pulao</h5>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card">
      <img src="./idli.jpg" class="card-img-top" alt=""/>
      <div class="card-body">
        <h5 class="card-title">Idli Vada</h5>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card">
      <img src="./roti.jpg" class="card-img-top" alt=""/>
      <div class="card-body">
        <h5 class="card-title">Roti Curry</h5>
      </div>
    </div>
  </div>
</div>
    </div>
  )
}

export default Items