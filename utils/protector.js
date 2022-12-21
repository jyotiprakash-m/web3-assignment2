
const checkToken = ({ headers: { 'x-access-token': token } }) => token === process.env.TOKEN_KEY

export { checkToken };