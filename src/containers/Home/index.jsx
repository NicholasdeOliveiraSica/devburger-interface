import { Banner, Container, Content, Footer, Header, Main, SecOne, SecTwo } from "./styles";
import PurpleNote from "../../assets/purple-note.svg"

export function Home() { 
  return (
    <>
      <Header></Header>
      <Banner>
        <h1>Bem vindo(a)!</h1>
      </Banner>
      <Main>
        <SecOne>
          <h1>CATEGORIAS</h1>
          <img src={PurpleNote}/>
          <Container>
            <h1>CARROSEL - working in</h1>
            <Content>
              <div></div>
            </Content>
          </Container>
        </SecOne>
        <SecTwo></SecTwo>
      </Main>
      <Footer>
        <p>Desenvolvido por DevClub - 2025 - Todos os direitos reservados</p>
      </Footer>
    </>
  )
}