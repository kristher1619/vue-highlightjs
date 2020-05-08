import Hljs from 'highlight.js/lib/core'

const Highlight = {}
Highlight.install = (Vue, {languages, selectors}) => {

    languages.forEach(language => {
        Hljs.registerLanguage(language, require(`highlight.js/lib/languages/${language}`))
    })

    Vue.directive('highlight', (el) => {
        const blocks = el.querySelectorAll(selectors)
        blocks.forEach((block) => {
            Hljs.highlightBlock(block)
        })
    })
}

module.exports = Highlight
