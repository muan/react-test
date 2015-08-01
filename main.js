var Counter = React.createClass({
  getInitialState: function () {
    return { count: Number(this.props.count) }
  },

  addCount: function () {
    this.setState({ count: this.state.count + 1 })
  },

  render: function () {
    var className = "btn " + (this.state.count % 2 === 0 ? "odd" : "")

    return (
      <a href="#" className={ className } onClick={ this.addCount }>
        <div className="number">{ this.state.count }</div>
        COOL COUNT
      </a>
    )
  }
})

React.render(<Counter count="1"></Counter>, document.body)
