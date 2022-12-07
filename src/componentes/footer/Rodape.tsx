import { Container } from "./styles";

const Footer: React.FC = () => {
    return(
        <Container>
            <footer>
            <img src="../../public/img/logo.png" ></img>
            <p>&copy; Copyright Alura Barbearia - 2022 {/* https://unicode-table.com/pt/ para procurar unicodes
                como o de copyright  */}</p>
            </footer>
        </Container>
    );
}
export default Footer;