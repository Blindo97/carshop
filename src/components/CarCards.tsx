import { useEffect, useState } from "react";
import {
  Card,
  CardBody,
  CardHeader,
  Image,
  SimpleGrid,
  Text,
  Button,
  Stack,
} from "@chakra-ui/react";
import cars from "../resources/cardetails/cardetails";

type CarCardsProps = {
  sortingProperty: string;
  priceRange: { minPrice: number; maxPrice: number };
};

const ITEMS_PER_PAGE = 12; // Number of cars to show per page

const formatPrice = (price: number) => {
  return price.toLocaleString(undefined);
};

const CarCards: React.FC<CarCardsProps> = ({ sortingProperty, priceRange }) => {
  const [currentPage, setCurrentPage] = useState(1);

  const sortCars = (property: string) => {
    // Sort the cars based on the selected property
    switch (property) {
      case "brand":
        return [...cars].sort((a, b) => a.brand.localeCompare(b.brand));
      case "pricelowtohigh":
        return [...cars].sort((a, b) => a.price - b.price);
      case "pricehightolow":
        return [...cars].sort((a, b) => b.price - a.price);
      case "AUDI":
        return [...cars]
          .filter((car) => car.brand === "AUDI")
          .sort((a, b) => a.brand.localeCompare(b.brand));
      case "BMW":
        return [...cars]
          .filter((car) => car.brand === "BMW")
          .sort((a, b) => a.brand.localeCompare(b.brand));
      case "Mercedes":
        return [...cars]
          .filter((car) => car.brand === "Mercedes")
          .sort((a, b) => a.brand.localeCompare(b.brand));
      case "FORD":
        return [...cars]
          .filter((car) => car.brand === "FORD")
          .sort((a, b) => a.brand.localeCompare(b.brand));
      default:
        // Default sorting
        return [...cars];
    }
  };

  const sortedCars = sortCars(sortingProperty);

  // Filter the cars based on the price range
  const filteredCars = sortedCars.filter(
    (car) =>
      car.price >= priceRange.minPrice && car.price <= priceRange.maxPrice
  );

  const totalFilteredCars = filteredCars.length;
  const totalPages = Math.ceil(totalFilteredCars / ITEMS_PER_PAGE);

  useEffect(() => {
    if (currentPage > totalPages) {
      setCurrentPage(totalPages);
    }
  }, [currentPage, totalPages]);

  const startIdx = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIdx = startIdx + ITEMS_PER_PAGE;

  const visibleCars = filteredCars.slice(startIdx, endIdx);

  const handlePageChange = (newPage: number) => {
    setCurrentPage(newPage);
  };

  return (
    <>
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
        padding={5}
        spacing={3}
      >
        {visibleCars.map((car) => (
          <Card
            margin={1}
            backgroundColor={"blackAlpha.100"}
            border={"2px"}
            borderColor={"lime"}
            key={car.id}
          >
            <CardHeader
              fontWeight={"semibold"}
              alignSelf={"center"}
              color={"lime"}
              paddingBottom={0}
            >
              {car.name}
            </CardHeader>
            <CardBody>
              <Image
                maxHeight={"200px"}
                maxWidth={"100%"}
                src={car.img}
                paddingTop={0}
                paddingBottom={2}
              />
              <Text fontWeight={"semibold"}>Brand: {car.brand}</Text>
              <Text fontWeight={"semibold"}>
                Price: {formatPrice(car.price)} $
              </Text>
            </CardBody>
          </Card>
        ))}
      </SimpleGrid>

      <Stack direction="row" justifyContent="center" mt={4}>
        {Array.from({ length: totalPages }, (_, i) => (
          <Button
            key={i}
            onClick={() => handlePageChange(i + 1)}
            variant={currentPage === i + 1 ? "solid" : "outline"}
            color={"lime"}
            borderColor={"lime"}
          >
            {i + 1}
          </Button>
        ))}
      </Stack>
    </>
  );
};

export default CarCards;
