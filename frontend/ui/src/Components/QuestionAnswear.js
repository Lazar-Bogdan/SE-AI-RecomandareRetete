import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
//import FormControl from '@mui/material/FormControl';
import {useState} from "react";

import {questions} from "./../backend/bazaIntrebari"

const QuestionAnswear = () => {

    const [value, setValue] = useState('nu');

    const handleChange = (event) => {
        setValue(event.target.value);
    };

    function readFromDataBase() {
        return questions.map((item, index) => (
            <div>
                <div style={{ width: '3rem', height: '30rem', color: 'black'}}>
                    Intrebare {index + 1} : {item.question}
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
        ));
    }

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
            {readFromDataBase()}
        </div>
    );
};

export default QuestionAnswear;