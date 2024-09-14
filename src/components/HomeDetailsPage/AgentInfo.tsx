import React from "react";

interface AgentInfoProps {
  avatar: string;
  name: string;
  surname: string;
  email: string;
  phoneNumber: string;
}

const AgentInfo: React.FC<AgentInfoProps> = ({ avatar, name, surname, email, phoneNumber }) => {
  return (
    <div className="flex items-start p-6 border border-[#dbdbdb] rounded-lg flex-col w-[503px]">
      {/* Image and Details Container */}
      <div className="flex items-center flex-row mb-4">
        {/* Avatar Image */}
        <img src={avatar} alt={`${name} ${surname}`} className="w-[72px] h-[72px] rounded-full mr-[14px]" />
        {/* Name and Surname */}
        <div>
          <p className="text-lg font-semibold text-[#021526]">
            RealEstate
            {name} {surname}
          </p>
          {/* Agent Title */}
          <p className="text-sm text-[#808a93]">აგენტი</p>
        </div>
      </div>

      {/* Details */}
      <div className="flex flex-col">
        {/* Email */}
        <div className="flex flex-row gap-2 items-center mb-2">
          <img src="/icon-email.png" alt="Email icon" className="w-[18px] h-[16px]" />
          <p className="text-sm text-[#808a93]">{email}</p>
        </div>
        {/* Phone Number */}
        <div className="flex flex-row gap-2 items-center">
          <img src="/icon-phone.png" alt="Phone icon" className="w-[16px]" />
          <p className="text-sm text-[#808a93]">{phoneNumber}</p>
        </div>
      </div>
    </div>
  );
};

export default AgentInfo;
