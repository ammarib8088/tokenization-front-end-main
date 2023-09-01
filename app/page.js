import React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Cards from "@/components/cards/Cards";

function PropertyFilter() {
  return (
    <Container className="properties-container" sx={{ padding: "20px 0px", textAlign: "left", width:"100%"}}>
      <Typography
        variant="h4"
        sx={{
          mx: 1,
          color: "#165C7C",
          fontWeight: "700",
          mb: 2, // Alt boşluk ekledik
        }}
      >
        Properties
      </Typography>
      <div className="form-control-div">
        <FormControl sx={{ my: 1, mx: 1, minWidth: 200, flexBasis: "300px" }}>
          <InputLabel sx={{ color: "white" }} htmlFor="apartment-select">
            Apartments
          </InputLabel>
          <Select
            defaultValue=""
            id="apartment-select"
            label="Grouping"
            sx={{ backgroundColor: "#0079B0", color: "white" }}
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value={1}>Option 1</MenuItem>
            <MenuItem value={2}>Option 2</MenuItem>
            <MenuItem value={3}>Option 3</MenuItem>
            <MenuItem value={4}>Option 4</MenuItem>
          </Select>
        </FormControl>
        <FormControl sx={{ my: 1, mx: 1, minWidth: 200, flexBasis: "300px" }}>
          <InputLabel htmlFor="penthouse-select">Penthouses</InputLabel>
          <Select defaultValue="" id="penthouse-select" label="Grouping">
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value={1}>Option 1</MenuItem>
            <MenuItem value={2}>Option 2</MenuItem>
            <MenuItem value={3}>Option 3</MenuItem>
            <MenuItem value={4}>Option 4</MenuItem>
          </Select>
        </FormControl>
        <FormControl sx={{ my: 1, mx: 1, minWidth: 200, flexBasis: "300px" }}>
          <InputLabel htmlFor="villa-select">Villas</InputLabel>
          <Select defaultValue="" id="villa-select" label="Grouping">
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value={1}>Option 1</MenuItem>
            <MenuItem value={2}>Option 2</MenuItem>
            <MenuItem value={3}>Option 3</MenuItem>
            <MenuItem value={4}>Option 4</MenuItem>
          </Select>
        </FormControl>
      </div>
      <Cards />
    </Container>
  );
}

export default PropertyFilter;
