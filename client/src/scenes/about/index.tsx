import { useMediaQuery } from "@mui/material";
import Grid from '@mui/material/Unstable_Grid2'; // Grid version 2
import CustomCard from './CustomCard'
import { info1, info2, info3, info4, info5, info6, info7 } from './data'
import Img1 from '../../assets/KPIs-Online_Businesses-Info-750x410.jpg'
import Img2 from '../../assets/Grow-Datasets-Graphic.png'
import Img3 from '../../assets/Screenshot 2023-12-28 at 12-43-56 Graph Machine Learning with Python Part 1 Basics Metrics and Algorithms.png'
import CustomButton from './CustomButton'


const Dashboard = () => {
    const isAboveMediumScreens = useMediaQuery("(min-width: 1200px)");



    return (
        <>
            <Grid container spacing={1} >
                <Grid xs={isAboveMediumScreens ? 4 : 12}>
                    <CustomCard info={info1} image={Img1} />
                </Grid>
                <Grid xs={isAboveMediumScreens ? 4 : 12}>
                    <CustomCard info={info2} image={Img2} />
                </Grid>
                <Grid xs={isAboveMediumScreens ? 4 : 12}>
                    <CustomCard info={info3} image={Img3} />
                </Grid>
            </Grid>
            <Grid container spacing={isAboveMediumScreens ? 10 : 1}>
                <Grid xs={3}>
                    <CustomButton info={info4} />
                </Grid>
                <Grid xs={3}>
                    <CustomButton info={info5} />
                </Grid>
                <Grid xs={3}>
                    <CustomButton info={info6} />
                </Grid>
                <Grid xs={3}>
                    <CustomButton info={info7} />
                </Grid>
            </Grid >

        </>

    );
};

export default Dashboard;
