import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export const Container = styled.View`
  background-color: ${({theme}) => theme.colors.primary};
  height: auto;
  width: 100%;
  margin-bottom: 15px;
  border-radius: 10px;
  position: relative;
`;

export const IconConainerButton = styled.TouchableOpacity`
  align-items: flex-end;
  margin: 0 15px 15px 0;
  `;

export const StyledIcon = styled(Icon)`
  color: #fff;
  font-size: 25px;
`;

export const Image = styled.Image`
  width: 100%;
  height: 200px;
  border-radius: 10px;
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
`;

export const Title = styled.Text`
  color: ${({theme}) => theme.colors.title};
  margin-top: 20px;
  font-size: 16px;
  margin-right: 10px;
  margin-left: 10px;
`;