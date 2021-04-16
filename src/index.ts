import { CsvFileReader } from './CsvFileReader'
import { MatchResult } from './MatchResult'
import { MatchReader } from './MatchReader'

const csvFileReader = new CsvFileReader('football.csv');
const matchReader = new MatchReader(csvFileReader);

matchReader.load();

let manUWins = 0;

for (let match of matchReader.matches) {
    if (match[1] === 'Man United' && match[5] === MatchResult.homeWin) {
        manUWins++
    } else if (match[2] === 'Man United' && match[5] === MatchResult.awayWin) {
        manUWins++
    }
}

console.log(`Manchester United won ${manUWins} games`)