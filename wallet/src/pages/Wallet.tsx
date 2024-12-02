import React, { useState, useEffect } from 'react';
import WalletBalance from '../components/WalletBalance';
import TransactionForm from '../components/TransactionForm';
import TransactionHistory from '../components/TransactionHistory';
import { WalletService } from '../services/WalletService';

const Wallet = () => {
  const [balance, setBalance] = useState<string>('0');
  const [address, setAddress] = useState<string>('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string>('');
  const [connected, setConnected] = useState(false);
  const walletService = new WalletService();

  useEffect(() => {
    loadWallet();
    setupWalletListeners();
  }, []);

  const setupWalletListeners = () => {
    walletService.listenToAccountChanges((accounts) => {
      if (accounts.length === 0) {
        setConnected(false);
        setError('지갑 연결이 해제되었습니다.');
      } else {
        loadWallet();
      }
    });

    walletService.listenToNetworkChanges(() => {
      loadWallet();
    });
  };

  const loadWallet = async () => {
    try {
      setLoading(true);
      setError('');
      const walletData = await walletService.loadWallet();
      setAddress(walletData.address);
      setBalance(walletData.balance);
      setConnected(true);
    } catch (err: any) {
      setConnected(false);
      setError(err.message || '지갑 로딩 중 오류가 발생했습니다.');
      console.error('Error loading wallet:', err);
    } finally {
      setLoading(false);
    }
  };

  const handleConnect = () => {
    loadWallet();
  };

  const handleSend = async (to: string, amount: string) => {
    if (!connected) {
      throw new Error('지갑을 먼저 연결해주세요.');
    }

    try {
      const tx = await walletService.sendTransaction(to, amount);
      await loadWallet();
      return tx;
    } catch (err: any) {
      throw new Error(err.message || '송금 중 오류가 발생했습니다.');
    }
  };

  if (loading) {
    return (
      <div className="wallet-container">
        <div className="loading">지갑 로딩 중...</div>
      </div>
    );
  }

  return (
    <div className="wallet-container">
      {error && (
        <div className="error-message">
          {error}
          {!connected && (
            <button onClick={handleConnect} className="connect-button">
              지갑 연결하기
            </button>
          )}
        </div>
      )}
      
      {connected && (
        <>
          <WalletBalance balance={balance} address={address} />
          <TransactionForm onSend={handleSend} />
          <TransactionHistory address={address} />
        </>
      )}
    </div>
  );
};

export default Wallet;