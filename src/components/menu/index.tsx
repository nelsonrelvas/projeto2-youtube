import { ButtonIcon, Container, MenuItem } from "./styles";
import { useContext } from 'react';
import { UsuarioContexto } from '../../contexts/useContext';
import NotificationIcon from '../../asserts/sino.png'
import { useNavigate } from "react-router-dom";

const items = [{ descricao: 'Início', link: '/' }, { descricao: 'Shorts', link: '/shorts' }, { descricao: 'Inscrições', link: '/subscriptions' },
{ descricao: 'Biblioteca', link: '/library' }, { descricao: 'Histórico', link: '/history' },
{ descricao: 'Seus vídeos', link: '/your-videos' }, { descricao: 'Assistir mais tarde', link: '/watch-later' },
{ descricao: 'Vídeos marcados c...', link: '/liked-videos' }];

const itemsCloseMenu = [{ descricao: 'Início', link: '/' }, { descricao: 'Shorts', link: '/shorts' },
{ descricao: 'Inscrições', link: '/subscriptions' }, { descricao: 'Biblioteca', link: '/library' }];

function Menu() {
    const { openMenu } = useContext(UsuarioContexto);
    const navegador = useNavigate();

    if (openMenu) {
        return (
            <Container openMenu={openMenu}>
                {items.map((valor) => (
                    <MenuItem openMenu={openMenu} onClick={() => navegador(valor.link)}>
                        <ButtonIcon alt="Hamburger" src={NotificationIcon} />
                        <span>{valor.descricao}</span>
                    </MenuItem>
                ))}
            </Container>
        )
    } else {
        return (
            <Container openMenu={openMenu}>
                {itemsCloseMenu.map((valor) => (
                    <MenuItem openMenu={openMenu} onClick={() => navegador(valor.link)}>
                        <ButtonIcon alt="Notificação" src={NotificationIcon} />
                        <span>{valor.descricao}</span>
                    </MenuItem>
                ))}
            </Container>
        )
    }

}

export default Menu;