import WalletConnectProvider from "@walletconnect/web3-provider"

export const INFURA_ID = "9eda0366d20f4627860299a5ac514808"

export const providerOptions = {
    walletconnect: {
        package: WalletConnectProvider, // required
        options: {
            infuraId: INFURA_ID, // required
        },
    },
}
