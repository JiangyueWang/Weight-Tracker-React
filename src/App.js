import React, { useState } from 'react';
import DisplayEntries from './Components/DisplayEntries/DisplayEntries.jsx';
import AddEntryForm from './Components/AddEntry/AddEntryForm.jsx';
import EntriesChartTracker from './Components/EntriesChartTracker/EntriesChartTracker.jsx';
// functional component named App 
// component App gets instantiated in index.js
function App() {
  const [entries, setEntries] = useState([{weight: 175, date: '11-23-2021'}, {weight: 165, date: '11-23-2022'}])

// function reference, pass a function reference down to the AddEntryForm child component to get the values back
//addNewEntry will invoke on the child AddEntryForm component 

function addNewEntry(entry) {
  // let tempEntries = [entry, ]
  let tempEntries = [...entries, entry];
  // console.log(tempEntries);
  setEntries(tempEntries);
}
  return (
    <div>
      {/* DisplayEntries is the child component of App components */}
      {/* place it in a self-closing html tag means instantiated into parent component */}
      <DisplayEntries entries={entries}/>
      <AddEntryForm addNewEntryProp = {addNewEntry}/>
      <EntriesChartTracker parentEntries={entries}/>
    </div>
  );
}

export default App;
