import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import ButtonGroup from "@mui/material/ButtonGroup";

type Props = {}

export default function LanguageSwitch({}: Props) {
  return (
    <div>
        <Box>
            <ButtonGroup size="large" aria-label="large button group">
                <Button  key="one">HUN</Button>
                <Button  key="two">ENG</Button>
            </ButtonGroup>
        </Box>
    </div>
  )
}