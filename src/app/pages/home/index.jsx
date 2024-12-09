import React from "react";
import FestivalList from "../../components/layout/FestivalList";
import ProductsLists from "../../components/layout/ProductsLists";
import TicketList from "../../components/layout/TicketList";

const Home = () => {
  return (
    <section>
      <FestivalList />
      {/* <TicketList /> */}
      <ProductsLists />
    </section>
  );
};

export default Home;
