// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { MongoClient } from "mongodb"
 
export default async function handler(req, res) {
    if (req.method === "POST") {
        const data = req.body 
        const client = await MongoClient.connect(process.env.DB_CONN_STR)
        const db = client.db()
        const collection = db.collection('users')
        const result = await collection.find(data).toArray()
        console.log(result[0])
        client.close()
        res.status(201).json({message: "user found"})
    }
}