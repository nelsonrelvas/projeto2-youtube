import { Container, MenuItem } from "./styles";
import React, { useContext } from 'react';
import { UsuarioContexto } from '../../contexts/useContext';

const items = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

function Menu() {
    const { openMenu } = useContext(UsuarioContexto);

    return (
        <Container openMenu={openMenu}>
            {items.map(() => (
                <MenuItem>
                    Início
                </MenuItem>
            ))}
        </Container>
    )
}

export default Menu;