import React, { useState, useEffect } from "react";
import { Container, Input, InputContainer, Button } from "./styles";
import { IoMdSearch as Search } from "react-icons/io";
import { useTheme } from "styled-components";
import { Redirect } from "react-router-dom";

const SearchBar: React.FC = () => {
  const theme = useTheme();

  const [search, setSearch] = useState("");
  const [redirect, setRedirect] = useState(false);

  const redirectToSearch = () => {
    setRedirect(true);
  };

  useEffect(() => {
    setRedirect(false);
  }, [redirect]);

  return (
    <>
      {redirect && <Redirect to={`/search/${search}`} />}
      <Container>
        <InputContainer>
          <Input
            placeholder="Search pizzas by name"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <Button onClick={redirectToSearch}>
            <Search />
          </Button>
        </InputContainer>
      </Container>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 130">
        <path
          fill={theme.palette.primary}
          fillOpacity="1"
          d="m 0,96.6237 48,6.90837 c 48,6.65011 144,20.85422 240,6.8438 96,-13.75217 192,-55.07322 288,-55.07322 96,0 192,41.32105 288,51.65132 96,10.33026 192,-10.33027 288,-13.75217 96,-3.68015 192,10.52396 240,17.17407 l 48,6.90836 V 0 H 1392 1152 864 576 288 48 0 Z"
        ></path>
      </svg>
    </>
  );
};

export default SearchBar;
