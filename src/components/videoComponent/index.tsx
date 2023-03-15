import { ChannelImage, Container, ImageBanner, TextCard, TextContainer, Title, TitleContainer } from "./styles";

interface Iprop {
    urlImage: string;
    title: string;
    titleCard: string;
    titleCardCont: string;
}



function VideoComponent({ urlImage, title, titleCard, titleCardCont }: Iprop) {
    return (
        <Container>
            <ImageBanner src={urlImage} />
            <TitleContainer>
                <ChannelImage>
                    PV
                </ChannelImage>
                <TextContainer>
                    <Title>{title}</Title>
                    <TextCard>{titleCard}</TextCard>
                    <TextCard>{titleCardCont}</TextCard>
                </TextContainer>
            </TitleContainer>
        </Container>
    )
}

export default VideoComponent;