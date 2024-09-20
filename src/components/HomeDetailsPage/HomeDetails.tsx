import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import HomeDetailsCard from "./HomeDetailsCard";
import CardCarousel from "./CardCarousel";
import { getRealEstateById, getAgents } from "../../services/api";
import { RealEstate, Agent } from "../../services/types";

const HomeDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [realEstate, setRealEstate] = useState<RealEstate | null>(null);
  const [agent, setAgent] = useState<Agent | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Fetch real estate and agent data by ID
    const fetchDetails = async () => {
      try {
        const fetchedRealEstate = await getRealEstateById(Number(id));
        setRealEstate(fetchedRealEstate);

        const agents = await getAgents();
        const matchedAgent = agents.find((agent) => agent.id === fetchedRealEstate.agent_id); // Adjust if agent_id exists
        setAgent(matchedAgent || null);
      } catch (err) {
        console.error(err); // Log the error
        setError("Failed to fetch real estate details.");
      } finally {
        setIsLoading(false);
      }
    };

    fetchDetails();
  }, [id]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  if (!realEstate || !agent) {
    return <div>Real estate details not available</div>;
  }

  return (
    <div className="p-8">
      <HomeDetailsCard realEstate={realEstate} agent={agent} />
      <CardCarousel />
    </div>
  );
};

export default HomeDetails;
