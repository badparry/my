import React from 'react';
import {
  Box,
  VStack,
  HStack,
  Text,
  Image,
  IconButton,
  Tag,
  Avatar,
  Button,
  useColorModeValue,
} from '@chakra-ui/react';
import { IoArrowBack, IoBookmarkOutline, IoShareSocialOutline, IoTimeOutline } from 'react-icons/io5';
import { useNavigate, useParams } from 'react-router-dom';

function FeedDetailScreen() {
  const navigate = useNavigate();
  const { id } = useParams();
  const bgColor = useColorModeValue('gray.50', 'gray.900');

  const trends = {
    '1': {
      id: 1,
      title: "비트코인 신고가 경신",
      content: `비트코인이 7만 달러를 돌파하며 새로운 역사를 썼습니다. 
      
      시장 전문가들은 이번 상승세가 기관 투자자들의 참여 증가와 비트코인 ETF 승인 기대감에 기인한다고 분석했습니다.
      
      특히 최근 몇 주간 대형 금융기관들의 암호화폐 시장 진출이 이어지면서, 시장의 신뢰도가 크게 향상된 것으로 보입니다.
      
      향후 전망에 대해서는 강세장이 지속될 것이라는 의견이 우세하나, 단기적인 조정 가능성도 제기되고 있습니다.`,
      image: "https://images.unsplash.com/photo-1518546305927-5a555bb7020d?auto=format&fit=crop&w=800&q=80",
      readTime: "2분",
      tags: ["비트코인", "시장동향"],
      trend: "+12.5%",
      author: {
        name: "김분석",
        avatar: "https://bit.ly/dan-abramov",
        role: "암호화폐 애널리스트"
      },
      publishedAt: "2024년 3월 5일"
    },
    '2': {
      id: 2,
      title: "이더리움 업그레이드 예정",
      content: `이더리움 재단이 다음 달 새로운 네트워크 업그레이드를 발표했습니다.

      이번 업그레이드는 네트워크의 확장성과 보안성을 크게 향상시킬 것으로 기대됩니다.
      
      주요 변경사항:
      - 가스비 최적화
      - 샤딩 구현
      - 스테이킹 효율성 개선
      
      개발자 커뮤니티에서는 이번 업그레이드가 DeFi 생태계에 미칠 긍정적인 영향에 대해 기대감을 표현하고 있습니다.`,
      image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&w=800&q=80",
      readTime: "3분",
      tags: ["이더리움", "기술"],
      trend: "+5.2%",
      author: {
        name: "이개발",
        avatar: "https://bit.ly/ryan-florence",
        role: "블록체인 개발자"
      },
      publishedAt: "2024년 3월 4일"
    },
    '3': {
      id: 3,
      title: "NFT 시장 회복세",
      content: `NFT 거래량이 3개월 만에 최고치를 기록했습니다.
      
      주요 NFT 마켓플레이스들의 일일 거래량이 전월 대비 150% 증가했으며, 
      특히 게임 및 메타버스 관련 NFT들의 성장이 두드러졌습니다.
      
      새로운 NFT 프로젝트들의 런칭도 증가 추세를 보이고 있어,
      2024년 NFT 시장은 본격적인 회복기에 접어들 것으로 전망됩니다.`,
      image: "https://images.unsplash.com/photo-1620321023374-d1a68fbc720d?auto=format&fit=crop&w=800&q=80",
      readTime: "4분",
      tags: ["NFT", "시장분석"],
      trend: "+8.7%",
      author: {
        name: "박트렌드",
        avatar: "https://bit.ly/prosper-baba",
        role: "NFT 전문가"
      },
      publishedAt: "2024년 3월 3일"
    },
    '4': {
      id: 4,
      title: "디파이 프로토콜 업데이트",
      content: `주요 디파이 프로토콜들이 새로운 기능을 추가하며 경쟁력을 강화하고 있습니다.
      
      최근 발표된 주요 업데이트:
      - 크로스체인 유동성 풀 도입
      - 위험 관리 시스템 강화
      - 수익률 최적화 알고리즘 개선
      
      이러한 혁신적인 기능들은 디파이 생태계의 안정성과 효율성을 높일 것으로 기대됩니다.`,
      image: "https://images.unsplash.com/photo-1605792657660-596af9009e82?auto=format&fit=crop&w=800&q=80",
      readTime: "3분",
      tags: ["DeFi", "업데이트"],
      trend: "+4.3%",
      author: {
        name: "정디파이",
        avatar: "https://bit.ly/kent-c-dodds",
        role: "DeFi 리서처"
      },
      publishedAt: "2024년 3월 2일"
    },
    '5': {
      id: 5,
      title: "레이어2 솔루션 성장",
      content: `이더리움 레이어2 솔루션의 사용량이 크게 증가하고 있습니다.
      
      주요 레이어2 프로토콜들의 총 예치금(TVL)이 사상 최고치를 기록했으며,
      일일 활성 사용자 수도 꾸준한 증가세를 보이고 있습니다.
      
      특히 ZK-롤업 기술을 적용한 솔루션들이 높은 성장세를 보이고 있어,
      향후 레이어2 생태계의 발전이 더욱 가속화될 것으로 전망됩니다.`,
      image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&w=800&q=80",
      readTime: "5분",
      tags: ["Layer2", "스케일링"],
      trend: "+6.1%",
      author: {
        name: "최스케일",
        avatar: "https://bit.ly/sage-adebayo",
        role: "블록체인 연구원"
      },
      publishedAt: "2024년 3월 1일"
    }
  };

  const trend = trends[id as keyof typeof trends];

  if (!trend) {
    return (
      <Box p={4}>
        <Text>게시글을 찾을 수 없습니다.</Text>
      </Box>
    );
  }

  return (
    <Box bg={bgColor} minH="100vh">
      <Box bg="white" position="sticky" top={0} zIndex={10} shadow="sm">
        <HStack p={4} justify="space-between">
          <IconButton
            icon={<IoArrowBack />}
            aria-label="Back"
            variant="ghost"
            onClick={() => navigate(-1)}
          />
          <HStack>
            <IconButton
              icon={<IoBookmarkOutline />}
              aria-label="Bookmark"
              variant="ghost"
            />
            <IconButton
              icon={<IoShareSocialOutline />}
              aria-label="Share"
              variant="ghost"
            />
          </HStack>
        </HStack>
      </Box>

      <VStack spacing={6} p={4} align="stretch">
        <VStack align="start" spacing={4}>
          <HStack spacing={3}>
            <Avatar 
              size="md" 
              src={trend.author.avatar} 
              name={trend.author.name}
            />
            <Box>
              <Text fontWeight="bold">{trend.author.name}</Text>
              <Text fontSize="sm" color="gray.500">{trend.author.role}</Text>
            </Box>
          </HStack>
          
          <Text fontSize="2xl" fontWeight="bold">
            {trend.title}
          </Text>

          <HStack spacing={2}>
            <Tag size="sm" colorScheme="green">트렌드 {trend.trend}</Tag>
            <HStack spacing={1} color="gray.500">
              <IoTimeOutline />
              <Text fontSize="sm">{trend.readTime} 소요</Text>
            </HStack>
          </HStack>
        </VStack>

        <Image
          src={trend.image}
          alt={trend.title}
          borderRadius="xl"
          w="100%"
          h="200px"
          objectFit="cover"
        />

        <VStack align="start" spacing={4}>
          <Text whiteSpace="pre-line" color="gray.700" lineHeight="1.7">
            {trend.content}
          </Text>

          <HStack flexWrap="wrap" spacing={2}>
            {trend.tags.map((tag) => (
              <Tag key={tag} size="md" colorScheme="blue">
                #{tag}
              </Tag>
            ))}
          </HStack>

          <Text fontSize="sm" color="gray.500">
            발행일: {trend.publishedAt}
          </Text>
        </VStack>

        <Button colorScheme="blue" size="lg" w="100%">
          관련 코인 거래하기
        </Button>
      </VStack>
    </Box>
  );
}

export default FeedDetailScreen;