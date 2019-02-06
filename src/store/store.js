import Vue from 'vue'
import Vuex from 'vuex'


Vue.use(Vuex)

export const store = new Vuex.Store({
    strict:true,
    state:{
        products:[
            {name:"马云",price:"200"},
            {name:"马化腾",price:"140"},
            {name:"马冬梅",price:"20"},
            {name:"马蓉",price:"10"}
          ]
    },
    getters:{
        saleProducts: (state)=>{
            return state.products.map(product=>{
                return {
                    name: "**" + product.name,
                    price: product.price / 2
                }
            })
        }
    },
    mutations:{
        reducePriceMutations: (state,payload)=>{
            // setTimeout(function(){
                state.products.forEach(product=>{
                    product.price -= payload;
            })
                // },3000)//模拟异步操作
        }
    },
    actions:{
        reducePriceAction: (context,payload)=>{
            setTimeout(function(){
                context.commit("reducePriceMutations",payload)
            },2000)
        }
    }
})