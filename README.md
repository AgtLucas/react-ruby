# react-ruby

React component for `<ruby>` tag

## Usage

```
yarn add react-ruby
```

```javascript
...
import Ruby from 'react-ruby'

const App = () => (
  <Ruby position='over' align='space-around'>
    <rb>超電磁砲</rb>
    <rp>（</rp><rt>レールガン</rt><rp>）</rp>
  </Ruby>
)
```

## Ruby props:

* position:
  * `over`
  * `under`
  * `inter-character`

* align
  * `start`
  * `center`
  * `space-between`
  * `space-around`
