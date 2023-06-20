<template>
    <div class="flex flex-row bg-black rounded-lg justify-between drop-shadow-2xl">
        <img class="h-full mx-auto w-auto rounded-lg float-right" src="../assets/KarensKit_Logo.jpg" alt="Professional Makeup Artist">
    </div>
    <!-- <ul>
        <li>Testimonials</li>
        <li>List of all types of venues Karen can work for: Weddings, Quinces, Prom, birthdays...</li>
        <li>Pictures of products</li>
        <li>Layout of all Karen's certifications and how many customers shes helped</li>
    </ul> -->
</template>
  
 <script>
    // import { ref, onMounted } from 'vue';

    export default {
        name: 'HomeView',
        props: {
        },
        mounted() {
            document.title = 'Karen\'s Kit - Home';

        },
        setup() {
        }
    }
</script>
