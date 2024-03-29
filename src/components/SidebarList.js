import React from "react"
import VenueItem from "./VenueItem"

const SidebarList = ({ venues, handleVenueClick, infowindow, content, ven }) => {
  return (
    <ol id="venueList">
      {venues &&
        venues.map((venue, venueKey) => (
          <VenueItem
            key={venueKey}
            venue={venue}
            handleVenueClick={handleVenueClick}
            infowindow={infowindow}
            content={content}
          />
        ))}
    </ol>
  )
}

export default SidebarList
