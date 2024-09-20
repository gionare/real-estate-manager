const API_URL = "https://api.real-estate-manager.redberryinternship.ge/api/agents";
const DEFAULT_AUTH_TOKEN = "9d011621-10af-4128-ba0d-27fb1331419e";

export const addAgent = async (agentData: FormData, token: string = DEFAULT_AUTH_TOKEN) => {
  try {
    const response = await fetch(API_URL, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        // No need for "Content-Type" header with FormData
      },
      body: agentData,
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(`Error ${response.status}: ${errorData.message || "Failed to add agent"}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error adding agent:", error);
    throw error;
  }
};
