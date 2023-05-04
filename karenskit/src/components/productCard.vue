<template>
    <v-container>
        <v-card
            class="mx-auto"
            max-width="344"
        >
            <v-img
                :src="picUrl"
                height="200px"
                cover
            ></v-img>
        
            <v-row  justify="space-between">
                <v-col cols="8">
                    <v-card-title class="pa-0 ma-0 ml-6 text-start">
                        {{ Title }} 
                    </v-card-title>
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
                    <v-btn density="compact" @click="show = !show"  class="mb-2 p-2">
                        More
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
                show: false
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