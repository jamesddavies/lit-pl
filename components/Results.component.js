import {html} from '../node_modules/lit-html/lit-html.js'

import MatchList from './MatchList.component.js'

const Results = () => html`
    <h2 class='page-heading'>Results - Last 2 weeks</h2>
    ${MatchList('results')}
`

export default Results