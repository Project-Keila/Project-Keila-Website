import { sign } from "jsonwebtoken";
import React, { useEffect } from "react";
import Modal from "react-modal";
import styled from "styled-components";
import Web3 from "web3";
import axios from "../../axios";
import { CERTIFICATE_CONTRACT_ADDRESS } from "../../config";
import { FlexCenter } from "../About/About";
import Button from "../Button/Button";
import certificateAbi from "../../abis/Certificate.json";
import { CircularProgress } from "@mui/material";
import { infoAlert } from "../../utils/toastGroup";

const customStyles = {
  content: {
    top: "55%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    backgroundColor: "white",
    width: "60%",
  },
  overlay: {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    // backgroundColor: "blue",
  },
};

const Tree = ({ src }) => {
  return (
    <FlexCenter>
      <TreeImage src={`/trees/${src}.gif`} />
    </FlexCenter>
  );
};

const TreeImage = styled.img`
  width: 30vw;
  min-width: 300px;
`;

const TreeCount = ({ setCount, count }) => {
  const handleChange = (increment) => {
    setCount((prev) => prev + increment);
  };
  return (
    <FlexBox>
      <CountButton onClick={() => handleChange(-1)}>-</CountButton>
      <Count
        type="number"
        value={count}
        onChange={(e) => setCount(parseInt(e.target.value))}
      />
      <CountButton onClick={() => handleChange(1)}>+</CountButton>
    </FlexBox>
  );
};

const FlexBox = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 60%;
  min-width: fit-content;
  margin-left: auto;
  margin-right: auto;
`;

const CountButton = styled.button`
  font-family: "Inter";
  background: #ffb000;
  font-style: normal;
  font-weight: 700;
  font-size: 48px;
  text-align: center;
  border-radius: 20px;
  width: 70px;
  border-color: transparent;
  cursor: pointer;
`;
const Count = styled.input`
  border: 1px solid black;
  padding: 10px;
  min-width: 40px;
  text-align: center;
`;

const MintModal = ({ open, handleClose, modalData }) => {
  const [count, setCount] = React.useState(0);
  const [name, setName] = React.useState("");
  const [loading, setLoading] = React.useState(false);
  // const [address, setAddress] = React.useState("");
  const [scannerUrl, setScannerUrl] = React.useState();

  const web3 = new Web3(Web3.givenProvider);
  const mint = async () => {
    try {
      const accounts = await web3.eth.getAccounts();
      const address = accounts[0];
      const certificateContract = new web3.eth.Contract(
        certificateAbi,
        CERTIFICATE_CONTRACT_ADDRESS
      );
      setLoading(true);
      const { data } = await axios.post(`/metadata/certificate`, {
        token: sign(
          { name, quantity: count, type: "apple-tree" },
          "b90d04d4-dc62-47ee-bf05-98796ebbcd23"
        ),
      });
      setLoading(false);
      if (address && data) {
        setLoading(true);
        const mintData = await certificateContract.methods
          .mint(
            data.metadata,
            web3.utils.toWei(`${200 * parseInt(count)}`, "ether")
          )
          .send({
            from: address,
            value: web3.utils.toWei(`${200 * parseInt(count)}`, "ether"),
          });
        console.log(mintData);
        setScannerUrl(
          (prev) =>
            `https://mumbai.polygonscan.com/tx/${mintData.transactionHash}`
        );
      }
      setLoading(false);
    } catch (error) {
      console.log(error);
      alert("Oops! Something went wrong!");
      setLoading(false);
    }
  };

  useEffect(() => {
    if (scannerUrl) {
      infoAlert(() => (
        <div>
          View the Transaction on polygon scan : <a href={scannerUrl}>view</a>
        </div>
      ));
    }
  }, [scannerUrl]);

  return (
    <Modal ariaHideApp={false} isOpen={open} style={customStyles}>
      {loading ? (
        <FlexCenter>
          <CircularProgress />
        </FlexCenter>
      ) : (
        <>
          <Flex>
            <H2>
              {modalData.title !== "Apple Tree"
                ? "OUT OF STOCK"
                : modalData.title}
            </H2>
            {/* <button onClick={handleClose}>close</button> */}
            <svg
              fill="#000000"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 30 30"
              width="30px"
              height="30px"
              style={{ cursor: "pointer" }}
              onClick={handleClose}
            >
              {" "}
              <path d="M 7 4 C 6.744125 4 6.4879687 4.0974687 6.2929688 4.2929688 L 4.2929688 6.2929688 C 3.9019687 6.6839688 3.9019687 7.3170313 4.2929688 7.7070312 L 11.585938 15 L 4.2929688 22.292969 C 3.9019687 22.683969 3.9019687 23.317031 4.2929688 23.707031 L 6.2929688 25.707031 C 6.6839688 26.098031 7.3170313 26.098031 7.7070312 25.707031 L 15 18.414062 L 22.292969 25.707031 C 22.682969 26.098031 23.317031 26.098031 23.707031 25.707031 L 25.707031 23.707031 C 26.098031 23.316031 26.098031 22.682969 25.707031 22.292969 L 18.414062 15 L 25.707031 7.7070312 C 26.098031 7.3170312 26.098031 6.6829688 25.707031 6.2929688 L 23.707031 4.2929688 C 23.316031 3.9019687 22.682969 3.9019687 22.292969 4.2929688 L 15 11.585938 L 7.7070312 4.2929688 C 7.5115312 4.0974687 7.255875 4 7 4 z" />
            </svg>
          </Flex>
          <Tree src={modalData.image} />
          <TreeCount setCount={setCount} count={count} />
          <FlexCenter>
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              type="text"
              placeholder="Name on certificate"
            />
          </FlexCenter>
          <Offset>Offsets Carbon by 21kg</Offset>
          <FlexCenter>
            <Button
              disabled={modalData.title !== "Apple Tree" ? true : false}
              title="Mint"
              onClick={mint}
            />
          </FlexCenter>
        </>
      )}
    </Modal>
  );
};

export default MintModal;

const Flex = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  h2 {
    flex: 1;
  }
`;

const H2 = styled.h2`
  text-align: center;
`;

const Offset = styled.p`
  text-align: center;
  color: #8e8e8e;
`;
