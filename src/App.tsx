import { useState } from "react";
import { Box, HStack } from "@chakra-ui/react";
import "./App.css";
import CarCards from "./components/CarCards";
import Navbar from "./components/MobileNavBar";
import SideBar from "./components/SideBar";
import DesktopNavBar from "./components/DesktopNavBar";
import Footer from "./components/Footer";

function App() {
  const [sortingProperty, setSortingProperty] = useState<string>("");
  const [priceRange, setPriceRange] = useState<{
    minPrice: number;
    maxPrice: number;
  }>({ minPrice: 0, maxPrice: 2000000 });

  const handleSort = (property: string) => {
    setSortingProperty(property);
  };

  const handlePriceRangeChange = (minPrice: number, maxPrice: number) => {
    setPriceRange({ minPrice, maxPrice });
  };

  return (
    <Box padding={2}>
      <div className="navbar">
        <DesktopNavBar />
      </div>
      <div className="mobilebar">
        <Navbar onSort={handleSort} />
      </div>
      <HStack alignItems={"-moz-initial"}>
        <div className="sidebar">
          <SideBar
            onPriceRangeChange={handlePriceRangeChange}
            onSort={handleSort}
          />
        </div>
        <div>
          <CarCards sortingProperty={sortingProperty} priceRange={priceRange} />
        </div>
      </HStack>
      <Footer />
    </Box>
  );
}

export default App;
