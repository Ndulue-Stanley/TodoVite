import styled from "styled-components";
import {Link} from 'react-router-dom'
import pix from '../assets/twma logo.png'

const Header = () => {
  return (
    <div>
        <Container>
            <Wrapper>
                <Logo>
                    <Img  src= {pix} alt="logo"/>
                </Logo>
                <Nav to={`/add-newtask`}>Add Task</Nav>
            </Wrapper>
        </Container>
    </div>
  )
}

export default Header;

const Nav  = styled(Link)`
width: 8%;
height: 50%;
text-decoration: none;
color: black;
background-color: white;
border-radius: 5px;
padding: 5px;
display: flex;
align-items: center;
justify-content: center;

&:hover{
    transition: all 350ms;
    cursor: pointer;
    transform: scale(1.05);
}
`
const Img = styled.img`
width: 100%;
height: 100%;
object-fit: cover;
`
const Logo  = styled.div`
width: 10%;
height: 100%;
`
const Wrapper  = styled.div`
width: 90%;
height: 90%;
display: flex;
justify-content: space-between;
align-items: center;
/* background-color: red; */
`
const Container = styled.div`
width: 100%;
height: 100%;
display: flex;
justify-content: center;
align-items: center;
`