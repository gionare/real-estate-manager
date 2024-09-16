// src/services/api.ts

import { Agent, RealEstate, City, Region } from "./types";

const BASE_URL = "https://api.real-estate-manager.redberryinternship.ge/api";
const AUTH_TOKEN = "9d011621-10af-4128-ba0d-27fb1331419e";

// Utility function to fetch data
async function fetchData<T>(endpoint: string): Promise<T> {
  try {
    const response = await fetch(`${BASE_URL}/${endpoint}`, {
      headers: {
        Authorization: `Bearer ${AUTH_TOKEN}`,
        "Content-Type": "application/json",
      },
    });
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return await response.json();
  } catch (error) {
    console.error("Fetch error:", error);
    throw error;
  }
}

// Function to get all agents
export function getAgents(): Promise<Agent[]> {
  return fetchData<Agent[]>("agents");
}

// Function to get all real estates
export function getRealEstates(): Promise<RealEstate[]> {
  return fetchData<RealEstate[]>("real-estates");
}

// Function to get a real estate by ID
export function getRealEstateById(id: number): Promise<RealEstate> {
  return fetchData<RealEstate>(`real-estates/${id}`);
}

// Function to get all cities
export function getCities(): Promise<City[]> {
  return fetchData<City[]>("cities");
}

// Function to get all regions
export function getRegions(): Promise<Region[]> {
  return fetchData<Region[]>("regions");
}
