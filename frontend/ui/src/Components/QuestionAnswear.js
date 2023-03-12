import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
//import FormControl from '@mui/material/FormControl';
import {useState} from "react";

const QuestionAnswear = () => {

    const [value, setValue] = useState('nu');

    const handleChange = (event) => {
        setValue(event.target.value);
    };

    return (
        <div
            style={{
                display: 'flex',
                flexDirection: 'column',
                position: 'absolute',
                backgroundColor: '#FFFFFF',
                borderRadius: '1rem',
                padding: '0.5rem',
                top: '2rem',
                left: '43vw',
            }}
        >
            <div style={{ width: '3rem', height: '1.5rem', color: 'black'}}>
                Intrebare
            </div>
            <RadioGroup
                value={value}
                onChange={handleChange}
                style={{display: 'flex', flexDirection: 'row'}}
            >
                <FormControlLabel value="da" control={<Radio/>} label="da"/>
                <FormControlLabel value="nu" control={<Radio/>} label="nu"/>
            </RadioGroup>
        </div>
    );
};

export default QuestionAnswear;