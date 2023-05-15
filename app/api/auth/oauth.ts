import { getEdgeProps } from '@vercel/edge-functions'

export default getEdgeProps(async ({ req, res }) => {
  // Extract the query parameters
  const { response_type, client_id, scope, redirect_uri } = req.query;

  // Construct the authorization URL
  const authorizationUrl = `https://finance.logarithmic.science/oauth/authorize?response_type=${response_type}&client_id=${client_id}&scope=${scope}&redirect_uri=${redirect_uri}`;

  // Redirect the user to the authorization URL
  res.redirect(authorizationUrl);
})
