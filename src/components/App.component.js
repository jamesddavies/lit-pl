import {html} from '../node_modules/lit-html/lit-html.js'

import Header from './Header.component.js'
import Router from './Router.component.js'
import Footer from './Footer.component.js'

const App = () => html`
    ${Header()}
    <div class='page'>
        <div class='page-content'>
            ${Router()}
        </div>
    </div>
    ${Footer()}
`

export default App