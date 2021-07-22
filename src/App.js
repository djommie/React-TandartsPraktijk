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
    this.checkAvailableDentist = this.checkAvailableDentist.bind(this)
    this.checkAvailableAssistant = this.checkAvailableAssistant.bind(this)
    this.addAppointment = this.addAppointment.bind(this)
    this.removeAppointment = this.removeAppointment.bind(this)
    this.makePatientSick = this.makePatientSick.bind(this)
    this.moveAppointment = this.moveAppointment.bind(this)
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
  }

  makePatientSick(patientId) {
    this.setState(prevState => {
      let updatedAppointments = prevState.appointments.filter(appointment => appointment.patient.id !== patientId)
      return {
        appointments: updatedAppointments
      }
    })
  }

  addAppointment(event) {
    event.preventDefault()
    const patientId = parseInt(document.getElementById('app-patient-id').value)
    const dentistId = parseInt(document.getElementById('app-dentist-id').value)
    const assistantId = parseInt(document.getElementById('app-ass-id').value)
    const patient = this.state.patients.filter(patient => patient.id === patientId)[0]
    const dentist = this.state.dentists.filter(dentist => dentist.id === dentistId)[0]
    const assistant = this.state.assistants.filter(assistant => assistant.id === assistantId)[0]
    const time = parseInt(document.getElementById('app-time').value)
    const day = parseInt(document.getElementById('app-day').value)
    if (this.checkAvailableAssistant(assistantId, time, day) && this.checkAvailableDentist(dentistId, time, day)) {
      this.setState(prevState => {
        const updatedAppointments = prevState.appointments.concat({
          day: day,
          time: time,
          patient: patient,
          dentist: dentist,
          assistant: assistant,
          id: prevState.appointments.length + 1
        }).sort((a, b) => a.time - b.time)
        return {
          appointments: updatedAppointments
        }
      })
      alert('Appointment added!')
    }
  }

  checkAvailableDentist(id, time, day) {
    let avpeeps = this.state.appointments.filter(appointment => appointment.dentist.id === id)
      .filter(appointment => appointment.time === time)
      .filter(appointment => appointment.day === day)
    if (avpeeps.length !== 0) {
      alert('Dentist not available')
      return false
    } else {
      return true
    }
  }

  checkAvailableAssistant(id, time, day) {
    let avpeeps = this.state.appointments.filter(appointment => appointment.assistant.id === id)
      .filter(appointment => appointment.time === time)
      .filter(appointment => appointment.day === day)
    if (avpeeps.length !== 0) {
      alert('Assistant not available')
      return false
    } else {
      return true
    }
  }

  removeAppointment(appointmentId) {
    this.setState(prevState => {
      let updatedAppointments = prevState.appointments.filter(appointment => appointment.id !== appointmentId)
      return {
        appointments: updatedAppointments
      }
    })
  }

  moveAppointment(event) {
    event.preventDefault()
    const appointmentId = parseInt(document.getElementById('move-app-id').value)
    const newDay = parseInt(document.getElementById('move-day').value)
    const newTime = parseInt(document.getElementById('move-time').value)
    const appointment = this.state.appointments.filter(appointment => appointment.id === appointmentId)[0]
    if (this.checkAvailableAssistant(appointment.assistant.id, newTime, newDay)
      && this.checkAvailableDentist(appointment.dentist.id, newTime, newDay)) {
      // Hier verwijder ik eerst de oude appointment om vervolgens een kopie met aangepaste tijd weer toe te voegen,
      // is er een makkelijkere manier om rechtstreeks alleen de day en time aan te passen?
      this.setState(prevState => {
        let filteredAppointments = prevState.appointments.filter(appointment => appointment.id !== appointmentId)
        let updatedAppointments = filteredAppointments.concat({
          day: newDay,
          time: newTime,
          patient: appointment.patient,
          dentist: appointment.dentist,
          assistant: appointment.assistant,
          id: appointment.id
        }).sort((a, b) => a.time - b.time)
        return {
          appointments: updatedAppointments
        }
      })
      alert('Appointment moved!')
    }
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
                  removeAppointment={this.removeAppointment}
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
                  makePatientSick={this.makePatientSick}
                  addAppointment={this.addAppointment}
                  moveAppointment={this.moveAppointment}
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
