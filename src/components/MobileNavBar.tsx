import React, { useState } from "react";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Button,
  HStack,
  Link,
  Text,
} from "@chakra-ui/react";
import { ChevronDownIcon, ExternalLinkIcon } from "@chakra-ui/icons";
type NavbarProps = {
  onSort: (property: string) => void;
};

const Navbar: React.FC<NavbarProps> = ({ onSort }) => {
  //
  const handleSort = (property: string) => {
    onSort(property);
  };

  const [buttontext, setButtontext] = useState("Sort by");

  return (
    <HStack padding={2} justifyContent={"space-between"}>
      <Link isExternal
        href="https://blindo97.github.io/portfolio/#/"
        _hover={{ textDecoration: "none" }} >
        <HStack color={"lime"}>
          <Text fontSize={"2xl"}> {"<Ege />"} </Text> <ExternalLinkIcon />
        </HStack>
      </Link>
      <Menu>
        <MenuButton
          border={"2px"}
          borderColor={"lime"}
          as={Button}
          rightIcon={<ChevronDownIcon />}
        >
          {buttontext}
        </MenuButton>
        <MenuList border={"2px"} borderColor={"lime"}>
          <MenuItem
            value="default"
            onClick={() => {
              handleSort("default");
              setButtontext("Default");
            }}
          >
            Default
          </MenuItem>
          <MenuItem
            value="brand"
            onClick={() => {
              handleSort("brand");
              setButtontext("Brand Alphabetical");
            }}
          >
            Brand Alphabetical
          </MenuItem>
          <MenuItem
            value="pricelowtohigh"
            onClick={() => {
              handleSort("pricelowtohigh");
              setButtontext("Price Ascending");
            }}
          >
            Price Ascending
          </MenuItem>
          <MenuItem
            value="pricehightolow"
            onClick={() => {
              handleSort("pricehightolow");
              setButtontext("Price Descending");
            }}
          >
            Price Descending
          </MenuItem>
        </MenuList>
      </Menu>
    </HStack>
  );
};

export default Navbar;
