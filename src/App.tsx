import React, { useEffect, useState } from "react";
import { Box, CircularProgress } from "@mui/material";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Modal from "./Components/Modal";
import { GlobalContextProvider } from "./Context/GlobalContext";
import Content from "./Components/Content";
// import useStyles from "./style";

function App() {
  const [loading, setLoading] = useState<boolean>(true);
  // const classes = useStyles();
  useEffect(() => {
    setLoading(false);
  }, []);

  if (loading || loading === undefined)
    return <CircularProgress color="info" />;
  return (
    <GlobalContextProvider>
      <>
        <Header />
        <Modal />
        <Box sx={{ minHeight: "calc(100vh - 85px)" }}>
          <Content />
        </Box>
        <Footer />
      </>
    </GlobalContextProvider>
  );
}

export default App;
