import React, { useEffect, useState } from "react";
import { useFormContext } from "react-hook-form"; // If you're using react-hook-form
import { getAgents } from "../../services/api";
import { Agent } from "../../services/types";

const AgentSelector: React.FC = () => {
  const [agents, setAgents] = useState<Agent[]>([]);
  const {
    register,
    formState: { errors },
  } = useFormContext(); // Assuming you're using react-hook-form

  useEffect(() => {
    async function fetchAgents() {
      try {
        const agentsData = await getAgents();
        setAgents(agentsData);
      } catch (error) {
        console.error("Error fetching agents:", error);
      }
    }

    fetchAgents();
  }, []);

  // Convert errors.agent_id.message to string
  const errorMessage = errors.agent_id?.message as string;

  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">აგენტი</h2>
      <div>
        <label className="block mb-1">აირჩიე</label>
        <select {...register("agent_id")} className="w-full p-2 border border-gray-300 rounded">
          <option value="">Select an agent</option>
          {agents.map((agent) => (
            <option key={agent.id} value={agent.id}>
              {agent.name} {agent.surname}
            </option>
          ))}
        </select>
        {errors.agent_id && <p className="text-red-500">{errorMessage}</p>}
      </div>
    </div>
  );
};

export default AgentSelector;
