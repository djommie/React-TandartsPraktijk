import React from 'react'

function AddPatient(props) {
    return (
        <div>
            <h2>Add a patient.</h2>
            <form className="patient-add" onSubmit={props.addPatient}>
                <input type='text' id='patient-first-name' placeholder='First Name'></input>
                <input type='text' id='patient-last-name' placeholder='Last Name'></input>
                <input type='tel' id='patient-phone' placeholder='Phone'></input>
                <input type='text' id='patient-email' placeholder='Email'></input>
                <input type='text' id='patient-birth-year' placeholder='Year of Birth'></input>
                <button>Add Patient</button>
            </form>
        </div>
    )
}

export default AddPatient