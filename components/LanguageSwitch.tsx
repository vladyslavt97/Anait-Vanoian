"use client"
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import ButtonGroup from "@mui/material/ButtonGroup";
import { useStore } from "./State";
import { useEffect, useState } from "react";

type Props = {}
interface languagesState {
  setLanguage: (language: string) => void;
}

interface openState {
    open: false;
  setOpen: (open: boolean) => void;
}

export default function LanguageSwitch({}: Props) {
  // const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const browserLanguage = navigator.language;
    // setLoaded(true);
    if(browserLanguage.includes("hu")){
      setLanguage("hun");
    } else {
      setLanguage('eng');
    }
  }, []);

  const engBio = () => {
    setLanguage('eng');
  }
 
  const hunBio = () => {
    setLanguage('hun')
  }
 
  const setLanguage = useStore((state: languagesState) => state.setLanguage);
  const open = useStore((state: openState) => state.open);
  return (
    <div className={`absolute left-8 top-3 shadow-lg ${open ? "z-10" : "z-50"}`}>
        <Box>
            <ButtonGroup size="small" aria-label="small button group">
                <Button onClick={hunBio} key="one" sx={{ color: "black" }}>HUN</Button>
                <Button onClick={engBio} key="two" sx={{ color: "black" }}>ENG</Button>
            </ButtonGroup>
        </Box>
    </div>
  )
}