import {Field, InjectedFormProps, reduxForm} from "redux-form";
import s from './form.module.scss'
import {Button} from "@material-ui/core";
import {Input, TextArea} from "./input";
import {useDispatch} from "react-redux";
import {sendMailTC} from "../Store/reducer";

type TypeFormData = {
    name: string
    email: string
    subject: string
    message: string
}


const ReduxForm: React.FC<InjectedFormProps<TypeFormData>> = ({handleSubmit}) => {

    return <>
        <form onSubmit={handleSubmit} className={s.formik}>
            <div className={s.formName}>
              <span className={s.test}>
                    <Field component={Input} placeholder='Name' name='name'/>

              </span>
                <span>
                    <Field component={Input} placeholder='Email' name='email'/>
               </span>
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
const Form = reduxForm<TypeFormData>(
    {form: 'HireMe'}
)
(ReduxForm)

function ResultForm() {
    const dispatch = useDispatch()

    const onSubmit = (formData: TypeFormData) => {
        dispatch(sendMailTC(formData.name, formData.email, formData.subject, formData.message))
        formData.name = ""
        formData.email = ""
        formData.subject = ""
        formData.message = ""
    }
    return (
        <div>
            <Form onSubmit={onSubmit}/>
        </div>
    );
}

export default ResultForm;
