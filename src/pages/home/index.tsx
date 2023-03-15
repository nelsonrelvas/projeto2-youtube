import VideoComponent from "../../components/videoComponent";
import { Container } from "./styles";

function Home() {

    return (
        <Container>
        <VideoComponent urlImage="https://i.ytimg.com/vi/tI55Zu9uZEM/maxresdefault.jpg" 
                        title="Marília Mendonça - Leão - Decretos Reais" 
                        titleCard="Marília Mendonça" 
                        titleCardCont="109 mi de visualizações - há 2 meses" />

        <VideoComponent urlImage="https://i.ytimg.com/vi/tI55Zu9uZEM/maxresdefault.jpg" 
                        title="Mendonça - Leão - Decretos Reais" 
                        titleCard="Marília" 
                        titleCardCont="409 mi de visualizações - há 2 meses" />


        <VideoComponent urlImage="https://i.ytimg.com/vi/tI55Zu9uZEM/maxresdefault.jpg" 
                        title="Leão - Decretos Reais" 
                        titleCard="Mendonça" 
                        titleCardCont="309 mi de visualizações - há 2 meses" />


        <VideoComponent urlImage="https://i.ytimg.com/vi/tI55Zu9uZEM/maxresdefault.jpg" 
                        title="Decretos Reais" 
                        titleCard="João" 
                        titleCardCont="209 mi de visualizações - há 2 meses" />
        </Container>
    );
}

export default Home;