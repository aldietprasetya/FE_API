<template>
  <div class="hello">
    <div id="settlementModal" class="modal" style="display: block !important;">
        <div class="modal-window">
            <div class="modal-content">
                <div class="modal-header clearfix">
                    <div class="modal-close" id="settlementModalClose">
                        <img src="../assets/img/settlement-close.png" alt="close button">
                    </div>
                    <div class="settlement-time" id="settlement-time">
                        <div class="title"><span class="black">Settlement</span> Price:</div>
                        <div class="time">{{CurrentDate | formatDate}}</div>
                    </div>
                    <div class="price btc" id="btc">
                        <div class="pair"><span>BTC</span>/USD</div>
                        <div class="amount">
                          {{CurrentBTC}}.<span>{{CurrentBTCcommas}}</span>
                        </div>
                    </div>
                    <div class="price eth" id="eth">
                        <div class="pair"><span>ETH</span>/USD</div>
                        <div class="amount">
                          {{CurrentETH}}.<span>{{CurrentETHcommas}}</span>
                        </div>
                    </div>
                </div>
                <div class="modal-body">
                    <div class="viewer">
                        <div class="head clearfix">
                            <p class="date">The last 30 days:</p>
                            <p class="pair"><span>BTC</span>/USD</p>
                            <p class="pair"><span>ETH</span>/USD</p>
                        </div>
                        <div class="body" id="body">
                          <div v-for="(item, index) in settlementTime" :key="item.settlement_time" class="settlement-wrap">
                            <!-- {{ index }}: {{ item.settlement_time }} -->
                            <div class="settlement-row clearfix">
                              <div class="date">{{item.settlement_time | formatDate}}</div>
                              <div class="price">
                                {{item.price['BTC-USD'].toString().split('.')[0]}}.<span>{{item.price['BTC-USD'].toString().split('.')[1]}}</span>
                                <img :src="item.arrowBTCs">
                              </div>
                              <div class="price">
                                {{item.price['ETH-USD'].toString().split('.')[0]}}.<span>{{item.price['ETH-USD'].toString().split('.')[1]}}</span>
                                <img :src="item.arrowETHs">
                              </div>
                            </div>
                            <div class="separator"></div>
                          </div>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    </div>
  </div>
</template>

<style lang="scss">
.settlement-wrap:last-child {
  .price {
    img {
      display: none;
    }
  }
}
</style>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data() {
    return{
      settlementTime: [],
      BSD: [],
      ETH: [],
      CurrentDate: "",
      CurrentBTC: "",
      CurrentBTCcommas: "",
      CurrentETH: "",
      CurrentETHcommas: ""
    }
  },
  mounted: function() {
    this.getSettlement();
  },
  methods: {
    getSettlement: function() {
			this.$http.get('https://pricing.sparrowsandbox.com/v1/settlement_hist/30')
			.then(response => {
        this.settlementTime = response.data
        this.CurrentDate = this.settlementTime[0].settlement_time
        this.CurrentBTC = this.settlementTime[0].price['BTC-USD'].toString().split('.')[0]
        this.CurrentBTCcommas = this.settlementTime[0].price['BTC-USD'].toString().split('.')[1]
        this.CurrentETH = this.settlementTime[0].price['ETH-USD'].toString().split('.')[0]
        this.CurrentETHcommas = this.settlementTime[0].price['ETH-USD'].toString().split('.')[1]

        var data = this.settlementTime

        data.forEach((coin,index) => {
          var currentDateBTC = coin.price["BTC-USD"];
          var currentDateETH = coin.price["ETH-USD"];

          if(this.settlementTime[index+1]) {
            var plusDateBTC = this.settlementTime[index+1].price["BTC-USD"]
            var plusDateETH = this.settlementTime[index+1].price["ETH-USD"]
          }

          if(currentDateBTC > plusDateBTC) {
            var arrowBTC = require('../assets/img/arrow-up.png')
          } else {
            var arrowBTC = require('../assets/img/arrow-down.png')
          }

          if(currentDateETH > plusDateETH) {
            var arrowETH = require('../assets/img/arrow-up.png')
          } else {
            var arrowETH = require('../assets/img/arrow-down.png')
          }

          coin.arrowBTCs = arrowBTC
          coin.arrowETHs = arrowETH
        })
			}, err => {
				this.showMessageError(err)
      });
    }
  }
}
</script>