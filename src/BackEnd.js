import React from 'react'
import AddDentist from './AddDentist'
import AddPatient from './AddPatient'
import PersonDisplay from './PersonDisplay'

function BackEnd(props) {
    return (
        <div>
            <button onClick={() => props.makeDentistSick(1)}>test sick</button>
            <AddDentist addDentist={props.addDentist} />
            <PersonDisplay people={props.state.dentists} makeDentistSick={props.makeDentistSick} />
            <AddPatient addPatient={props.addPatient} />
            <PersonDisplay people={props.state.patients} />
        </div>
    )
}

export default BackEnd