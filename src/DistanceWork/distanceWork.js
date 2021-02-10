import s from './distance.module.css'

function Distance() {
    return (
        <div className={s.distance}>
            <div className={s.distanceContainer}>
                <h3>Рассмытриваю варианты удалённой работы</h3>
                    <div className={s.btnDistance}>
                    <button>Нанять меня</button>
                    </div>
            </div>
        </div>
    );
}

export default Distance;
