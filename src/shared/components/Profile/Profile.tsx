import React from "react"
import { Text, View, Image } from "react-native"

export interface ProfileProps {
  avatar: string
  firstName: string
  lastName: string
  email: string
}

const Profile = ({ avatar, firstName, lastName, email }: ProfileProps) => {
  return (
    <View
      style={{
        padding: 10,
        backgroundColor: "#FFFFFF",
        flexDirection: "row",
        alignItems: "center",
        alignSelf: "center",
        borderRadius: 20,
        marginBottom: 10,
        minWidth: 250,
        shadowColor: "black",
        shadowOffset: { width: 0, height: 8 },
        shadowRadius: 20,
        shadowOpacity: 0.1,
      }}>
      <Image
        style={{ width: 40, height: 40, borderRadius: 100, marginRight: 16 }}
        source={{ uri: avatar }}
      />
      <View>
        <Text>
          {firstName} {lastName}
        </Text>
        <Text>{email}</Text>
      </View>
    </View>
  )
}

export default Profile
