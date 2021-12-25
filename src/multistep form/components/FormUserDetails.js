import React, { Component } from 'react';

export class FormUserDetails extends Component {
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    }

    render() {
        const { values, handleChange } = this.props;
        return (
          <>
            <h1 className='header'>Enter User Details</h1>
              <div>
                  <input
                    type='text'
                    value={values.firstName}
                    onChange={handleChange('firstName')}
                    placeholder='Enter your First Name'
                  />
                  <br />
                  <input
                    type='text'
                    value={values.lastName}
                    onChange={handleChange('lastName')}
                    placeholder='Enter your Last Name'
                  />
                  <br/>
                  <input
                    type='email'
                    value={values.email}
                    onChange={handleChange('email')}
                    placeholder='Enter your Email'
                  />
                  <br/>
                  <button type='submit' onClick={this.continue}>Submit</button>


                  <h4><a href='https://github.com/Elue-dev/React-practices/tree/main/src/multistep%20form/components' style={styles.dark}>Git Hub Link &rarr;</a></h4>
              </div>
            </>
        )
    }
}

const styles = {
  dark: {
      color: '#333',
      textDecoration: 'underline',
      paddingTop: '3rem'
  }
}

export default FormUserDetails

