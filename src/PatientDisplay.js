import React from 'react'
import Patient from './Patient'

function PatientDisplay(props) {
    const peopleList = props.people.map((person, index) => {
        return (
            <Patient
                key={index}
                firstName={person.firstName}
                lastName={person.lastName}
                phoneNr={person.phoneNr}
                email={person.email}
                id={person.id}
                makePatientSick={props.makePatientSick}
            />
        )
    })
    return (
        <div>
            <table style={{ width: "100%" }}>
                <tbody>
                    <tr className="patient-header">
                        <th className="patient-row__item">First</th>
                        <th className="patient-row__item">Last</th>
                        <th className="patient-row__item">Phone</th>
                        <th className="patient-row__item">Email</th>
                        <th className="patient-row__item">ID</th>
                        <th className="patient-row__item">Make Sick</th>
                    </tr>
                    {peopleList}
                </tbody>
            </table>
        </div>
    )
}

export default PatientDisplay