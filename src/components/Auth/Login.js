import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import axios from 'axios';

class Login extends Component {
    state = {
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
        axios.post(`${process.env.REACT_APP_API}/api/auth/login`, this.state)
            .then((res) => {
                console.log(`Login res: ${JSON.stringify(res)}`);
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
                <h3>Login</h3>
                <form onSubmit={this.handleSubmit}>
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
                    <button type="submit">Login</button>
                </div>
                </form>
            </div>
        )
    }
}

export default withRouter(Login);