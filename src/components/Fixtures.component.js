import {html} from '../../node_modules/lit-html/lit-html.js'

import MatchList from './MatchList.component.js'

const Fixtures = () => html`
    <h2 class='page-heading'>Fixtures - Next 2 weeks</h2>
    ${MatchList('fixtures')}
`

export default Fixtures