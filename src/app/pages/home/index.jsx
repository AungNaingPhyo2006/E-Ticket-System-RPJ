import React from "react";
import FestivalList from "../../components/layout/FestivalList";
import ProductsLists from "../../components/layout/ProductsLists";
import TicketList from "../../components/layout/TicketList";
import { sectionList } from "../../api/apiDemoData";
import Footer from "../../components/ui/Footer";

const Home = () => {
  const festivalSection = sectionList.find((section) => section.isFestival === 1);
  const otherSection = sectionList.find((section) => section.isFestival === 0);
  return (
    <section className="bg-gray-200 flex flex-col items-center justify-center min-h-screen">
      {festivalSection && (
          <div className="w-full max-w-4xl">
          <FestivalList id={festivalSection.categoryId} title={festivalSection.title} itemList={festivalSection.itemList}/>
        </div>
      )}
      {otherSection && (
          <div className="w-full max-w-4xl">
          <ProductsLists id={otherSection.categoryId}  title={otherSection.title} itemList={otherSection.itemList} />
        </div>
      )}
      <Footer />
    </section>
  );
};

export default Home;
