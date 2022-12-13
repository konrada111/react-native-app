import React from "react"
import { Camera, Home, Profile, SearchCategory } from "src/shared/assets/icons"

export const getIcon = (name: string, color: string) => {
  if (name === "Home") {
    return <Home color={color} />
  } else if (name === "Search") {
    return <SearchCategory color={color} />
  } else if (name === "Cart") {
    return <Camera color={color} />
  } else {
    return <Profile color={color} />
  }
}
