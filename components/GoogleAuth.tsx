'use client'
import GoogleButton from "react-google-button";
import { useEffect, useState } from "react";
import { useRouter } from 'next/navigation';

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
  const [isLoading, setIsLoading] = useState(false);
  const [userProfile, setUserProfile] = useState(null);
  const router = useRouter();

  useEffect(() => {
    // Ensure environment variables are loaded
    if (!process.env.GOOGLE_CLIENT_ID || !process.env.BASE_API_URL || !process.env.REDIRECT_URI) {
      console.error("Missing environment variables for Google Auth");
      console.error("GOOGLE_CLIENT_ID: ", process.env.GOOGLE_CLIENT_ID);
      console.error("BASE_API_URL: ", process.env.BASE_API_URL);
      console.error("REDIRECT_URI: ", process.env.REDIRECT_URI);
    }

    // Check for the presence of cookies after the redirect
    const accessToken = getCookie('access_token');
    const refreshToken = getCookie('refresh_token');

    if (accessToken && refreshToken) {
      setIsLoading(true); // Start loading before fetching profile

      // You might want to fetch user data here using the access token
      fetchUserProfile(accessToken)
        .then(profile => {
          setUserProfile(profile);
          setIsLoading(false);
          router.push('/dashboard');
        })
        .catch(error => {
          console.error("Error fetching profile:", error);
          setIsLoading(false);
          // Handle error appropriately, e.g., display an error message
        });


      console.log("Access Token:", accessToken);
      console.log("Refresh Token:", refreshToken);
      // Redirect to a logged-in state or dashboard

    } else {
      setIsLoading(false);
    }
  }, [router]);

  // Helper function to get a cookie by name
  const getCookie = (name: string) => {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop()?.split(';').shift();
  };

  // Optional: Function to fetch user profile
  const fetchUserProfile = async (accessToken: string) => {
    // Replace with your actual API endpoint
    const response = await fetch('/api/profile', {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
    if (!response.ok) {
      throw new Error('Failed to fetch user profile');
    }
    return await response.json();
  };

  if (isLoading) {
    return <div>Loading...</div>; // Show a loading indicator
  }

  return <GoogleButton onClick={onGoogleLoginSuccess} label="Sign in with Google" />;
};

export default LoginButton;