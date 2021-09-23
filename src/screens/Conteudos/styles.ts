import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color:${({theme}) => theme.colors.background};
`;
export const ContainerCard = styled.View`
  padding: 10px 24px;
`;

export const Title = styled.Text`
  color: ${({theme}) => theme.colors.title}
`;