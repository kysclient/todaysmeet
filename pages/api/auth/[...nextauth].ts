import NextAuth from "next-auth";
import KakaoProvider from "next-auth/providers/kakao"
import {signInWithCustomToken} from "@firebase/auth";
import {auth} from "../../../lib/firebase/app";


export default NextAuth({
    providers: [
        KakaoProvider({
            clientId: process.env.KAKAO_CLIENT_ID!,
            clientSecret: process.env.KAKAO_CLIENT_SECRET!
        })
    ],
    callbacks: {
        async signIn(props) {
            try {
                return false;

            }catch {
                return false;
            }
        }
    }
})
;

