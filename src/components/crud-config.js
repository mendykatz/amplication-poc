import { useState } from "react";
import ConfigHeader from "./config-header";

import classes from "./crud-config.module.scss";
import RolesButtons from "./roles-buttons";

function CrudConfig(props) {
  const [switchChecked, setSwitchChecked] = useState(false);

  const handleChangeSwitch = (event) => {
    setSwitchChecked(!switchChecked);
  };

  return (
    <div className={classes.rootContainer}>
      <ConfigHeader
        name={props.name}
        type={props.type}
        switchChecked={switchChecked}
        handleChangeSwitch={handleChangeSwitch}
      />

      {switchChecked && <RolesButtons  name={props.name}/>}
    </div>
  );
}

export default CrudConfig;
