// import './Contact.css'

import { useFormik } from "formik"
import * as Yup from 'yup'

const initialValues = {
    firstname: '',
    lastname: '',
    email: '',
    message: ''
}

const validationSchema = Yup.object().shape({
    firstname: Yup.string()
     .required('Required'),
   lastname: Yup.string()
     .required('Required'),
   email: Yup.string().email('Invalid email').required('Required'),
   message: Yup.string()
   .required('required'),
})

const onSubmit = (values, {resetForm}) =>{
    console.log('form values: ', values)
    resetForm({values: ''})
}
 
export default function Contact(){

    const formik = useFormik({
        initialValues,
        validationSchema,
        onSubmit
    })
    return(
            <section className="contact" style={{ overflowY: 'auto', maxHeight: '100vh' }}>
                <div className="heading">
                    <h2>Contact <span>Me!</span></h2>
                </div>
                <div className="contact-content">

                    <div className="info">
                        <p className="details">Please fill the form below to get in Touch</p>
                    </div>

                    <div className="cover">

                    <form className="form" onSubmit={formik.handleSubmit}>

                        <input type="text" placeholder="firstname" 
                        id='firstname' name="firstname" 
                        onBlur={formik.handleBlur}
                        onChange={formik.handleChange} 
                        value={formik.values.firstname} />
                        {formik.touched.firstname && formik.errors.firstname ? 
                        (<div className="error">{formik.errors.firstname}</div> ) 
                        : null}

                        <input type="text" placeholder="lastname"
                        id="lastname" name="lastname" 
                        onBlur={formik.handleBlur}
                        onChange={formik.handleChange} 
                        value={formik.values.lastname} />
                        {formik.touched.lastname && formik.errors.lastname ? 
                        (<div className="error">{formik.errors.lastname}</div> ) 
                        : null}

                        <input type="email" placeholder="email"
                        id="email" name="email"
                        onChange={formik.handleChange} 
                        value={formik.values.email} 
                        onBlur={formik.handleBlur} />
                        {formik.touched.email && formik.errors.email ? 
                        (<div className="error">{formik.errors.email}</div> ) 
                        : null}

                        <textarea name="message" id="message" 
                        placeholder="your message"
                        onChange={formik.handleChange} 
                        value={formik.values.message}
                        onBlur={formik.handleBlur} ></textarea>
                        {formik.touched.message && formik.errors.message ? 
                        (<div className="error">{formik.errors.message}</div> ) 
                        : null}

                        <button type="submit" value="Send Message" 
                        className="btn" >
                            Send Message
                        </button>

                    </form>
                        
                    </div>
                </div>
            </section>
    )
}