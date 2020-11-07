import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import axios from 'axios';

class SignUp extends Component {
    state = {
        name:'',
        email:'',
        password:'',
        error: '',
    };

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
        });
    };

    handleSubmit = (e) => {
        e.preventDefault();
        axios.post(`${process.env.REACT_APP_API}/api/auth/signup`, this.state)
            .then((res) => {
                console.log(res);
                this.props.setCurrentUser(res.data.token);
                this.props.history.push('/');
            })
            .catch((err) => {
                console.log(err.response.status);
                console.log(err.response.data);
                console.log(`Err.response.data.message: ${err.response.data.message}`);
                this.setState({error: err.response.data.message});
            });
        }

        render(){
            return(
                    <div>
                        <h3>Sign Up</h3>
                        <form onSubmit={this.handleSubmit}>
                        <label htmlFor="name">Name</label>
                        <div>
                            <input onChange={this.handleChange} type="name" id="name" name="name" value={this.state.username}/>
                        </div>
                        <label htmlFor="email">Email</label>
                        <div>
                            <input onChange={this.handleChange} type="email" id="email" name="email" value={this.state.email}/>
                        </div>
                        <label htmlFor="password">Password</label>
                        <div>
                            <input onChange={this.handleChange} type="password" id="password" name="password" value={this.state.password} />
                        </div>
                        <p className="error">{this.state.error}</p>
                        <div className="submit-btn">
                            <button type="submit">Sign Up</button>
                        </div>
                        </form>
                    </div>
            )
        }
}

export default withRouter(SignUp);