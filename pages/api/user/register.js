import connectMongo from '../../../utils/connectMongo';
import User from '../../../models/userModel';
import { checkToken } from '../../../utils/protector';

export default async function handler(req, res) {
    if (!checkToken(req)) return res.status(403).send();
    try {
        await connectMongo();
        const user = await User.create(req.body);
        res.json({ user });
    } catch (error) {
        res.json({ error });
    }
}