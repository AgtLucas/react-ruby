import React from 'react'
import { oneOf, node } from 'prop-types'

const Ruby = ({ position, align, children, ...props }) => (
  <ruby {...props} style={{position, align}}>
    {children}
  </ruby>
)

Ruby.propTypes = {
  position: oneOf(['over', 'under', 'inter-character', 'inherit', 'initial', 'unset']),
  align: oneOf(['start', 'center', 'space-between', 'space-around', 'inherit', 'initial', 'unset']),
  children: node.isRequired
}

Ruby.defaultProps = {
  position: 'initial',
  align: 'initial'
}

export default Ruby
