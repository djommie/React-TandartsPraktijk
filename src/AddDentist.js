import React from 'react'

function AddDentist(props) {
    return (
        <div>
            <h2>Add a dentist.</h2>
            <form className="dentist-add" onSubmit={props.addDentist}>
                <input type='text' id='dentist-first-name' placeholder='First Name'></input>
                <input type='text' id='dentist-last-name' placeholder='Last Name'></input>
                <input type='tel' id='dentist-phone' placeholder='Phone'></input>
                <input type='text' id='dentist-email' placeholder='Email'></input>
                <button>Add Dentist</button>
            </form>
        </div>
    )
}

export default AddDentist