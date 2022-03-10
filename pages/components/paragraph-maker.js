import React from 'react'
import * as PropTypes from 'prop-types'

export default function ParagraphMaker(props) {
    const filterOutBlankElements = array =>
        array
            .filter(element => /\S/.test(element))
            .map(element => element.trim())

    const paragraphs = props.text ? filterOutBlankElements(props.text.split('\n')) : []
    return paragraphs.map((paragraph, index) => (<p key={index}>{paragraph}</p>))
}

ParagraphMaker.propTypes = {
    text: PropTypes.string
}

