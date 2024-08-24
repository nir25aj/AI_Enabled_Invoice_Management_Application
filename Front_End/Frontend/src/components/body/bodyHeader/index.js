import React from "react";
import Add from "./add";
import Delete from "./delete";
import Edit from "./edit";
import Button from "@mui/material/Button";
import { ButtonGroup } from "@material-ui/core";
import AdvanceSearch from "./advanceSearch";
import TextField from "@mui/material/TextField";
import "./style.css";
import { Predict } from "./predict";
import RefreshIcon from "@material-ui/icons/Refresh";
import { AnalyticsView } from "./analyticsView";

const BodyHeader = (props) => {
  console.log(props.currentRow);
  return (
    <div className="parentBodyHeader">
      <ButtonGroup size="large">
        <Predict currentRow={props.currentRow} />
        <AdvanceSearch adv_Search={props.adv_Search} />
        <AnalyticsView />
      </ButtonGroup>

      <Button
        variant="outlined"
        onClick={() => window.location.reload(false)}
        className="refreshBtn"
        style={{
          color: "white",
          marginRight: "6%",
        }}
      >
        <RefreshIcon />
      </Button>

      <TextField
        type="search"
        variant="outlined"
        label="Search Customer Id"
        onChange={(e) => props.searchItems(e.target.value)}
        className="searchBox"
        size="small"
        align="center"
        style={{
          color: "white",
          marginLeft: "15%",
          width: "350px",
        }}
      />

      <ButtonGroup className="btnGrp" >
        <Add />
        <Edit currentRow={props.currentRow} select={props.select} />
        <Delete currentRow={props.currentRow} select={props.select} />
      </ButtonGroup>
    </div>
  );
};

export default BodyHeader;
