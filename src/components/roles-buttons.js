import ToggleButton from "@mui/material/ToggleButton";
import { useContext } from "react";
import RolesContext from "../store/roles-context";

import classes from "./roles-buttons.module.scss";

function RolesButtons(props) {
  const rolesCtx = useContext(RolesContext);

  const handleRolesButtonSelected = (event) => {
    const isRoleSelected = rolesCtx.isRoleSelected(props.name, event);

    if (isRoleSelected) {
      rolesCtx.removeRole(props.name, event);
    } else {
      rolesCtx.addRole(props.name, event);
    }
  };

  return (
    <div className={`${classes.rolesButtons} mb-16`}>
      <ToggleButton
        value="check"
        className={classes.rolesButton}
        selected={rolesCtx.isRoleSelected(props.name, "manager")}
        onChange={() => {
          handleRolesButtonSelected("manager");
        }}
      >
        Manager
      </ToggleButton>
      <ToggleButton
        value="check"
        className={classes.rolesButton}
        selected={rolesCtx.isRoleSelected(props.name, "admin")}
        onChange={() => {
          handleRolesButtonSelected("admin");
        }}
      >
        Admin
      </ToggleButton>
      <ToggleButton
        value="check"
        className={classes.rolesButton}
        selected={rolesCtx.isRoleSelected(props.name, "user")}
        onChange={() => {
          handleRolesButtonSelected("user");
        }}
      >
        User
      </ToggleButton>
    </div>
  );
}

export default RolesButtons;
