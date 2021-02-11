import {Field, reduxForm} from "redux-form";
import s from './form.module.css'


const ReduxForm = (props)=>{
    return<>
            <form onSubmit={props.handleSubmit} className={s.formik}>
                <div>
                    <Field component={'input'} placeholder='Name' name='name'/>
                </div>
                <div>
                    <Field component={'input'} placeholder='Email' name='email'/>
                </div>
                <div>
                    <Field component={'textarea'} placeholder='Your Message'
                           name='message'/>
                </div>
                <div>
                    <button>Send</button>
                </div>
            </form>
    </>
}
const Form = reduxForm({form:'Orders'})(ReduxForm)
function ResultForm() {
    const onSubmit = (formData)=>{
        console.log(formData)
    }
    return (
        <div>
          <Form onSubmit={onSubmit}/>
        </div>
    );
}

export default ResultForm;
