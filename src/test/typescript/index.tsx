import * as React from 'react'
import Tour from 'reactour'

const Sample = () => (
  <Tour
    badgeContent={(curr, total) => `${curr} / ${total}`}
    isOpen={true}
    steps={[]}
  />
)
