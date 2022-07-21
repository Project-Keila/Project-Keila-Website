import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Link from "next/link";
import Button from "../Button/Button";
import HambrgerMenu from "./HamburgerMenu";
import { useRouter } from "next/router";
import Web3 from "web3";
import Web3Modal from "web3modal";
import { ethers, providers } from "ethers";
import { providerOptions } from "../../utils/utils";
import { errorAlertCenter } from "../../utils/toastGroup";
import { CHAIN_ID, NETWORK, SITE_ERROR } from "../../config";

let web3Modal = undefined;
let contract = undefined;

export default function NavBar({ isLanding }) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [connected, setConnected] = useState(false);
  const [signerAddress, setSignerAddress] = useState("");

  const connectWallet = async () => {
    if (await checkNetwork()) {
      setLoading(true)
      web3Modal = new Web3Modal({
        network: NETWORK, // optional
        cacheProvider: true,
        providerOptions, // required
      })
      const provider = await web3Modal.connect()
      const web3Provider = new providers.Web3Provider(provider)

      const signer = web3Provider.getSigner()
      const address = await signer.getAddress()

      setConnected(true)
      setSignerAddress(address)

      // Subscribe to accounts change
      provider.on("accountsChanged", (accounts) => {
        console.log(accounts[0], '--------------')
      })
    }
  }

  const checkNetwork = async () => {
    const web3 = new Web3(Web3.givenProvider)
    const chainId = await web3.eth.getChainId()
    if (chainId === CHAIN_ID) {
      return true
    } else {
      errorAlertCenter(SITE_ERROR[0])
      return false
    }
  }

  useEffect(() => {
    async function fetchData() {
      if (typeof window.ethereum !== 'undefined') {
        if (await checkNetwork()) {
          await connectWallet()
          ethereum.on('accountsChanged', function (accounts) {
            window.location.reload()
          })
          if (ethereum.selectedAddress !== null) {
            setSignerAddress(ethereum.selectedAddress)
            setConnected(true)
          }
          ethereum.on('chainChanged', (chainId) => {
            checkNetwork()
          })
        }
      } else {
        errorAlertCenter(SITE_ERROR[1])
      }
    }
    fetchData()
    // eslint-disable-next-line
  }, [])

  return (
    <NavContainer isLanding={isLanding}>
      <LogoImg onClick={() => router.push("/")} src="logo.png" />
      <Links>
        <NavItem>
          <NavLink href="/">
            <a>Home</a>
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="/calculator">
            <a>Calculator</a>
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="/about">
            <a>About</a>
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="/partners">
            <a>Partners</a>
          </NavLink>
        </NavItem>
      </Links>
      <BtnDiv onClick={() => connectWallet()}>
          {!connected ?
            <>
              <Button title="Wallet connect"></Button>
            </>
            :
            <Button title={`0x${signerAddress.slice(2, 5)}...${signerAddress.slice(-5)}`}></Button>
          }
      </BtnDiv>
      <HambrgerMenu />
    </NavContainer>
  );
}

export const NavContainer = styled.div`
  padding: 0px 20px;
  width: calc(100vw - 18px);
  position: ${(props) => (props.isLanding ? "absolute" : "relative")};
  height: 70px;
  z-index: 100;
  top: 0px;
  background-image: ${(props) =>
    props.isLanding ? "url('')" : "url('./banner.png')"} !important;
  background-position: center !important;
  background-repeat: no-repeat !important;
  background-size: cover !important;
  background: transparent;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const LogoImg = styled.img`
  width: 90px;
  cursor: pointer;
`;

const Links = styled.div`
  flex: 1;
  display: flex;
  justify-content: space-around;
  @media (max-width: 768px) {
    display: none;
  }
`;

export const NavItem = styled.div`
  display: inline;
  color: white;
  font-family: Montserrat;
  font-weight: 800;
`;

export const NavLink = styled(Link)`
  text-decoration: none;
`;

const BtnDiv = styled.div`
  @media (max-width: 768px) {
    display: none;
  }
`;
