import React from "react";
import { Container, Input, InputContainer, Button } from "./styles";
import { IoMdSearch as Search } from "react-icons/io";

const SearchBar: React.FC = () => {
  return (
    <Container>
      <InputContainer>
        <Input placeholder="Search pizzas by name" />
        <Button>
          <Search />
        </Button>
      </InputContainer>
    </Container>
  );
};

export default SearchBar;
