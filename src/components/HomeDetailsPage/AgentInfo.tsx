import React from "react";
import { Agent } from "../../services/types";

const AgentInfo: React.FC<Agent> = ({ avatar, name, surname, email, phone }) => {
  return (
    <div className="flex flex-col items-start p-6 border border-[#dbdbdb] rounded-lg w-[503px]">
      {/* Avatar and Details Container */}
      <div className="flex items-center mb-4">
        <img src={avatar} alt="avatar image" className="w-[72px] h-[72px] rounded-full mr-4" />
        <div>
          <p className="text-lg font-semibold text-[#021526]">
            {name} {surname}
          </p>
          <p className="text-sm text-mutedText">აგენტი</p>
        </div>
      </div>
      {/* Details */}
      <div className="flex flex-col">
        <div className="flex items-center mb-2">
          <img src="/icon-email.png" alt="Email icon" className="w-[18px] h-[16px] mr-2" />
          <p className="text-sm text-mutedText">{email}</p>
        </div>
        <div className="flex items-center">
          <img src="/icon-phone.png" alt="Phone icon" className="w-[16px] mr-2" />
          <p className="text-sm text-mutedText">{phone}</p>
        </div>
      </div>
    </div>
  );
};

export default AgentInfo;
