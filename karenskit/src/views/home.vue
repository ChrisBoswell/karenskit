<template>
    <div class="flex flex-row rounded-lg justify-between" style="background-color: #d7d2cf;">
        <div class="basis-1/2 rounded p-4">
            <div class="flex">
                <div class="text-4xl">Karen's Kit</div>
            </div>
            <hr>
            <div class="flex text-xl mt-3 p-3">
                Lorum Ipsum
                Lorum Ipsum
                Lorum Ipsum
                Lorum Ipsum
                Lorum Ipsum
                Lorum Ipsum
            </div>
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
    <div class="flex mt-6">
        <div class="px-3 mx-auto">
            <div class="col-12  position-relative">
                <div class="gradient-left" />
                <div class="gradient-right" />
                <div class="carousel__wrapper">
                    <div 
                        v-for="(image, imageIndex) of employeeImages"
                        :key="`employee-image-${imageIndex}`"
                        class="carousel__slide"
                    >
                        <div
                        class="carousel__image" 
                        :style="`background-image: url('${image}');`" 
                        />
                    </div>
                    <!-- repeat images for infinite effect -->
                    <div 
                        v-for="(image, imageIndex) of employeeImages"
                        :key="`repeated-employee-image-${imageIndex}`"
                        class="carousel__slide"
                    >
                        <div
                        class="carousel__image" 
                        :style="`background-image: url('${image}');`" 
                        />
                    </div>
                </div>
            </div>
        </div>
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
                employeeImages: [
                    'img/customer_1.967ca8c3.jpg',
                    'img/customer_2.03503b7b.jpg',
                    'img/customer_3.3b232fb7.jpg',
                    'img/customer_4.0eafb1de.jpg',
                    'img/customer_5.3c3816f1.jpg',
                    'img/customer_6.90a468b8.jpg',
                    'img/customer_7.d1e3eb7d.jpg',
                    'img/customer_8.d28c7f5a.jpg',
                    'img/customer_9.22b5aa93.jpg',
                ]
            }
            },
        mounted() {
            document.title = 'Karen\'s Kit - Home';

        },
        setup() {
        }
    }
</script>

<style lang="scss" scoped>
.gradient-left {
  position: absolute;
  top: 0;
  bottom: 0;
  left: -2px;
  width: 25%;
  z-index: 1;
  background-color: white;
  -webkit-mask-image: -webkit-linear-gradient(left, rgba(0,0,0,1), rgba(0,0,0,0));
}
.gradient-right {
  position: absolute;
  top: 0;
  bottom: 0;
  right: -2px;
  width: 25%;
  z-index: 1;
  background-color: white;
  -webkit-mask-image: -webkit-linear-gradient(right, rgba(0,0,0,1), rgba(0,0,0,0));
}
// infinite scroll credit to 'the Hutt' on Stack Overflow
// https://stackoverflow.com/questions/70442770/infinite-scrolling-carousel-css-only
@keyframes scroll {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(calc(200px * 18 * -1));
  }
}
.carousel__wrapper {
  display: flex;
  align-items: center;
  
  width: 95vw;
  overflow: hidden;
  margin: 0 auto;
    :hover > * {
        animation: scroll 120s linear infinite paused !important;
    }
}
.carousel {
  padding: 100px 0;
  background: lightblue;
  
  overflow: hidden;
  width:  calc(2 * 22);
}
.carousel__slide {
  animation: scroll 120s linear infinite;
  display: flex;
  flex-direction: column;
  flex: 0 0 auto;
  width: 200px;
  height: 200px;
  box-sizing: border-box;
}

.carousel__image {
  background-size: cover;
  background-repeat: no-repeat;
  
  border-radius: 23px;
  background-color: #FFFFFF;
  box-shadow: 0 2px 23px 0 rgba(0,0,0,0.2);
  height: 100%;
  margin: 20px 15px;
  cursor: pointer;
}
.carousel__image :hover {
    scale: 1.5;
}
</style>