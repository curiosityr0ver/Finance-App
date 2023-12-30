
import GitHubIcon from '@mui/icons-material/GitHub';
import AddchartIcon from '@mui/icons-material/Addchart';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import AssistantIcon from '@mui/icons-material/Assistant';
import { Typography, useMediaQuery } from '@mui/material';

const CustomButton = ({ info }: { info: any }) => {

    const isAboveMediumScreens = useMediaQuery("(min-width: 1200px)");

    return (
        <div className='customButton' style={{ backgroundColor: info.background, color: info.color }}>
            <a href={info.footer} target="_blank">
                <div className='grid'>
                    <Typography fontSize={isAboveMediumScreens ? "1.2rem" : "0.8rem"}>{info.header}</Typography>
                    <Icon icon={info.header} size={isAboveMediumScreens ? "large" : "small"} />
                </div>
            </a>
        </div>


    )
}



const Icon = ({ icon, size }: { icon: any, size: any }) => {
    if (icon == "Github") {
        return (
            <GitHubIcon fontSize={size} />
        )
    } else if (icon == "DataSet") {
        return (
            <AddchartIcon fontSize={size} />
        )
    } else if (icon == "Linked") {
        return (
            <LinkedInIcon fontSize={size} sx={{ marginTop: "1px" }} />
        )
    } else {
        return (
            <AssistantIcon fontSize={size} />
        )
    }
}

export default CustomButton