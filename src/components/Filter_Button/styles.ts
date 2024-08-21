import styled from "styled-components";

export const FilterWrapper = styled.div`
  display: flex;
  border: 1px solid #E0E0E0;
  background-color: #F5F5F5;
  padding: 5px;
  max-width: 251px;
  height: 40px;
  align-items: center;
  border-radius: 10px;
`;

export const FilterButton = styled.button<{isActive: boolean, activeFilter: string }>`
  padding: 8px 16px;
  width: 119px;
  height: 32px;
  font-size: 14px;
  font-family: Poppins;
  font-weight: 400;
  letter-spacing: 0.2px;
  border: none;
  border-radius: 8px;
  background-color: ${({ isActive, activeFilter }) => (isActive ? (activeFilter === 'alta' ? '#00C247' : '#FF3333') : '#f4f4f4')};
  color: ${({ isActive }) => (isActive ? '#FFFFFF' : '#9E9E9E')};
  cursor: pointer;
`;