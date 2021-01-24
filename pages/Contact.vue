<template>
    <div>
        <h2 class="text-center">Contact</h2>
        <p v-if='$route.query.envoie' style="text-align:center">Votre message a bien été envoyé. Nous vous recontacterons dans les plus brefs délais.</p>
        <ContactForm/>
    </div>
</template>

<style lang="scss">

</style>

<script>
import ContactForm from '@/components/ContactForm'
export default {
    name:"Contact",
    components:{
       ContactForm
    },
    head(){
        return{
            title:"VisualKraken - Contact",
            meta:[
               { property: 'og:title', content: "Contact - VisualKraken"},
               { name:'twitter:title', content: 'Contact - VisualKraken'}
            ]
        }
    }
}
</script>