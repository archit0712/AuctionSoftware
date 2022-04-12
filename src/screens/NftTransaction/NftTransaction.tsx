import React from "react";
import Header from "../../components/Header/Header";

import TransactionHistory from "../../components/NftTransaction/TransactionHistory/TransactionHistory";
import "./NftTransaction.module.css";

const NftTransaction = () => {
  return (
    <>
      <Header />
      <div className="wrapper">
        <h1 className="h1">Player List For Auction</h1>
        <br />
        <TransactionHistory />
        <br />
        {/* <Nftapproval />
                <br/>
                <Nsfwapproval /> */}
      </div>
    </>
  );
};

export default NftTransaction;
