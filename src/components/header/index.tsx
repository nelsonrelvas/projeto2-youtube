import {
    Container,
    LogoContainer,
    ButtonContainer,
    ButtonIcon,
    SearchContainer,
    SearchInputContainer,
    SearchInput,
    SearchButton,
    HeaderButton
} from "./stype";
import Hamburger from '../../asserts/hamburger.png';
import Logo from '../../asserts/YouTube-Logo.png'
import SearchIcon from '../../asserts/search.png'
import MicIcon from '../../asserts/microfone-gravador.png'
import VideoIcon from '../../asserts/video.png'
import NotificationIcon from '../../asserts/sino.png'

function Header() {
    return (
        <Container>
            <LogoContainer>
                <ButtonContainer margin='0 10px 0 0'>
                    <ButtonIcon alt="Hamburger" src={Hamburger} />
                </ButtonContainer>
                <img
                    style={{ cursor: 'pointer', width: '100px' }}
                    alt='Logo'
                    src={Logo}
                />
            </LogoContainer>

            <SearchContainer>
                <SearchInputContainer>
                    <SearchInput placeholder="Pesquisar" />
                </SearchInputContainer>
                <SearchButton>
                    <ButtonIcon alt="Buscar" src={SearchIcon} />
                </SearchButton>
                <ButtonContainer margin='0 0 0 10px'>
                    <ButtonIcon alt="Phone" src={MicIcon} />
                </ButtonContainer>
            </SearchContainer>

            <HeaderButton>
                <ButtonContainer margin='0 0 0 10px'>
                    <ButtonIcon alt="Video" src={VideoIcon} />
                </ButtonContainer>
                <ButtonContainer margin='0 0 0 10px'>
                    <ButtonIcon alt="Notificação" src={NotificationIcon} />
                </ButtonContainer>
                <ButtonContainer margin='0 0 0 10px'>
                    P
                </ButtonContainer>
            </HeaderButton>
        </Container>
    )
}

export default Header;