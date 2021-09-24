import styled from 'styled-components/native';

export const Container = styled.View`
  background-color: ${({theme}) => theme.colors.primary};
  height: 300px;
  width: 100%;
  margin-bottom: 15px;
  border-radius: 10px;
  position: relative;
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