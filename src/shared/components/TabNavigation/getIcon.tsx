import React from "react"
import Home from "@icons/home.svg"
import SearchCategory from "@icons/search-category.svg"
import Camera from "@icons/camera.svg"
import Profile from "@icons/profile.svg"

export const getIcon = (name: string, color: string) => {
  const style = { width: 24, height: 24 }

  const props = {
    style,
    color,
  }

  if (name === "Home") {
    return <Home {...props} />
  } else if (name === "Search") {
    return <SearchCategory {...props} />
  } else if (name === "Cart") {
    return <Camera {...props} />
  } else {
    return <Profile {...props} />
  }
}
