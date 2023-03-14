import { ButtonIcon, Container, MenuItem } from "./styles";
import { useContext } from 'react';
import { UsuarioContexto } from '../../contexts/useContext';
import ShortsIcon from '../../asserts/shorts.png'
import SubscriptionIcon from '../../asserts/sub.png'
import LibraryIcon from '../../asserts/library.png'
import HomeIcon from '../../asserts/home.png'
import HistoryIcon from '../../asserts/history.png'
import YourVideosIcon from '../../asserts/your-videos.png'
import WatchLaterIcon from '../../asserts/watch-later.png'
import LikedVideosIcon from '../../asserts/liked-videos.png'
import { useNavigate } from "react-router-dom";

const items = [{ descricao: 'Início', link: '/', icon: HomeIcon }, { descricao: 'Shorts', link: '/shorts', icon: ShortsIcon },
{ descricao: 'Inscrições', link: '/subscriptions', icon: SubscriptionIcon }, { descricao: 'Biblioteca', link: '/library', icon: LibraryIcon },
{ descricao: 'Histórico', link: '/history', icon: HistoryIcon }, { descricao: 'Seus vídeos', link: '/your-videos', icon: YourVideosIcon },
{ descricao: 'Assistir mais tarde', link: '/watch-later', icon: WatchLaterIcon },
{ descricao: 'Vídeos marcados c...', link: '/liked-videos', icon: LikedVideosIcon }];

const itemsCloseMenu = [{ descricao: 'Início', link: '/', icon: HomeIcon }, { descricao: 'Shorts', link: '/shorts', icon: ShortsIcon },
{ descricao: 'Inscrições', link: '/subscriptions', icon: SubscriptionIcon }, { descricao: 'Biblioteca', link: '/library', icon: LibraryIcon }];

function Menu() {
    const { openMenu } = useContext(UsuarioContexto);
    const navegador = useNavigate();

    if (openMenu) {
        return (
            <Container openMenu={openMenu}>
                {
                    items.map((valor) => (
                        <MenuItem openMenu={openMenu} onClick={() => navegador(valor.link)}>
                            <ButtonIcon alt="" src={valor.icon} />
                            <span>{valor.descricao}</span>
                        </MenuItem>
                    ))
                }
            </Container>
        )
    } else {
        return (
            <Container openMenu={openMenu}>
                {itemsCloseMenu.map((valor) => (
                    <MenuItem openMenu={openMenu} onClick={() => navegador(valor.link)}>
                        <ButtonIcon alt="" src={valor.icon} />
                        <span>{valor.descricao}</span>
                    </MenuItem>
                ))}
            </Container>
        )
    }
}

export default Menu;