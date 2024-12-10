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
    <section>
      {festivalSection && (
        <div>
          <FestivalList id={festivalSection.categoryId} title={festivalSection.title} itemList={festivalSection.itemList}/>
        </div>
      )}
      {otherSection && (
        <div>
          <ProductsLists id={otherSection.categoryId}  title={otherSection.title} itemList={otherSection.itemList} />
        </div>
      )}
      <Footer />

    </section>
    // <section>
    //   <FestivalList />
    //   {/* <TicketList /> */}
    //   <ProductsLists />
    // </section>
  );
};

export default Home;
