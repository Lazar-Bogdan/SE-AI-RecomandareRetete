import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import {useState} from "react";

import {level1} from "../backend/bazaIntrebari"

const QuestionAnswear = () => {

    const [value, setValue] = useState('nu');

    const handleChange = (event) => {
        setValue(event.target.value);
    };

    // avem buton de next
    // ne duce la pagina urmatoare cu link-ul /lvlNr/NodeNR

    function readFromDataBase() {
        return level1.map((item, index) => (
            <div key={index}>
                <div style={{ color: 'black'}}>
                   <b>Question {index + 1}.</b> {item.node0}
                </div>
                <RadioGroup
                    value={value}
                    onChange={handleChange}
                    style={{display: 'flex', flexDirection: 'row'}}
                >
                    <FormControlLabel value="yes" control={<Radio/>} label="yes"/>
                    <FormControlLabel value="no" control={<Radio/>} label="no"/>
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
                top: '4rem',
                left: '43vw',
                border: '1px solid #08484A',
            }}
        >
            {readFromDataBase()}
        </div>
    );
};

export default QuestionAnswear;