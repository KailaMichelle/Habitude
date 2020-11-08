import React from 'react';
import HabitsList from '../components/HabitsList';
import HabitModel from '../models/HabitModel';

class HabitsListContainer extends React.Component {
  state = {
    habits: [],
  };

  componentDidMount() {
    HabitModel.getAllHabits()
      .then((result) => {
        this.setState({habits: result});
      })
      .catch((err) => console.log(err))
  };

  render() {
    return <HabitsList habits={this.state.habits} deletedHabit={this.deletedHabit} currentUser={this.props.currentUser}/>;
  };
}

export default HabitsListContainer;