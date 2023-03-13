import { createContext, useState } from "react";

export const UsuarioContexto = createContext();

//componete tem que comecar com letra maiuscula
export const UsuarioStore = ({ children }) => {
    const [openMenu, setOpenMenu] = useState(false);
    // let [data, setData] = useState({});

    // useEffect(() => {
    //     setData({nome: "nelson", idade: 37});
    // }, []);

    return (
        <UsuarioContexto.Provider value={{ openMenu, setOpenMenu }}>
            {children}
        </UsuarioContexto.Provider>
    )
}