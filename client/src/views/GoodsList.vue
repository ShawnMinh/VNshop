<template>
  <div>
    <nav-header/>
    <nav-bread>商品列表</nav-bread>
    <div class="accessory-result-page accessory-page">
        <div class="container">
            <div class="filter-nav">
                <span class="sortby">Sort by:</span>
                <a href="javascript:void(0)" class="default cur">Default</a>
                <a href="javascript:void(0)" class="price" @click="sortGoods">价格 <svg class="icon icon-arrow-short"><use xlink:href="#icon-arrow-short"></use></svg></a>
                <a href="javascript:void(0)" class="filterby stopPop">Filter by</a>
            </div>
            <div class="accessory-result">
                <!-- filter -->
                <div class="filter stopPop" id="filter">
                    <dl class="filter-price">
                        <dt>Price:</dt>
                        <dd><a href="javascript:void(0)" @click="sectionGoods(0,999999)">All</a></dd>
                        <dd>
                            <a href="javascript:void(0)" @click="sectionGoods(0,100)">0 - 100</a>
                        </dd>
                        <dd>
                            <a href="javascript:void(0)" @click="sectionGoods(100,500)">100 - 500</a>
                        </dd>
                        <dd>
                            <a href="javascript:void(0)" @click="sectionGoods(500,1000)">500 - 1000</a>
                        </dd>
                        <dd>
                            <a href="javascript:void(0)" @click="sectionGoods(1000,2000)">1000 - 2000</a>
                        </dd>
                    </dl>
                </div>

                <!-- search result accessories list -->
                <div class="accessory-list-wrap">
                    <div class="accessory-list col-4">
                        <ul>
                            <li v-for="(item,index) in goods" :key="index">
                                <div class="pic">
                                    <a href="#"><img v-lazy="'/static/img/' + item.productImage" alt=""></a>
                                </div>
                                <div class="main">
                                    <div class="name">{{item.productName}}</div>
                                    <div class="price">{{item.salePrice}}</div>
                                    <div class="btn-area">
                                        <a href="javascript:;" class="btn btn--m">加入购物车</a>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <NavFooter/>
  </div>
</template>

<script>
    import NavHeader from '@/components/Header'
    import NavFooter from '@/components/Footer'
    import NavBread from '@/components/NavBread'
    import axios from 'axios'
    // import '../../static/css/base.css'
    // import '../../static/css/product.css'
    export default{
        components:{
            NavHeader,
            NavFooter,
            NavBread
        },
        data(){
            return {
                goods:{},
                lock:1,
                max:99999,
                min:0
            }
        },
        created(){
            this.getGoodsList();
        }
        ,
        methods:{
            getGoodsList(){
                axios.get('/goods/sortXXXX',{params:{
                    sort:this.lock,
                    max:this.max,
                    min:this.min
                    }
                }).then(res=>{
                    this.goods = res.data.result;
                })
            },
            sortGoods(){
                this.lock = -this.lock;
                this.getGoodsList();
            },
            sectionGoods(min,max){
                this.min=min;
                this.max=max;
                this.getGoodsList();
            }
        }
    }
</script>
