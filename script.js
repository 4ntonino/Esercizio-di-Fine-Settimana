// 1- Elenca e descrivi i principali data type in javascript

/* 1 - I principali datatype in javascript sono:
      - NUMBERS : E' possibile inserire un numero sia esso intero o decimale.
      - STRINGS : E' possbile inserire dei caratteri, attenzione che anche i numeri inseriti tra apici (es."2") vengono intesi come stringhe.
      - BOOLEANS : E' un valore logico (vero o falso).
      - OBJECT : Contiene dei valori come ad esempio degli array (esempio: let studenti = { nome : "Antonino", cognome : "Augugliaro", età: 30 }).
      - NULL : Indica l'assenza di un valore (es: let nome = null).
      - UNDEFINED : Indica che una variabile non è stata inizializzata.
*/

// 2 - Scrivi il codice necessario ad effettuare un'addizione (una somma) dei numeri 12 e 20 e salvando il risultato in una variabile.

    let primoNumero = 12;
    let secondoNumero = 20;
    let somma = primoNumero + secondoNumero;
    console.log(primoNumero,"+",secondoNumero,"=",somma);


// 3 - Crea una variabile di nome "x" e assegna ad essa il numero 12.

    var x = 12;


// 4 - Crea una variabile chiamata "name" e assegna ad essa il tuo nome, sotto forma di stringa.

    var name = "antonino";


// 5 - Esegui una sottrazione tra i numeri 4 e la variabile "x" appena dichiarata che contiene il numero 12.

    let sottrazione = x - 4;
    console.log(x,"-", 4 ,"=",sottrazione); 

// 6 - Crea un oggetto di Javascript che ti rappresenti.

    let persona = {
        nome : "Antonino",
        cognome : "Augugliaro",
        hobbies : "Suonare la chitarra,la batteria, correre e scattare foto. "
    };
    console.table(persona);

// 7 - Crea due variabili : "name1" e "name2". Assegna a name1 la stringa john e asssegna a name2 la stringa "john" con la j maiuscola.
// verifica che siano diversi.

    var name1 = "john";
    var name2 = "John";
    let uguaglianza = (name1 == name2);
    console.log(uguaglianza);

    let name2Lowercase = name2.toLowerCase();
    console.log(name2Lowercase == name1);
    


