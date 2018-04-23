import {html} from '../../node_modules/lit-html/lit-html.js'
import {Route} from '../../node_modules/lit-route/index.js'

import Home from './Home.component.js'
import Fixtures from './Fixtures.component.js'
import Results from './Results.component.js'
import Table from './Table.component.js'
import Team from './Team.component.js'

const Router = () => html`
    ${new Route('/', () => Home(), true).mount()}
    ${new Route('/fixtures', () => Fixtures()).mount()}
    ${new Route('/results', () => Results()).mount()}
    ${new Route('/table', () => Table()).mount()}
    ${new Route('/team/:id', (match) => Team(match)).mount()}
`

export default Router