import React from 'react';
import {
  Box,
  VStack,
  HStack,
  Text,
  IconButton,
  useColorModeValue,
  Divider,
  Icon,
} from '@chakra-ui/react';
import { IoArrowBack, IoCheckmark } from 'react-icons/io5';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

function LanguageScreen() {
  const navigate = useNavigate();
  const { t, i18n } = useTranslation();
  const bgColor = useColorModeValue('white', 'gray.800');
  const borderColor = useColorModeValue('gray.200', 'gray.700');

  const languages = [
    { code: 'ko', name: t('languages.ko') },
    { code: 'en', name: t('languages.en') },
    { code: 'ja', name: t('languages.ja') },
    { code: 'zh', name: t('languages.zh') },
  ];

  const handleLanguageChange = (code: string) => {
    i18n.changeLanguage(code);
  };

  return (
    <Box h="100vh" bg="gray.50">
      <Box bg={bgColor} borderBottom="1px" borderColor={borderColor}>
        <HStack p={4} spacing={4}>
          <IconButton
            icon={<IoArrowBack />}
            aria-label={t('common.back')}
            variant="ghost"
            onClick={() => navigate(-1)}
          />
          <Text fontSize="lg" fontWeight="600">{t('more.language')}</Text>
        </HStack>
      </Box>

      <VStack spacing={4} p={4}>
        <Box w="100%" bg={bgColor} borderRadius="lg" overflow="hidden">
          <VStack spacing={0} divider={<Divider />}>
            {languages.map((language) => (
              <Box
                key={language.code}
                w="100%"
                p={4}
                cursor="pointer"
                _hover={{ bg: 'gray.50' }}
                onClick={() => handleLanguageChange(language.code)}
              >
                <HStack justify="space-between">
                  <Text fontWeight={i18n.language === language.code ? "600" : "normal"}>
                    {language.name}
                  </Text>
                  {i18n.language === language.code && (
                    <Icon as={IoCheckmark} color="blue.500" boxSize={5} />
                  )}
                </HStack>
              </Box>
            ))}
          </VStack>
        </Box>
      </VStack>
    </Box>
  );
}

export default LanguageScreen;