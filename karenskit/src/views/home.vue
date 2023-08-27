<template>
    <div class="flex flex-row rounded-lg justify-between drop-shadow-2xl" style="background-color: #d7d2cf;">
        <div class="basis-1/2 rounded ">
            <!-- <img class="mx-auto w-auto rounded-lg" src="../assets/KarensKit_Logo.jpg" alt="Professional Makeup Artist"> -->
        </div>
        <div class="basis-1/2">
            <div class="p-6">
                <video class="mx-auto rounded-lg" controls="false" autoplay="true">
                    <source src="../assets/temp-video.mp4" type="video/mp4">
                    <!-- <source src="movie.ogg" type="video/ogg"> -->
                    Your browser does not support the video tag.
                </video>
            </div>
            <!-- <img class="overflow-hidden rounded-lg ml-auto mr-6" style="height: 85vh;" src="../assets/Karen_Full_Cutout.png" alt="Professional Makeup Artist"> -->
        </div>
    </div>
    <div class="flex">
        <v-carousel
            cycle
            height="400"
            hide-delimiter-background="true"
            show-arrows="hover"
            hide-delimiters
        >
            <v-carousel-item
                v-for="(slide, i) in slides"
                :key="i"
            >
                <v-sheet
                    :color="colors[i]"
                    height="100%"
                >
                    <div class="d-flex fill-height justify-center align-center">
                    <div class="text-h2">
                        {{ slide }} Slide
                    </div>
                    </div>
                </v-sheet>
            </v-carousel-item>
        </v-carousel>
    </div>
    <!-- <ul>
        <li>Testimonials</li>
        <li>List of all types of venues Karen can work for: Weddings, Quinces, Prom, birthdays...</li>
        <li>Pictures of products</li>
        <li>Layout of all Karen's certifications and how many customers shes helped</li>
    </ul> -->
</template>
  
 <script>

    export default {
        name: 'HomeView',
        props: {
        },
        data () {
            return {
                colors: [
                'indigo',
                'warning',
                'pink darken-2',
                'red lighten-1',
                'deep-purple accent-4',
                ],
                slides: [
                'First',
                'Second',
                'Third',
                'Fourth',
                'Fifth',
                ],
            }
            },
        mounted() {
            document.title = 'Karen\'s Kit - Home';

        },
        setup() {
        }
    }
</script>
