import { Container, LogoContainer, ButtonContainer, ButtonIcon } from "./stype";
import Hamburger from '../../asserts/hamburger.png';
import Logo from '../../asserts/YouTube-Logo.png'

function Header() {
    return (
        <Container>
            <LogoContainer>
                <ButtonContainer>
                    <ButtonIcon alt="Hamburger" src={Hamburger} />
                </ButtonContainer>
                <img
                    style={{ cursor: 'pointer', width: '100px' }}
                    alt='Logo'
                    src={Logo}
                />
            </LogoContainer>
        </Container>
    )
}

export default Header;