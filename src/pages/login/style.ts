import { Box } from "@mui/material";
import styled from "styled-components";

export const Appcontainer = styled(Box)(() => ({
    width: "100vw",
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "#F1F1F1",
    
   '.containerForm': {
    display: "flex",
    flexDirection: "column",
    gap: "1rem",
    width: "100%",
 
    },
    ".containerImage": {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        backgroundColor: "#001C98",
        height: "100%",

       ".containerCenter": {
        background: "linear-gradient(157.28deg, #C5CFFF -10.56%, #7C8DD9 14.09%, #334AB3 49.27%, #0D279F 83.18%, #08239C 105.52%, #001C98 121.79%)",
        width: "80%",
        height: "85%",
        borderRadius: "32px",
        position: "relative",

        ".container_Text": {
            maxWidth: "363px",
            marginLeft: "60px",
            marginTop: "60px",

            "& h3": {
                color: "#FFFFFF",
                fontSize: "32px",
                fontWeight: "600",
                fontFamily: "Sora",

                "& span": {
                    color: "#FFD700",
                }
            },  
            },
            ".container_Icons": {
                position: "absolute",
                top: "21vh",
                right: "-70px",
                height: "75%",
            },
            ".container_Graphic": {
                position: "absolute",
                width: "100px",
                display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                height: "100px",
                right: "-50px",
                top: "140px",
                borderRadius: "50%",
                backgroundColor: "#FFFFFF",

                "& img": {
                    width: "60%",
                    height: "60%",
                }
                
            },
            ".container_emotion": {
                position: "absolute",
                width: "100px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "100px",
                left: "-50px",
                top: "600px",
                borderRadius: "50%",
                backgroundColor: "#FFFFFF",

                "& img": {
                    width: "60%",
                    height: "60%",
                },
            }

        },
    }
}));