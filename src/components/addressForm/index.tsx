import * as React from 'react';

export const AddressForm = () => {
    const [address1, setAddress1] = React.useState('');
    const [address2, setAddress2] = React.useState('');

    const handleAddressChange = (event:any) => {
        switch(event.target.name){
            case 'add1':
                setAddress1(event.target.value);
                break;
            case 'add2':
                setAddress2(event.target.value);
                break;
            default:
                throw new Error(`Invalid Input`);
        }
    };

    const handleSubmit = (event:any)=>{
        alert(`Your address is ${address1} ${address2} India`);
        event.preventDefault();
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <h2>Enter your address:</h2>
                <fieldset>
                    <label htmlFor="add1">Address1</label>
                    <input type="text" id="add1" onChange={handleAddressChange} value={address1} name="add1"></input>
                    <br></br>
                    <label htmlFor="add2">Address2</label>
                    <input type="text" id="add2" onChange={handleAddressChange} value={address2} name="add2"></input>
                    <br></br>
                    <label htmlFor="add3">Address3</label>
                    <input type="text" id="add3" value="India"></input>
                    <br></br>
                    <button type="submit">Submit</button>
                </fieldset>
            </form>
        </div>
    )
}