import { createTheme } from "@mui/material/styles";
const arcBlue = "#D5C455";
const arcOrange = "#3a220d"

export default createTheme({
    palette: {
        common: {
            blue: `${arcBlue}`,
            orange : `${arcOrange}`,
        },
        primary: {
            main: `${arcBlue}`
        },
        secondary: {
            main: `${arcOrange}`
        },

    },
    typography:{
        tab:{
            fontFamily:"Raleway",
        textTransform:"none",
        fontWeight: "700",
        fontSize: "1rem",
        }
    }
})