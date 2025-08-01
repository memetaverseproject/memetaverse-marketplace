import React from 'react'
import classNames from 'classnames'
import { Container } from 'beland-uikit'
import { PageHeader } from '../../PageHeader'
import Title from '../Title'
import { Box } from '../../AssetBrowse/Box'
import { Props } from './BaseDetail.types'
import './BaseDetail.css'

const BaseDetail = ({
  asset,
  assetImage,
  badges,
  left,
  box,
  below,
  className
}: Props) => {
  return (
    <div className={classNames('BaseDetail', className)}>
      <PageHeader>{assetImage}</PageHeader>
      <Container>
        <div className="info">
          <div className="left">
            <div>
              <Title asset={asset} />
              <div className="badges">{badges}</div>
            </div>
            {left}
          </div>
          <div className="right">
            <Box className="box" childrenClassName="box-children">
              {box}
            </Box>
          </div>
        </div>
        {below}
      </Container>
    </div>
  )
}

export default React.memo(BaseDetail)
