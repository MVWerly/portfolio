import Paragraph from '../../components/Paragraph'
import Title from '../../components/Title'
import { GithubSection } from './styles'

const About = () => (
  <section>
    <Title fontSize={16}>Sobre</Title>
    <Paragraph>
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Id labore saepe
      dignissimos aspernatur. Impedit saepe officiis laudantium cumque ducimus
      hic tempore perspiciatis provident, repellat veniam. Enim a repellendus
      cumque? Tenetur?
    </Paragraph>
    <GithubSection>
      <img src="https://github-readme-stats.vercel.app/api?username=MVWerly&show_icons=true&theme=dracula&include_all_commits=true&count_private=true" />
      <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=MVWerly&layout=compact&langs_count=7&theme=dracula" />
    </GithubSection>
  </section>
)

export default About
