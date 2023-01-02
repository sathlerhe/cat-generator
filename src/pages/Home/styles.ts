import { styled } from "../../../stitches.config";

export const Container = styled("div", {
  width: "95vw",
  height: "90vh",
  background: "$bg_transparent_2",
  borderRadius: "$md",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",

  "@xs": {
    width: "90vw",
  },
});

export const ContentContainer = styled("div", {
  width: "600px",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  gap: "$xxs",

  ">h1": {
    fontSize: "45px",
    color: "$text_white",
    margin: "0",

    "> i": {
      fontStyle: "normal",
      color: "$primary",
    },
  },

  '@xs': {
    width: '300px',
  },
  
  '@nano': {
    width: '250px',
  }
});

export const Img = styled("div", {
  width: "100%",
  height: "400px",
  backgroundSize: "cover",
  backgroundPosition: "center",
  borderRadius: "$sm",
});

export const Button = styled("button", {
  width: "200px",
  height: "50px",
  borderRadius: "$pill",
  border: "none",
  cursor: "pointer",
  fontSize: "$body_1",
  background: "linear-gradient(340deg, #7991cf, #c0d6ff)",
  color: "$text_white",
  transition: "0.4s ease",

  "&:hover": {
    border: "3px solid #7991cf",
    background: "transparent",
    color: "#7991cf",
  },
});
