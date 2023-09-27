import g63img from "../carimages/MercedesG63.png";
import brabusimgrocket from "../carimages/BRABUS_ROCKET900.png";
import s63amgimg from "../carimages/S63_AMG.png";
import c63amgimg from "../carimages/c63amg.png";
import mercedesEQSimg from "../carimages/mercedesEQS.png";
import mercedesEQBimg from "../carimages/mercedesEQB.png";
import mercedesGLEimg from "../carimages/mercedesGLE.png";
import mercedesCLSimg from "../carimages/mercedesCLS.png";
import mercedesE350img from "../carimages/mercedesE350.png";
import mercedesS600img from "../carimages/mercedesMaybachS600.png";
import bmwm52014img from "../carimages/BWMm5_2014.png";
import bmwM8img from "../carimages/BMWm8.png";
import bmwM3img from "../carimages/bmwm3.png";
import bmwX5Mimg from "../carimages/bmwx5m.png";
import bmwix50img from "../carimages/BMWix50.png";
import bmwi4img from "../carimages/BMWi4.png";
import bmwM6img from "../carimages/bmwM6.png";
import bmw72023 from "../carimages/BMW72023.png";
import bmwM52009 from "../carimages/BMWm52009.png";
import bmwz4 from "../carimages/BMWz4.png";
import audirs5 from "../carimages/audirs5.png";
import audirs6 from "../carimages/audirs6.png";
import audirs7 from "../carimages/audirs7.png";
import auditt from "../carimages/auditt.png";
import audiq7 from "../carimages/audiq7.png";
import audir8 from "../carimages/audir8.png";
import audietron from "../carimages/audietron.png";
import audisq8 from "../carimages/audisq8.png";
import audis8 from "../carimages/audis8.png";
import audis5 from "../carimages/audis5.png";
import fordmustang from "../carimages/fordmustang.png";
import fordgt from "../carimages/fordgt.png";
import fordrs from "../carimages/fordrs.png";
import fordranger from "../carimages/fordranger.png";
import fordshelby from "../carimages/fordshelby.png";

const cars = [
  // Mercedes
  { name: "G63", price: 175000, brand: "Mercedes", img: g63img },
  {
    name: "BRABUS ROCKET900",
    price: 500000,
    brand: "Mercedes",
    img: brabusimgrocket,
  },
  { name: "S63 AMG", price: 65000, brand: "Mercedes", img: s63amgimg },
  {
    name: "C63 AMG",
    price: 180000,
    brand: "Mercedes",
    img: c63amgimg,
  },
  { name: "EQS", price: 110000, brand: "Mercedes", img: mercedesEQSimg },
  { name: "EQB", price: 70000, brand: "Mercedes", img: mercedesEQBimg },
  { name: "GLE", price: 110000, brand: "Mercedes", img: mercedesGLEimg },
  { name: "CLS", price: 80000, brand: "Mercedes", img: mercedesCLSimg },
  { name: "E350", price: 30000, brand: "Mercedes", img: mercedesE350img },
  {
    name: "Maybach s600",
    price: 85000,
    brand: "Mercedes",
    img: mercedesS600img,
  },

  // BMW
  { name: "M5 2014", price: 35000, brand: "BMW", img: bmwm52014img },
  { name: "M8 BETWEEN", price: 200000, brand: "BMW", img: bmwM8img },
  { name: "M3GTR", price: 45000, brand: "BMW", img: bmwM3img },
  { name: "X5M", price: 75000, brand: "BMW", img: bmwX5Mimg },
  { name: "iX50", price: 110000, brand: "BMW", img: bmwix50img },
  { name: "i4", price: 75000, brand: "BMW", img: bmwi4img },
  { name: "M6", price: 55000, brand: "BMW", img: bmwM6img },
  { name: "BMW740", price: 60000, brand: "BMW", img: bmw72023 },
  { name: "M5 2009", price: 57000, brand: "BMW", img: bmwM52009 },
  { name: "Z4", price: 100000, brand: "BMW", img: bmwz4 },

  // AUDI
  { name: "RS5", price: 85000, brand: "AUDI", img: audirs5 },
  { name: "RS6", price: 270000, brand: "AUDI", img: audirs6 },
  { name: "RS7", price: 185000, brand: "AUDI", img: audirs7 },
  { name: "TT", price: 65000, brand: "AUDI", img: auditt },
  { name: "Q7", price: 120000, brand: "AUDI", img: audiq7 },
  { name: "R8", price: 200000, brand: "AUDI", img: audir8 },
  { name: "E TRON GT", price: 125000, brand: "AUDI", img: audietron },
  { name: "SQ8", price: 140000, brand: "AUDI", img: audisq8 },
  { name: "S8", price: 130000, brand: "AUDI", img: audis8 },
  { name: "S5", price: 75000, brand: "AUDI", img: audis5 },

  // FORD
  { name: "Mustang", price: 40000, brand: "FORD", img: fordmustang },
  { name: "GT 2023", price: 1700000, brand: "FORD", img: fordgt },
  { name: "RS", price: 35000, brand: "FORD", img: fordrs },
  { name: "RANGER", price: 40000, brand: "FORD", img: fordranger },
  { name: "SHELBY 1967", price: 187000, brand: "FORD", img: fordshelby },
];

const carsWithIds = cars.map((car, index) => ({ ...car, id: index + 1 }));

export default carsWithIds;
