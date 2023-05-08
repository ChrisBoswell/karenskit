<template>
    <!-- <div>Products</div> -->
    <!-- <ul>
        <li>Types of products side bar(?) Might be overkill if only either hair or makeup, maybe each has multiple categories?</li>
        <li>Grid for each type of product</li>
        <li>Maybe some type of filtering </li>
    </ul> -->
    <v-row no-gutters>
      <v-col
        v-for="(product, index) in products"
        :key="index"
        cols="2"
      >
        <v-sheet>
            <productCardVue 
                :pic-url="product.picUrl" 
                :Title="product.Title"
                :Price="product.Price"
                :FlavorText="product.FlavorText"
                :Description="product.Description"
                :AnimationDelay="index"
            >
            </productCardVue>
        </v-sheet>
      </v-col>
    </v-row>

    
</template>
    
<script>
    import productCardVue from '@/components/productCard.vue';
    // import { gsap } from 'gsap';

    export default {
        name: 'BookingView',
        props: {
        msg: String
        },  
        components: {
            productCardVue
        },
        mounted() {
            document.title = 'Karen\'s Kit - Products'; 
        },
        setup() {
        },
        data() {
            return {
                show: true,
                products: [
                    {Title: 'Airbrush', picUrl: require('../assets/look-1.jpg'), Price: 15, FlavorText: 'Perfect for wedings', Description: 'I use only the best products!'}, 
                    {Title: 'Celeb', picUrl: require('../assets/look-2.jpg'), Price: 35, FlavorText: 'Perfect for wedings', Description: 'I use only the best products!'},
                    {Title: 'Dewy', picUrl: require('../assets/look-3.jpg'), Price: 20, FlavorText: 'Perfect for wedings', Description: 'I use only the best products!'}, 
                    {Title: 'Editorial', picUrl: require('../assets/look-4.jpg'), Price: 20, FlavorText: 'Perfect for wedings', Description: 'I use only the best products!'},
                    {Title: 'HD', picUrl: require('../assets/look-5.jpg'), Price: 50, FlavorText: 'Perfect for wedings', Description: 'I use only the best products!'}, 
                    {Title: 'Matte', picUrl: require('../assets/look-1.jpg'), Price: 60, FlavorText: 'Perfect for wedings', Description: 'I use only the best products!'},
                    {Title: 'Nude', picUrl: require('../assets/look-2.jpg'), Price: 10, FlavorText: 'Perfect for wedings', Description: 'I use only the best products!'},
                    {Title: 'Permanent', picUrl: require('../assets/look-3.jpg'), Price: 30, FlavorText: 'Perfect for wedings', Description: 'I use only the best products!'}
                ]
            }
        },
        methods: {

        }
    }
</script>