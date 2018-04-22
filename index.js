import {html, render} from './node_modules/lit-html/lit-html.js'
import {Router} from './node_modules/lit-route/index.js'
import App from './components/app.component.js'

const router = new Router(() => render(App(), document.querySelector('#applicationRoot')))
router.init()