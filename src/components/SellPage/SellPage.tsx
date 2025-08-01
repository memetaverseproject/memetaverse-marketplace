import React from 'react'
import { Page } from 'beland-uikit'
import { AssetType } from '../../modules/asset/types'
import { Navbar } from '../Navbar'
import { Footer } from '../Footer'
import { Wallet } from '../Wallet'
import { AssetProviderPage } from '../AssetProviderPage'
import { SellModal } from './SellModal'
import { Props } from './SellPage.types'
import './SellPage.css'

const SellPage = (props: Props) => {
  const {
    authorizations,
    isLoading,
    isCreatingOrder,
    onNavigate,
    onCreateOrder
  } = props
  return (
    <>
      <Navbar isFullscreen />
      <Page className="SellPage">
        <Wallet>
          {wallet => (
            <AssetProviderPage type={AssetType.NFT}>
              {(nft, order) => (
                <SellModal
                  nft={nft}
                  order={order}
                  wallet={wallet}
                  authorizations={authorizations}
                  isLoading={isLoading}
                  isCreatingOrder={isCreatingOrder}
                  onNavigate={onNavigate}
                  onCreateOrder={onCreateOrder}
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

export default React.memo(SellPage)
