<template>
    <v-container>
        <Transition 
            appear
            @before-enter="beforeEnter"
            @enter="enter"
        >
            <v-card
                class="mx-auto rounded-0 hover-card hover:scale-2 "
                max-width="344"
            >
                <v-img
                    :src="picUrl"
                    height="200px"
                    cover
                ></v-img>
            
                <v-row  justify="space-between">
                    <v-col class="pt-3 pl-4" cols="8">
                        <div class="text-start">
                            {{ Title }} 
                        </div>
                    </v-col>
                    <v-col align-self="center" cols="4">
                        <div>
                            {{ '$' + Price }}
                        </div>
                    </v-col>
                </v-row>

                <v-row  justify="space-between">
                    <v-col cols="8">
                        <v-card-subtitle>
                            {{ FlavorText }}
                        </v-card-subtitle>
                    </v-col>
                    <v-col align-self="center" cols="4">
                        <v-btn density="compact" :icon="'mdi-chevron-up'" @click="show = !show"  class="mb-2 p-2">
                            <v-icon v-if="show" icon="mdi-chevron-up" />
                            <v-icon v-if="!show" icon="mdi-chevron-down" />
                        </v-btn>
                    </v-col>
                </v-row>
                <v-expand-transition>
                    <div v-show="show">
                        <v-divider></v-divider>
                
                        <v-card-text>
                            {{ Description }}
                        </v-card-text>
                    </div>
                </v-expand-transition>
            </v-card>
        </Transition>
    </v-container>
</template>
    
<script>

    // import logo from '../assets/logo.png'
    import { gsap } from 'gsap';

    export default {
        name: 'ProductCard',
        props: {
            picUrl: String,
            Title: String,
            Price: Number,
            FlavorText: String,
            Description: String,
            AnimationDelay: Number,
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
            beforeEnter(el){
                el.style.opacity = 0;
                el.style.transform = 'translateY(50px)';
            },

            enter(el, done){
                gsap.to(el, {
                    opacity: 1,
                    y: 0,
                    duration: 0.5,
                    onComplete: done,
                    animationTimingFunction: 'cubic-bezier(0.1, 0.7, 1.0, 0.1)',
                    delay: 0.1 * this.AnimationDelay
                })
            }
        }
    }
</script>

<style>
.hover-card:hover {
  transition: box-shadow 0s;
  box-shadow: 3px 3px  rgba(0, 0, 0);
  cursor: pointer;
  translate: -12px -12px;
  /* scale: 2; */
}
</style>