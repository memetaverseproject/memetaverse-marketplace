import React from 'react'
import { Badge } from 'beland-uikit'
import { Props } from './Coordinate.types'
import styles from './Coordinate.module.css'

const Coordinate = (props: Props) => {
  const { x, y, className } = props

  return (
    <Badge className={className} color="#37333D">
      <i className={styles.pin} />
      {`${x},${y}`}
    </Badge>
  )
}

export default React.memo(Coordinate)
