import { Button, Typography } from "antd";
import { Link } from "react-router-dom";
import styled from "styled-components";
const { Title } = Typography
const StyledHomepageWrapper = styled.div`
display: flex;
align-items: center;
justify-content: center;
height: 100vh;
.content{
    // transform: translate(-50%, -50%);
    text-align: center
}
`


const Home = () => {
    return (<StyledHomepageWrapper>
        <div className="content">
            <Title level={1}>Home page</Title>
            <Button type="primary">

                <Link to="/login">Go To Login</Link>
            </Button>
        </div>

    </StyledHomepageWrapper>);
}

export default Home;