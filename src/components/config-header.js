import Switch from "@mui/material/Switch";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import ToggleButton from "@mui/material/ToggleButton";
import { useState } from "react";

import classes from "./config-header.module.scss";

function ConfigHeader(props) {
  const [alignment, setAlignment] = useState("all");
  const [numOfRoles, setNumOfRoles] = useState(0);

  const handleChangeToggleButton = (event, newAlignment) => {
    setAlignment(newAlignment);
  };

  const handleNumOfRoles = (num) => {
    setNumOfRoles(num);
  };

  return (
    <div
      className={`${classes.headerContainer}  ${
        !props.switchChecked ? "mb-16" : ""
      }`}
    >
      <Switch
        className={classes.switch}
        checked={props.switchChecked}
        onChange={props.handleChangeSwitch}
      />
      <div className={classes.detailesContainer}>
        <p>
          {props.name} <span>{props.type}</span>
        </p>
        <span>{numOfRoles} roles selected</span>
      </div>
      <ToggleButtonGroup
        size="small"
        color="secondary"
        className={classes.permissionsButtons}
        value={alignment}
        exclusive
        onChange={handleChangeToggleButton}
      >
        <ToggleButton value="all">All Roles</ToggleButton>
        <ToggleButton value="granular">Granular</ToggleButton>
        <ToggleButton value="public">Public</ToggleButton>
      </ToggleButtonGroup>
    </div>
  );
}

export default ConfigHeader;
