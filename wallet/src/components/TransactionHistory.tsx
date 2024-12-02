import React, { useState, useEffect } from 'react';
import { ethers } from 'ethers';

interface Transaction {
  hash: string;
  from: string;
  to: string;
  value: string;
  timestamp: number;
}

interface TransactionHistoryProps {
  address: string;
}

const TransactionHistory: React.FC<TransactionHistoryProps> = ({ address }) => {
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (address) {
      loadTransactions();
    }
  }, [address]);

  const loadTransactions = async () => {
    try {
      const provider = new ethers.BrowserProvider(window.ethereum);
      const blockNumber = await provider.getBlockNumber();
      const block = await provider.getBlock(blockNumber);
      
      if (block && block.transactions) {
        const txPromises = block.transactions.map(hash => 
          provider.getTransaction(hash)
        );
        
        const txs = await Promise.all(txPromises);
        const filtered = txs
          .filter(tx => tx && (tx.from === address || tx.to === address))
          .map(tx => ({
            hash: tx!.hash,
            from: tx!.from,
            to: tx!.to || '',
            value: ethers.formatEther(tx!.value),
            timestamp: Date.now()
          }));
          
        setTransactions(filtered);
      }
    } catch (error) {
      console.error('거래 내역 로딩 실패:', error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <div>거래 내역 로딩 중...</div>;
  }

  return (
    <div className="transaction-history">
      <h3>거래 내역</h3>
      {transactions.length === 0 ? (
        <p>거래 내역이 없습니다.</p>
      ) : (
        <ul>
          {transactions.map(tx => (
            <li key={tx.hash}>
              <div>해시: {tx.hash.substring(0, 10)}...</div>
              <div>보낸이: {tx.from.substring(0, 10)}...</div>
              <div>받는이: {tx.to.substring(0, 10)}...</div>
              <div>금액: {tx.value} ETH</div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default TransactionHistory;