import s from './form.module.scss'
import ResultForm from "./form";

function FormComponent() {
    return (
        <div className={s.form}>
            <div className={s.formContainer}>
                    <h2>Hire Me</h2>

                    <div className={s.formik}>
                      <ResultForm/>
                    </div>


            </div>

        </div>
    );
}

export default FormComponent;
