Real-estate-manager

## npm install react-hook-form yup @hookform/resolvers

Components Tree

1. Layout.jsx
   - Header (includes Redberry image)
   - MainContent
     - HomePage (contains page-specific content)
1. HomePage.jsx
   _ Header
   _ FilterSidebar (filter options on the left)
   _ Region რეგიონი
   _ PriceCategory საფასო კატეგორია
   _ Area ფართობი
   _ Bedrooms საძინებლების რაოდენობა
   _ Add buttons
   _ AddListingButton + ლისტინგის დამატება
   _ AddAgentButton + აგენტის დამატება
   LISTINGS graph
   _ AddAgentModal (modal for adding an agent)
1. ListingDetailPage.jsx
   - Header
   - ListingDetail (detailed view of the selected listing)
     - ListingImages (carousel or gallery of images)
     - ListingDescription (details about the listing)
     - AgentInfo (information about the listing agent, if included)\
   - LISTINGS carousel
1. AddListingPage.jsx (for adding a new listing)
   - Header
   - AddListingForm (form to input new listing details)
   - FormSubmitButton

Your api token is:
9d011621-10af-4128-ba0d-27fb1331419e
zogadad inaxeba ENV shi

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

https://api.real-estate-manager.redberryinternship.ge/api/agents
Response body
Download
[
{
"id": 217,
"name": "Drago",
"surname": "Gochita",
"avatar": "https://api.real-estate-manager.redberryinternship.ge/storage/agent_avatars/MqUrzesnDuqdzcEQZOMbUnrUiABODfoAVTRN0GJc.jpg"
}
]
