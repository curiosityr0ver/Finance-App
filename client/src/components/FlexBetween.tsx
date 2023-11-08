import React from "react"
import { Box } from "@mui/material"
import { styled } from "@mui/system"

type Props = {}

const FlexBetween = styled(Box)({
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center"
})
export default FlexBetween