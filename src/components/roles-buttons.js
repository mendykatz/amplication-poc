import ToggleButton from "@mui/material/ToggleButton";
import * as React from "react";

import classes from "./roles-buttons.module.scss";

function RolesButtons() {
  const [rolesButtonselectedManager, setRolesButtonselectedManager] = React.useState(false);
  const [rolesButtonselectedAdmin, setRolesButtonselectedAdmin] = React.useState(false);
  const [rolesButtonselectedUser, setRolesButtonselectedUser] = React.useState(false);

  const handleRolesButtonselected = (event) => {
      switch (event) {
          case 'manager':
            setRolesButtonselectedManager(!rolesButtonselectedManager);
              break;
          case 'admin':
            setRolesButtonselectedAdmin(!rolesButtonselectedAdmin);
              break;
          case 'user':
            setRolesButtonselectedUser(!rolesButtonselectedUser);
              break;
      
          default:
              break;
      }
    
  };

  return (
    <div className={`${classes.rolesButtons} mb-16`}>
      <ToggleButton
        value="check"
        className={classes.rolesButton}
        selected={rolesButtonselectedManager}
        onChange={() => {
          handleRolesButtonselected('manager');
        }}
      >
        Manager
      </ToggleButton>
      <ToggleButton
        value="check"
        className={classes.rolesButton}
        selected={rolesButtonselectedAdmin}
        onChange={() => {
          handleRolesButtonselected('admin');
        }}
      >
        Admin
      </ToggleButton>
      <ToggleButton
        value="check"
        className={classes.rolesButton}
        selected={rolesButtonselectedUser}
        onChange={() => {
          handleRolesButtonselected('user');
        }}
      >
        User
      </ToggleButton>
    </div>
  );
}

export default RolesButtons;
