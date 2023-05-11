"use client"
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import ButtonGroup from "@mui/material/ButtonGroup";

type Props = {}

export default function LanguageSwitch({}: Props) {
  return (
    <div className="absolute left-8 top-3">
        <Box>
            <ButtonGroup size="small" aria-label="large button group">
                <Button key="one">HUN</Button>
                <Button key="two">ENG</Button>
            </ButtonGroup>
        </Box>
    </div>
  )
}