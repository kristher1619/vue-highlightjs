import Vue from 'vue'
import Hljs from 'highlight.js/lib/highlight'
import 'highlight.js/styles/github-gist.css'

Hljs.registerLanguage('php', require('highlight.js/lib/languages/php'))
Hljs.registerLanguage( 'javascript', require('highlight.js/lib/languages/javascript'))
Hljs.registerLanguage('css', require('highlight.js/lib/languages/css'))
Hljs.registerLanguage('bash', require('highlight.js/lib/languages/bash'))
Hljs.registerLanguage('xml', require('highlight.js/lib/languages/xml'))

const Highlight = {}
Highlight.install = (Vue, options) => {
    Vue.directive('highlight', (el) => {
        const blocks = el.querySelectorAll('pre code')
        blocks.forEach((block) => {
            Hljs.highlightBlock(block)
        })
    })
}

export default Highlight
