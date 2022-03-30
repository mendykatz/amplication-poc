import { createContext, useState } from "react";

const RolesContext = createContext({
  roles: {
    create: [],
    update: [],
    search: [],
    view: [],
  },
  totalRoles: () => {},
  addRole: (role) => {},
  removeRole: (role) => {},
  isRoleSelected: (role) => {},
  setAllRoles: () => {},
});

export function RolesContextProvider(props) {
  const [roles, setRoles] = useState({
    create: [],
    update: [],
    search: [],
    view: [],
  });

  const addRoleHandler = (name, role) => {
    setRoles((prevRoles) => {
      prevRoles[name.toLowerCase()].push(role);
      let obj = {
        ...prevRoles,
      };
      return obj;
    });
  };

  const removeRoleHandler = (name, role) => {
    setRoles((prevRoles) => {
      prevRoles[name.toLowerCase()] = prevRoles[name.toLowerCase()].filter(
        (item) => item !== role
      );
      let obj = {
        ...prevRoles,
      };
      return obj;
    });
  };

  const isRoleSelectedHandler = (name, role) => {
    let val = roles[name.toLowerCase()].some((item) => item === role);
    return val;
  };

  const setAllRolesHandler = (name) => {
    setRoles((prevRoles) => {
      prevRoles[name.toLowerCase()] = ["manager", "admin", "user"];
      let obj = {
        ...prevRoles,
      };
      return obj;
    });
  };

  const getTotalRoles = (name) => {
    return roles[name.toLowerCase()] && roles[name.toLowerCase()].length;
  };

  const context = {
    roles,
    totalRoles: getTotalRoles,
    addRole: addRoleHandler,
    removeRole: removeRoleHandler,
    isRoleSelected: isRoleSelectedHandler,
    setAllRoles: setAllRolesHandler,
  };

  return (
    <RolesContext.Provider value={context}>
      {props.children}
    </RolesContext.Provider>
  );
}

export default RolesContext;
