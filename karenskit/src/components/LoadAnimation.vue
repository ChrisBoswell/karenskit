<template>
    <div class="page-loader text-white">
        <v-container>
            <v-row no-gutters>
                <Transition 
                    appear
                    @before-enter="KarenBeforeEnter"
                    @enter="KarenEnter"
                >
                    <v-col>
                        <p>Karen's Kit</p>
                    </v-col>
                </Transition>
                <!-- <Transition 
                        appear
                        @before-enter="beforeEnter"
                        @enter="enter"
                >

                </Transition> -->
               
            </v-row>
            <v-row no-gutters>
                <v-col>
                    <hr>
                </v-col>
            </v-row>
            <v-row no-gutters>
                <Transition 
                    appear
                    @before-enter="MakeupBeforeEnter"
                    @enter="MakeupEnter"
                >
                    <v-col>
                        Professional Makeup Artist
                    </v-col>
                </Transition>
            </v-row>
        </v-container>
    </div>
</template>


<script>
//   import { onMounted, ref } from 'vue';
  import { gsap } from 'gsap';
  export default {
    name: 'LoadingAnimation',
    components: {
    },
    data() {
        return {
            testString: 'hello',
            show: false,
            cardElevation: 1,
        }
    },        
    setup() {
    },
    methods: {
        KarenBeforeEnter(el){
            el.style.opacity = 0;
            el.style.transform = 'translateX(-60vw)';
        },
        MakeupBeforeEnter(el){
            el.style.opacity = 0;
            el.style.transform = 'translateX(60vw)';
        },
        KarenEnter(el){
            let t1 = gsap.timeline()
            t1.to(el, {
                opacity: 1,
                x: 0,
                duration: 1,
                animationTimingFunction: 'cubic-bezier(0.1, 0.7, 1.0, 0.1)',
                delay: 0.1
            }).to(el, {
                opacity: 0,
                x: '60vw',
                duration: 1,
                animationTimingFunction: 'cubic-bezier(0.1, 0.7, 1.0, 0.1)',
                delay: 0.1
            })
        },
        MakeupEnter(el){
            let t1 = gsap.timeline()
            t1.to(el, {
                opacity: 1,
                x: 0,
                duration: 1,
                animationTimingFunction: 'cubic-bezier(0.1, 0.7, 1.0, 0.1)',
                delay: 0.1
            }).to(el, {
                opacity: 0,
                x: '-60vw',
                duration: 1,
                animationTimingFunction: 'cubic-bezier(0.1, 0.7, 1.0, 0.1)',
                delay: 0.1
            })
        },
        
    
    }
  }
</script>


<style>
.page-loader{
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: black;
}
</style>