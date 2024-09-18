Real-estate-manager

Components Tree

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
  "address": "შარტავას 2ა",
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

````https://api.real-estate-manager.redberryinternship.ge/api/agents
Response body
Download
[
{
"id": 217,
"name": "Drago",
"surname": "Gochita",
"avatar": "https://api.real-estate-manager.redberryinternship.ge/storage/agent_avatars/MqUrzesnDuqdzcEQZOMbUnrUiABODfoAVTRN0GJc.jpg"
}
]```

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
````
