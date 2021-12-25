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
        const { values, handleChange } = this.props;
        return (
            <>
              <h1 className='header'>Enter Personal Details</h1>
              <div>
                  <input
                    type='text'
                    value={values.occupation}
                    onChange={handleChange('occupation')}
                    placeholder='Enter your Occupation'
                  />
                  <br />
                  <input
                    type='text'
                    value={values.city}
                    onChange={handleChange('city')}
                    placeholder='Enter your City'
                  />
                  <br/>
                  <input
                    type='bio'
                    value={values.bio}
                    onChange={handleChange('bio')}
                    placeholder='Enter your Bio'
                  />
                  <br/>
                  <button type='submit' onClick={this.continue}>Submit</button>
                  <button type='submit' onClick={this.back}>Go Back</button>
              </div>
            </>
        )
    }
}

export default FormPersonalDetails

