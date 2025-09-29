import React from "react";
import SimpleForm from "./components/SimpleForm";
import FormAction from "./components/FormAction";
import ControlledField from "./components/ControlledField";
import UnControlledForm from "./components/UnControlledForm";
import ProductManagment from "./components/ProductManagment";

const App = () => {
  return (
    <div
      className="p-5">
      {/* <SimpleForm/> */}
      {/* <FormAction/> */}
      {/* <ControlledField/> */}
      {/* <UnControlledForm/> */}
      <ProductManagment />
    </div>
  );
};

export default App;
