import React, { useState } from "react";
import profile from "../../public/cyper.jpg";
import { Button, Menu, Switch } from "@mantine/core";
import { IconSettings, IconTrash } from "@tabler/icons-react";
import { PiDotsSixBold } from "react-icons/pi";

const Setting = () => {
  const [active, setActive] = useState(false);
  console.log(active);

  return (
    <div className="flex flex-col gap-10">
      <h1 className="text-3xl font-bold text-[#344767]">Setting</h1>
      {/* profile card  */}
      <div className=" grid grid-cols-12">
        <div
          className={` ${
            active
              ? " bg-gradient-to-br from-purple-400 to-purple-600 text-white "
              : "bg-white text-[#344767]"
          } flex flex-col col-span-3  rounded-xl p-5 relative shadow-lg gap-5`}
        >
          {/* for access control  */}
          <div className="flex justify-between items-center">
            <Switch
              onChange={(e) => setActive(e.currentTarget.checked)}
              checked={active}
              color="violet"
            />
            {/* action  */}
            <Menu
              trigger="hover"
              openDelay={100}
              closeDelay={100}
              shadow="md"
              width={200}
            >
              <Menu.Target>
                <Button style={{ backgroundColor: "transparent" }}>
                  <PiDotsSixBold
                    className={`text-2xl ${
                      active ? "text-white" : "text-gray-600"
                    } `}
                  />
                </Button>
              </Menu.Target>

              <Menu.Dropdown>
                <Menu.Label>Access control</Menu.Label>

                <Menu.Item icon={<IconSettings size={14} />}>Edit</Menu.Item>
                <Menu.Item icon={<IconTrash size={14} />}>Delete</Menu.Item>
              </Menu.Dropdown>
            </Menu>
          </div>
          {/* user information  */}
          <div className="flex gap-10">
            <img
              className=" object-cover w-32 h-32 rounded-full "
              src={profile}
              alt=""
            />
            {/* user information  */}
            <div className="flex flex-col justify-center gap-2 ">
              <p className="text-lg font-semibold">Thant Zin</p>
              <p>Role : admin</p>
              <p>Bio : Brezz</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Setting;
