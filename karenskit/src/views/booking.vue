<template>
    <div class="flex flex-row">
        <div class="text-2xl">
            Booking
        </div>
    </div>
    <hr>
    <div class="flex flex-row mt-5">
        <div class="basis-1/2">
            <iframe class="mx-auto" src="https://calendar.google.com/calendar/embed?height=600&wkst=1&bgcolor=%23ffffff&ctz=America%2FChicago&title=My%20Schedule&showTz=0&showCalendars=0&showPrint=0&src=OWM5M2RiNzc0YTRmYTFkMDQyNTRhMTUxN2FhZmEwZjMxMzgwYWQzZTM3NTUxMDM3Y2UxNDhmZWE2OTBhNDUwOUBncm91cC5jYWxlbmRhci5nb29nbGUuY29t&src=ZW4udXNhI2hvbGlkYXlAZ3JvdXAudi5jYWxlbmRhci5nb29nbGUuY29t&color=%23F4511E&color=%237986CB" style="border-width:0" width="800" height="600" frameborder="0" scrolling="no"></iframe>
        </div>        
        <div class="basis-1/2">
            <div class="flex flex-col">
                <div class="flex flex-row">
                    <div class="border text-light bg-black rounded-lg p-4 cursor-pointer mt-4">
                        <v-icon icon="mdi-instagram" />
                        Instagram
                    </div>
                </div>
                <div class="flex flex-row">
                    <div class="border text-light bg-black rounded-lg p-4 cursor-pointer mt-4">
                        <v-icon icon="mdi-facebook" />
                        Facebook
                    </div>
                </div>
                <div class="flex flex-row">
                    <div class="border text-light bg-black rounded-lg p-4 cursor-pointer mt-4">
                        <v-icon icon="mdi-email" />
                        Email
                    </div>
                </div>
                <div class="flex flex-row">
                    <div class="border text-light bg-black rounded-lg p-4 cursor-pointer mt-4">
                        <v-icon icon="mdi-phone" />
                        Phone
                    </div>
                </div>
            </div>
        </div>        
    </div>


   
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