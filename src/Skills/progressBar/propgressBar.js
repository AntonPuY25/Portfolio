import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';


function CircularProgressWithLabel(props) {
    return (

        <Box position="relative" display="inline-flex" >
            <CircularProgress variant="static"  thickness={4} size={150} {...props} />

                <Box
                    top={0}
                    left={0}
                    bottom={0}
                    right={0}
                    position="absolute"
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                >


                <Typography variant="h5"   component="div"  color="textSecondary">{`${Math.round(
                    props.value,
                )}%`}</Typography>
            </Box>
        </Box>

    );
}


export default function CircularStatic({level}) {
    const [progress, setProgress] = React.useState(0);
                window.addEventListener('scroll', function() {
                    if(window.pageYOffset >=1300&&window.pageYOffset <=1800){
                        setProgress((prevProgress) => (prevProgress ===level ? level : prevProgress+level));
                    }});






    return<CircularProgressWithLabel value={progress} />;
}