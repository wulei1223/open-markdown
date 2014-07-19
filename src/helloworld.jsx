/** @jsx React.DOM */

var converter = new Showdown.converter();

var Comment = React.createClass({
  render: function() {
    var rawMarkup = converter.makeHtml(this.props.children.toString());
    return (
      <div className="comment">
        <h2 className="commentAuthor">
          {this.props.author}
        </h2>
        <span dangerouslySetInnerHTML={{__html: rawMarkup}} />
      </div>
    );
  }
});

var CommonList = React.createClass({
  render: function() {
    var a = this.props.data
    var commentNodes = a.map(function(comment) {
      return (
        <Comment author={comment.author}>
          {comment.text}
        </Comment>
      )
    })
    return (
      <div className="commentList">
        {commentNodes}
      </div>
    );
  }
});

var CommonForm = React.createClass({
  render: function() {
    return (
      <div className="commentForm">
        Hello, world! I am a CommentForm.
      </div>
    );
  }
});

var CommonBox = React.createClass({
  getInitialState: function() {
    return {data: []};
},
  componentDidMount: function() {
    $.ajax({
      url: this.props.url,
      dataType: 'json',
      success: function(data) {
        this.setState({data: data});
      }.bind(this),
      error: function(xhr, status, err) {
        console.error(this.props.url, status, err.toString()); 
      }.bind(this)
    });
},
  render: function() {
    return (
      <div className="commentBox">
      <h1></h1>
      <CommonList data={this.state.data}/>
      <CommonForm />
      </div>
    ); 
  }
});

React.renderComponent(
  <CommonBox url="../data.json"/>,
  document.getElementById('example')
);
