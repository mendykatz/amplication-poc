import Switch from "@mui/material/Switch";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import ToggleButton from "@mui/material/ToggleButton";
import { useState, useContext } from "react";
import RolesContext from "../store/roles-context";

import classes from "./config-header.module.scss";

function ConfigHeader(props) {
  const [alignment, setAlignment] = useState(null);

  const rolesCtx = useContext(RolesContext);

  const handleChangeToggleButton = (event, newAlignment) => {
    switch (newAlignment) {
      case "all":
        rolesCtx.setAllRoles(props.name);
        break;
      case "public":
        rolesCtx.setAllRoles(props.name);
        break;

      default:
        break;
    }
    setAlignment(newAlignment);
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
        {rolesCtx.totalRoles(props.name) === 3 ? <span>All roles selected</span> : 
        <span>{rolesCtx.totalRoles(props.name)} roles selected</span>}
      </div>
      <ToggleButtonGroup
        size="small"
        color="secondary"
        className={classes.permissionsButtons}
        value={alignment}
        exclusive
        onChange={handleChangeToggleButton}
      >
        <ToggleButton 
        selected={rolesCtx.totalRoles(props.name) === 3 && alignment === 'all'} 
        value="all">All Roles</ToggleButton>
        <ToggleButton value="granular">Granular</ToggleButton>
        <ToggleButton
        selected={rolesCtx.totalRoles(props.name) === 3 && alignment === 'public'}  
        value="public">Public</ToggleButton>
      </ToggleButtonGroup>
    </div>
  );
}

export default ConfigHeader;
