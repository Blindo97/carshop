import { useState } from "react";
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  HStack,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  NumberInput,
  NumberInputField,
  RangeSlider,
  RangeSliderFilledTrack,
  RangeSliderThumb,
  RangeSliderTrack,
  VStack,
} from "@chakra-ui/react";
import carsWithIds from "../resources/cardetails/cardetails";
import { ChevronDownIcon } from "@chakra-ui/icons";

const uniqeuBrands = [...new Set(carsWithIds.map((car) => car.brand))];

type SideBarProps = {
  onPriceRangeChange: (minPrice: number, maxPrice: number) => void;
  onSort: (property: string) => void;
};

const SideBar: React.FC<SideBarProps> = ({ onPriceRangeChange, onSort }) => {
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(2000000);

  const handleSort = (property: string) => {
    onSort(property);
  };

  const handleMinPriceChange = (value: number) => {
    if (value <= maxPrice) {
      setMinPrice(value);
      onPriceRangeChange(value, maxPrice);
    }
  };

  const handleMaxPriceChange = (value: number) => {
    if (value >= minPrice) {
      setMaxPrice(value);
      onPriceRangeChange(minPrice, value);
    }
  };

  const handleSliderChange = (values: [number, number]) => {
    setMinPrice(values[0]);
    setMaxPrice(values[1]);
    onPriceRangeChange(values[0], values[1]);
  };

  const [brand, setBrand] = useState("Brands");

  return (
    <VStack padding={5} paddingRight={1}>
      <Box className="slider">
        <FormControl>
          <HStack>
            <VStack>
              <FormLabel>min-price</FormLabel>
              <NumberInput
                borderColor={"lime"}
                width={"110px"}
                value={minPrice}
                min={0}
                onChange={(valueString) =>
                  handleMinPriceChange(Number(valueString))
                }
              >
                <NumberInputField />
              </NumberInput>
            </VStack>
            <VStack>
              <FormLabel>max-price</FormLabel>
              <NumberInput
                borderColor={"lime"}
                width={"110px"}
                value={maxPrice}
                min={0}
                onChange={(valueString) =>
                  handleMaxPriceChange(Number(valueString))
                }
              >
                <NumberInputField />
              </NumberInput>
            </VStack>
          </HStack>
        </FormControl>
        <RangeSlider
          colorScheme="whatsapp"
          onChange={handleSliderChange}
          aria-label={["min", "max"]}
          max={2000000}
          value={[minPrice, maxPrice]}
        >
          <RangeSliderTrack>
            <RangeSliderFilledTrack />
          </RangeSliderTrack>
          <RangeSliderThumb index={0} />
          <RangeSliderThumb index={1} />
        </RangeSlider>
      </Box>
      <Box alignSelf={"baseline"} className="brandpicker">
        <Menu>
          <MenuButton
            border={"2px"}
            borderColor={"lime"}
            as={Button}
            rightIcon={<ChevronDownIcon />}
          >
            {brand}
          </MenuButton>
          <MenuList
            className="brands-menu-list"
            border={"2px"}
            borderColor={"lime"}
          >
            <MenuItem
              value="default"
              onClick={() => {
                handleSort("default");
                setBrand("Show all");
              }}
            >
              Show All
            </MenuItem>
            {uniqeuBrands.map((p) => (
              <MenuItem
                key={p}
                value={p}
                onClick={() => {
                  handleSort(p);
                  setBrand(p);
                }}
              >
                {" "}
                {p}{" "}
              </MenuItem>
            ))}
          </MenuList>
        </Menu>
      </Box>
    </VStack>
  );
};

export default SideBar;
