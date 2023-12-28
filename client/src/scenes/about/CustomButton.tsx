
import GitHubIcon from '@mui/icons-material/GitHub';
import AddchartIcon from '@mui/icons-material/Addchart';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import AssistantIcon from '@mui/icons-material/Assistant';
import { Typography } from '@mui/material';

const CustomButton = ({ info }: { info: any }) => {

    return (
        <div className='customButton' style={{ backgroundColor: info.background, color: info.color }}>
            <a href={info.footer} target="_blank">
                <div className='grid'>
                    <Typography fontSize={"1.2rem"}>{info.header}</Typography>
                    <Icon icon={info.header} />
                </div>
            </a>
        </div>


    )
}

const iconMargin = {}

const Icon = ({ icon }: { icon: any }) => {
    if (icon == "Github") {
        return (
            <GitHubIcon fontSize='large' sx={iconMargin} />
        )
    } else if (icon == "DataSet") {
        return (
            <AddchartIcon fontSize='large' sx={iconMargin} />
        )
    } else if (icon == "Linked") {
        return (
            <LinkedInIcon fontSize='large' sx={{ margin: "1px 5px 0px 0px" }} />
        )
    } else {
        return (
            <AssistantIcon fontSize='large' sx={{ margin: "1px 5px 0px 0px" }} />
        )
    }
}

export default CustomButton