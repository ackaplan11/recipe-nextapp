// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { MongoClient } from "mongodb"
import { ObjectId } from "bson"
 
export default async function handler(req, res) {
    if (req.method === "POST") {
        const data = req.body 
        const client = await MongoClient.connect(process.env.URI)
        const db = client.db()
        const users = db.collection('users')
        const result = await users.insertOne(data)
        console.log(result._id)
        client.close()
        res.status(201).json({message: "user created "})
    }
}
