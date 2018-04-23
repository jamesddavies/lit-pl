import {html} from '../../node_modules/lit-html/lit-html.js'

const logo = () => html`
    <a class='lit-route-link' data-to='/'>
        <img src='/img/logo.svg'>
    </a>
`

const nav = () => html`
    <nav>
        <ul>
            <li>
                <a class='lit-route-link' data-to='/fixtures'>
                    Fixtures
                </a>
            </li>            
            <li>
                <a class='lit-route-link' data-to='/results'>
                    Results
                </a>
            </li>
            <li>
                <a class='lit-route-link' data-to='/table'>
                    Table
                </a>
            </li>
        </ul>
    </nav>
`

const Header = () => html`
    <header>
        ${logo()}
        ${nav()}
    </header>
`

export default Header