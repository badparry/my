import React from 'react';

interface WalletBalanceProps {
  balance: string;
  address: string;
}

const WalletBalance: React.FC<WalletBalanceProps> = ({ balance, address }) => {
  return (
    <div className="wallet-balance">
      <h2>내 지갑</h2>
      <div className="address">
        <span>주소: </span>
        <span className="address-text">{address}</span>
      </div>
      <div className="balance">
        <span>잔액: </span>
        <span className="balance-amount">{balance} ETH</span>
      </div>
    </div>
  );
};

export default WalletBalance;