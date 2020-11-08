import React from 'react';
import { withRouter } from 'react-router-dom';
import HabitModel from '../models/HabitModel'

class EditHabitForm extends React.Component {
  state = {
    name: '',
    completed: false,
  };
  
  componentDidMount() {

    HabitModel.getHabitById(this.props.match.params.id)
      .then((result) => {
        console.log(`This is the result of getHabitById in Edit Habit: `, result);
        this.setState(result);
        console.log(`This is the new state in Edit Habit: `, this.state)
      })
      .catch((err) => console.log(err))
  }

  onChange = (event) => {
    console.log(`This is the event target id: `, event.target.id);
    if (event.target.value === 'on') {
        event.target.value = true;
    }
    this.setState({[event.target.name]: event.target.value})
  };

  handleSubmit = (event) => {
    event.preventDefault();
    console.log(`This is this.state in EditForm: `, this.state)
    console.log(`This is this.props in EditForm: `, this.props)
    HabitModel.edit(this.state, this.props.match.params.id)
        .then((result) => {
            console.log(`This is the result from edit i guess: `, result)
            this.setState({result})  
        })
    
    this.props.history.push(`/habits/${this.props.match.params.id}`);
  }

  toggle = () => {
    this.setState((prevState) => ({
        completed: !prevState.completed
    }))
  };

  render() {
      const { name } = this.state
    return (
        <div className="new-ev">
            <div className="new-wrapper">
                <div className="new-habit">
                    <form onSubmit={this.handleSubmit}>
                        <h2 className="new-name" >Edit Habit</h2>
                        <div className="field">
                            <label className="new-name"  htmlFor="">Habit:</label>
                            <input className="name-new" defaultValue={name} onChange={this.onChange} type="text" name="name"/>
                        </div>

                        <button className="new-button" type="submit">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    );
  }
}

export default withRouter(EditHabitForm);
