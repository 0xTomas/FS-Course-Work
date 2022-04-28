const verbsIst = ['exist', 'assist', 'resist', 'twist']
const nounsIst = ['wrist', 'fist', 'gist', 'linguist']

const verbsAle = ['fail', 'email', 'wail', 'inhale']
const nounsAle = ['kale', 'snail', 'tail', 'whale']

const verbsUte = ['root', 'suit', 'boot', 'salute']
const nounsUte = ['ute', 'flute', 'chute', 'loot']

const verbs = [verbsIst, verbsAle, verbsUte]
const nouns = [nounsAle, nounsIst, nounsUte]

const edAdjectives = ['fished', 'wished', 'kissed']

function getRandomInt(max) {
    return Math.floor(Math.random() * max)}

Array.prototype.removeVerb = function(verb) {
    var indexVerb = this.findIndex(el => el === verb)
    if (indexVerb !== -1) this.splice(indexVerb, 1)
    return this
}

function generateVerb() {
    const verb = verbs[getRandomInt(2)][getRandomInt(4)]
    verbs.forEach(element => element.removeVerb(verb))
    return verb
}

console.log(generateVerb())
console.log(verbs)

// verbsIst.includes(verb1) ? verb2 = verbsIst[getRandomInt(4)] : verb2 = verbsAle[getRandomInt(4)]






