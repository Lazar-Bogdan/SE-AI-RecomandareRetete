import backgroundImg from './food2.png';
import QuestionAnswear from "../Components/QuestionAnswear";
import {Button} from "@mui/material";

const MainPage = () => {
    return(
        <>
           <img src={backgroundImg} alt="" style={{ width: '50%' }}/>
            <QuestionAnswear />
            <Button variant="outlined" style={{ position: 'absolute', top: '8rem', left: '43vw', background: '#FFFFFF' }}>
                Afla rezultatul
            </Button>
        </>
    );
};

export default MainPage;