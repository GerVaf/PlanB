import React from "react";
import Card from "../components/Dashboard/Card";
import DashInbox from "../components/Dashboard/DashInbox";
import DashTrending from "../components/Dashboard/DashTrending";
import DashLatest from "../components/Dashboard/DashLatest";
import { Select } from "@mantine/core";
import { useState } from "react";
import DashToDoList from "../components/Dashboard/DashToDoList";
import Globe from "../components/Dashboard/Globe";

const Dashboard = () => {
  const [selectValue, setSelectValue] = useState("");
  return (
    <div className="p-5">
      {/* Header */}
      <div className="flex items-center gap-3">
        <h1 className="font-bold text-3xl text-[#344767]">Dashboard</h1>
        <Select
          className="w-[120px]"
          value={selectValue}
          onChange={setSelectValue}
          data={[
            { value: "", label: "All" },
            { value: "sport", label: "Sport" },
            { value: "music", label: "Music" },
          ]}
          styles={{
            label: { color: "white" },
            input: { ":focus": { borderColor: "#13C4E0" } },
            item: {
              "&[data-selected]": {
                "&, &:hover": {
                  backgroundColor: "#13C4E0",
                  color: "white",
                },
              },
            },
          }}
        />
      </div>

      {/* Globe and Cards , Inbox */}
      <div className="grid grid-cols-12 gap-5 my-5">
        <div className="col-span-6">
          {/* Cards */}
          <div className="grid grid-cols-12 gap-5">
            <div className="col-span-6">
              <Card />
            </div>
            <div className="col-span-6">
              <Card />
            </div>
            <div className="col-span-6">
              <Card />
            </div>
            <div className="col-span-6">
              <Card />
            </div>
          </div>

          {/* Inbox */}
          <div className="col-span-6 mt-5">
            <DashInbox />
          </div>
        </div>

        {/* Globe */}
        <div className="col-span-6 mx-auto my-auto ">
          <Globe/>
        </div>

        {/* Trending and Latest News */}
        {/* Trending */}
        <div className="col-span-6">
          <DashTrending />
        </div>

        {/* Latest */}
        <div className="col-span-6">
          <DashLatest />
        </div>

        {/* Todo List */}
        <div className="col-span-12">
          <DashToDoList />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
