import React from 'react'
import Dentist from './Dentist'

function DentistDisplay(props) {
    const peopleList = props.people.map((person, index) => {
        return (
            <Dentist
                key={index}
                firstName={person.firstName}
                lastName={person.lastName}
                phoneNr={person.phoneNr}
                email={person.email}
                id={person.id}
                makeDentistSick={props.makeDentistSick}
            />
        )
    })
    return (
        <div>
            <table style={{ width: "100%" }}>
                <tbody>
                    <tr className="dentist-header">
                        <th className="dentist-row__item">First</th>
                        <th className="dentist-row__item">Last</th>
                        <th className="dentist-row__item">Phone</th>
                        <th className="dentist-row__item">Email</th>
                        <th className="dentist-row__item">ID</th>
                        <th className="dentist-row__item">Make Sick</th>
                    </tr>
                    {peopleList}
                </tbody>
            </table>
        </div>
    )
}

export default DentistDisplay