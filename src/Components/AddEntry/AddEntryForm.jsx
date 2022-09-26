import React, { useState } from 'react';
import './AddEntryForm.css';
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
        <form onSubmit={handleSubmit} className='form-grid'>
            <div className='form-group'>
                <label>Weight</label>
                <input className="form-control" type="number" value={weight} onChange={(event) => setWeight(parseFloat(event.target.value))}></input>
            </div>
            <div className='form-group'>
                <label>Date</label>
                <input className="form-control" type='date' value={date} onChange={(event) => setDate(event.target.value)}></input>
            </div>
    
            <button className="btn btn-primary" type='submit' style={{'margin-top': '1em'}}>Add</button>
        </form>
     );
}
 
export default AddEntryForm;