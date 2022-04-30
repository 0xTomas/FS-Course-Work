const verbsIst = ['exist', 'assist', 'resist', 'twist']
const nounsIst = ['wrist', 'fist', 'gist', 'mist']

const verbsAle = ['fail', 'email', 'wail', 'inhale']
const nounsAle = ['kale', 'snail', 'tail', 'whale']

const verbsUte = ['root', 'suit', 'boot', 'salute']
const nounsUte = ['ute', 'flute', 'chute', 'loot']

const verbs = [verbsIst, verbsAle, verbsUte]
const nouns = [nounsAle, nounsIst, nounsUte]

const edAdjectives = ['fished', 'wished', 'kissed']
let verb1Type = ''
let noun1Type = ''


function getRandomInt(max) {
    return Math.floor(Math.random() * max)}

Array.prototype.categoriseAndRemoveVerb = function(verb) {
    verbsIst.includes(verb) ? verb1Type = 1: verb
    verbsAle.includes(verb) ? verb1Type = 2: verb
    verbsUte.includes(verb) ? verb1Type = 3: verb
    let indexVerb = this.findIndex(el => el === verb)
    if (indexVerb !== -1) this.splice(indexVerb, 1)
}

Array.prototype.categoriseAndRemoveNoun = function(noun) {
    nounsIst.includes(noun) ? noun1Type = 1: noun
    nounsAle.includes(noun) ? noun1Type = 2: noun
    nounsUte.includes(noun) ? noun1Type = 3: noun
    let indexNoun = this.findIndex(el => el === noun)
    if (indexNoun !== -1) this.splice(indexNoun, 1)
}

function generateVerb() {
    let verb;
    verb = verbs[getRandomInt(3)][getRandomInt(4)];
    verbs.forEach(element => element.categoriseAndRemoveVerb(verb))
    return verb
}

function generateNoun() {
    let noun;
    noun = nouns[getRandomInt(3)][getRandomInt(4)];
    nouns.forEach(element => element.categoriseAndRemoveNoun(noun))
    return noun
}

function generateIstVerb() {
    let verb;
    verb = verbsIst[getRandomInt(2)];
    return verb
}

function generateAleVerb() {
    let verb;
    verb = verbsAle[getRandomInt(2)];
    return verb
}

function generateUteVerb() {
    let verb;
    verb = verbsUte[getRandomInt(2)];
    return verb
}

function generateIstNoun() {
    let noun;
    noun = nounsIst[getRandomInt(2)];
    return noun
}

function generateAleNoun() {
    let noun;
    noun = nounsAle[getRandomInt(2)];
    return noun
}

function generateUteNoun() {
    let noun;
    noun = nounsUte[getRandomInt(2)];
    return noun
}

const verb1 = generateVerb()
const noun1 = generateNoun()

switch (verb1Type) {
    case 1:
        verb2 = generateIstVerb()
        break
    case 2:
        verb2 = generateAleVerb()
        break
    case 3:
        verb2 = generateUteVerb()
        break
    default:
        break
}

switch (noun1Type) {
    case 1:
        noun2 = generateIstNoun()
        break
    case 2:
        noun2 = generateAleNoun()
        break
    case 3:
        noun2 = generateUteNoun()
        break
    default:
        break
}

console.log(`You will find someone to ${verb1},`)
console.log(`They will have the best ${noun1},`)
console.log(`Who will always love to ${verb2}.`)
console.log(`And deliver you a ${noun2}.`)






