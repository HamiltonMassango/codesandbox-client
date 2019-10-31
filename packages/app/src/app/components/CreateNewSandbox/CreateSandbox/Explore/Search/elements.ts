import styled, { css } from 'styled-components';

const svg = (hover?: boolean) => css`
background-image: url("data:image/svg+xml,%3Csvg width='13' height='12' viewBox='0 0 13 12' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M7.68564 7.60174C6.95348 8.19679 6.02089 8.55326 5.00532 8.55326C2.65163 8.55326 0.743591 6.63855 0.743591 4.27663C0.743591 1.91471 2.65163 0 5.00532 0C7.35901 0 9.26706 1.91471 9.26706 4.27663C9.26706 5.29574 8.91183 6.2316 8.31886 6.96631L12.7018 11.3646L12.0686 12L7.68564 7.60174ZM8.37155 4.27663C8.37155 6.14224 6.86444 7.65462 5.00532 7.65462C3.14621 7.65462 1.6391 6.14224 1.6391 4.27663C1.6391 2.41102 3.14621 0.898637 5.00532 0.898637C6.86444 0.898637 8.37155 2.41102 8.37155 4.27663Z' fill='${
  hover ? 'white' : '%23757575'
}'/%3E%3C/svg%3E%0A");
`;

export const SearchElement = styled.input`
  background: #222222;
  border: 1px solid #040404;
  box-sizing: border-box;
  border-radius: 2px;
  padding: 0.25rem;
  padding-left: 30px;
  padding-right: 1.5rem;
  min-width: 14rem;
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  display: flex;
  align-items: center;
  color: #ffffff;
  ${svg()}
  background-repeat: no-repeat;
  background-position-x: 0.5rem;
  background-position-y: 50%;
  transition: width 1s ease, border-color 200ms ease;

  &:focus {
    border-color: #757575;
    ${svg(true)}
  }

  &::-webkit-input-placeholder {
    color: #757575;
  }
  &::-moz-placeholder {
    color: #757575;
  }
  &:-ms-input-placeholder {
    color: #757575;
  }
`;
