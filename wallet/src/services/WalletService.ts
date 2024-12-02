import { ethers } from 'ethers';

export class WalletService {
  private provider: ethers.BrowserProvider | null = null;

  constructor() {
    if (window.ethereum) {
      this.provider = new ethers.BrowserProvider(window.ethereum);
    }
  }

  async loadWallet() {
    if (!window.ethereum) {
      throw new Error('MetaMask를 설치해주세요.');
    }

    if (!this.provider) {
      this.provider = new ethers.BrowserProvider(window.ethereum);
    }

    try {
      const accounts = await window.ethereum.request({ 
        method: 'eth_requestAccounts' 
      });
      
      if (!accounts || accounts.length === 0) {
        throw new Error('지갑 연결이 필요합니다.');
      }

      const signer = await this.provider.getSigner();
      const address = await signer.getAddress();
      const balance = await this.provider.getBalance(address);
      
      return {
        address,
        balance: ethers.formatEther(balance)
      };
    } catch (error: any) {
      if (error.code === 4001) {
        throw new Error('지갑 연결을 거절하셨습니다. 지갑 기능을 사용하려면 MetaMask 연결을 허용해주세요.');
      }
      throw error;
    }
  }

  async sendTransaction(to: string, amount: string) {
    if (!this.provider) {
      throw new Error('지갑이 연결되어 있지 않습니다.');
    }

    try {
      const signer = await this.provider.getSigner();
      const tx = await signer.sendTransaction({
        to,
        value: ethers.parseEther(amount)
      });
      return tx.hash;
    } catch (error: any) {
      if (error.code === 4001) {
        throw new Error('거래가 취소되었습니다.');
      }
      throw new Error('거래 처리 중 오류가 발생했습니다.');
    }
  }

  async listenToAccountChanges(callback: (accounts: string[]) => void) {
    if (window.ethereum) {
      window.ethereum.on('accountsChanged', callback);
    }
  }

  async listenToNetworkChanges(callback: (chainId: string) => void) {
    if (window.ethereum) {
      window.ethereum.on('chainChanged', callback);
    }
  }
}