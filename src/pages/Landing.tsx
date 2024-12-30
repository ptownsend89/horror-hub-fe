import React, { useState } from "react"
import { Button, TextField } from "@mui/material";
import { Header } from "../components/Header";

export const Landing: React.FC = () => {
  const [searchInput, setSearchInput] = useState<string>("");

  return (
    <div className="App-header">
      <Header />
      <div className="flex">
        <TextField 
          className="searchInput"
          value={searchInput}
          label="Search" 
          variant="filled"
          onChange={(e) => setSearchInput(e.target.value)}
        />
        <Button 
          className="searchInput"
          variant="outlined"
        >
          Search
        </Button>
      </div>
    </div>
  );
};
