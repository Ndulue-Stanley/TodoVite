import styled from "styled-components";

const Hero = () => {
  return (
    <div>
        <Container>
            <Wrapper>
                <Box>
                    <Txt>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consectetur sequi sed quas nemo ea eum placeat, eius, atque, hic rerum illum eos consequatur vel maiores corrupti minima quisquam perspiciatis adipisci.
                        
                    <Navs>
                       <Hold> Time: 12 days ago</Hold> 
                       <Hold> Urgency: Moderate </Hold>
                    </Navs>
                    </Txt>
                    <Nav>
                        <Delete>Delete</Delete>
                        <Update>Update</Update>
                    </Nav>
                </Box>
                
                <Box>
                    <Txt>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consectetur sequi sed quas nemo ea eum placeat, eius, atque, hic rerum illum eos consequatur vel maiores corrupti minima quisquam perspiciatis adipisci.
                        
                    <Navs>
                       <Hold> Time: 12 days ago</Hold> 
                       <Hold> Urgency: Moderate </Hold>
                    </Navs>
                    </Txt>
                    <Nav>
                        <Delete>Delete</Delete>
                        <Update>Update</Update>
                    </Nav>
                </Box>
            </Wrapper>
        </Container>
    </div>
  )
}

export default Hero;

const Update = styled.div`
width: 8%;
background-color: white;
color: black;
border-radius: 5px;
padding: 8px 35px;
display: flex;
align-items: center;
box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
justify-content: center;

&:hover{
    transition: all 350ms;
    cursor: pointer;
    transform: scale(1.05);
}
`
const Delete = styled.div`
width: 8%;
background-color: white;
color: black;
border-radius: 5px;
padding: 8px 35px;
display: flex;
align-items: center;
box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
justify-content: center;

&:hover{
    transition: all 350ms;
    cursor: pointer;
    transform: scale(1.05);
}
`
const Hold = styled.div``
const Nav = styled.div`
width: 30%;
display: flex;
flex-direction: column;
justify-content: space-between;
align-items: end;
`
const Navs = styled.div`
display: flex;
gap: 100px;
font-size: 12px;
`
const Txt = styled.div`
width: 60%;
height: 100%;
flex-wrap:wrap;
display: flex;
flex-direction: column;
gap: 10px;
`
const Box = styled.div`
width: 50%;
padding: 30px 10px;
background-color: white;
color: black;
min-height: 10px;
display: flex;
gap: 40px;
border: 1px solid silver;
padding: 20px;
box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
border-radius: 20px;
`
const Wrapper = styled.div`
width: 90%;
height: 100%;
display: flex;
justify-content: center;
align-items: center;
gap: 20px;
flex-direction: column;
`
const Container = styled.div`
width: 100%;
height: 100%;
display: flex;
justify-content: center;
align-items: center;
margin-top: 20px;
`