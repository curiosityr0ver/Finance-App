import Card from '@mui/material/Card';
import { useTheme } from "@mui/material";
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

export default function MediaCard({ info, image }: { info: any, image: any }) {
    const { palette } = useTheme();

    return (
        <Card sx={{ maxWidth: 500, maxHeight: 600 }}>
            <CardMedia
                sx={{ height: 300, margin: 2, objectFit: "cover" }}
                image={image}

            />
            <CardContent>
                <Typography gutterBottom variant="h3" component="div" color={palette.primary[900]}>
                    {info.header}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {info.footer}
                </Typography>
            </CardContent>
        </Card>
    );
}