import styled from 'styled-components/native';

type TitleShimmerProps = {
  width: number
}

export const Container = styled.View`
  background-color: ${({theme}) => theme.colors.primary};
  height: 300px;
  width: 100%;
  margin-bottom: 15px;
  border-radius: 10px;  
  overflow: hidden;
`;

export const ImageShimmer = styled.View`
  width: 100%;
  height: 200px;
  border-radius: 10px;
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
  background-color: ${({theme}) => theme.colors.secondary};
  overflow: hidden;
`;

export const ContainerShimmer = styled.View`
  margin: 0 20px;

`;

export const TitleShimmer = styled.View<TitleShimmerProps>`
  margin-top: 20px;
  width: ${({width}) => `${width}%`};
  border-radius: 2px;
  height: 15px;
  background-color: ${({theme}) => theme.colors.secondary};
  overflow: hidden;
`;