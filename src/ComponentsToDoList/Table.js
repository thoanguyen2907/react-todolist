import styled from "styled-components";

export const Table = styled.table`
  color: #fff;
  width: 100%;
  max-width: 100%;
  margin-bottom: 1rem;
  background-color: #fff;

  border-spacing: 2px;
  border-color: #fff;
`;
export const Thead = styled.thead`
  display: table-header-group;
  vertical-align: middle;
  border: 1px solid #fff;
`;

export const Tbody = styled.tbody`
  display: table-row-group;
  vertical-align: middle;
  border-color: inherit;
`;
export const Tr = styled.tr`
  display: table-row;
  vertical-align: inherit;
  border: 1px solid #fff;
`;
export const Td = styled.td`
  padding: 0.75rem;
  vertical-align: top;
  border: 1px solid #fff;
`;

export const Th = styled.th`
  background-color: #343a40;
  color: #fff;
  vertical-align: bottom;
  text-align: inherit;
  border-top: 1px solid #fff;
  padding: 0.5rem;
  vertical-align: top;
  border-bottom: 1px solid #fff;
`;
