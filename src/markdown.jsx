//var converter = new Showdown.converter();

marked.setOptions({
  highlight: function (code) {
    return hljs.highlightAuto(code).value;
  }
});

var MarkdownEditor = React.createClass({
  getInitialState: function() {
    return {value: '# Open Markdown Editor'};
  },
  handleChange: function() {
    this.setState({value: this.refs.textarea.getDOMNode().value});
  },
  render: function() {
    return (
      <div className="MarkdownEditor">
        <div className="col-md-6 col-xs-12 write-content">
          <textarea
            name="text"
            className="form-control mono mousetrap"
            rows="28"
            onChange={this.handleChange}
            ref="textarea"
            defaultValue={this.state.value}>
          </textarea>
        </div>
        <div
          id="wmd-preview"
          className="col-md-6 col-xs-12 write-preview fmt content"
          dangerouslySetInnerHTML={{
            __html: marked(this.state.value)
          }}>
        </div>
      </div>
    );
  }
});

React.renderComponent(<MarkdownEditor />, document.getElementById('markdown'));
