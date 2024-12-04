import React from 'react';
import { THeaderProps } from './types.ts';
import { MainView, SendButton, StyledImage, Title } from './styled.ts';
import { ActivityIndicator, Text, TouchableOpacity, View } from 'react-native';
import { apiPrivate } from '@common/api/api.ts';
import { Service } from '@common/services/index.ts';

export const Header = ({ avatar_url, title, setMessages }: THeaderProps) => {
  const handleDeleteHistory = async () => {
    if (setMessages === undefined) return
    await Service.ChatGptService.clearHistory()
    setMessages([])
  };
  return (
    <MainView>
      <Title>{title}</Title>
      <SendButton onPress={handleDeleteHistory}>
        <Text style={{flex: 1, textAlign: 'center', verticalAlign: 'middle', fontSize: 10}}>Удалить историю</Text>
      </SendButton>
        
    
    </MainView>
  );
};
