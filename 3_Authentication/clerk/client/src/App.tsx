import { useState, useEffect } from "react";
import {
    // To Login
    SignedOut,
    SignInButton,
    // To Logout
    SignedIn,
    UserProfile,
    SignOutButton,
    // Utils
    useAuth,
} from "@clerk/clerk-react";

export default function App() {
    const { isSignedIn, getToken } = useAuth();
    const [token, setToken] = useState("");

    useEffect(() => {
        const fetchToken = async () => {
            const token = await getToken();
            setToken(token || "");
        };

        if (isSignedIn) fetchToken();
    }, [getToken, isSignedIn]);

    function copyToClipboard(text: string) {
        navigator.clipboard
            .writeText(text)
            .then(() => alert("Token copied to clipboard!"))
            .catch((err) => alert("Failed to copy token: " + err));
    }

    return (
        <div
            className="w-[100dvw] h-[100dvh]
              flex items-center justify-center"
        >
            <SignedOut>
                <SignInButton />
            </SignedOut>
            <SignedIn>
                <div
                    className="flex flex-col 
                      items-center justify-center 
                      gap-4 m-auto 
                      w-full max-w-4xl px-4"
                >
                    <div className="w-full flex items-center gap-4">
                        <div className="flex-shrink-0">
                            <SignOutButton />
                        </div>
                        <button
                            onClick={copyToClipboard.bind(null, token)}
                            className=" truncate"
                            title="Click to copy token"
                        >
                            <b>Copy Token: </b>
                            {token}
                        </button>
                    </div>

                    <UserProfile />
                </div>
            </SignedIn>
        </div>
    );
}
