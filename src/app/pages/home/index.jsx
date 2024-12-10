import React from "react";
import FestivalList from "../../components/layout/FestivalList";
import ProductsLists from "../../components/layout/ProductsLists";
import TicketList from "../../components/layout/TicketList";
import { sectionList } from "../../api/apiDemoData";

const Section = ({ title, itemList }) => (
  <div className="card w-full bg-base-100 shadow-xl p-4 mb-6">
    <h2 className="card-title text-xl mb-4">{title}</h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {itemList.map((item) => (
        <div key={item.id} className="card bg-base-200 shadow-md p-4  h-30">
          <img src={item.photo} alt={item.name} className="w-full h-30 object-cover mb-4 rounded-md" />
          <p className="text-lg font-semibold">{item.name}</p>
        </div>
      ))}
    </div>
  </div>
);

const Home = () => {
  const festivalSection = sectionList.find((section) => section.isFestival === 1);
  const otherSection = sectionList.find((section) => section.isFestival === 0);
  return (
    <section>
      {festivalSection && (
        <div>
          <FestivalList title={festivalSection.title} itemList={festivalSection.itemList}/>
        </div>
      )}
      {otherSection && (
        <div>
          <ProductsLists title={otherSection.title} itemList={otherSection.itemList} />
        </div>
      )}
    </section>
    // <section>
    //   <FestivalList />
    //   {/* <TicketList /> */}
    //   <ProductsLists />
    // </section>
  );
};

export default Home;
