import s from './distance.module.scss'
import {Button} from "@material-ui/core";

function Distance() {
    return (
        <div className={s.distance}>
            <div className={s.distanceContainer}>
                <h3>Considering options for remote work</h3>
                    <div className={s.btnDistance}>
                        <Button variant="contained" color="default">
                           Hire Me
                        </Button>
                    </div>
            </div>
        </div>
    );
}

export default Distance;
