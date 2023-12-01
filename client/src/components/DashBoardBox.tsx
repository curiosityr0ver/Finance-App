import React from "react"
import { Box } from "@mui/material"
import { styled } from "@mui/system"

type Props = {}

const DashBoardBox = styled(Box)(({ theme }) => ({
    backgroundColor: theme.palette.background.light,
    borderRadius: "1rem",
    boxShadow: "0.1rem 0.15rem 0.1rem 0.15rem rgba(0, 0, 0, 0.8)"
}));
export default DashBoardBox