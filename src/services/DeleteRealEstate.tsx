const BASE_URL = "https://api.real-estate-manager.redberryinternship.ge/api";
const AUTH_TOKEN = "9d011621-10af-4128-ba0d-27fb1331419e";

// Utility function to delete data
async function deleteData(endpoint: string): Promise<{ message: string }> {
  try {
    const response = await fetch(`${BASE_URL}/${endpoint}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${AUTH_TOKEN}`,
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      if (response.status === 404) {
        throw new Error("Real estate not found");
      }
      throw new Error("Failed to delete real estate");
    }

    return await response.json();
  } catch (error) {
    console.error("Delete error:", error);
    throw error;
  }
}

// Function to delete a real estate by ID
export function deleteRealEstate(id: number): Promise<{ message: string }> {
  return deleteData(`real-estates/${id}`);
}

// You can now call the deleteRealEstate function in your React component like this:

// import { deleteRealEstate } from "../../services/api";

// const handleDelete = async (id: number) => {
//   try {
//     const response = await deleteRealEstate(id);
//     console.log(response.message); // "Real estate deleted"
//     // Do something after deletion, like refreshing the list
//   } catch (error) {
//     console.error("Failed to delete real estate:", error);
//   }
// };
