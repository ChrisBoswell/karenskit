<template>
    <div>Booking</div>
    <ul>
        <li>Calender? Some kind of API to a google calender maybe?</li>
        <li>Email</li>
        <li>Phone Number</li>
        <li>Socials?</li>
    </ul>
</template>
    
<script>
    export default {
        name: 'BookingView',
        props: {
        msg: String
        },
        mounted() {
        document.title = 'Karen\'s Kit - Booking'; 
        }
    }
</script>