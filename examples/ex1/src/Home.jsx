import Nullstack from 'nullstack'
import { FaIcon, FaLayers, FaLayersText } from 'nullstack-fontawesome'
import { faChessQueen } from '@fortawesome/free-solid-svg-icons'

class Home extends Nullstack {

  prepare({ project, page, greeting }) {
    page.title = `Home | ${project.name}`
    page.description = `${project.name} built with Nullstack`
  }

  render({ project, greeting }) {
    return (
      <section>
        <ul>
          <li>
            <FaIcon icon="coffee" size="4x" />
          </li>
          <li>
            <FaIcon icon={['fas', 'coffee']} flip="horizontal" size="4x" />
          </li>
          <li>
            <FaIcon icon={['far', 'comment']} size="4x" />
          </li>
          <li>
            <FaIcon icon="child" transform="shrink-4 down-2 right-2" mask={['fas', 'circle']} size="4x" />
          </li>
          <li>
            <FaIcon icon={['fab', 'twitter']} size="4x" />
          </li>
          <li>
            <FaIcon icon={ faChessQueen } size="4x" />
          </li>
          <li>
            <FaIcon icon="chess-queen" size="4x" inverse/>
          </li>
          <li>
            <FaLayers fixed-width class="fa-4x">
              <FaIcon icon={['fas', 'archive']} />
              <FaLayersText style="color: red;" transform="down-3 shrink-14" value="SECRET" />
            </FaLayers>
          </li>
          <li>
            <FaLayers fixed-width class="fa-4x">
              <FaIcon icon={['fas', 'envelope']} />
              <FaLayersText style="color: red;" value="1" position="top-right" />
            </FaLayers>
          </li>
        </ul>
      </section>
    )
  }

}

export default Home
