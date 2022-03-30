import CrudConfig from "./crud-config";

import classes from "./crud-api.module.scss";

function CrudApi(props) {
  const crud = ["Create", "Update", "Search", "View"];

  return (
    <div className={classes.rootContainer}>
      <p className={classes.title}>End Point</p>
      {crud.map((item, i) => {
        return <CrudConfig key={item} name={item} type={props.path} />;
      })}
    </div>
  );
}

export default CrudApi;
