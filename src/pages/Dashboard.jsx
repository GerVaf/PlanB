import React, { useEffect } from "react";
import Card from "../components/Dashboard/Card";
import DashInbox from "../components/Dashboard/DashInbox";
import DashTrending from "../components/Dashboard/DashTrending";
import DashLatest from "../components/Dashboard/DashLatest";
import { Select } from "@mantine/core";
import { useState } from "react";
import DashToDoList from "../components/Dashboard/DashToDoList";

import { get } from "../Global/api";
import Globe from "../components/Globe/Globe";

const Dashboard = () => {
  const [data, setData] = useState([]);
  const [type, setType] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await get(`/dashboard?category=${type}`);
        // console.log(response);
        setData(response?.data?.data);
      } catch (error) {
        if (error) return window.location.reload();
      }
    };

    fetchData();
  }, [type]);

  return (
    <div className="">
      {/* Header */}
      <div className="flex items-center gap-3">
        <h1 className="font-bold text-3xl text-[#344767]">Dashboard</h1>
        {/* Select */}
        <Select
          className="w-[120px]"
          value={type}
          onChange={setType}
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
              <Card title={"Blog Lists"} data={data?.list_count} />
            </div>
            <div className="col-span-6">
              <Card title={"Pending Lists"} data={data?.pending_count} />
            </div>
            <div className="col-span-6">
              <Card title={"Program Lists"} data={data?.program_count} />
            </div>
          </div>

          {/* Todo List */}
          <div className="col-span-6 mt-5">
            <DashToDoList />
          </div>
        </div>

        {/* Globe */}

        <div className="col-span-6 flex justify-center items-center my-auto">

          <Globe />
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
      </div>
    </div>
  );
};

export default Dashboard;
