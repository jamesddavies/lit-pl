import {html} from '../node_modules/lit-html/lit-html.js'
import {until} from '../node_modules/lit-html/lib/until.js'
import {formatDate, formatTime} from './utils.js'

import Loader from './Loader.component.js'

console.log("console logging")

const fixtureList = () => html`
    ${
        until(
            fetch('http://localhost:3000?url=http://api.football-data.org/v1/competitions/445/fixtures?timeFrame=p14')
            .then(r => r.json())
            .then(data => {
                console.log("results")
                data.fixtures.sort((a, b) => new Date(b.date) - new Date(a.date))
                let matchDate = ''
                return data.fixtures.map(match => {
                    let dateDisplay = () => {
                        let date = formatDate(match.date)
                        if (date !== matchDate){
                            matchDate = date
                            return html`<h3 class="fixtures-heading">${date}</h3>`
                        } else {
                            return null
                        }
                    }
                    let matchDisplay = () => html`
                        <div class='fixture'>
                            <p class='${match.result.goalsHomeTeam > match.result.goalsAwayTeam ? 'winner': ''}'>${match.homeTeamName}</p>
                            <div>${match.result.goalsHomeTeam} - ${match.result.goalsAwayTeam}</div>
                            <p class='${match.result.goalsAwayTeam > match.result.goalsHomeTeam ? 'winner': ''}'>${match.awayTeamName}</p>
                        </div>
                    `
                    return html`
                        ${dateDisplay()}
                        ${matchDisplay()}
                    `
                })
            }), 
        html`<tr class='loader-row'><td colspan='10'>${Loader()}</td></tr>`)
    }
`
const Results = () => html`
    <h2 class='page-heading'>Results - Last 2 weeks</h2>
    ${fixtureList()}
`

export default Results