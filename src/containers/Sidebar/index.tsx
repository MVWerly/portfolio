import Avatar from '../../components/Avatar'
import Paragraph from '../../components/Paragraph'
import Title from '../../components/Title'
import { ButtonTheme, Description, SidebarContainer } from './styles'

type Props = {
  changeTheme: () => void
}

const Sidebar = (props: Props) => (
  <aside>
    <SidebarContainer>
      <Avatar />
      <Title fontSize={20}>Marcus Vinicius</Title>
      <Paragraph type="secundario" fontSize={16}>
        MVWerly
      </Paragraph>
      <Description type="principal">Dev FullStack</Description>
      <ButtonTheme onClick={props.changeTheme}>Trocar tema</ButtonTheme>
    </SidebarContainer>
  </aside>
)

export default Sidebar
