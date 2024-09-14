Real-estate-manager

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
