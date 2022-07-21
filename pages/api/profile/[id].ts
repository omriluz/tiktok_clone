// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next"
import { client } from "../../../utils/client"
import {
  singleUserQuery,
  userCreatedPostsQuery,
  userLikedPostsQuery,
} from "../../../utils/queries"

type Data = {
  name: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "GET") {
    const { id } = req.query

    const query = singleUserQuery(id)
    const userVideosQuery = userCreatedPostsQuery(id)
    const userlikedVideosQuery = userLikedPostsQuery(id)

    const user = await client.fetch(query)
    const userVideos = await client.fetch(userVideosQuery)
    const userlikedVideos = await client.fetch(userlikedVideosQuery)

    res.status(200).json({ user: user[0], userVideos, userlikedVideos })
  }
}
