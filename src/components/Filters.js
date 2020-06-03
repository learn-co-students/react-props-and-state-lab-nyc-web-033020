import React from 'react'

class Filters extends React.Component {
  
  handleChange = (event) => {
    // console.log(event.target.value)
    this.props.onChangeType(event.target.value)
  };

  render() {
    // console.log(this.props.onChangeType)
    return (
      <div className="ui form">
        <h3>Animal type</h3>
        <div className="field">
          <select name="type" id="type" onChange={this.handleChange}>
            <option value="all">All</option>
            <option value="cat">Cats</option>
            <option value="dog">Dogs</option>
            <option value="micropig">Micropigs</option>
          </select>
        </div>

        <div className="field">
          <button className="ui secondary button">Find pets</button>
        </div>
      </div>
    )
  }
}

export default Filters
