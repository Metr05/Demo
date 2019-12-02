import React, {Component} from 'react';
import ReactMarkdown from 'react-markdown/with-html';
import AppMarkdown from './README.md';
import CodeBlock from './codeblock';
class md2jsx extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            markdown: '',
        }
    }
    componentWillMount() {
        fetch(AppMarkdown)
            .then(res => res.text())
            .then(text => this.setState({markdown: text}));
    }
    render() {
        const {markdown} = this.state;
        return (
            <div>
                <div >
                    <ReactMarkdown
                        className="markdown-body"
                        source={markdown}
                        escapeHtml={false}
                        renderers={{
                            code: CodeBlock,
                        }}
                    />
                </div>
            </div>
        )
    }

}

export default md2jsx;