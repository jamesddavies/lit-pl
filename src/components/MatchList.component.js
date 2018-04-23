import { html } from '../../node_modules/lit-html/lit-html.js'
import {until} from '../../node_modules/lit-html/lib/until.js'
import {formatDate, formatTime} from './utils.js'

import Loader from './Loader.component.js'

const fixtureDisplay = (match) => html`
    <div class='fixture'>
        <p>${match.homeTeamName}</p>
        <div>${formatTime(match.date)}</div>
        <p>${match.awayTeamName}</p>
    </div>
`

const resultDisplay = (match) => html`
    <div class='fixture'>
        <p class='${match.result.goalsHomeTeam > match.result.goalsAwayTeam ? 'winner': ''}'>${match.homeTeamName}</p>
        <div>${match.result.goalsHomeTeam} - ${match.result.goalsAwayTeam}</div>
        <p class='${match.result.goalsAwayTeam > match.result.goalsHomeTeam ? 'winner': ''}'>${match.awayTeamName}</p>
    </div>
`

let dateDisplay = (thisMatchDate, currentMatchDate, dateUpdateCallback) => {
    let date = formatDate(thisMatchDate)
    if (date !== currentMatchDate){
        dateUpdateCallback(date)
        return html`<h3 class="fixtures-heading">${date}</h3>`
    } else {
        return null
    }
}

const returnMatches = (displayType, matches) => {
    let day = ''
    let dateUpdateCallback = (updateDate) => day = updateDate
    return matches.filter(fixture => {
        return displayType === 'fixtures' ? fixture.status !== "FINISHED" : fixture.status
    })
    .sort((a, b) => {
        return displayType === 'fixtures' ? new Date(a.date) - new Date(b.date) : new Date(b.date) - new Date(a.date)
    })
    .map(match => {
        let matchDisplay = () => html`${displayType === 'fixtures' ? fixtureDisplay(match) : resultDisplay(match)}`
        return html`
            ${dateDisplay(match.date, day, dateUpdateCallback)}
            ${matchDisplay()}
        `
    })
}

const MatchList = (displayType) => html`
    ${
        until(
            fetch(`http://localhost:3000?url=http://api.football-data.org/v1/competitions/445/fixtures?timeFrame=${displayType === 'fixtures' ? `n` : `p`}14`)
            .then(r => r.json())
            .then(data => {
                return returnMatches(displayType, data.fixtures)
            }), 
        html`<tr class='loader-row'><td colspan='10'>${Loader()}</td></tr>`)
    }
`

export default MatchList