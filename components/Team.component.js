import {html} from '../node_modules/lit-html/lit-html.js'
import {until} from '../node_modules/lit-html/lib/until.js'
import {formatDate, formatTime} from './utils.js'

import Loader from './Loader.component.js'

const teamHeader = (id) => html`
    ${
        until(
            fetch(`http://localhost:3000?url=http://api.football-data.org/v1/teams/${id}`)
            .then(r => r.json())
            .then(team => {
                return html`
                    <div class='team-header'>
                        <img src='${team.crestUrl}'>
                        <h1>${team.name}</h1>
                    </div>
                `
            }),
        html`${Loader()}`)
    }
`

const teamSquad = (id) => html`
    ${
        until(
            fetch(`http://localhost:3000?url=http://api.football-data.org/v1/teams/${id}/players`)
            .then(r => r.json())
            .then(team => {
                return html`
                    <div>
                        <h3>Squad</h3>
                        <table class='team-table'>
                        ${
                            team.players.sort((a, b) => a.jerseyNumber - b.jerseyNumber)
                            .map(player => {
                                return html`
                                    <tr>
                                        <td class='player-name'>${player.name}</td>
                                        <td class='player-number'>#${player.jerseyNumber}</td>
                                        <td class='player-position'>${player.position}</td>
                                    </tr>
                                `
                            })
                        }
                        </table>
                    </div>
                `
            }),
        html`${Loader()}`)
    }
`

const teamFixtures = (id) => html`
    ${
        until(
            fetch(`http://localhost:3000?url=http://api.football-data.org/v1/teams/${id}/fixtures?timeFrame=n60`)
            .then(r => r.json())
            .then(team => {
                return html`
                    <div>
                        <h3>Upcoming Fixtures</h3>
                        <table class='team-table'>
                        ${
                            team.fixtures.sort((a, b) => new Date(a.date) - new Date(b.date))
                            .map(fixture => {
                                return html`
                                    <tr>
                                        <td class='home-team'>${fixture.homeTeamName}</td>
                                        <td class='match-time-date'>${formatTime(fixture.date)}<br>${formatDate(fixture.date)}</td>
                                        <td class='away-team'>${fixture.awayTeamName}</td>
                                    </tr>
                                `
                            })
                        }
                        </table>
                    </div>
                `
            })
        )
    }
`

const Team = (match) => {
    window.scroll(0,0)
    return html`
        ${teamHeader(match.params.id)}
        <div class='team-content'>
            ${teamSquad(match.params.id)}
            ${teamFixtures(match.params.id)}
        </div>
    `
} 

export default Team