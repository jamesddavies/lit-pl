import {html} from '../node_modules/lit-html/lit-html.js'

const Team = (params) => {
    console.log(params)
    return html`test - ${params.id}`
} 

export default Team