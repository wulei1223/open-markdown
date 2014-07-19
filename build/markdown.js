/** @jsx React.DOM */
//var converter = new Showdown.converter();

marked.setOptions({
  highlight: function (code) {
    return hljs.highlightAuto(code).value;
  }
});

var MarkdownEditor = React.createClass({displayName: 'MarkdownEditor',
  getInitialState: function() {
    return {value: '# Open Markdown Editor'};
  },
  handleChange: function() {
    this.setState({value: this.refs.textarea.getDOMNode().value});
  },
  render: function() {
    return (
      React.DOM.div( {className:"MarkdownEditor"}, 
        React.DOM.div( {className:"col-md-6 col-xs-12 write-content"}, 
          React.DOM.textarea(
            {name:"text",
            className:"form-control mono mousetrap",
            rows:"28",
            onChange:this.handleChange,
            ref:"textarea",
            defaultValue:this.state.value}
          )
        ),
        React.DOM.div(
          {id:"wmd-preview",
          className:"col-md-6 col-xs-12 write-preview fmt content",
          dangerouslySetInnerHTML:{
            __html: marked(this.state.value)
          }}
        )
      )
    );
  }
});

React.renderComponent(MarkdownEditor(null ), document.getElementById('markdown'));
