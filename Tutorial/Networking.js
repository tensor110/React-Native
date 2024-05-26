import { View, Text } from 'react-native'
import React from 'react'
import GetRequest from "./Networking/GetReq"
import Load from "./Networking/Loading"
import Refresh from "./Networking/Refreshing"
import PostRequest from "./Networking/PostReq"
import ErrorHandling from "./Networking/ErrHandling"

export default function Networking() {
  return (
    // <GetRequest />
    // <Load />
    // <Refresh/>
    // <PostRequest/>
    <ErrorHandling />
  )
}