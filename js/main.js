// alert("Hello World!");

//prove con Vue seguendo il video della lezione
// const app = new Vue({
//     el: "#root",
//     data: {
//        messaggio: "Ciao mondo!" 
//     }
// });

//il vantaggio di Vue è che tiene costantemente monitorato il valore di una variabile anche se l'utente la modifica;



// *************+ esercizio repo Hello Vue

//devo stampare un messaggio all'interno di un tag h1 utilizzando Vue

    /*steps
    1. avvio Vue dentro una variabile;
    2. dichiaro dentro quale elemento html verrà utilizzato Vue;
    3. creo l'oggetto(?) data;
    4. creo all'interno di data la proprietà equivalente al mio messaggio;
    5. vado ad inserire la proprietà message nel tag html usando {{texthere}}
    */

//bonus immagine

    /*steps
    1. creo una proprietà in data per l'immagine;
    2. come valore della chiave inserisco il percorso dell'immagine;
    */

const app = new Vue({ 
    el: "#root",
    data: {
        message: "Hello Vue!",
        image: "vuejs.jpeg"
    }
});