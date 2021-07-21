import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Home from "./Home";
import Calendar from "./Calendar";
import Day from "./Day";
import state from "./utils";
import BackEnd from "./BackEnd";

class App extends React.Component {

  constructor() {
    super()
    this.state = state

    this.addDentist = this.addDentist.bind(this)
    this.addPatient = this.addPatient.bind(this)
    this.makeDentistSick = this.makeDentistSick.bind(this)
    this.sickDentists = state.dentists.filter(dentist => dentist.healthy === false).map(dentist => dentist.id)
    this.sickStyle = {
      background: 'red'
    }

  }

  addDentist(event) {
    event.preventDefault()
    const firstName = document.getElementById('dentist-first-name').value
    const lastName = document.getElementById('dentist-last-name').value
    const phoneNr = document.getElementById('dentist-phone').value
    const email = document.getElementById('dentist-email').value
    const id = this.state.dentists.length + 1
    this.setState(prevState => {
      const updatedDentists = prevState.dentists.concat({
        firstName: firstName,
        lastName: lastName,
        phoneNr: phoneNr,
        email: email,
        id: id
      })
      return {
        dentists: updatedDentists
      }
    })
  }

  addPatient(event) {
    event.preventDefault()
    const firstName = document.getElementById('patient-first-name').value
    const lastName = document.getElementById('patient-last-name').value
    const phoneNr = document.getElementById('patient-phone').value
    const email = document.getElementById('patient-email').value
    const birthYear = document.getElementById('patient-birth-year')
    const id = this.state.patients.length + 1
    this.setState(prevState => {
      const updatedPatients = prevState.patients.concat({
        firstName: firstName,
        lastName: lastName,
        phoneNr: phoneNr,
        email: email,
        birthYear: birthYear,
        id: id
      })
      return {
        patients: updatedPatients
      }
    })
  }

  makeDentistSick(dentistId) {
    this.setState(prevState => {
      let updatedDentists = prevState.dentists.map(dentist => {
        if (dentist.id === dentistId) {
          this.sickDentists.push(dentistId)
          return {
            firstName: dentist.firstName,
            lastName: dentist.lastName,
            phoneNr: dentist.phoneNr,
            email: dentist.email,
            id: dentist.id,
            healthy: false
          }
        } else {
          return (
            dentist
          )
        }
      })
      return {
        dentists: updatedDentists
      }
    })
    console.log(this.state.dentists)
  }


  render() {
    return (
      < Router >
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/calendar">Calendar view</Link>
              </li>
              <li>
                <Link to="/day">Day view</Link>
              </li>
              <li>
                <Link to="/backend">Back End</Link>
              </li>
            </ul>
          </nav>
          <main>
            <Switch>
              <Route path="/calendar">
                <Calendar
                  appointments={this.state.appointments}
                  sickDentists={this.sickDentists}
                  sickStyle={this.sickStyle}
                />
              </Route>
              <Route path="/day">
                <Day
                  appointments={this.state.appointments.filter(app => app.day === 1)}
                  sickDentists={this.sickDentists}
                  sickStyle={this.sickStyle}
                />
              </Route>
              <Route path="/backend">
                <BackEnd
                  addDentist={this.addDentist}
                  addPatient={this.addPatient}
                  makeDentistSick={this.makeDentistSick}
                  state={this.state}
                />
              </Route>
              <Route path="/">
                <Home />
              </Route>
            </Switch>
          </main>
        </div>
      </Router >
    )
  }
};
export default App;
