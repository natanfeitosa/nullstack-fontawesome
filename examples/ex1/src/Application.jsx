import Nullstack from 'nullstack'

import './fontawesome'
import Home from './Home'

class Application extends Nullstack {

  prepare({ page }) {
    page.locale = 'pt-BR'
  }

  renderHead() {
    return (
      <head>
        <link href="https://fonts.gstatic.com" rel="preconnect" />
        <link href="https://fonts.googleapis.com/css2?family=Crete+Round&family=Roboto&display=swap" rel="stylesheet" />
      </head>
    )
  }

  render() {
    return (
      <body style="background-color: #d8bfd8">
        <Head />
        <h1>Hello world</h1>
        <Home route="/" />
      </body>
    )
  }

}

export default Application
