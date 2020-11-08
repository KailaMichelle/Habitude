import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class Habit extends Component {
  state = {
    habit: {},
  };

  deleteClickedHabit = () => {
    this.props.deleteHabit(this.props.habit._id)
  };

  render() {
    const { habit, list } = this.props;

      return (
          <div className="hike-wrapper">
              HABIT
          </div> 
      );
  }
}

export default Habit;
