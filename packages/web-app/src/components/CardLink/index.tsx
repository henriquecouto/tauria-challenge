import React from "react";

import { Container } from "./styles";
import { IconType } from "react-icons/lib";

type Props = {
  title: string;
  to: string;
};

const CardLink: React.FC<Props> = ({ title, to, children }) => {
  return (
    <Container to={to}>
      {children}
      {title}
    </Container>
  );
};

export default CardLink;
