
import styled from 'styled-components/native';

export const Container = styled.View`
  width: 70px;
  height: 70px;
  border-radius: 35px;
  background-color: ${({theme}) => theme.colors.investimentIcon};
  align-items: center;
  justify-content: center;
  margin-bottom: 70px;
`;
export const Title = styled.Text`
    color: ${({theme}) => theme.colors.title};
`;
