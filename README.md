# nullstack-fontawesome

> Font Awesome Nullstack component

## Install
```bash
npm i nullstack-fontawesome
```

or, with yarn

```bash
yarn add nullstack-fontawesome
```

## Usage

```jsx
// Home.nts
import Nullstack, { NullstackClientContext } from 'nullstack'
import { FaIcon } from 'nullstack-fontawesome'

export default class Home extends Nullstack {
  prepare({ project, page }: NullstackClientContext) {
    page.title = `Home | ${project.name}`
    page.description = `${project.name}, a Nullstack project`
  }

  render() {
    return (
      <div>
        <FaIcon icon={['fas', 'home']} size="2x" />
        <h1>Home page</h1>
      </div>
    )
  }
}
```

You can use layer too

```jsx
import Nullstack from 'nullstack'
import { FaIcon, FaLayers, FaLayersText } from 'nullstack-fontawesome'

export default function Examples() {
  return (
    <>
      {/* Layer with fixed width */}
      <FaLayers fixed-width class="fa-4x">
        {/* You can omit the prefix and just use icon name as string, 'fas' will be added automatically */}
        <FaIcon icon="archive" />
        <FaLayersText class="text-red-800" transform="down-3 shrink-14" value="SECRET" />
      </FaLayers>
    </>
  )
}
```

For more examples see the [examples](./examples) directory

## Contributing

Pull requests welcome!

Run the lint stage with `npm run lint`. Don't forget to type correctly.

Before you submit your pull request, run `npm run build` to build the project and commit the changes.

## License

[MIT](license) &copy; [Natan Feitosa](https://github.com/natanfeitosa)

Inspired by [vue-fontawesome](https://github.com/FortAwesome/vue-fontawesome)
