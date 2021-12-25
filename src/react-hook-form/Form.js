import React from 'react'
import { useForm } from 'react-hook-form'

function Form() {
    const {register, handleSubmit, formState: { errors } } = useForm()

    const onSubmit = (data) => {
        console.log(data)
        document.getElementById('email_data').textContent = data.email
        document.getElementById('password_data').textContent = data.password
    }

    const handleEye = () => {
        const eye = document.getElementById('eye')
        const password = document.querySelector('.password')
        if(password.type === 'password'){
            password.setAttribute('type','text')
            eye.className = 'fas fa-eye'
        } else {
            password.setAttribute('type', 'password')
            eye.className = 'fas fa-eye-slash'
        }
    }

    return (
        <div className='hook_form'>
            <h1>React Hook Form</h1>
            <form style={{margin: '2rem'}} onSubmit={handleSubmit(onSubmit)}>
                <input type='email'
                placeholder='Email'
                name='email'
                className='email'
                {...register('email', {required: true})}
                />
                {errors.email && <p style={styles.error}>Enter a valid email</p>}
                <br/>
                <div style={styles.flex}>
                <input type='password'
                placeholder='Password'
                name='password'
                className='password'
                {...register('password', {required: ('Password cannot be blank'),
                minLength: {value: 8, message: 'Password must be at least 8 characters'},
                maxLength: {value: 10, message: 'Password must not be more than 10 characters'}})}
                />
                <p style={styles.eye} onClick={handleEye}><i id='eye' className="fas fa-eye-slash"></i></p></div>
                {errors.password && <p style={styles.error}>{errors.password.message}</p>}
                <br/>
                <input type='submit' className='submit' />
                <div style={styles.data}>
                    <p><b>Email:</b> <span id='email_data'></span></p>
                    <p><b>Password:</b> <span id='password_data'></span></p>
                </div>
            </form>


            <h4><a href='https://github.com/Elue-dev/React-practices/blob/main/src/react-hook-form/Form.js' style={styles.dark}>Git Hub Link &rarr;</a></h4>
        </div>
    )
}

const styles = {
    error: {
        color: 'red',
        fontWeight: '700'
    },

    flex: {
        display: 'flex',
        alignItems: 'center'
    },

    eye: {
        marginLeft: '.5rem',
        cursor: 'pointer'
    },

    data: {
        lineHeight: 2,
        marginTop: '.7rem'
    },

    dark: {
        color: '#333',
        textDecoration: 'underline',
        paddingTop: '1rem'
    }
}

export default Form
