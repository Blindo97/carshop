import { HStack, Link, Text } from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";

const DesktopNavBar = () => {
  return (
    <HStack margin={2} justifyContent={"space-between"} color={"lime"}>
      <Link
        isExternal
        href="https://blindo97.github.io/portfolio/#/"
        _hover={{ textDecoration: "none" }}
      >
        <Text fontSize={"3xl"}> {"<Ege_incedogan />"} </Text>
      </Link>
      <Link
        isExternal
        _hover={{ textDecoration: "none" }}
        href="https://blindo97.github.io/portfolio/#/projects"
      >
        <HStack>
          <Text fontSize={"xl"}>Check my other projects</Text>{" "}
          <ExternalLinkIcon />
        </HStack>
      </Link>
    </HStack>
  );
};

export default DesktopNavBar;
