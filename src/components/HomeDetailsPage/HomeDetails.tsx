import React from "react";
import HomeDetailsCard from "./HomeDetailsCard";

const HomeDetails: React.FC = () => {
  const agent = {
    avatar: "https://api.real-estate-manager.redberryinternship.ge/storage/agent_avatars/MqUrzesnDuqdzcEQZOMbUnrUiABODfoAVTRN0GJc.jpg",
    name: "Drago",
    surname: "Gochita",
    email: "drago@example.com",
    phoneNumber: "+123 456 7890",
  };
  return (
    <div className="p-8">
      <HomeDetailsCard
        imageUrl="https://images.pexels.com/photos/2079451/pexels-photo-2079451.jpeg"
        publishData="08/08/24"
        price="80,000 ₾"
        location="Tbilisi, Georgia"
        bedroomIcon="/icon-bed.png"
        areaIcon="/icon-area.png"
        postcodeIcon="/icon-post-code.png"
        description="იყიდება ბინა ჭავჭავაძის ქუჩაზე, ვაკეში. ბინა არის ახალი რემონტით, ორი საძინებლითა და დიდი აივნებით. მოწყობილია ავეჯითა და ტექნიკით. 

"
        agentInfo="John Doe, Agent, +123 456 7890"
        agent={agent}
      />
    </div>
  );
};

export default HomeDetails;
