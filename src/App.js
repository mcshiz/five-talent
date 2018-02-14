import React, {Component} from 'react';
import LandingPage from './components/LandingPage'
import HomeDetails from './components/HomeDetails'
import AddListing from './components/AddListing'
import EditListing from './components/EditListing'
import Login from './components/Login'
import Register from './components/Register'
import {BrowserRouter as Router, Route, Link, Redirect, Switch} from "react-router-dom";
import './App.css';

class App extends Component {
	constructor() {
		super()
		this.state = {
			authenticated: false
		}
		this.logout = this.logout.bind(this)
		this.login = this.login.bind(this)
	}
	componentWillMount() {
		this.setState({authenticated: !!localStorage.getItem('id_token')})
	}
	login(email, password, history) {
		fetch('/login', {
			method: 'post',
			body: JSON.stringify({email: email, password: password}),
			headers: new Headers({"Content-Type": "application/json"})
		})
		.then(res => res.json().then(user => ({ user, res })))
		.then(({user, res}) => {
			if(!res.ok) {
				alert(user.message)
			} else {
				localStorage.setItem('id_token', user.token)
				this.setState({authenticated: true})
				history.push('/')
			}
		})
	}
	logout() {
		localStorage.removeItem('id_token')
		this.setState({authenticated: false})
	}
	render() {
		const authenticated = this.state.authenticated
		const PrivateRoute = ({component: Component, ...rest}) => {
			return (
				<Route
					{...rest}
					render={(props) => authenticated === true
						? <Component {...rest} {...props}/>
						: <Redirect to={{pathname: '/login', state: {from: props.location}}}/>}
				/>
			)
		};

		function PublicOnlyRoute({component: Component, ...rest}) {
			return (
				<Route
					{...rest}
					render={(props) => authenticated === false
						? <Component {...rest} {...props} />
						: <Redirect to={{pathname: '/', state: {from: props.location}}}/>}
				/>
			)
		}
		function PropsRoute({component: Component, ...rest}) {
			return (
				<Route
					{...rest}
					render={(props) => (<Component authenticated={authenticated} {...rest} {...props}/>)}
				/>


			)
		}


		return (
			<Router>
				<div className="App container">
					<div className="row">
						<div className="col-12">
							<header className="App-header">
								<h1 className="App-title d-inline">Welcome to Five Talent Real Estate</h1>
								<Link to="/"><span className='btn btn-link'>Home</span></Link>
								{authenticated ?
									<span className='btn btn-link' onClick={() => this.logout()}>Logout</span> :
									<Link to="/login"><span className='btn btn-link'>Login</span></Link>
								}
								{authenticated ?
									<Link to="/create"><span className='btn btn-link'>Add Listing</span></Link>:
									<Link to="/register"><span className='btn btn-link'>Register</span></Link>
								}
							</header>
						</div>

					</div>
					<Switch>
						<PropsRoute exact path="/" component={LandingPage} />
						<Route exact path="/homes/:mls" component={HomeDetails} authenticated={this.state.authenticated}/>
						<PrivateRoute exact path="/homes/edit/:mls" component={EditListing}/>
						<PrivateRoute exact path="/create" component={AddListing}/>
						<PublicOnlyRoute path="/login" component={Login} login={this.login}/>
						<PublicOnlyRoute path="/register" component={Register}/>
					</Switch>
				</div>
			</Router>

		);
	}
}

export default App;
