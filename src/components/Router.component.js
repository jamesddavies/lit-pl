import {html} from '../../node_modules/lit-html/lit-html.js'
import {Route, DefaultRoute} from '../../node_modules/lit-route/index.js'

import Home from './Home.component.js'
import Fixtures from './Fixtures.component.js'
import Results from './Results.component.js'
import Table from './Table.component.js'
import Team from './Team.component.js'

const Butts = () => html`
<h1>BUTTS!</h1>
`

const Router = () => html`
    ${new Route('/', () => Home(), true).mount()}
    ${new Route('/fixtures', () => Fixtures()).mount()}
    ${new Route('/results', () => Results()).mount()}
    ${new Route('/table', () => Table()).mount()}
    ${new Route('/team/:id', (match) => Team(match)).mount()}
    ${new DefaultRoute(() => Butts()).mount()}
`

export default Router