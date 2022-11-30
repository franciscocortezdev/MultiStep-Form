import "./App.css";
import { useState } from "react";
import Form from "./Components/formikForm/Form";
import FormRHF from "./Components/reactHookForm/FormRHF";
import { Tabs, Tab, Typography, Box } from "@mui/material/";

function App() {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <>
      <Box sx={{ width: "100%" }}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <Tabs value={value} onChange={handleChange} centered>
            <Tab label="Formik" />
            <Tab label="React Hook Form" />
          </Tabs>
        </Box>
        {value === 0 ? <Form /> : <FormRHF />}
      </Box>
    </>
  );
}

export default App;
