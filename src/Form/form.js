import {Field, reduxForm} from "redux-form";
import s from './form.module.scss'
import {Button} from "@material-ui/core";
import {Input, TextArea} from "./input";


const ReduxForm = (props) => {


    return <>
        <form onSubmit={props.handleSubmit} className={s.formik}>
            <div className={s.formName}>
                <Field component={Input} placeholder='Name' name='name'/>
                <Field component={Input} placeholder='Email' name='email'/>
            </div>
            <div className={s.formSubject}>
                <Field component={Input} placeholder='Subject' name='subject'/>
            </div>
            <div className={s.formMessage}>
                <Field component={TextArea} placeholder='Message' name='message'/>

            </div>
            <div>
                <Button variant="contained" color="primary" type={"submit"}>
                    Send
                </Button>
            </div>
        </form>
    </>
}
const Form = reduxForm({form: 'HireMe'})(ReduxForm)

function ResultForm() {
    const onSubmit = (formData) => {
        console.log(formData)
    }
    return (
        <div>
            <Form onSubmit={onSubmit}/>
        </div>
    );
}

export default ResultForm;
