import styled from 'styled-components';

export const List = styled.ul`
  max-width: calc(100% - 40px);
  padding: 0 20px 20px;
`;

export const Item = styled.li`
  display: flex;
  justify-content: start;
  align-items: center;
  font-weight: 500;
  margin-bottom: 4px;

  &::before {
    content: '';
    width: 6px;
    height: 6px;
    background-color: #000000;
    border-radius: 50%;
    margin-right: 10px;
  }

  & > button {
    display: none;
    width: 80px;
  }

  &:hover > button {
    display: block;
  }
`;

export const Name = styled.span`
  width: 160px;
`;

export const Number = styled.span`
  width: 80px;
`;
