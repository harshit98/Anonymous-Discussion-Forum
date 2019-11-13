import React, { Component } from 'react';
import PropTypes from 'prop-types';

class List extends Component {

  constructor(props) {
    super(props);
    this.state = {
      fieldText: 'hei'
    };

    this.addText = this.addText.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);


  }

  handleInputChange(event) {

    this.setState({
      [event.target.name]: event.target.value
    });
  }

  addText(e) {
    //console.log(e);
    this.props.addText(this.state.fieldText, this.props.position);
    this.props.postMessage(this.state.fieldText, this.props.position, this.props.discussionNumber);
    e.preventDefault();
  }



  render() {
    //console.log(this.props);
    var textList = this.props.item.texts.map((item, i) => {
      return <li key={i}>{item.text}<List item={item} discussionNumber={this.props.discussionNumber} postMessage={this.props.postMessage}  addText={this.props.addText} position={this.props.position.concat(i)}/></li>;
    });

    return (
      <div>

      <form onSubmit={this.addText} >
        <label>
          <input type="text" value={this.state.fieldText} name="fieldText" onChange={this.handleInputChange}/>
        </label>
        <input type="submit" value="Add line" />
      </form>
      <ul>
      {textList}
    </ul>
    </div>
    );
  }
}

export default List;

List.propTypes = {
  item: PropTypes.object.isRequired,
  position: PropTypes.array.isRequired,
  discussionNumber: PropTypes.number.isRequired,
  addText: PropTypes.func.isRequired,
  postMessage: PropTypes.func.isRequired
};
