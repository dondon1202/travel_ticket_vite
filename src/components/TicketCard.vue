<script>
export default {
  data() {
    return {
      data: [
        {
          id: 0,
          name: '肥宅心碎賞櫻3日',
          imgUrl:
            'https://images.unsplash.com/photo-1522383225653-ed111181a951?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1655&q=80',
          area: '高雄',
          description: '賞櫻花最佳去處。肥宅不得不去的超讚景點！',
          group: 87,
          price: 1400,
          rate: 10
        },
        {
          id: 1,
          name: '貓空纜車雙程票',
          imgUrl:
            'https://images.unsplash.com/photo-1501393152198-34b240415948?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80',
          area: '台北',
          description: '乘坐以透明強化玻璃為地板的「貓纜之眼」水晶車廂，享受騰雲駕霧遨遊天際之感',
          group: 99,
          price: 240,
          rate: 2
        },
        {
          id: 2,
          name: '台中谷關溫泉會1日',
          imgUrl:
            'https://images.unsplash.com/photo-1535530992830-e25d07cfa780?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80',
          area: '台中',
          description:
            '全館客房均提供谷關無色無味之優質碳酸原湯，並取用八仙山之山冷泉供蒞臨貴賓沐浴及飲水使用。',
          group: 20,
          price: 1765,
          rate: 7
        }
      ]
    }
  }
}
</script>
<template>
  <section class="main-content">
    <ul class="ticketCard-area" v-for="(item, index) in data" :key="index">
      <li class="ticketCard">
        <div class="ticketCard-img">
          <a href="#">
            <img :src="item.imgUrl" alt="" />
          </a>
          <div class="ticketCard-region">{{ item.area }}</div>
          <div class="ticketCard-rank">{{ item.rate }}</div>
        </div>
        <div class="ticketCard-content">
          <div>
            <h3>
              <a href="#" class="ticketCard-name">{{ item.name }}</a>
            </h3>
            <p class="ticketCard-description">{{ item.description }}</p>
          </div>
          <div class="ticketCard-info">
            <p class="ticketCard-num">
              <span><i class="fas fa-exclamation-circle"></i></span>
              剩下最後 <span id="ticketCard-num">{{ item.group }}</span> 組
            </p>
            <p class="ticketCard-price">
              TWD <span id="ticketCard-price">{{ item.price }}</span>
            </p>
          </div>
        </div>
      </li>
    </ul>
  </section>
</template>
<style scoped>
*,
*::after,
*::before {
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  -webkit-transition: all 0.2s;
  transition: all 0.2s;
}

html,
body {
  line-height: 1.5;
}

img {
  max-width: 100%;
  display: block;
}
ain-content {
  width: 200%;
}
body {
  font-family: 'Microsoft JhengHei';
}

.addTicket-panel {
  -webkit-box-shadow: 0px 3px 6px #00000029;
  box-shadow: 0px 3px 6px #00000029;
  border-radius: 12px;
}

.addTicket-panel {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  -webkit-box-pack: space-evenly;
  -ms-flex-pack: space-evenly;
  justify-content: space-evenly;
  max-width: 920px;
  margin: 120px auto 100px;
  padding: 60px 0;
}

@media (max-width: 768px) {
  .addTicket-panel {
    margin: 0 auto;
    padding-top: 0;
    -webkit-box-shadow: none;
    box-shadow: none;
  }
}

.addTicket-img,
.addTicket-form {
  width: 38%;
}

@media (max-width: 768px) {
  .addTicket-img,
  .addTicket-form {
    width: 90%;
  }
}

.addTicket-img img {
  margin: 0 auto 21px;
}

@media (max-width: 768px) {
  .addTicket-img img:nth-child(2) {
    display: none;
  }
}

.title {
  color: #00807e;
  border-bottom: 3px solid #00807e;
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 36px;
}

.title span {
  margin-right: 6px;
}

.addTicket-form {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
}

.addTicket-form .form-group {
  margin-bottom: 16px;
}

.addTicket-form label {
  color: #00807e;
  font-weight: bold;
  margin-bottom: 5px;
}

.addTicket-input {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
}

@media (max-width: 576px) {
  .addTicket-input {
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    -webkit-box-align: start;
    -ms-flex-align: start;
    align-items: start;
  }
}

.addTicket-input input,
.addTicket-input textarea,
.addTicket-input select {
  width: 72%;
  text-indent: 0.5rem;
  background-color: #f7f7f7;
  color: #818a91;
  font-size: 1rem;
  border: none;
  border-bottom: 1px solid #00807e;
  min-height: 38px;
}

@media (max-width: 576px) {
  .addTicket-input input,
  .addTicket-input textarea,
  .addTicket-input select {
    width: 100%;
  }
}

.addTicket-input textarea::-webkit-input-placeholder {
  font-size: 1rem;
}

.addTicket-input textarea:-ms-input-placeholder {
  font-size: 1rem;
}

.addTicket-input textarea::-ms-input-placeholder {
  font-size: 1rem;
}

.addTicket-input textarea::placeholder {
  font-size: 1rem;
}

.addTicket-input textarea {
  padding-top: 8px;
  min-height: 111px;
}

.alert-message {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: end;
  -ms-flex-pack: end;
  justify-content: flex-end;
  margin-top: 3px;
  color: #b21c01;
  font-size: 0.85rem;
}

.alert-message p {
  width: 72%;
}

@media (max-width: 576px) {
  .alert-message p {
    width: 100%;
  }
}

.alert-message span {
  margin-left: 5px;
  font-weight: bold;
}

.addTicket-btn {
  -ms-flex-item-align: end;
  align-self: flex-end;
  font-size: 1.25rem;
  padding: 10px 40px;
}

@media (max-width: 576px) {
  .addTicket-btn {
    -ms-flex-item-align: center;
    -ms-grid-row-align: center;
    align-self: center;
  }
}

.btn {
  border: none;
  background-color: #00807e;
  color: #fff;
  border-radius: 5px;
  cursor: pointer;
  text-align: center;
}

.btn:hover {
  background-color: #64c3bf;
}

.main-content {
  background-color: #f7f7f7;
  padding-bottom: 100px;
}

@media (max-width: 576px) {
  .main-content {
    padding-bottom: 30px;
  }
}

.search-area {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  max-width: 920px;
  margin: 0 auto;
  padding: 50px 0;
}

.search-area p {
  color: #818a91;
}

@media (max-width: 768px) {
  .search-area {
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
  }
}

.regionSearch {
  width: 27.5%;
  min-height: 38px;
  text-indent: 0.5rem;
  color: #818a91;
  font-size: 1rem;
  border: 1px solid #ced4da;
  border-radius: 5px;
  margin-right: 2.5%;
}

@media (max-width: 768px) {
  .regionSearch {
    margin-right: 0;
    margin-bottom: 10px;
    width: 80%;
  }
}

.ticketCard-area {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  max-width: 1100px;
  margin: 0 auto;
}

.ticketCard {
  width: 93.3333%;
  background-color: #fff;
  -webkit-box-shadow: 0px 3px 6px #00000029;
  box-shadow: 0px 3px 6px #00000029;
  border: 1px solid #dee2e6;
  border-radius: 5px;
  margin-bottom: 38px;
  margin-right: 2%;
}

@media (max-width: 768px) {
  .ticketCard {
    width: 46%;
    margin: 0 2% 40px;
  }
}

@media (max-width: 576px) {
  .ticketCard {
    width: 90%;
    margin: 0 5% 30px;
  }
}

.ticketCard-img {
  position: relative;
}

.ticketCard-img a {
  display: block;
  overflow: hidden;
}

.ticketCard-img img {
  width: 100%;
  height: 180px;
  -o-object-fit: cover;
  object-fit: cover;
}

.ticketCard-img img:hover {
  -webkit-transform: scale(1.15);
  transform: scale(1.15);
}

.ticketCard-region,
.ticketCard-rank {
  position: absolute;
  border-radius: 0 5px 5px 0px;
  color: #fff;
  text-align: center;
}

.ticketCard-region {
  top: -13px;
  left: 0;
  font-size: 1.25rem;
  background-color: #64c3bf;
  padding: 12px 20px;
}

.ticketCard-rank {
  bottom: -16px;
  left: 0;
  background-color: #00807e;
  padding: 5px 8px;
  min-width: 40px;
}

.ticketCard-content {
  padding: 20px;
  height: calc(100% - 180px);
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
}

.ticketCard-name {
  display: block;
  text-decoration: none;
  color: #00807e;
  font-size: 1.5rem;
  font-weight: bold;
  padding-bottom: 5px;
  border-bottom: 2px solid #00807e;
  margin-bottom: 20px;
}

.ticketCard-name:hover {
  color: #64c3bf;
}

.ticketCard-description {
  color: #818a91;
  margin-bottom: 32px;
}

.ticketCard-info {
  color: #00807e;
  font-family: 'Roboto', sans-serif;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
}

.ticketCard-num {
  font-weight: bold;
}

.ticketCard-price {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
}

.ticketCard-price span {
  font-size: 2rem;
}

.cantFind-area {
  display: none;
  margin-top: 70px;
  text-align: center;
}

.cantFind-area h3 {
  color: #00807e;
  font-size: 2rem;
  margin-bottom: 50px;
  font-weight: bold;
}

.cantFind-area img {
  margin: 0 auto;
}

@media (max-width: 768px) {
  .cantFind-area {
    margin-top: 0px;
  }
}
</style>
