import VideoComponent from "../../components/videoComponent";
import { Container } from "./styles";

function Home() {

    return (
        <Container>
            <VideoComponent urlImage="https://i.ytimg.com/vi/tI55Zu9uZEM/maxresdefault.jpg" 
                            title="Marília Mendonça - Leão - Decretos Reais" 
                            titleCard="Marília Mendonça" 
                            titleCardCont="109 mi de visualizações - há 2 meses" />
        </Container>
    );
}

export default Home;