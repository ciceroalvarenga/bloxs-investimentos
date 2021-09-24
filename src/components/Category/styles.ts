import { RectButton } from 'react-native-gesture-handler';
import styled from 'styled-components/native';


interface PropsButton {
  checked: boolean;
}

export const Container = styled.TouchableOpacity<PropsButton>`
    height: 40px;
    justify-content: center;
    padding: 10px;
    margin-right: 10px;
    align-items: center;
    border-radius: 5px;
    background-color: ${({checked,theme}) => checked ? theme.colors.investimentIcon : theme.colors.secondary};
`;

export const Title = styled.Text<PropsButton>`
    color: ${({checked,theme}) => checked ? theme.colors.background : theme.colors.iconActive};
`;