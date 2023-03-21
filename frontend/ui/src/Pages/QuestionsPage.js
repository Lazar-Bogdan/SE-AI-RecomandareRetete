import backgroundImg from "./food2.png";
import QuestionAnswear from "../Components/QuestionAnswear";
import {Button} from "@mui/material";
import {useNavigate} from "react-router-dom";

const QuestionsPage = () => {

    const navigate = useNavigate();

    const goToRecipePage = () => {
        navigate("/recipe");
    };

    return (
        <>
            <img src={backgroundImg} alt="" style={{width: '50%'}}/>
            <QuestionAnswear/>
            <Button variant="outlined"
                    style={{
                        position: 'absolute',
                        top: '10rem',
                        left: '43vw',
                        background: '#FFFFFF',
                        borderRadius: '1rem',
                        color: '#08484A',
                        borderColor: '#08484A',
                    }}
                    onClick={goToRecipePage}
            >
                Get recipe
            </Button>
        </>
    );
};

export default QuestionsPage;