<template>
    <v-container class="">
        <v-card
            class="mx-auto rounded-0 hover-card"
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
                        {{  Description }}
                    </v-card-text>
                </div>
            </v-expand-transition>
        </v-card>
    </v-container>
</template>
    
<script>

    import logo from '../assets/logo.png'

    export default {
        name: 'ProductCard',
        props: {
            picUrl: String,
            Title: String,
            Price: Number,
            FlavorText: String,
            Description: String
        },
        data() {
            return {
                testString: 'hello',
                show: false,
                cardElevation: 1,
            }
        },
        methods: {
            test() {
                let self = this
                self.testString = 'new'
                return logo
            }
        }
    }
</script>

<style>
.hover-card:hover {
  transition: box-shadow 0.002s;
  box-shadow: 3px 3px  rgba(0, 0, 0);
  cursor: pointer;
  translate: -4px -4px;
}
/* .hover-card{
    box-shadow: 3px 3px  rgba(0, 0, 0);
} */
</style>