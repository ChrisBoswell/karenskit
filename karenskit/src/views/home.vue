<template>
    <div>Home</div>
    <ul>
        <li>Testimonials</li>
        <li>List of all types of venues Karen can work for: Weddings, Quinces, Prom, birthdays...</li>
        <li>Pictures of products</li>
        <li>Layout of all Karen's certifications and how many customers shes helped</li>
    </ul>
</template>
  
 <script>
export default {
    name: 'HomeView',
    props: {
    },
    mounted() {
        document.title = 'Karen\'s Kit - Home'; 
    }
}
</script>
