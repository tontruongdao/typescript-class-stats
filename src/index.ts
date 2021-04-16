import { CsvFileReader } from './CsvFileReader'

const reader = new CsvFileReader('football.csv')
reader.read();

enum matchResult {
    homeWin = 'H',
    awayWin = 'A',
    Draw = 'D'
}

let manUWins = 0;

for (let match of reader.data) {
    if (match[1] === 'Man United' && match[5] === matchResult.homeWin) {
        manUWins++
    } else if (match[2] === 'Man United' && match[5] === matchResult.awayWin) {
        manUWins++
    }
}

console.log(`Manchester United won ${manUWins} games`)