import connectMongo from '../../../../utils/connectMongo';
import User from '../../../../models/userModel';
import { checkToken } from '../../../../utils/protector';

export default async function handler(req, res) {
    if (!checkToken(req)) return res.status(403).send();
    const { email } = req.query
    try {
        await connectMongo();
        const user = await User.findOne({ email: email });
        res.json({ user });
    } catch (error) {
        res.json({ error });
    }
}