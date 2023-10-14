import styled from "styled-components";
import Header from "../Static/Header";

const TaskPage = () => {
  return (
    <div>
        <Header/>
        <Container>
            <Wrapper>
                <InputHold>
                <Input placeholder="Add new task........"/>
                
                </InputHold>
                <Button>Add Task</Button>
            </Wrapper>
        </Container>
    </div>
  )
}

export default TaskPage;

const Button = styled.button`
padding: 20px 50px;
border-radius: 10px;
border: none;
font-size: 17px;
font-weight: 500;
background-color: white;
color: black;
cursor: pointer;
&:hover{
    transition: all 350ms;
    transform: scale(1.05);
}
`
const InputHold = styled.div`
width: 45%;
display: flex;
margin-top: 40px;
justify-content: center;
`
const Input = styled.input`
flex: 1;
height: 400px;
background-color: white;
color: black;
/* flex-grow: 1; */
outline: none;
border-radius: 10px;

`
const Wrapper = styled.div`
width: 90%;
height: 90%;
/* background-color: red; */
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
gap: 20px;
`
const Container = styled.div`
width: 100%;
height: 100%;
display: flex;
justify-content: center;
align-items: center;
`