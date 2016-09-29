var Name = React.createClass({
  getInitialState: function(){
    return {name: 'George'};
  },
  render: function(){
    return <div>{name}</div>;

  }
});

ReactDOM.render(<Name />, document.getElementById('root'));
