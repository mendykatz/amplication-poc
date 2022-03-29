import Switch from "@mui/material/Switch";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import ToggleButton from "@mui/material/ToggleButton";
import * as React from "react";

import classes from "./crud-config.module.scss";
import RolesButtons from "./roles-buttons";

function CrudConfig(props) {
  const [alignment, setAlignment] = React.useState("all");
  const [switchChecked, setSwitchChecked] = React.useState(false);
  
  const handleChangeToggleButton = (event, newAlignment) => {
    setAlignment(newAlignment);
  };

  const handleChangeSwitch = (event) => {
    setSwitchChecked(!switchChecked);
  };

  return (
    <div className={classes.rootContainer}>
      <div className={`${classes.headerContainer}  ${!switchChecked ? "mb-16" : ""}`}>
        <Switch
          className={classes.switch}
          checked={switchChecked}
          onChange={handleChangeSwitch}
        />
        <div className={classes.detailesContainer}>
          <p>
            {props.name} <span>{props.type}</span>
          </p>
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

      {switchChecked && <RolesButtons />}
    </div>
  );
}

export default CrudConfig;
