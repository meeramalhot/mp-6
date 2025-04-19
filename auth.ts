import GitHubProvider from "@auth/core/providers/github";
import NextAuth from "next-auth";

//https://next-auth.js.org/providers/github

const ghSecret = process.env.GH_SECRET;

const clientId = process.env.CLIENT_ID;
const authSecret = process.env.AUTH_SECRET;

if (!clientId) {
    throw Error("no clientId in env")
}
if (!ghSecret) {
  throw Error("no gh in env")
}
if (!authSecret) {
    throw Error("no authSecret in env")
}

export const { handlers, auth } = NextAuth({
    providers: [
        GitHubProvider({
            clientId: clientId,
            clientSecret: ghSecret,
        }),
    ],
    secret: authSecret,
});
