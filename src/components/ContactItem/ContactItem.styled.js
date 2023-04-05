import styled from 'styled-components';

export const Avatar = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 35px;
  height: 35px;
  border-radius: 50%;
  color: white;
`;

export const Button = styled.button`
  border: none;
  background-color: transparent;
  cursor: pointer;
  opacity: 0.7;
  :hover,
  :focus {
    opacity: 1;
    /*  color: #7286d3; */
  }
`;

export const Link = styled.a`
  background-color: transparent;
  cursor: pointer;
  opacity: 0.7;
  :hover,
  :focus {
    opacity: 1;
  }
  :visited {
    opacity: 0.7;
  }
`;

export const TableHead = styled.th`
  padding: 15px;
  font-size: 16px;
  color: black;
  font-weight: 400;
`;

export const TableRow = styled.tr`
  background-color: transparent;
  transition: opacity 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  :hover {
    background-color: #e5e0ff;
  }
`;

export const NumberCeil = styled.td`
  padding: 10px;
  text-align: left;
`;

export const NameCeil = styled.td`
  display: flex;
  align-items: center;
  gap: 15px;
  padding: 10px 15px;
  text-align: center;
`;

export const ActionCeil = styled.td`
  display: flex;
  align-items: center;
  gap: 15px;
  padding: 10px;
  text-align: center;
  justify-content: center;
`;
