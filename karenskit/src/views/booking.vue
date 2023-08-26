<template>
    <div>Booking</div>
    <ul>
        <li>Calender? Some kind of API to a google calender maybe?</li>
        <li>Email</li>
        <li>Phone Number</li>
        <li>Socials?</li>
        <iframe src="https://calendar.google.com/calendar/embed?height=600&wkst=1&bgcolor=%23ffffff&ctz=America%2FChicago&title=My%20Schedule&showTz=0&showCalendars=0&showPrint=0&src=OWM5M2RiNzc0YTRmYTFkMDQyNTRhMTUxN2FhZmEwZjMxMzgwYWQzZTM3NTUxMDM3Y2UxNDhmZWE2OTBhNDUwOUBncm91cC5jYWxlbmRhci5nb29nbGUuY29t&src=ZW4udXNhI2hvbGlkYXlAZ3JvdXAudi5jYWxlbmRhci5nb29nbGUuY29t&color=%23F4511E&color=%237986CB" style="border-width:0" width="800" height="600" frameborder="0" scrolling="no"></iframe>
        <!-- <iframe src="https://calendar.google.com/calendar/embed?height=600&wkst=1&bgcolor=%23ffffff&ctz=America%2FChicago&title=My%20Schedule&showPrint=0&showTz=0&showCalendars=1&src=OWM5M2RiNzc0YTRmYTFkMDQyNTRhMTUxN2FhZmEwZjMxMzgwYWQzZTM3NTUxMDM3Y2UxNDhmZWE2OTBhNDUwOUBncm91cC5jYWxlbmRhci5nb29nbGUuY29t&src=ZW4udXNhI2hvbGlkYXlAZ3JvdXAudi5jYWxlbmRhci5nb29nbGUuY29t&color=%23F4511E&color=%237986CB" style="border-width:0" width="800" height="600" frameborder="0" scrolling="no"></iframe> -->
        <!-- <iframe src="https://calendar.google.com/calendar/embed?height=600&wkst=1&bgcolor=%23ffffff&ctz=America%2FChicago&showNav=1&showTitle=1&showCalendars=0&showTz=0&showPrint=0&title=My%20Schedule&src=Y2hyaXN0aWFubS5ib3N3ZWxsQGdtYWlsLmNvbQ&src=YWRkcmVzc2Jvb2sjY29udGFjdHNAZ3JvdXAudi5jYWxlbmRhci5nb29nbGUuY29t&src=ZW4udXNhI2hvbGlkYXlAZ3JvdXAudi5jYWxlbmRhci5nb29nbGUuY29t&color=%23039BE5&color=%237986CB&color=%237986CB" style="border-width:0" width="800" height="600" frameborder="0" scrolling="no"></iframe> -->
        <!-- <iframe src="https://calendar.google.com/calendar/embed?height=600&wkst=1&bgcolor=%23ffffff&ctz=America%2FChicago&showNav=1&showTitle=0&src=Y2hyaXN0aWFubS5ib3N3ZWxsQGdtYWlsLmNvbQ&src=YWRkcmVzc2Jvb2sjY29udGFjdHNAZ3JvdXAudi5jYWxlbmRhci5nb29nbGUuY29t&src=ZW4udXNhI2hvbGlkYXlAZ3JvdXAudi5jYWxlbmRhci5nb29nbGUuY29t&color=%23039BE5&color=%237986CB&color=%237986CB" style="border:solid 1px #777" width="800" height="600" frameborder="0" scrolling="no"></iframe> -->
    </ul>
</template>
    
<script>
    import axios from 'axios'
    export default {
        name: 'BookingView',
        props: {
        msg: String
        },
        async mounted() {
            document.title = 'Karen\'s Kit - Booking';
            await this.init()
        },
        methods: {
            async init(){
                let meme = await axios.get('https://catfact.ninja/fact')
                console.log(meme.data)
            }
        }
    }
</script>