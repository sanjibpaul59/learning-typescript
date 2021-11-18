interface Playable {
  condition(): string
}

const defender = {
  playingStyle: 'The Destroyer',
  comStyle: true,
  stamina: 94,
  injured: false,
  condition(): string {
    return `Player ${
      this.injured ? 'injured, not in good form' : 'not injured, in good form'
    }`
  },
}
const midFielder = {
  playingStyle: 'The Orchestrator',
  comStyle: true,
  stamina: 85,
  injured: true,
  condition(): string {
    return `Player ${
      this.injured ? 'injured, not in good form' : 'not injured, in good form'
    }`
  },
}

const printCondition = (player: Playable): void => {
  console.log(`Availability: ${player.condition()}`)
}

printCondition(defender)
printCondition(midFielder)
