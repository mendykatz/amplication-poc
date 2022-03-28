import Button from "@mui/material/Button";
import Switch from "@mui/material/Switch";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import ToggleButton from "@mui/material/ToggleButton";
import * as React from "react";

import classes from "./crud-config.module.scss";

function CrudConfig(props) {
  const [alignment, setAlignment] = React.useState("all");
  const [checked, setChecked] = React.useState(false);

  const handleChangeToggleButton = (event, newAlignment) => {
    setAlignment(newAlignment);
  };

  const handleChangeSwitch = (event) => {
    setChecked(!checked);
  };

  return (
    <div className={classes.rootContainer}>
      <div className={`${classes.headerContainer}  ${!checked? 'mb-16' : ''}`}>
        <Switch className={classes.switch}
         checked={checked}
         onChange={handleChangeSwitch}/>
        <div className={classes.detailesContainer}>
          <p>{props.name} <span>{props.type}</span></p>
          <span>roles selected</span>
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

      {checked && <div className={`${classes.rolesButtons} mb-16`}>
        <Button variant="text">Text</Button>
      </div>}
    </div>
  );
}

export default CrudConfig;
