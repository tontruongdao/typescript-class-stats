import { CsvFileReader } from './CsvFileReader'
import { MatchResult } from './MatchResult'

const reader = new CsvFileReader('football.csv')
reader.read();

let manUWins = 0;

for (let match of reader.data) {
    if (match[1] === 'Man United' && match[5] === MatchResult.homeWin) {
        manUWins++
    } else if (match[2] === 'Man United' && match[5] === MatchResult.awayWin) {
        manUWins++
    }
}

console.log(`Manchester United won ${manUWins} games`)