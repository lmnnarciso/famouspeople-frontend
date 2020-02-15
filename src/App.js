import React, { useState } from "react";
import Button from "./components/Button";
import { Card } from "./components/Card";
import Navigation from "./components/Navigation";
import SearchResultItem from "./components/SearchResultItem";
import Select from "react-select";
import SmallCard from "./components/SmallCard";

const options = [
  { value: "actor-1", label: "Edward Norton" },
  { value: "actor-2", label: "Al Pacino" },
  { value: "actor-3", label: "Brad Pitt" }
];

function App() {
  let [dataList, setDataList] = useState([]);
  let [selectedPerson, setSelectedPerson] = useState(null);
  console.log("process.env", process.env.REACT_APP_NOT_SECRET_CODE);
  return (
    <div class="w-full mt-8 ml-8">
      {/* <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6 mb-4"> */}
      {/* <div class="flex flex-wrap">
          <div class="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6 mb-4 bg-gray-500"></div>
          <div class="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6 mb-4 bg-gray-400"></div>
          <div class="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6 mb-4 bg-gray-500"></div>
          <div class="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6 mb-4 bg-gray-400"></div>
          <div class="w-full sm:w-1/2 md:w-1/3 lg:w-1/2 xl:w-1/6 mb-4 bg-gray-500"></div>
          <div class="w-full sm:w-1/2 md:w-1/3 lg:w-1/2 xl:w-1/6 mb-4 bg-gray-400"></div>
        </div> */}

      <div class="flex mb-4">
        <div class="flex-shrink-0 float-right">
          {/* <img class="h-12 w-12" src="/img/logo.svg" /> */}
          <div class="font-bold text-xl ">LOGO HERE</div>
        </div>
        <div class="w-1/2 h-12 ml-24 mr-64">
          <Select options={options} />
        </div>
      </div>
      {/* <div className="container"> */}
      <Navigation />
      <div class="flex mb-4 ml-64 text-center">
        <SmallCard />
        <SmallCard />
        <SmallCard />
        <SmallCard />
        <SmallCard />
      </div>
      <hr className="-ml-8 mb-8" />
      {/* </div> */}
      <div class="flex mb-4">
        <div class="w-1/2">
          <SearchResultItem />
          <SearchResultItem />
          <SearchResultItem />
          <SearchResultItem />
        </div>
        <div class="w-1/2">{selectedPerson !== null && <Card />}</div>
      </div>
      {/* <div class="flex mx-auto w-full">
        <div className="mx-auto px-4">
          <Card />
        </div>

      </div> */}
    </div>
  );
}

export default App;
