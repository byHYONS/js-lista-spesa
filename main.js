// reset
'use strict'

// 1. assegrare una var di arrey con dentro una lista della spesa;
// 2. inizializzo il contatore dando valore 0;
// 3. creo una istruzione di iterazione con while loop, dando come condizione che il contatore sia inferiore alla lunghezza dell'arrey e impostsndo alla fine l'incremento del contatore;
// 4. creo l'elementoto ul e li e li andrò ad appendere al mio div .content;
// 5. all'interno del `li` andrò ad creare l'elemento che sarà uguele all'indice della lista.

const listaSpesa = [
    '1kg di pasta corta', 
    '2kg di fettine di vitello', 
    '1kg di nodini di agnello', 
    '6 bottiglie di birra', 
    'insalata', 
    'verdure', 
    'gelato'
    ];
    
    console.log({listaSpesa})
    
    let contatore = 0;
    const contenuto = document.querySelector('.content');
    
    while (contatore < listaSpesa.length) {
        console.log(listaSpesa[contatore]);

        const listaNonOrdinata = document.createElement('ul');
        const elementoLista = document.createElement('li');

        elementoLista.innerText = listaSpesa[contatore];
        
        listaNonOrdinata.append(elementoLista);
        contenuto.append(listaNonOrdinata);
    
        contatore++;
    }

    // FINE