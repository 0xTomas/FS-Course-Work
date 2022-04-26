// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ['A', 'T', 'C', 'G'];
  return dnaBases[Math.floor(Math.random() * 4)];
};

// Returns a random single stand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = []
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase());
  }
  return newStrand
}

const pAequorFactory = (specimenNum, dna) => {
  return {
    specimenNum,
    dna,
    getDetails () {
      return "Specimen " + this.specimenNum + " with the DNA: " + this.dna;
    },
    mutate() {
      const randIndex = Math.floor(Math.random() * this.dna.length)
      let newBase = returnRandBase()
      console.log("New random base: " + newBase)
      while (this.dna[randIndex] === newBase) {
        console.log("The new base was the same as the original, so generate a new base: ")
        newBase = returnRandBase()
        console.log("New unique base: " + newBase)
      }
      console.log("Let's replace " + this.dna[randIndex] + " with " + newBase)
      this.dna[randIndex] = newBase
      return this.dna
    },
    compareDNA(otherOrg) {
      const similarities = this.dna.reduce((acc, curr, idx, arr) => {
        if (arr[idx] === otherOrg.dna[idx]) {
          return acc + 1
        } else {
          return acc
        }
      }, 0)
      const percentageOfDNAshared = (similarities / this.dna.length) * 100
      const percentageTo2Decimal = percentageOfDNAshared.toFixed(2)
      console.log(`${this.specimenNum} and ${otherOrg.specimenNum} have ${percentageTo2Decimal}% DNA in common.`)
    },
    willLikelySurvive() {
      const cOrG = this.dna.reduce((acc, curr, idx, arr) => {
        if (arr[idx] === 'C' || arr[idx] === 'G') {
          return acc + 1
        } else {
          return acc
        }
      }, 0)
      const percentageOfCorG = ((cOrG / this.dna.length)*100).toFixed(2)
      console.log(`Specimen ${this.specimenNum} has ${percentageOfCorG}% of C or G.`)
      cOrG >= 0.6 * 15 ? console.log(`It will live.`) : console.log(`It will die.`)
      return cOrG >= 0.6 * 15
    }
  }
}

const survivingSpecimen = []
let idCounter = 1

while (survivingSpecimen.length <30) {
  let newOrg = pAequorFactory(idCounter, mockUpStrand())
  if (newOrg.willLikelySurvive()) {
    survivingSpecimen.push(newOrg)
  }
  idCounter++
}

console.log(survivingSpecimen)









