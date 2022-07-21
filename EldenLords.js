const LinkedList = require('./linkedinlist')

const eldenLord = new LinkedList()

eldenLord.addToHead('Malenia, the Severed')
eldenLord.addToHead('Godrick, the Grafted')
eldenLord.addToTail('Morgot, Grace Given King')
eldenLord.addToTail('Starscourge Radahn')

eldenLord.printList()