import React, { Component } from 'react';
import ReactMarkdown from 'react-markdown';
import codeBlock from './codeblock';
import AppMarkdown from './README.md';
import 'github-markdown-css';
class md2jsx extends Component {
    state = {
        markdown: '',
    };

    componentWillMount() {
        fetch(AppMarkdown)
            .then(res => res.text())
            .then(text => this.setState({ markdown: text }));
    }

    render() {
        const { markdown } = this.state;

        return (
                    <ReactMarkdown
                        className="markdown-body"
                        source={markdown}
                        escapeHtml={false}
                        renderers={{
                            code: codeBlock,
                        }}
                    />
        );
    }
}

export default md2jsx;
