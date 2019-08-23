import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import axios from 'axios';

class Register extends React.Component {
    
    state = {
        users: [],
        message: ''
    }

    render() {
        return(
        <div>
                <div className={'row justify-content-center mt-5'}>
                    <div className={'col-md-8'}>
                        <div className={'card'}>
                            <div className={'card-header'}>Register</div>
                        <div className={'card-body'}>
                            {this.state.message ? <div className="alert alert-success">
                                {this.state.message}
                            </div>  : ''}
                            <Formik 
                            initialValues={{ name: '',email: '', gender: '', profession: '', address: '' }}
                            
                            validate={values => {
                                let errors = {}
                                if (!values.name) {
                                    errors.name = "Name is required";
                                } 
                                if (!values.email) {
                                    errors.email = 'Email Address is required'
                                } else if (  !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email) ) {
                                    errors.email = 'Invalid email address'
                                }

                                if (!values.gender) {
                                    errors.gender = 'Gender is required';
                                }
                                
                                if (!values.profession) {
                                    errors.profession = 'Profession is required';
                                }
                                
                                if (!values.address) {
                                    errors.address = 'Address is required';
                                }
                                return errors;
                            }} 
                            
                            onSubmit={ (values, { setSubmitting }) => {
                                setTimeout(() => {
                                    this.setState({
                                        user: values
                                    });
                                    axios
                                    .post(
                                        `https://react-training-apis.herokuapp.com/api/users/store`,
                                        this.state.user
                                    )
                                    .then(res => {
                                        console.log(res.data);
                                        this.setState({
                                        showAlert: true,
                                        message: res.data.message,
                                        user: []
                                        });
                                    })
                                    .catch(error => {
                                        console.log(error);
                                        this.setState({
                                        showAlert: true,
                                        message: error
                                        });
                                    });
                                    setSubmitting(false);
                                }, 100)
                            }}
                            >
                                {({ isSubmitting }) => (
                                <Form>
                                <div class="form-group row has-error">
                                    <label htmlFor="name" class="col-md-4 col-form-label text-md-right">Name</label>
                                    <div class="col-md-6">
                                        <Field type="name" name="name" className={'form-control'} />
                                        <small className={'text-danger text-sm'}>
                                            <ErrorMessage component="div" name="name" />
                                        </small>
                                    </div>
                                </div>
                                <div class="form-group row">
                                    <label htmlFor="email" class="col-md-4 col-form-label text-md-right">E-Mail Address</label>
                                    <div class="col-md-6">
                                        <Field type="email" name="email" className={'form-control'} />
                                        <small className={'text-danger text-sm'}>
                                            <ErrorMessage component="div" name="email" />
                                        </small>
                                    </div>
                                </div>
                                <div class="form-group row">
                                    <label htmlFor="gender" class="col-md-4 col-form-label text-md-right">Gender</label>
                                    <div class="col-md-6">
                                        <label htmlFor="male">Male</label>&nbsp;
                                        <Field type="radio" name="gender" id="male" value={'male'} />&nbsp;&nbsp; 
                                        <label htmlFor="female">Female</label> &nbsp;
                                        <Field type="radio" name="gender" id="female" value={'female'} />
                                    <small className={'text-danger text-sm'}>
                                            <ErrorMessage component="div" name="gender" />
                                        </small>
                                    </div>
                                </div>
                                <div class="form-group row">
                                    <label htmlFor="profession" class="col-md-4 col-form-label text-md-right">Profession</label>
                                    <div class="col-md-6">
                                        <Field component="select" name="profession" className={'form-control'}>
                                            <option value={''}>-- Select Profession -- </option>
                                            <option value="teacher">Teacher</option>
                                            <option value="engineer">Engineer</option>
                                            <option value="doctor">Doctor</option>
                                            <option value="developer">Developer</option>
                                        </Field>
                                        <small className={'text-danger text-sm'}>
                                            <ErrorMessage component="div" name="profession" />
                                        </small>
                                    </div>
                                </div>

                                <div class="form-group row">
                                    <label htmlFor="address" class="col-md-4 col-form-label text-md-right">Address</label>
                                    <div class="col-md-6">
                                    <Field component="textarea" name="address" className={'form-control'} />
                                    <small className={'text-danger text-sm'}>
                                            <ErrorMessage component="div" name="address" />
                                        </small>
                                    </div>
                                </div>

                                <div class="form-group row mb-0">
                                    <div class="col-md-6 offset-md-4">
                                        <button type="submit" class="btn btn-primary" disabled={isSubmitting}>
                                            Register
                                        </button>
                                    </div>
                                </div>                
                            </Form>
                            )}
                        </Formik>
                    </div>
                </div>
                </div>
            </div>
        </div>
        )
        }
    }
export default Register;