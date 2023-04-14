Vue To Do List
===

## Descrizione

Rifare l’esercizio della to do list.
Ogni todo sarà un oggetto, formato da due proprietà:
- `text`, una stringa che indica il testo del todo
- `done`, un booleano (true/false) che indica se il todo è stato fatto oppure no

**MILESTONE 1**

Stampare all’interno di una lista HTML un item per ogni todo.
Se la proprietà `done` è uguale a `true`, visualizzare il testo del todo ~~sbarrato~~.

**MILESTONE 2**

Visualizzare a fianco ad ogni item ha una “x”: cliccando su di essa, il todo viene rimosso dalla lista.

**MILESTONE 3**

Predisporre un campo di input testuale e un pulsante “aggiungi”: cliccando sul pulsante, il testo digitato viene letto e utilizzato per creare un nuovo todo, che quindi viene aggiunto alla lista dei todo esistenti.

**Bonus:**

1- oltre al click sul pulsante, intercettare anche il tasto ENTER per aggiungere il todo alla lista
2- cliccando sul testo dell’item, invertire il valore della proprietà done del todo corrispondente (se `done` era uguale a `false`, impostare `true` e viceversa)

## Steps

- Creo in pagina un div per il logo, uno per la parte dell'input con il bottone per aggiungere tasks e un container per la to do list.

- Aggiungo classe done per distinguere le tasks svolte da quelle da svolgere

- Ciclo l'elemento li per stampare la todo-list

- Aggiungo un ciclo if al messaggio che deve comparire solo quando la todo-list è vuota, quindi quando tutti i compiti sono stati svolti

- Agli li aggiungo la classe "done" che al click deve sbarrare la task 

- Aggiungo un click al fontawesome del trash in modo da eliminare la task 

- Aggiungo il click.stop che mi permette di interrompere l'evento (@click) che lo precede

- 


