/** @jsx React.DOM */

var converter = new Showdown.converter();

var Comment = React.createClass({displayName: 'Comment',
  render: function() {
    var rawMarkup = converter.makeHtml(this.props.children.toString());
    return (
      React.DOM.div( {className:"comment"}, 
        React.DOM.h2( {className:"commentAuthor"}, 
          this.props.author
        ),
        React.DOM.span( {dangerouslySetInnerHTML:{__html: rawMarkup}} )
      )
    );
  }
});

var CommonList = React.createClass({displayName: 'CommonList',
  render: function() {
    var a = this.props.data
    var commentNodes = a.map(function(comment) {
      return (
        Comment( {author:comment.author}, 
          comment.text
        )
      )
    })
    return (
      React.DOM.div( {className:"commentList"}, 
        commentNodes
      )
    );
  }
});

var CommonForm = React.createClass({displayName: 'CommonForm',
  render: function() {
    return (
      React.DOM.div( {className:"commentForm"}, 
        "Hello, world! I am a CommentForm."
      )
    );
  }
});

var CommonBox = React.createClass({displayName: 'CommonBox',
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
      React.DOM.div( {className:"commentBox"}, 
      React.DOM.h1(null),
      CommonList( {data:this.state.data}),
      CommonForm(null )
      )
    ); 
  }
});

React.renderComponent(
  CommonBox( {url:"../data.json"}),
  document.getElementById('example')
);
