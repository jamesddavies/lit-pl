import {html} from '../node_modules/lit-html/lit-html.js'
import {until} from '../node_modules/lit-html/lib/until.js'
import {formatDate, formatTime} from './utils.js'

import Loader from './Loader.component.js'

console.log("console logging")

const fixtureList = () => html`
    ${
        until(
            fetch('http://localhost:3000?url=http://api.football-data.org/v1/competitions/445/fixtures?timeFrame=n14')
            .then(r => r.json())
            .then(data => {
                console.log("fixtures")
                let matchdays = []
                data.fixtures.forEach(fixture => {
                    if (fixture.status !== "FINISHED"){
                        matchdays.push(fixture)
                    } 
                })
                matchdays.sort((a, b) => new Date(a.date) - new Date(b.date))
                let matchDate = ''
                return matchdays.map(match => {
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
                            <p>${match.homeTeamName}</p>
                            <div>${formatTime(match.date)}</div>
                            <p>${match.awayTeamName}</p>
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
const Fixtures = () => html`
    <h2 class='page-heading'>Fixtures - Next 2 weeks</h2>
    ${fixtureList()}
`

export default Fixtures