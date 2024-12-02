import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Box } from '@chakra-ui/react';
import WalletScreen from '../screens/WalletScreen';
import FeedScreen from '../screens/FeedScreen';
import FeedDetailScreen from '../screens/FeedDetailScreen';
import ChatScreen from '../screens/ChatScreen';
import ChatRoomScreen from '../screens/ChatRoomScreen';
import MoreScreen from '../screens/MoreScreen';
import TokenDetailScreen from '../screens/TokenDetailScreen';
import MarketDetailScreen from '../screens/MarketDetailScreen';
import NFTDetailScreen from '../screens/NFTDetailScreen';
import WalletManagementScreen from '../screens/more/WalletManagementScreen';
import SecurityScreen from '../screens/more/SecurityScreen';
import NotificationSettingsScreen from '../screens/more/NotificationSettingsScreen';
import NotificationDetailScreen from '../screens/more/notifications/NotificationDetailScreen';
import LanguageScreen from '../screens/more/LanguageScreen';
import SupportScreen from '../screens/more/SupportScreen';
import AppInfoScreen from '../screens/more/AppInfoScreen';

function MainContent() {
  return (
    <Box 
      pb="70px" 
      h="100%" 
      overflow="auto"
      position="relative"
      sx={{
        '&::-webkit-scrollbar': {
          display: 'none'
        },
        scrollbarWidth: 'none'
      }}
    >
      <Routes>
        <Route path="/" element={<FeedScreen />} />
        <Route path="/feed/:id" element={<FeedDetailScreen />} />
        <Route path="/wallet" element={<WalletScreen />} />
        <Route path="/wallet/token/:id" element={<TokenDetailScreen />} />
        <Route path="/wallet/nft/:id" element={<NFTDetailScreen />} />
        <Route path="/market/:coinId" element={<MarketDetailScreen />} />
        <Route path="/chat" element={<ChatScreen />} />
        <Route path="/chat/:roomId" element={<ChatRoomScreen />} />
        <Route path="/more" element={<MoreScreen />} />
        <Route path="/more/wallet-management" element={<WalletManagementScreen />} />
        <Route path="/more/security" element={<SecurityScreen />} />
        <Route path="/more/notifications" element={<NotificationSettingsScreen />} />
        <Route path="/more/notifications/:type" element={<NotificationDetailScreen />} />
        <Route path="/more/language" element={<LanguageScreen />} />
        <Route path="/more/support" element={<SupportScreen />} />
        <Route path="/more/app-info" element={<AppInfoScreen />} />
      </Routes>
    </Box>
  );
}

export default MainContent;