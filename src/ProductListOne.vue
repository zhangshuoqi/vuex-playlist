<template>
    <div id="product-list-one">
        <h2>Product List One</h2>
        <ul>
            <li v-for="product in products">
                <span class="name">{{ product.name }}</span>
                <span class="price">${{ product.price }}</span>
            </li>
        </ul>
        <button @click="reducePriceAction(6)">商品降价</button>
    </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
    computed: {
        products(){
            return this.$store.state.products;
        }
    },
    methods: {
        // reducePrice(amount){
        //     // this.$store.state.products.forEach(product => {
        //     //     product.price -= 1;
        //     // });//严格模式下不可操作
        //     // this.$store.commit('reducePriceMutations')
        //     this.$store.dispatch("reducePriceAction",amount)//少量actions的时候使用
        // }

        //多个actions的时候
        ...mapActions([
            "reducePriceAction"
        ])
    }
}
</script>

<style scoped>
#product-list-one{
    background: #fff8b1;
    box-shadow: 1px 2px 3px rgba(0,0,0,0.2);
    margin-bottom: 30px;
    padding: 10px 20px;
}
#product-list-one ul{
    padding: 0;
    list-style: none;

}
#product-list-one li{
    display: inline-block;
    margin-right: 10px;
    margin-top: 10px;
    padding: 20px;
    background: rgba(255, 255, 255, 0.7)
}
.price{
    font-weight:bold;
    color: #e8800c;
}


</style>