import React from 'react';
import {
  Box,
  VStack,
  HStack,
  Text,
  Image,
  Flex,
  Tag,
  IconButton,
  Divider,
} from '@chakra-ui/react';
import { IoTrendingUpOutline, IoTimeOutline, IoBookmarkOutline } from 'react-icons/io5';
import { useNavigate } from 'react-router-dom';
import { useHorizontalScroll } from '../hooks/useHorizontalScroll';
import { useVerticalScroll } from '../hooks/useVerticalScroll';

function FeedScreen() {
  const navigate = useNavigate();
  const { 
    scrollRef: marketScrollRef, 
    isDragging: isMarketDragging, 
    handlers: marketHandlers 
  } = useHorizontalScroll({ speedMultiplier: 1 });
  
  const { 
    scrollRef: newsScrollRef, 
    isDragging: isNewsDragging, 
    handlers: newsHandlers 
  } = useVerticalScroll({ speedMultiplier: 1 });

  const handleItemClick = (e: React.MouseEvent, id: number) => {
    // 드래그 중일 때는 네비게이션을 막습니다
    if (isNewsDragging) {
      e.preventDefault();
      return;
    }
    navigate(`/feed/${id}`);
  };

  const handleMarketItemClick = (e: React.MouseEvent, id: string) => {
    if (isMarketDragging) {
      e.preventDefault();
      return;
    }
    navigate(`/market/${id}`);
  };

  const marketData = [
    {
      id: 'btc',
      name: '비트코인',
      symbol: 'BTC',
      price: '$69,420',
      change: '+5.2%',
      isPositive: true
    },
    {
      id: 'eth',
      name: '이더리움',
      symbol: 'ETH',
      price: '$3,890',
      change: '+3.8%',
      isPositive: true
    },
    {
      id: 'sol',
      name: '솔라나',
      symbol: 'SOL',
      price: '$125',
      change: '-2.1%',
      isPositive: false
    }
  ];

  const trends = [
    {
      id: 1,
      title: "비트코인 신고가 경신",
      content: "비트코인이 7만 달러를 돌파하며 새로운 역사를 썼습니다.",
      image: "https://images.unsplash.com/photo-1518546305927-5a555bb7020d?auto=format&fit=crop&w=800&q=80",
      readTime: "2분",
      tags: ["비트코인", "시장동향"],
      trend: "+12.5%"
    },
    {
      id: 2,
      title: "이더리움 업그레이드 예정",
      content: "이더리움 재단이 다음 달 새로운 네트워크 업그레이드를 발표했습니다.",
      image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&w=800&q=80",
      readTime: "3분",
      tags: ["이더리움", "기술"],
      trend: "+5.2%"
    },
    {
      id: 3,
      title: "NFT 시장 회복세",
      content: "NFT 거래량이 3개월 만에 최고치를 기록했습니다.",
      image: "https://images.unsplash.com/photo-1620321023374-d1a68fbc720d?auto=format&fit=crop&w=800&q=80",
      readTime: "4분",
      tags: ["NFT", "시장분석"],
      trend: "+8.7%"
    },
    {
      id: 4,
      title: "디파이 프로토콜 업데이트",
      content: "주요 디파이 프로토콜들이 새로운 기능을 추가하며 경쟁력을 강화하고 있습니다.",
      image: "https://images.unsplash.com/photo-1605792657660-596af9009e82?auto=format&fit=crop&w=800&q=80",
      readTime: "3분",
      tags: ["DeFi", "업데이트"],
      trend: "+4.3%"
    },
    {
      id: 5,
      title: "레이어2 솔루션 성장",
      content: "이더리움 레이어2 솔루션의 사용량이 크게 증가하고 있습니다.",
      image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&w=800&q=80",
      readTime: "5분",
      tags: ["Layer2", "스케일링"],
      trend: "+6.1%"
    }
  ];

  return (
    <Box h="100%" display="flex" flexDirection="column">
      {/* Market Summary - Fixed Header */}
      <Box bg="blue.50" p={4}>
        <Text fontSize="lg" fontWeight="bold" mb={3}>시장 동향</Text>
        <Box
          ref={marketScrollRef}
          overflowX="auto"
          css={{
            '&::-webkit-scrollbar': { display: 'none' },
            scrollbarWidth: 'none',
            msOverflowStyle: 'none',
            WebkitOverflowScrolling: 'touch',
            cursor: isMarketDragging ? 'grabbing' : 'grab'
          }}
          {...marketHandlers}
        >
          <HStack spacing={4} pb={2} minW="fit-content">
            {marketData.map((item) => (
              <Box 
                key={item.id}
                bg="white" 
                p={3} 
                borderRadius="lg" 
                minW="150px" 
                shadow="sm"
                transition="transform 0.2s"
                _hover={{ transform: 'translateY(-2px)' }}
                style={{ userSelect: 'none' }}
                onClick={(e) => handleMarketItemClick(e, item.id)}
                cursor="pointer"
              >
                <Text fontSize="sm" color="gray.500">{item.name}</Text>
                <Text fontSize="lg" fontWeight="bold">{item.price}</Text>
                <Text 
                  fontSize="sm" 
                  color={item.isPositive ? "green.500" : "red.500"}
                >
                  {item.change}
                </Text>
              </Box>
            ))}
          </HStack>
        </Box>
      </Box>

      {/* Trending Content - Scrollable Area */}
      <Box 
        ref={newsScrollRef}
        flex={1}
        overflowY="auto"
        css={{
          '&::-webkit-scrollbar': { display: 'none' },
          scrollbarWidth: 'none',
          msOverflowStyle: 'none',
          WebkitOverflowScrolling: 'touch',
          cursor: isNewsDragging ? 'grabbing' : 'grab'
        }}
        {...newsHandlers}
      >
        <VStack spacing={0} divider={<Divider />} w="100%">
          {trends.map((item) => (
            <Box
              key={item.id}
              p={4}
              bg="white"
              w="100%"
              style={{ userSelect: 'none' }}
              onClick={(e) => handleItemClick(e, item.id)}
              cursor="pointer"
              transition="all 0.2s"
              _hover={{ bg: 'gray.50' }}
            >
              <HStack spacing={3} mb={2}>
                <IoTrendingUpOutline size={20} color="#4A5568"/>
                <Text color="gray.600" fontSize="sm">트렌딩</Text>
                <Text color="green.500" fontSize="sm" fontWeight="bold">{item.trend}</Text>
              </HStack>

              <Text fontSize="xl" fontWeight="bold" mb={2}>{item.title}</Text>
              <Text color="gray.600" mb={3}>{item.content}</Text>

              <Image
                src={item.image}
                borderRadius="lg"
                mb={3}
                alt={item.title}
                objectFit="cover"
                height="200px"
                width="100%"
              />

              <Flex justify="space-between" align="center" mb={2}>
                <HStack spacing={2}>
                  {item.tags.map((tag) => (
                    <Tag key={tag} size="sm" colorScheme="blue">{tag}</Tag>
                  ))}
                </HStack>
                <IconButton
                  aria-label="Bookmark"
                  icon={<IoBookmarkOutline />}
                  variant="ghost"
                  size="sm"
                  onClick={(e) => {
                    e.stopPropagation();
                    // 북마크 로직 추가
                  }}
                />
              </Flex>

              <HStack color="gray.500" fontSize="sm">
                <IoTimeOutline />
                <Text>{item.readTime} 소요</Text>
              </HStack>
            </Box>
          ))}
        </VStack>
      </Box>
    </Box>
  );
}

export default FeedScreen;