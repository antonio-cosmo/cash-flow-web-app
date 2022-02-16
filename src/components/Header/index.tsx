import logoImg from '../../assets/logo.svg'
import { Container, Content } from './styles';

// interface HeaderProps{
//   onOpenModal: () => void;
// }


export function Header() {
  return(
    <Container>
      <Content>
        <img src={logoImg} alt="dt money"/>
        <button type="button">
          Nova tramsação
        </button>
      </Content>
    </Container>
  );
}