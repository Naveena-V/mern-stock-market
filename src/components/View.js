import React from "react";
import { useSelector } from "react-redux";
import { Grid, Paper, Button } from "@material-ui/core";
import axios from "axios";

function View(props) {
  const stockShow = useSelector((state) =>
    state.stocks.find((item) => item._id === props.match.params.id)
  );

  const paperStyle = {
    height: "60vh",
    width: "50%",
    marginTop: "10px",
    backgroundColor: "#0ee0d6f2",
    // marginLeft: "400px",
  };

  const handleDeleteButton = () => {
    axios
      .delete(`/api/stocks/${props.match.params.id}`)
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleBackButton = () => {
    props.history.push("/home");
  };

  return (
    <Grid align="center">
      <Paper elevation={8} style={paperStyle} align="center">
        <h1 style={{ margin: "30px" }}>Company Stock Details</h1>
        <br />
        <h2>Company Name:</h2>
        <h3>{stockShow.companyName}</h3>
        <h2>Market Cap:</h2>
        <h3>{stockShow.marketCap}</h3>
        <h2>Current Price:</h2>
        <h3>{stockShow.currentPrice}</h3>
        <h2>Stock Symbol:</h2>
        <h3>{stockShow.stockSymbol}</h3>
        <Button
          variant="contained"
          color="secondary"
          onClick={handleDeleteButton}
        >
          Delete
        </Button>
      </Paper>
      <Button
        variant="contained"
        color="primary"
        style={{ marginTop: "20px" }}
        onClick={handleBackButton}
      >
        Back
      </Button>
    </Grid>
  );
}

export default View;
