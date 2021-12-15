// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { MongoClient } from "mongodb"

const CONN_DATA = {
    username: "Admin",
    password: "WhatifNoSQLwaseasy",
    db_name: "recipe-nextapp-dev"
}
 
export default async function handler(req, res) {
    if (req.method === "POST") {
        const data = req.body 
        const client = await MongoClient.connect(`mongodb+srv://Admin:WhatifNoSQLwaseasy@cluster0.5epkv.mongodb.net/recipe-nextapp-dev?retryWrites=true&w=majority`)
        const db = client.db()
        const collection = db.collection('users')
        const result = await collection.find(data).toArray()
        console.log(result[0]._id)
        client.close()
        res.status(201).json({message: "user found"})
    }
}