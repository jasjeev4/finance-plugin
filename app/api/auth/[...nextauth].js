import NextAuth from 'next-auth'
import Providers from 'next-auth/providers'

const options = {
  providers: [
    Providers.Credentials({
      name: 'Custom OAuth2',
      credentials: {
        clientId: { label: "Client ID", type: "text" },
        clientSecret: { label: "Client Secret", type: "password" },
      },
      authorize: async (credentials) => {
        // Implement your own logic to authorize the user
        // and return an object containing the user data
        // or null if the authorization fails.
        const { clientId, clientSecret } = credentials;
        if (clientId === 'X13WCsVPqIS7em5mrmYa' && clientSecret === 'Cc40AWKHjfSRJmyzzURu') {
          return { id: 1, name: 'John Doe', email: 'john@example.com' };
        }
        return null;
      },
    }),
    // Add more providers here if needed
  ],
  callbacks: {
    async jwt(token, user) {
      // Add custom properties to the JWT token
      if (user) {
        token.id = user.id;
      }
      return token;
    },
    async session(session, token) {
      // Add custom properties to the session object
      session.user.id = token.id;
      return session;
    },
  },
};

export default NextAuth(options);