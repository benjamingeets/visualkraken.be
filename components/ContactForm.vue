<template>
    <form name="contactus" action="?envoie=true" method="POST"  netlify netlify-honeypot="bot-field">
     <input type="hidden" name="form-name" value="contactus" />
            <div id="nommail">
                <div id="nom">
                    <label for="nom">Nom</label><input name="nom" type="text" v-model="nom" v-on:input='verifier("nom")' required>
                </div>
                <div id="mail">
                    <label for="mail">Adresse email</label><input v-model="mail" name="mail" type="mail" v-on:input='verifier("mail")' required>
                </div>
            </div>
            <div id="objet">
                <label for="objet">Objet</label><input v-model="objet" name="objet" type="text" v-on:input='verifier("objet")' required>
            </div>
            <div id="message">
                <label for="message">Message</label>
                <textarea v-model="message" name="message" id="" cols="30" rows="10" v-on:input='verifier("message")' required></textarea>
            </div>
            <div v-if="displayButton" class="button button-gradient">
                <input class="" type="submit" value="Envoyer" >
            </div>
            <div v-if="!displayButton" class="button button-false">
                <p>Veuillez compléter les champs</p>
            </div>
        </form>
</template>

<script>
export default {
    name:"ContactForm",
    data(){
        return{
            nom: "",
            mail: "",
            objet: "",
            message :"",
            mailOk : false,
            nomOk : false,
            objetOk : false,
            messageOk : false,
            displayButton:false
        }
    },
    methods:{
        verifier(verif){
            switch (verif) {
                case "nom":
                    if(this.nom.search(/^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]+$/u) != -1){
                        document.querySelector("#nom input").style.border = "3px solid #2463AA"
                        this.nomOk = true;
                    }
                    else{
                        document.querySelector("#nom input").style.border = "3px solid #BFBFBF"
                        this.nomOk = false;
                    }
                    break;
                case "mail":
                    if(this.mail.search(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/) != -1){
                        document.querySelector("#mail input").style.border = "3px solid #2463AA"
                        this.mailOk = true
                    }
                    else{
                        document.querySelector("#mail input").style.border = "3px solid #BFBFBF"
                        this.mailOk = false
                    }
                    break;
                case "objet":
                    if(this.objet != ""){
                        document.querySelector("#objet input").style.border = "3px solid #2463AA"
                        this.objetOk = true
                    }
                    else{
                        document.querySelector("#objet input").style.border = "3px solid #BFBFBF"
                        this.objetOk = false;
                    }
                    break;    
                case "message":
                    if(this.message != ""){
                        document.querySelector("textarea").style.border = "3px solid #2463AA"
                        this.messageOk = true
                    }
                    else{
                        document.querySelector("textarea").style.border = "3px solid #BFBFBF"
                        this.messageOk=false
                    }
                    break;    
                default:
                    break;
            }

            if(this.messageOk && this.mailOk && this.nomOk && this.objetOk){
                this.displayButton  = true;
            }
            else{
                this.displayButton  = false;
            }
        }
    }
}
</script>

<style lang="scss">

.button-false{
    cursor:not-allowed;
    color:gray;
    border:2px solid gray;
    padding:1px;
    p{
        color:gray;
        font-size:1em;
        user-select: none;
    }
    &:hover{
        background-color: rgba($color: #000000, $alpha: 0);
        p{
            color:black;
        }
    }
}

@media (max-width:1024px){
    .button-false{
        p{
            font-size: 0.8em;
        }
    }
}

input[type="submit"]{
    width: 100%;
    height: 100%;
    background: rgba($color: #000000, $alpha: 0);
    color:white;
    cursor: pointer;
    border:0;
    padding:0;
}

form{
    background-color:white;
    box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.25);
    padding:50px;
    width: 50%;
    margin:50px auto 0 auto;
    border-radius: 1em;
    label{
        margin:20px 0 0px 0;
        padding: 0 0 0 10px;
        color:#BFBFBF
    }
    input,textarea{
        border: 3px solid #BFBFBF;
        border-radius: 0.25em;
        padding:10px;
        font-size:1em;
    }
    input{
        height: 30px;
    }
    #nommail{
        display: flex;
        justify-content: space-between;
    }
    #nom,#mail,#objet,#message{
        display: flex;
        flex-direction: column;
    }
    #nom{
        width: 40%;
    }
    #mail{
        width: 50%;
    }
    #objet{
        width: 70%;
    }
}

@media (max-width:1024px){
    form{
        width: 100%;
        box-shadow: none;
        padding:0;
        #nom,#mail,#objet{
        width: 100%;
        
    }
     #nommail{
         flex-wrap: wrap;
    }
    }
}
</style>