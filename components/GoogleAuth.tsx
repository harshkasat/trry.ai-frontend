'use client'
import GoogleButton from "react-google-button";
import { useEffect } from "react";

const onGoogleLoginSuccess = () => {
  const GOOGLE_AUTH_URL = 'https://accounts.google.com/o/oauth2/v2/auth';
  const GOOGLE_CLIENT_ID = process.env.GOOGLE_CLIENT_ID;
  const REDIRECT_URI = process.env.REDIRECT_URI;
  const BASE_API_URL = process.env.BASE_API_URL;
  

  const scope = [
    'https://www.googleapis.com/auth/userinfo.email',
    'https://www.googleapis.com/auth/userinfo.profile'
  ].join(' ');

  if (!GOOGLE_CLIENT_ID) {
    console.error("Missing Google Client ID");
    return;
  }

  const params = {
    response_type: 'code',
    client_id: GOOGLE_CLIENT_ID,
    redirect_uri: `${BASE_API_URL}/${REDIRECT_URI}`,
    prompt: 'select_account',
    access_type: 'offline',
    scope
  };

  const urlParams = new URLSearchParams(params as Record<string, string>).toString();
  window.location.href = `${GOOGLE_AUTH_URL}?${urlParams}`;
};

const LoginButton = () => {
  useEffect(() => {
    // Ensure environment variables are loaded
    if (!process.env.GOOGLE_CLIENT_ID || !process.env.BASE_API_URL || !process.env.REDIRECT_URI) {
      console.error("Missing environment variables for Google Auth");
      console.error("GOOGLE_CLIENT_ID: ", process.env.GOOGLE_CLIENT_ID);
      console.error("BASE_API_URL: ", process.env.BASE_API_URL);
      console.error("REDIRECT_URI: ", process.env.REDIRECT_URI);

    }
  }, []);

  return <GoogleButton onClick={onGoogleLoginSuccess} label="Sign in with Google" />;
};

export default LoginButton;