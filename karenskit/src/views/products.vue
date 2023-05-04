<template>
    <div>Products</div>
    <ul>
        <li>Types of products side bar(?) Might be overkill if only either hair or makeup, maybe each has multiple categories?</li>
        <li>Grid for each type of product</li>
        <li>Maybe some type of filtering </li>
    </ul>

    <v-row no-gutters>
      <v-col
        v-for="(product, index) in products"
        :key="index"
        cols="3"
      >
        <v-sheet class="">
            <productCardVue 
                :pic-url="product.picUrl" 
                :Title="product.Title"
                :Price="product.Price"
                :FlavorText="product.FlavorText"
                :Description="product.Description"
            >
            </productCardVue>
        </v-sheet>
      </v-col>
    </v-row>

    
</template>
    
<script>
    import productCardVue from '@/components/productCard.vue';

    export default {
        name: 'BookingView',
        props: {
        msg: String
        },  
        components: {
            productCardVue
        },
        data() {
            return {
                products: [
                    {Title: 'Airbrush', picUrl: require('../assets/Airbrush-Makeup.jpg'), Price: 50, FlavorText: 'Perfect for wedings', Description: 'I use only the best products!'}, 
                    {Title: 'Celeb', picUrl: require('../assets/Celebrity-Makeup.jpg'), Price: 50, FlavorText: 'Perfect for wedings', Description: 'I use only the best products!'},
                    {Title: 'Dewy', picUrl: require('../assets/Dewy-Makeup.jpg'), Price: 50, FlavorText: 'Perfect for wedings', Description: 'I use only the best products!'}, 
                    {Title: 'Editorial', picUrl: require('../assets/Editorial-Makeup.jpg'), Price: 50, FlavorText: 'Perfect for wedings', Description: 'I use only the best products!'},
                    {Title: 'HD', picUrl: require('../assets/HD-Makeup.jpg'), Price: 50, FlavorText: 'Perfect for wedings', Description: 'I use only the best products!'}, 
                    {Title: 'Matte', picUrl: require('../assets/Matte-Makeup.jpg'), Price: 50, FlavorText: 'Perfect for wedings', Description: 'I use only the best products!'},
                    {Title: 'Nude', picUrl: require('../assets/Nude-Makeup.jpg'), Price: 50, FlavorText: 'Perfect for wedings', Description: 'I use only the best products!'},
                    {Title: 'Permanent', picUrl: require('../assets/Permanent-Makeup.jpg'), Price: 50, FlavorText: 'Perfect for wedings', Description: 'I use only the best products!'}
                ]
            }
        },
        methods: {

        }
    }
</script>