import React, { useEffect, useState } from "react";
// import { useFormContext } from "react-hook-form";
import { getAgents } from "../../services/api";
import { Agent } from "../../services/types";

interface AgentSelectorProps {
  selectedAgentId: number;
  onAgentChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

const AgentSelector: React.FC<AgentSelectorProps> = ({ selectedAgentId, onAgentChange }) => {
  const [agents, setAgents] = useState<Agent[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  // const {
  //   register,
  //   formState: { errors },
  // } = useFormContext(); // Access react-hook-form context

  useEffect(() => {
    async function fetchAgents() {
      try {
        const agentsData = await getAgents();
        setAgents(agentsData);
      } catch (error) {
        console.error("Error fetching agents:", error);
      } finally {
        setLoading(false); // Set loading to false after data fetching
      }
    }

    fetchAgents();
  }, []);

  // Convert errors.agent_id.message to string
  // const errorMessage = errors.agent_id?.message as string;

  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">აგენტი</h2>
      <div>
        <label className="block mb-1">აირჩიე</label>
        {loading ? (
          <p className="text-gray-500">Loading agents...</p>
        ) : (
          <select name="agent_id" value={selectedAgentId} onChange={onAgentChange} className="p-2 border w-[384px] border-gray-300 rounded">
            <option value="">Select an agent</option>
            {agents.map((agent) => (
              <option key={agent.id} value={agent.id}>
                {agent.name} {agent.surname}
              </option>
            ))}
          </select>
        )}
      </div>
    </div>
  );
};

export default AgentSelector;
