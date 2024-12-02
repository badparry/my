import React from 'react';
import {
  Box,
  VStack,
  HStack,
  Text,
  Icon,
  Switch,
  Avatar,
  useColorModeValue,
} from '@chakra-ui/react';
import {
  IoWalletOutline,
  IoShieldCheckmarkOutline,
  IoNotificationsOutline,
  IoLanguageOutline,
  IoHelpCircleOutline,
  IoInformationCircleOutline,
  IoLogOutOutline,
  IoChevronForward,
} from 'react-icons/io5';
import { useNavigate } from 'react-router-dom';

function MoreScreen() {
  const navigate = useNavigate();
  const bgColor = useColorModeValue('white', 'gray.800');

  const menuItems = [
    {
      section: '계정',
      items: [
        {
          icon: IoWalletOutline,
          title: '지갑 관리',
          hasChevron: true,
          path: '/more/wallet-management',
        },
        {
          icon: IoShieldCheckmarkOutline,
          title: '보안',
          hasChevron: true,
          path: '/more/security',
        },
      ],
    },
    {
      section: '설정',
      items: [
        {
          icon: IoNotificationsOutline,
          title: '알림',
          hasChevron: true,
          path: '/more/notifications',
          badge: '3',
        },
        {
          icon: IoLanguageOutline,
          title: '언어',
          subtitle: '한국어',
          hasChevron: true,
          path: '/more/language',
        },
      ],
    },
    {
      section: '지원',
      items: [
        {
          icon: IoHelpCircleOutline,
          title: '고객센터',
          hasChevron: true,
          path: '/more/support',
        },
        {
          icon: IoInformationCircleOutline,
          title: '앱 정보',
          subtitle: 'v1.0.0',
          hasChevron: true,
          path: '/more/app-info',
        },
      ],
    },
  ];

  const handleMenuClick = (path?: string) => {
    if (path) {
      navigate(path);
    }
  };

  return (
    <Box h="100%" bg="gray.50">
      {/* Profile Section */}
      <Box p={4} bg={bgColor} mb={2}>
        <HStack spacing={4}>
          <Avatar 
            size="lg" 
            name="User Name"
            src="https://bit.ly/dan-abramov"
          />
          <VStack align="start" spacing={1}>
            <Text fontWeight="bold" fontSize="lg">사용자</Text>
            <Text color="gray.500" fontSize="sm">wallet@example.com</Text>
          </VStack>
        </HStack>
      </Box>

      {/* Menu Sections */}
      <VStack spacing={2} p={4}>
        {menuItems.map((section, idx) => (
          <Box key={idx} w="100%">
            <Text fontSize="sm" color="gray.500" fontWeight="medium" mb={2} px={2}>
              {section.section}
            </Text>
            <Box bg={bgColor} borderRadius="2xl" overflow="hidden">
              {section.items.map((item, itemIdx) => (
                <Box
                  key={itemIdx}
                  px={4}
                  py={3.5}
                  cursor="pointer"
                  _hover={{ bg: 'gray.50' }}
                  onClick={() => handleMenuClick(item.path)}
                  borderBottomWidth={itemIdx < section.items.length - 1 ? "1px" : "0"}
                  borderColor="gray.100"
                >
                  <HStack justify="space-between">
                    <HStack spacing={3}>
                      <Icon as={item.icon} boxSize={5} color="gray.500" />
                      <Text fontWeight="medium">{item.title}</Text>
                    </HStack>
                    <HStack spacing={2} align="center">
                      {item.badge && (
                        <Box
                          px={2}
                          py={0.5}
                          borderRadius="full"
                          bg="blue.100"
                          color="blue.600"
                          fontSize="xs"
                          fontWeight="medium"
                        >
                          {item.badge}
                        </Box>
                      )}
                      {item.subtitle && (
                        <Text fontSize="sm" color="gray.500">
                          {item.subtitle}
                        </Text>
                      )}
                      {item.hasChevron && (
                        <Icon as={IoChevronForward} boxSize={5} color="gray.400" />
                      )}
                    </HStack>
                  </HStack>
                </Box>
              ))}
            </Box>
          </Box>
        ))}

        {/* Logout Button */}
        <Box w="100%" mt={4}>
          <Box
            bg={bgColor}
            borderRadius="2xl"
            px={4}
            py={3.5}
            cursor="pointer"
            _hover={{ bg: 'gray.50' }}
          >
            <HStack spacing={3} color="red.500">
              <Icon as={IoLogOutOutline} boxSize={5} />
              <Text fontWeight="medium">로그아웃</Text>
            </HStack>
          </Box>
        </Box>
      </VStack>
    </Box>
  );
}

export default MoreScreen;