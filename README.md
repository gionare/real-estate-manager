<div align="center" id="top"> 
  <img src="https://user-images.githubusercontent.com/74038190/221352989-518609ab-b4d1-459e-929f-a08cd2bd9b3c.gif" alt="Real Estate Manager" width="250"/>

&#xa0;

  <!-- <a href="https://your-demo-link.com">Demo</a> -->
</div>

<h1 align="center">Real Estate Manager <img src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Telegram-Animated-Emojis/main/People/Thumbs%20Up.webp" alt="Thumbs Up" width="25" height="25" /></h1>

![Version](https://img.shields.io/github/package-json/v/your-github-username/real-estate-manager)
![Languages Count](https://img.shields.io/github/languages/count/your-github-username/real-estate-manager?color=56BEB8)
![Top Language](https://img.shields.io/github/languages/top/your-github-username/real-estate-manager?color=56BEB8)
![Repo Size](https://img.shields.io/github/repo-size/your-github-username/real-estate-manager?color=56BEB8)

![React](https://img.shields.io/badge/React-17.0.2-blue)
![TypeScript](https://img.shields.io/badge/TypeScript-4.7-blue)
![Tailwind CSS](https://img.shields.io/badge/TailwindCSS-3.1.4-blue)

<p align="center">
  <a href="#dart-about">About</a> &#xa0; | &#xa0; 
  <a href="#sparkles-features">Features</a> &#xa0; | &#xa0;
  <a href="#rocket-technologies">Technologies</a> &#xa0; | &#xa0;
  <a href="#white_check_mark-requirements">Requirements</a> &#xa0; | &#xa0;
  <a href="#dart-about">Installation </a> &#xa0; | &#xa0; 
  <a href="https://github.com/your-github-username" target="_blank">Author</a>
</p>

## <img src="https://user-images.githubusercontent.com/74038190/212284087-bbe7e430-757e-4901-90bf-4cd2ce3e1852.gif" width="30"> About

Welcome to the Real Estate Manager project! This repository contains the codebase for a real estate management application, allowing users to add listings, view details, and manage properties effectively.

## Features

- User-friendly interface for adding listings
- Agent selection and city/region dropdowns
- Detailed view of properties

- **components**
  - **`AddListingPage`**
    - AddListing.tsx
    - AgentSelector.tsx
    - CityDropdown.tsx
    - RegionDropdown.tsx
  - **`HomeDetailsPage`**
    - AgentInfo.tsx
    - CardCarousel.tsx
    - HomeDetails.tsx
    - HomeDetailsCard.tsx
  - **`HomePage`**
    - AddButtons.tsx
    - Card.tsx
    - CardGrid.tsx
    - Filters.tsx
    - RentOrSale.tsx
  - **`Layout`**
    - Header.tsx
  - **`Modals`**
    - AddAgentModal.tsx
- **`containers`**
- **`index.css`**
- **`main.tsx`**
- **`pages`**
- **`services`**
  - agents.ts
  - api.ts
  - cities.ts
  - realEstates.ts
  - types.ts
- **`styles`**
- **`vite-env.d.ts`**

API token: `
9d011621-10af-4128-ba0d-27fb1331419e`
zogadad inaxeba ENV shi

```
API POST real estate
{
"price": "100000",
"zip_code": "0101",
"area": "100.5",
"city_id": "1",
"address": "დრაკოლოს 77ა",
"agent_id": "217",
"bedrooms": "2",
"is_rental": "0",
"description": "სახლი ლიანდაგთან",
"image": "https://api.real-estate-manager.redberryinternship.ge/storage/images/8gzAYZ3QVKmp80aaJNXUlmkduKSU5P2g5qASrDvh.jpg",
"created_at": "2024-09-14T02:35:08.000000Z",
"id": 249
}
```

GET real-estate by id

```
{
  "id": 1,
  "address": "შარტავას 2ა", | address: string
  "zip_code": "0101",
  "price": 100000,
  "area": 100.5,
  "bedrooms": 3,
  "is_rental": 0,
  "city_id": 1,
  "description": "სახლი ლიანდაგთან",
  "created_at": "2024-08-07T10:46:53.000000Z",
  "city": {
    "id": 1,
    "name": "სოხუმი",
    "region_id": 1,
    "region": {
      "id": 1,
      "name": "აფხაზეთი"
    }
  },
  "agent_id": 1,
  "agent": {
    "id": 1,
    "name": "gela",
    "surname": "gocha",
    "email": "gela@redberry.ge",
    "phone": "555555555",
    "avatar": "https://api.real-estate-manager.redberryinternship.com/images/hmnVAO6LEytzoxFz8vRqBCry6ba1wvHvo2YxPXJW.jpg"
  }
}
```

## npm install react-hook-form yup @hookform/resolvers

## To create a new branch, work on it, and later merge it back into your main branch

```bash
# Create and switch to new branch
git checkout -b modal-feature

# Add and commit your changes
git add .
git commit -m "Added modal feature"

# (Optional) Push the branch to remote
git push origin modal-feature

# Switch back to main branch
git checkout master

# Merge modal-feature branch into main
git merge modal-feature

# Push the merged changes to remote
git push origin master
```

## React Router Implementation

`npm install react-router-dom`

## POST /real-estates Create a real estate
