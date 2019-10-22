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
                            <a v-on:click="doSort('newDate')" href="javascript:" class="date">The last 30 days:<span v-if="sort.field=='newDate'">{{sort.desc?'▼':'▲'}}</span></a>
                            <a v-on:click="doSort('btcPrice')" href="javascript:" class="pair">BTC/USD<span v-if="sort.field=='btcPrice'">{{sort.desc?'▼':'▲'}}</span></a>
                            <a v-on:click="doSort('ethPrice')" href="javascript:" class="pair">ETH/USD<span v-if="sort.field=='ethPrice'">{{sort.desc?'▼':'▲'}}</span></a>
                        </div>
                        <div class="body" id="body">
                          <!-- sortedSettlement dari computed karena kita ingin mencari sorting data -->
                          <div v-for="item in sortedSettlement" :key="item.newDate" class="settlement-wrap"> 
                            <div class="settlement-row clearfix">
                              <div class="date">{{item.newDate | formatDate}}</div>
                              <div class="price">
                                {{item.btcPriceBcommas}}.<span>{{item.btcPriceCommas}}</span>
                                <img :src="item.arrowBTCs">
                              </div>
                              <div class="price">
                                {{item.ethPriceBcommas}}.<span>{{item.ethPriceCommas}}</span>
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
#settlementModal {
  a {
    text-decoration: none;
    span {
      vertical-align: text-bottom;
      font-size: xx-small;
      padding-left: 4px;
      color: white;
    }
  }
  .settlement-wrap:last-child {
    .price {
      img {
        display: none;
      }
    }
  }
}

</style>

<script>
export default {
  data() {
    return{
      Settlement: [],
      newSettlement: [],
      CurrentDate: "",
      CurrentBTC: "",
      CurrentBTCcommas: "",
      CurrentETH: "",
      CurrentETHcommas: "",
      sort: {
        field: '',
        desc: true
      }
    }
  },
  mounted: function() {
    this.getSettlement();
  },
  methods: {
    getSettlement: function() {
			this.$http.get('https://pricing.sparrowsandbox.com/v1/settlement_hist/30')
			.then(response => {
        this.Settlement = response.data
        this.CurrentDate = this.Settlement[0].settlement_time
        this.CurrentBTC = this.Settlement[0].price['BTC-USD'].toString().split('.')[0]
        this.CurrentBTCcommas = this.Settlement[0].price['BTC-USD'].toString().split('.')[1]
        this.CurrentETH = this.Settlement[0].price['ETH-USD'].toString().split('.')[0]
        this.CurrentETHcommas = this.Settlement[0].price['ETH-USD'].toString().split('.')[1]

        var data = this.Settlement
        var newData,currentPriceBTC,currentPriceETH,plusPriceBTC,plusPriceETH,arrowBTC,arrowETH // set Var data to ANY

        data.forEach((element,index) => {

          // ngelakuin Reset dulu saat perulangan
          newData = {} // supaya refresh datanya ke object kosong saat perulangan

          if(element.price["BTC-USD"]>1000 && element.price["ETH-USD"]>50) {

            currentPriceBTC = element.price["BTC-USD"];
            currentPriceETH = element.price["ETH-USD"];

            if(this.Settlement[index+1]) {
              plusPriceBTC = this.Settlement[index+1].price["BTC-USD"]
              plusPriceETH = this.Settlement[index+1].price["ETH-USD"]
            }
            
            if(currentPriceBTC > plusPriceBTC) {
              arrowBTC = require('../assets/img/arrow-up.png')
            } else {
              arrowBTC = require('../assets/img/arrow-down.png')
            }

            if(currentPriceETH > plusPriceETH) {
              arrowETH = require('../assets/img/arrow-up.png')
            } else {
              arrowETH = require('../assets/img/arrow-down.png')
            }
            newData.arrowBTCs = arrowBTC
            newData.arrowETHs = arrowETH
            newData.btcPrice = currentPriceBTC
            newData.btcPriceBcommas = currentPriceBTC.toString().split('.')[0]
            newData.btcPriceCommas = currentPriceBTC.toString().split('.')[1]
            newData.ethPrice = currentPriceETH
            newData.ethPriceBcommas = currentPriceETH.toString().split('.')[0]
            newData.ethPriceCommas = currentPriceETH.toString().split('.')[1]
            newData.newDate = element.settlement_time

            this.newSettlement.push(newData) // masukin data object newData ke array newSettlement
          }
        })
        // Check data array newSettlement
        // console.log(this.newSettlement) 
			}, err => {
				alert(err)
      });
    },
    doSort (field) {
      if(field === this.sort.field) { //parameter field(any) === return propery field di data
        this.sort.desc = !this.sort.desc 
      }else{
        this.sort.field = field //buat parameter field(any) = return propery field di data
        this.sort.desc = false 
      }
    }
  },
  computed: {
    sortedSettlement() {
      if(!this.sort.field) {
        return this.newSettlement //panggil newSettlement[]
      }
      return this.newSettlement.concat().sort((a,b)=>{
        if(this.sort.desc){ 
          console.log(this.sort.desc)
          return a[this.sort.field] > b[this.sort.field] ? -1:1        
        }else{
          console.log(this.sort.desc)
          return a[this.sort.field] > b[this.sort.field] ? 1:-1                  
        }
      })
    }

    
  }
}
</script>