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
    const habit = this.props;

      return (
          <div className="habit-wrapper">
              <h2 className="habit-name"><strong>Habit: </strong>{habit.name}</h2>

              <section className="alter-buttons">
                  <Link to={`/habits/${habit._id}/edit`}><button>Edit</button></Link>
                  <button onClick={this.deleteClickedHabit}>Delete</button>
                </section>
          </div> 
      );
  }
}

export default Habit;
