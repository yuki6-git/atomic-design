import styled from 'styled-components';
import { BaseButton } from './baseButton';
export const SecoundaryButton = (props) => {
  const { children, onClick } = props;
  return <SButton onClick={onClick}>{children}</SButton>;
};

const SButton = styled(BaseButton)`
  background-color: #11999e;
`;
