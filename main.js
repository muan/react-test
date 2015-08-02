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

var Echo = React.createClass({
  getInitialState: function () {
    return { echoText: null }
  },

  setName: function (evt) {
    this.setState({ echoText: evt.target.value })
  },

  randomEmoji: function () {
    var rand = Math.round(Math.random()*10)
    return ["👋", "🌈", "💕", "🎈", "🍺", "🌺", "🌹", "👏", "👐", "🎉", "😉"][rand]
  },

  render: function () {
    var emoji = this.randomEmoji()
    var echo = this.state.echoText ? <div className="echo-text">{ emoji } { this.state.echoText } { emoji }</div> : ""
    return (
      <div className="echo">
        <input type="text" className="input" onChange={ this.setName } placeholder="Type something"></input>
        { echo }
      </div>
    )
  }
})

React.render(<div class="main"><Counter count="1"></Counter><Echo></Echo></div>, document.body)
