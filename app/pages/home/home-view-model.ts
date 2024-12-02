import { Observable } from '@nativescript/core';
import { WalletService } from '../../services/wallet.service';
import { PriceService } from '../../services/price.service';
import { ChatService } from '../../services/chat.service';

export class HomeViewModel extends Observable {
    private walletService: WalletService;
    private priceService: PriceService;
    private chatService: ChatService;

    constructor() {
        super();

        this.walletService = new WalletService();
        this.priceService = new PriceService();
        this.chatService = new ChatService();

        this.initializeWallet();
        this.initializeMarketData();
        this.initializeChat();

        this.set('selectedIndex', 0);
        this.set('notifications', true);
        this.set('currencies', ['USD', 'EUR', 'GBP', 'JPY']);
        this.set('selectedCurrency', 0);
    }

    async initializeWallet() {
        try {
            const address = await this.walletService.createWallet();
            this.set('address', address);
            this.set('balance', '0.00 ETH');
        } catch (error) {
            console.error('Wallet initialization error:', error);
        }
    }

    async initializeMarketData() {
        try {
            const data = await this.priceService.getPrices(['bitcoin', 'ethereum']);
            this.set('marketData', data);
        } catch (error) {
            console.error('Market data error:', error);
        }
    }

    initializeChat() {
        this.set('messages', []);
        this.set('newMessage', '');

        this.chatService.getMessages().subscribe(message => {
            const messages = this.get('messages');
            this.set('messages', [...messages, message]);
        });
    }

    onSend() {
        const recipientAddress = this.get('recipientAddress');
        const amount = this.get('amount');

        if (recipientAddress && amount) {
            this.walletService.sendTransaction(recipientAddress, amount, 'ethereum')
                .then(hash => {
                    console.log('Transaction sent:', hash);
                    // Update UI or show success message
                })
                .catch(error => {
                    console.error('Transaction error:', error);
                    // Show error message
                });
        }
    }

    sendMessage() {
        const newMessage = this.get('newMessage');
        if (newMessage) {
            this.chatService.sendMessage('all', newMessage);
            this.set('newMessage', '');
        }
    }

    backupWallet() {
        // Implement wallet backup logic
    }

    resetSettings() {
        this.set('notifications', true);
        this.set('selectedCurrency', 0);
    }
}