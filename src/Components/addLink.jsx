import React, { useEffect, useState } from "react";
import * as Select from "@radix-ui/react-select";
import { ChevronDownIcon } from "@radix-ui/react-icons";
import mapData from "../data";
import { FaLink } from "react-icons/fa6";
export default function AddLink({ index, data, setLinks, error, setError }) {
  const [plaformData, setFormData] = useState(mapData.plantforms);
  const [dropdwon, setDropdown] = useState(false);
  const [isActive, setActive] = useState("");

  const handleUpdateData = (item) => {
    setDropdown(false);
    setLinks((prev) =>
      prev.map((linkItems) =>
        linkItems.id === data.id
          ? {
              ...linkItems,
              plantform: {
                name: item.name,
                icon: item.icon,
                color: item.color,
              },
            }
          : linkItems,
      ),
    );
  };

  const handleUpdatedLink = (e) => {
    const value = e.target.value;

    if (!value.trim()) {
      setError("Can't be empty");
    } else {
      setError("");
    }

    setLinks((prev) =>
      prev.map((linkId) =>
        linkId.id === data.id
          ? {
              ...linkId,
              link: value,
            }
          : linkId,
      ),
    );
  };

  const handleRemove = () => {
    setLinks((prev) => prev.filter((item) => item.id !== data.id));
  };

  return (
    <div className="addLink">
      <div className="flex justify-between">
        <div>
          <h1 className="text-[16px] font-[700]">Add Link {index + 1}</h1>
        </div>
        <div onClick={handleRemove} className="text-[16px] font-[400]">
          {" "}
          Remove
        </div>
      </div>

      <div className="mt-[16px]">
        <label className="text-[12px] font-[400]">Platform</label>

        <Select.Root
          value={data.plantform.name}
          onValueChange={(value) => {
            const selected = plaformData.find((item) => item.name === value);

            if (selected) {
              handleUpdateData(selected);
            }
          }}
        >
          <Select.Trigger
            className="platformTrigger w-full flex items-center"
            aria-label="Platform"
          >
            <div className="flex items-center gap-[10px] flex-1">
              <span>{data.plantform.icon}</span>
              <span>{data.plantform.name || "Select Platform"}</span>
            </div>

            <Select.Icon className="arrow ml-auto">
              <ChevronDownIcon />
            </Select.Icon>
          </Select.Trigger>

          <Select.Portal>
            <Select.Content
              className="dropDwon"
              position="popper"
              side="bottom"
              align="start"
              sideOffset={16}
              avoidCollisions={false}
              style={{
                minWidth: "var(--radix-select-trigger-width)",
              }}
            >
              <Select.Viewport>
                {plaformData.map((item) => (
                  <React.Fragment key={item.id}>
                    <Select.Item value={item.name} className="platformItem">
                      <Select.ItemText>
                        <div className="flex items-center gap-[10px]">
                          <span>{item.icon}</span>

                          <span>{item.name}</span>
                        </div>
                      </Select.ItemText>
                    </Select.Item>

                    <div className="boder" />
                  </React.Fragment>
                ))}
              </Select.Viewport>
            </Select.Content>
          </Select.Portal>
        </Select.Root>
      </div>

      <div className="mt-[12px]">
        <label htmlFor="" className="text-[12px] font-[400]">
          Link
        </label>
        <div className="addLinkBorder p-[16px]">
          <span className="text-[#737373]">
            <FaLink />
          </span>

          <input
            value={data.link}
            onChange={handleUpdatedLink}
            type="text"
            placeholder="e.g. https://www.github.com/johnappleseed"
          />

          {error && <p className="text-red-500 text-[12px] mt-1">{error}</p>}
        </div>
      </div>
    </div>
  );
}
