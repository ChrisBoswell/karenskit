<template>
    <div>About me</div>
    <ul>
        <li>Where From?</li>
        <li>School</li>
        <li>Why hair</li>
    </ul>
</template>
    
<script>
    export default {
        name: 'AboutMeView',
        props: {
        },
        mounted() {
            document.title = 'Karen\'s Kit - About Me'; 
        }
    }
</script>