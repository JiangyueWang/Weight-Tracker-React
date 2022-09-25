import React, { useState } from 'react';

const AddEntryForm = (props) => {
    // below state variables weight and date only exist on the AddEntryForm jsx.
    // both state variables weight and data are bonded to the input on the Form below 
    const [weight, setWeight] = useState(0);
    const [date, setDate] = useState('');

    // handleSubmit function is bonded the form below
    // handleSubmit function runs when the form submitted everytime

    function handleSubmit(event) {
        event.preventDefault();//prevent the page from refreshing after submit the form
        let newEntry = {
            weight: weight,
            date: date
        };
        props.addNewEntryProp(newEntry)

    } 

    return ( 
        <form onSubmit={handleSubmit}>
            <label>Weight</label>
            <input type="number" value={weight} onChange={(event) => setWeight(parseFloat(event.target.value))}></input>
            <label>Date</label>
            <input type='date' value={date} onChange={(event) => setDate(event.target.value)}></input>
            <button type='submit'>Add</button>
        </form>
     );
}
 
export default AddEntryForm;