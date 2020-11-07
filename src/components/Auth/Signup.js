import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import axios from 'axios';

class SignUp extends Component {
    state = {
        username:'',
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
        axios.post(`${process.env.REACT_APP_API}/user/signup`, this.state)
            .then((res) => {
                console.log(res);
                this.props.setCurrentUser(res.data.token);
                this.props.history.push('/');
            })
            .catch((err) => {
                console.log(err.response.status);
                console.log(err.response.data);
                console.log(err.response.data.message);
                this.setState({error: err.response.data.message});
            });
        }

        render(){
            return(
                    <div>
                        <h3>Sign Up</h3>
                        <form onSubmit={this.handleSubmit}>
                        <label htmlFor="username">Username</label>
                        <div>
                            <input onChange={this.handleChange} type="username" id="username" name="username" value={this.state.username}/>
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
                        <div class="submit-btn">
                            <button type="submit">Sign Up</button>
                        </div>
                        </form>
                    </div>
            )
        }
}

export default withRouter(SignUp);