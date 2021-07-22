import React from 'react'
import AddDentist from './AddDentist'
import AddPatient from './AddPatient'
import DentistDisplay from './DentistDisplay'
import PatientDisplay from './PatientDisplay'
import AddAppointment from './AddAppointment'
import MoveAppointment from './MoveAppointment'

function BackEnd(props) {
    return (
        <div>
            <AddAppointment addAppointment={props.addAppointment} />
            <MoveAppointment moveAppointment={props.moveAppointment} />
            <AddDentist addDentist={props.addDentist} />
            <DentistDisplay people={props.state.dentists} makeDentistSick={props.makeDentistSick} />
            <AddPatient addPatient={props.addPatient} />
            <PatientDisplay people={props.state.patients} makePatientSick={props.makePatientSick} />
        </div>
    )
}

export default BackEnd