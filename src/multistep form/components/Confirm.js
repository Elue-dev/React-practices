import React, { Component } from 'react';

export class FormPersonalDetails extends Component {
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    }

    back = e => {
        e.preventDefault();
        this.props.prevStep();
    }

    render() {
        const { values: {firstName, lastName, email, occupation, city, bio} } = this.props;
        return (
            <>
                <h1 className='header'>Confirm Your Details...</h1>
                <div>
                    <ul className='list'>
                        <li>&rarr; <b>First Name:</b> {firstName}</li>
                        <li>&rarr; <b>Last Name:</b> {lastName}</li>
                        <li>&rarr; <b>Email:</b> {email}</li>
                        <li>&rarr; <b>Occupation:</b> {occupation}</li>
                        <li>&rarr; <b>City:</b> {city}</li>
                        <li>&rarr; <b>Bio:</b> {bio}</li>
                    </ul>
                    <br/>
                    <button type='submit' onClick={this.continue}>Confirm & Continue</button>
                    <button type='submit' onClick={this.back} className='back'>Go Back</button>
                </div>
            </>
        )
    }
}

export default FormPersonalDetails

