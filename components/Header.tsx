import React, { useState } from "react";

export const Header: React.FC = () => {
  const [testState, setTestState] = useState<string>("");


  return (
    <div>
      <h1 className="App-header">
        The Horror Hub
      </h1>
    </div>
  )
}