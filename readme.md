# ESERCIOZIO: Lista della spesa con ciclo while.

>[!NOTE]
>
> nome repo: js-lista-spesa

### Consegna:
Data una lista della spesa, stampare sulla pagina (anche brutalmente, basta che si vedano) gli elementi della lista individualmente con un ciclo while.
Consigli:
- Ricordiamoci di inizializzare la variabile di contatore prima dell'inizio del ciclo while
- Ricordiamoci di incrementare il contatore, o comunque di inserire una condizione di uscita, all'interno ciclo while.

## Svolgimento:
1. assegrare una var di arrey con dentro una lista della spesa;
2. inizializzo il contatore dando valore 0;
3. creo una istruzione di iterazione con while loop, dando come condizione che il contatore sia inferiore alla lunghezza dell'arrey e impostsndo alla fine l'incremento del contatore;
4. creo l'elementoto con `document.createElement('...');` `ul` e `li` e li andrò ad appendere al mio `div .content`;
5. all'interno del `li` andrò ad creare l'elemento che sarà uguele all'indice della lista:
```
listaSpesa = listaSpesa[nomeContatore];
```
6. do un po' di stile alla pagina html.

##### FINE