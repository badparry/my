export interface Message {
  id: number;
  sender: string;
  content: string;
  timestamp: string;
  isMine: boolean;
  unread?: boolean;
}

export interface ChatRoom {
  id: string;
  name: string;
  avatar: string;
  messages: Message[];
}

export const chatRooms: Record<string, ChatRoom> = {
  '1': {
    id: '1',
    name: '코인마스터',
    avatar: 'https://bit.ly/dan-abramov',
    messages: [
      {
        id: 1,
        sender: '코인마스터',
        content: '오늘 BTC/USD 차트 분석해보니 240MA가 강한 지지선을 형성하고 있네요.',
        timestamp: '오후 2:30',
        isMine: false,
        unread: true
      },
      {
        id: 2,
        sender: '나',
        content: '맞아요. RSI도 과매도 구간에서 반등하는 모습이에요.',
        timestamp: '오후 2:31',
        isMine: true
      },
    ],
  },
  '2': {
    id: '2',
    name: '이더리움 개발자 모임',
    avatar: 'https://bit.ly/ryan-florence',
    messages: [
      {
        id: 1,
        sender: '이더리움 개발자 모임',
        content: '새로운 EIP-4844 구현하신 분 계신가요?',
        timestamp: '오후 1:15',
        isMine: false,
        unread: true
      },
    ],
  },
  '3': {
    id: '3',
    name: 'DeFi 연구소',
    avatar: 'https://bit.ly/prosper-baba',
    messages: [
      {
        id: 1,
        sender: 'DeFi 연구소',
        content: '새로운 유동성 풀 설계안 공유드립니다.',
        timestamp: '오전 11:45',
        isMine: false,
        unread: true
      },
    ],
  },
  '4': {
    id: '4',
    name: 'NFT 수집가 모임',
    avatar: 'https://bit.ly/code-beast',
    messages: [
      {
        id: 1,
        sender: 'NFT 수집가 모임',
        content: '새로운 NFT 프로젝트를 소개합니다!',
        timestamp: '오전 10:20',
        isMine: false,
        unread: true
      },
    ],
  },
};