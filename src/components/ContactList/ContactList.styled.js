import styled from 'styled-components';

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  padding: 10px;
`;

export const TableHead = styled.th`
  padding: 15px;
  font-size: 16px;
  color: black;
  font-weight: 400;
  width: 153px;
  max-height: 50px;

  :not(:last-child) {
    border-right: 2px solid #e5e0ff;
  }

  border-top: 2px solid #e5e0ff;
  border-bottom: 2px solid #e5e0ff;
`;
