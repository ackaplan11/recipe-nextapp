import { MongoClient } from "mongodb"
import { ObjectId } from "bson"

export default async function handler(req, res) {
    if (req.method === "GET") {
        const client = await MongoClient.connect(process.env.DB_URI)
        const db = client.db()
        const recipes = db.collection('recipes')
        const id = req.url.split('/')[3]
        const result = await recipes.findOne({_id: ObjectId(id)})
        console.log(result)
        client.close()
      
        if (result) {
            console.log("successful api call")
            res.status(201).json(
                {
                    message: "recipe retrieved",
                    recipeData: result,
                })
        } else {
            console.log("failed api call")
            res.status(401).json({message: "no recipe found"})    
        }
        // res.status(201).json({message: "made it"})
    }
}