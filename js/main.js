// alert("Hello World!");

//prove con Vue seguendo il video della lezione
const app = new Vue({
    el: "#root",
    data: {
       messaggio: "Ciao mondo!" 
    }
});

//il vantaggio di Vue è che tiene costantemente monitorato il valore di una variabile anche se l'utente la modifica;