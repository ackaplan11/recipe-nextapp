import { MongoClient } from "mongodb"

export default async function handler(req, res) {
    if (req.method === "GET") {
        const client = await MongoClient.connect(process.env.DB_URI)
        const db = client.db()
        const recipes = db.collection('recipes')
        const result = await recipes.find().toArray()
        console.log(result)
        client.close()
      
        if (result) {
            console.log("successful api call")
            
            res.status(201).json(
                {
                    message: "recipes retrieved",
                    recipeData: result,
                })
        } else {
            console.log("failed api call")
            res.status(401).json({message: "no recipes found"})    
        }
    }
}