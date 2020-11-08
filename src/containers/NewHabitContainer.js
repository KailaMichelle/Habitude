import React from 'react';
import { withRouter } from 'react-router-dom';
import HabitModel from '../models/HabitModel';

class NewHabitContainer extends React.Component {
  state = {
    name: '',
    completed: false,
    author: this.props.currentUser,
  };

  handleChange = (event) => {
    this.setState({author: this.props.currentUser})
    if (event.target.value === 'on') {
        event.target.value = true;
    }
    this.setState({[event.target.name]: event.target.value})
  };

  handleSubmit = (event) => {
    event.preventDefault();
    HabitModel.createHabit(this.state)
      .then((result) => {
      });
      console.log(`this.state in new: ${JSON.stringify(this.state)}`)
    this.props.history.push('/');
  }

  toggle = () => {
    this.setState((prevState) => ({
        completed: !prevState.completed,
    }));
  }
  
  render() {
      console.log(`Props from new habit: ${JSON.stringify(this.props)}`)
    return (
        <div className="new-ev">
            <div className="new-wrapper">
                <div className="new-habit">
                    <form onSubmit={this.handleSubmit}>
                        <h2 className="new-name">Add A New Habit</h2>

                        <div className="field">
                            <label className="new-name" htmlFor="">Habit:</label>
                            <input className="name-new" onInput={this.handleChange} type="text" name="name" placeholder="Enter the name of the habit" required/>
                        </div>
                        
                        <button className="new-button" type="submit">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    );
  }
}

export default withRouter(NewHabitContainer);
