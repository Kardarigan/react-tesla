import {
  Hero,
  Home_Vehicles,
  Home_Planet,
  Home_Energy,
  Home_Accessories,
  Home_Weekly,
  Home_Statistics,
  Home_Join,
} from "../comps/Portal";

const Home = () => {
  return (
    <>
      <Hero />
      <Home_Statistics />
      <Home_Vehicles />
      <Home_Planet />
      <Home_Energy />
      <Home_Accessories />
      <Home_Weekly />
      <Home_Join />
    </>
  );
};

export default Home;
