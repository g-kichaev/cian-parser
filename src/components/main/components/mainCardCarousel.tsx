// React
import { useState } from "react"
// UI
import { Box, Button, CardMedia, MobileStepper, Typography } from "@mui/material"
import { KeyboardArrowLeft, KeyboardArrowRight } from "@mui/icons-material"


type Props = {
    urls: string[]
}
export const MainCardCarousel = ({urls}: Props) => {
    const [activeStep, setActiveStep] = useState(0)

    const count = urls.length
    return (
        <Box
            flex={1}
            sx={theme=>{return{
                display: "flex", 
                justifyContent: "center", 
                alignItems: "flex-start", 
                position: "relative",
                width: "30%",
                [theme.breakpoints.down("lg")]: {
                    width: "60%",
                },
            }}}
        >
            {count === 0 && <Typography alignSelf={"center"} textAlign={"center"}>Нет фото</Typography>}
            {count !== 0 &&
                <>
                    <Box component="img" src={urls[activeStep]} sx={{objectFit: 'cover', position: "absolute", maxWidth: "100%", maxHeight: "100%"}}/>
                    <MobileStepper
                        variant="text"
                        steps={count}
                        position="static"
                        activeStep={activeStep}
                        sx={{ position: "absolute", fontSize: "0.8rem", bottom: 0, background: "hwb(0 0% 100% / 0.2)"}}
                        backButton={
                            <Button 
                                disabled={activeStep === 0} 
                                onClick={() => setActiveStep((prev) => prev - 1)} 
                                sx={theme=>{return{
                                    px:0, 
                                    width: "1rem",
                                    // flexGrow: 1,
                                    // flexShrink: 1
                                }}}
                            >
                                <KeyboardArrowLeft />
                            </Button>
                        }
                        nextButton={
                            <Button 
                                disabled={activeStep === (count - 1)} 
                                onClick={() => setActiveStep((prev) => prev + 1)}
                                sx={theme=>{return{
                                    px:0, 
                                    width: "1rem",
                                    // flexGrow: 1,
                                    // flexShrink: 1
                                }}}
                            >
                                <KeyboardArrowRight/>
                            </Button>
                        }
                    />
                </>
            }
        </Box>
    )
}
