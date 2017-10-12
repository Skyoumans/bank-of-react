import React, {Component} from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './components/Home.jsx';
import UserProfile from './components/UserProfile'
import axios from 'axios'
import DebitsPage from './components/DebitsPage'
import CreditsPage from './components/CreditsPage'

class App extends Component {
  constructor() {
    super()
    this.state = {
      user: {
        userName: 'Skylar',
        memberSince: 2011
      },
      
      debits: [],
      credits: []
    }
  }
  

  displayAllDebits = () => {
    axios.get(`http://localhost:4000/debits`)
    .then((response) => {
      console.log(response)
      const debits = response.data
      this.setState({debits})
    })
    .catch((error) => {
      console.log(error)
    })
  }

  displayAllCredits = () => {
    axios.get(`http://localhost:4000/credits`)
    .then((response) => {
      console.log(response)
      const credits = response.data
      this.setState({credits})
    })
  }

  totalAccountBalance = () => {
    const totalCredits = this.state.credits.reduce((totalCredits, credit) => {
      return totalCredits + credit.amount
    }, 0)
    const totalDebits = this.state.debits.reduce((totalDebits, debit) => {
      return totalDebits + debit.amount
    }, 0)

    return totalCredits - totalDebits
  }

  addNewCredit = (newCredit) => {
    const credits = [this.state.credits]
    credits.push(newCredit)
    this.setState({credits})
  }

  addNewDebit = (newDebit) => {
    const debits = [this.state.debits]
    debits.push(newDebit)
    this.setState({debits})
  }

  componentWillMount() {
    this.displayAllDebits()
    this.displayAllCredits()
  }

  render() {
    const accountBalance = this.totalAccountBalance()

    const HomeComponent = () => (<Home accountBalance={accountBalance.toFixed(2)} {...this.props} />)

    const UserProfileComponent = () => (
      <UserProfile
      userName={this.state.user.userName}
      memberSince={this.state.user.memberSince} {...this.props}/>
    )

    const DebitsPageComponent = () => (
      <DebitsPage 
        debits={this.state.debits}
        addNewDebit={this.addNewDebit}
        accountBalance={accountBalance.toFixed(2)}{...this.props} />
    )
    const CreditsPageComponent = () => (
      <CreditsPage 
        credits={this.state.credits}
        addNewCredit={this.addNewCredit}
        accountBalance={accountBalance.toFixed(2)}{...this.props} />
    )
  
  

    return (
        <Router>
          <Switch>
            <Route exact path="/" component={HomeComponent} />
            <Route exact path="/user" render={UserProfileComponent} />
            <Route exact path="/debits" render={DebitsPageComponent} />
            <Route exact path="/credits" render={CreditsPageComponent} />
          </Switch>
        </Router>
    );
  }
}


export default App;