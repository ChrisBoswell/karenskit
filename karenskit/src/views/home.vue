<template>
    <div class="video-container-mobile lg:video-container xl:video-container -mt-4 h-1/2 overflow-hidden">
        <video class="w-screen -mt-1" autoplay muted loop>
            <source src="../assets/temp-video.mp4" type="video/mp4">
        </video>
    </div>
    <div class="flex mt-6">
        <div class="mx-auto">
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

.video-container {
    height: 100vh;
    width: 100vw;
    position: relative;
}
.video-container-mobile {
    height: auto;
    width: 100vw;
    position: relative;
}

.video-container video {
  width: 100%;
  height: 100%;
  position: absolute;
  object-fit: cover;
  z-index: 0;
}

/* Just styling the content of the div, the *magic* in the previous rules */
.video-container .caption {
  z-index: 1;
  position: relative;
  text-align: center;
  color: #dc0000;
  padding: 0px;
}


</style>