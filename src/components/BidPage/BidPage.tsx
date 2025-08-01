import React from 'react'
import { Page } from 'beland-uikit'
import { AssetType } from '../../modules/asset/types'
import { Navbar } from '../Navbar'
import { Footer } from '../Footer'
import { Wallet } from '../Wallet'
import { AssetProviderPage } from '../AssetProviderPage'
import { BidModal } from './BidModal'
import { Props } from './BidPage.types'

const BidPage = (props: Props) => {
  const { authorizations, onNavigate, onPlaceBid, isPlacingBid } = props
  return (
    <>
      <Navbar isFullscreen />
      <Page className="BidPage">
        <Wallet>
          {wallet => (
            <AssetProviderPage type={AssetType.NFT}>
              {nft => (
                <BidModal
                  nft={nft}
                  wallet={wallet}
                  authorizations={authorizations}
                  onNavigate={onNavigate}
                  onPlaceBid={onPlaceBid}
                  isPlacingBid={isPlacingBid}
                />
              )}
            </AssetProviderPage>
          )}
        </Wallet>
      </Page>
      <Footer />
    </>
  )
}

export default React.memo(BidPage)
