import { MongoClient } from "mongodb"
import { ObjectId } from "bson"

export default async function handler(req, res) {
    if (req.method === "POST") {
        const data = req.body 
        const client = await MongoClient.connect(process.env.DB_URI)
        const db = client.db()
        const users = db.collection('users')
        console.log(data._id)
        const result = await users.findOne({_id:  ObjectId(data._id)})
        client.close()
      
        if (result) {
            console.log("successful api call")
            res.status(201).json(
                {
                    message: "welcome",
                    userData: result,
                })
        } else {
            console.log("failed api call")
            res.status(401).json({message: "no user found"})    
        }
    }
}