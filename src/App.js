import React, { useState } from 'react';
import DisplayEntries from './Components/DisplayEntries/DisplayEntries.jsx';

// functional component named App 
// component App gets instantiated in index.js
function App() {
  const [entries, setEntries] = useState([{weight: 175, date: '11-23-2021'}, {weight: 165, date: '11-23-2022'}])



  return (
    <div>
      {/* DisplayEntries is the child component of App components */}
      {/* place it in a self-closing html tag means instantiated into parent component */}
      <DisplayEntries entries={entries}/>
    </div>
  );
}

export default App;
