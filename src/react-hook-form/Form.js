import React from 'react'
import { useForm } from 'react-hook-form'

function Form() {
    const {register, handleSubmit, formState: { errors } } = useForm()

    const onSubmit = (data) => {
        console.log(data)
        document.getElementById('data').textContent = `EMAIL: ${data.email}, PASSWORD: ${data.password}`
    }
    
    return (
        <form style={{margin: '2rem'}} onSubmit={handleSubmit(onSubmit)}>
            <input type='email'
              placeholder='Email'
              name='email'
              {...register('email', {required: true})}
            />
            {errors.email && <p style={styles.error}>Enter a valid email</p>}
            <br/>
            <input type='password'
              placeholder='Password'
              name='password'
              {...register('password', {required: 'Password cannot be blank',
               minLength: {value: 8, message: 'Password must be at least 8 characters'},
               maxLength: {value: 10, message: 'Password must not be more than 10 characters'}})}
            />
            {errors.password && <p style={styles.error}>{errors.password.message}</p>}
            <br/>
            <input type='submit' className='submit' />
            <p id='data'></p>
        </form>
    )
}

const styles = {
    error: {
        color: 'red',
        fontWeight: '700'
    }
}

export default Form
