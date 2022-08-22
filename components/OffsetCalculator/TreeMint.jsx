import React from "react";
import { Tree } from "../LandingPage/TreeImages";
import styled from "styled-components";
import MintModal from "./MintModal";

const TreeMint = () => {
  const [modalOpen, setModalOpen] = React.useState(false);
  const [modalData, setModalData] = React.useState({ image: "", title: "" });

  const handleTreeClick = (data) => {
    setModalOpen(true);
    setModalData(data);
  };
  return (
    <Container>
      <h1>Mint Trees!</h1>
      <TreeImages>
        <Tree
          onClick={() =>
            handleTreeClick({ title: "Apple Tree", image: "apple-tree" })
          }
          src="apple-tree"
          title="Apple Tree"
        />
        <Tree
          onClick={() =>
            handleTreeClick({ title: "Conifer Tree", image: "conifer-tree" })
          }
          src="conifer-tree"
          title="Conifer Tree"
        />
        <Tree
          onClick={() =>
            handleTreeClick({ title: "Poplar Tree", image: "poplar-tree" })
          }
          src="poplar-tree"
          title="Poplar Tree"
        />
      </TreeImages>
      <MintModal
        modalData={modalData}
        open={modalOpen}
        handleClose={() => setModalOpen(false)}
      />
    </Container>
  );
};

export default TreeMint;

const Container = styled.div`
  h1 {
    text-align: center;
  }
`;

const TreeImages = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 50px;
  flex-wrap: wrap;
`;
