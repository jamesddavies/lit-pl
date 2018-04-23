import {html} from '../node_modules/lit-html/lit-html.js'
import {until} from '../node_modules/lit-html/lib/until.js'

import Loader from './Loader.component.js'

const tableContents = () => html`
    ${
        until(
            fetch('http://localhost:3000?url=http://api.football-data.org/v1/competitions/445/leagueTable')
            .then(r => r.json())
            .then(data => {
                console.log("table")
                return data.standing.map(team => {
                    return html`
                        <tr>
                            <td>${team.position}</td>
                            <td class='team'>
                                <div class='team-img'>
                                    <img src='${team.crestURI}'>
                                </div>
                                <p>
                                    <a class='lit-route-link' data-to='/team/${team._links.team.href.split('/').slice(-1)}'>
                                        ${team.teamName}
                                    </a>
                                </p>
                            </td>
                            <td>${team.playedGames}</td>
                            <td>${team.wins}</td>
                            <td>${team.draws}</td>
                            <td>${team.losses}</td>
                            <td>${team.goals}</td>
                            <td>${team.goalsAgainst}</td>
                            <td>${team.goalDifference}</td>
                            <td>${team.points}</td>
                        </tr>
                    `
                })
            }), 
        html`<tr class='loader-row'><td colspan='10'>${Loader()}</td></tr>`)
    }
`

const Table = () => html`
    <h2 class='page-heading'>Premier League Table 2017/18</h2>
    <table class='league-table'>
        <tr>
            <th>Position</th>
            <th class='team'>Club</th>
            <th>Played</th>
            <th>Won</th>
            <th>Drawn</th>
            <th>Lost</th>
            <th title='Goals For'>GF</th>
            <th title='Goals Against'>GA</th>
            <th title='Goal Difference'>GD</th>
            <th>Points</th>
        </tr>
        ${tableContents()}
    </table>
`

export default Table