import { P } from './styles'

export type Props = {
  children: string;
  type?: 'principal' | 'secundario';
  fontSize?: number
}

const Paragraph = ({ children, type = 'principal', fontSize }: Props) => (
  <P type={type} fontSize={fontSize}>{children}</P>
)

export default Paragraph
