import React, { BaseSyntheticEvent, SyntheticEvent, useRef, useState } from "react";
import { Tab } from "@headlessui/react";
import { cx } from "./utils";
import { Intro } from "./components";

const navLinks = [
  {
    label: "Journey",
    value: "journey",
  },
  {
    label: "Credentials",
    value: "credentails",
  },
  {
    label: "Education",
    value: "education",
  },
];
const App = (): JSX.Element => {
  const journeyRef = useRef(null);
  const credentailsRef = useRef(null);
  const educationRef = useRef(null);

  const [activeTab, setActiveTab] = useState(["active", "", ""]);

  const onClick = (e: BaseSyntheticEvent) => {
    console.log("before",e.target.dataset, e.target.id, e);
    // e.target.setAttribute("data-selected","active");
    console.log("after",e.target.dataset, e.target);
    switch(e.target.id){
      case "tab-1":{
        setActiveTab(["active","",""]);
        break;
      }
      case "tab-2": {
        setActiveTab(["","active",""]);
        break;
      }
      case "tab-3": {
        setActiveTab(["","","active"]);
        break;
      }
      default:
        break;
    }
  }
  return (
    <div className="flex flex-col justify-center">
      <div
        className="flex justify-center space-x-4 p-4 w-full"
        role="tablist"
        aria-orientation="horizontal"
        onClick={onClick}
      >
        <button
          className="py-2.5 text-m font-medium leading-5 font-roboto-slab w-60 focus:outline-none data-[selected=active]:border-b-2 data-[selected=active]:border-b-sky-600 "
          id="tab-1"
          role="tab"
          type="button"
          tabIndex={0}
          data-selected={activeTab[0]}
          aria-controls="headlessui-tabs-panel-4"
        >
          Journey
        </button>
        <button
          className="py-2.5 text-m font-medium leading-5 font-roboto-slab w-60 focus:outline-none data-[selected=active]:border-b-2 data-[selected=active]:border-b-sky-600 hover:bg-white/[0.12]"
          id="tab-2"
          role="tab"
          type="button"
          tabIndex={-1}
          data-selected={activeTab[1]}
          aria-controls="headlessui-tabs-panel-5"
        >
          Credentials
        </button>
        <button
          className="py-2.5 text-m font-medium leading-5 font-roboto-slab w-60 focus:outline-none data-[selected=active]:border-b-2 data-[selected=active]:border-b-sky-600 hover:bg-white/[0.12]"
          id="tab-3"
          role="tab"
          type="button"
          tabIndex={-1}
          data-selected={activeTab[2]}
          aria-controls="headlessui-tabs-panel-6"
        >
          Education
        </button>
      </div>
      <Intro/>
    </div>
  );
};

export default App;
