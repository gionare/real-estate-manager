// src/services/agentService.ts

const API_URL = "https://api.real-estate-manager.redberryinternship.ge/api/agents";
const AUTH_TOKEN = "9d011621-10af-4128-ba0d-27fb1331419e";

export const addAgent = async (agentData: FormData) => {
  try {
    const response = await fetch(API_URL, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${AUTH_TOKEN}`,
      },
      body: agentData,
    });

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error adding agent:", error);
    throw error;
  }
};
