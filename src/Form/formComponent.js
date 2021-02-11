import s from './form.module.css'
import ResultForm from "./form";

function FormComponent() {
    return (
        <div className={s.form}>
            <div className={s.formContainer}>

                    <h2>Контакты</h2>

                    <div className={s.formik}>
                      <ResultForm/>
                    </div>


            </div>

        </div>
    );
}

export default FormComponent;
