const { connectToDatabase } = require('../../lib/mongodb');
const ObjectId = require('mongodb').ObjectId;

export default async function handler(req, res) {
    // Using switch case if having other methods in future
    switch (req.method) {
        case 'GET': {
            return getPosts(req, res);
        }
    }
}

// Getting all posts.
async function getPosts(req, res) {
    try {
        let { db } = await connectToDatabase();
        let users = await db
            .collection('reward_log')
            .find({})
            //.sort({ published: -1 })
            .toArray();

        return res.json({
            message: JSON.parse(JSON.stringify(users)),
            success: true,
        });
    } catch (error) {
        return res.json({
            message: new Error(error).message,
            success: false,
        });
    }
}