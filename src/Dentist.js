import React from 'react'

function Dentist(props) {
    return (
        <tr className="person-body">
            <th className="person-row__item">{props.firstName}</th>
            <th className="person-row__item">{props.lastName}</th>
            <th className="person-row__item">{props.phoneNr}</th>
            <th className="person-row__item">{props.email}</th>
            <th className="person-row__item">{props.id}</th>
            <th className="person-row__item"><button onClick={() => props.makeDentistSick(props.id)}>Sick</button></th>
        </tr>
    )
}

export default Dentist



