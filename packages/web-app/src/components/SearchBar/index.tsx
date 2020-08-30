import React from "react";
import { Container, Input, InputContainer, Button } from "./styles";
import { IoMdSearch as Search } from "react-icons/io";
import { useTheme } from "styled-components";

const SearchBar: React.FC = () => {
  const theme = useTheme();
  return (
    <>
      <Container>
        <InputContainer>
          <Input placeholder="Search pizzas by name" />
          <Button>
            <Search />
          </Button>
        </InputContainer>
      </Container>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill={theme.palette.primary}
          fillOpacity="1"
          d="M0,224L48,234.7C96,245,192,267,288,245.3C384,224,480,160,576,160C672,160,768,224,864,240C960,256,1056,224,1152,218.7C1248,213,1344,235,1392,245.3L1440,256L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
        ></path>
      </svg>
    </>
  );
};

export default SearchBar;
