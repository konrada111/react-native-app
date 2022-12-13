import React from "react"
import Home from "@icons/home.svg"
import SearchCategory from "@icons/search-category.svg"
import Camera from "@icons/camera.svg"
import Profile from "@icons/profile.svg"

export const getIcon = (name: string, color: string) => {
  const style = { width: 24, height: 24 }

  if (name === "Home") {
    return <Home style={style} color={color} />
  } else if (name === "Search") {
    return <SearchCategory style={style} color={color} />
  } else if (name === "Cart") {
    return <Camera style={style} color={color} />
  } else {
    return <Profile style={style} color={color} />
  }
}
