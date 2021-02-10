import s from './form.module.css'
import ResultForm from "./form";

function FormComponent() {
    return (
        <div className={s.form}>
            <div className={s.formContainer}>

                    <div>Контакты</div>

                    <div>
                      <ResultForm/>

                    </div>
                    <div>Отправить</div>


            </div>

        </div>
    );
}

export default FormComponent;
