// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { MongoClient } from "mongodb"
import { ObjectId } from "bson"

export default async function handler(req, res) {
    if (req.method === "POST") {
        const data = req.body 
        const client = await MongoClient.connect(process.env.DB_URI)
        const db = client.db()
        const users = db.collection('users')
        
        const result = await users.findOne(data)
        client.close()
        
        if (result) {
            console.log(typeof(result._id))
            res.status(201).json(
                {
                    message: "user found",
                    userID: result._id,
                })
        } else {
            res.status(401).json({message: "no user found"})    
        }
        
        //const result2 = await users.findOne({_id: result._id})
        //GOAL pass the object id to the find user api
    }
}