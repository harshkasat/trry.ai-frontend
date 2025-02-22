'use client'
import { useEffect, useState } from "react";
import { useRouter } from 'next/navigation';

// Separate the Google Auth logic into a non-hook function
export const handleGoogleLogin = () => {
  const GOOGLE_AUTH_URL = 'https://accounts.google.com/o/oauth2/v2/auth';
  const GOOGLE_CLIENT_ID = process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID;
  const REDIRECT_URI = process.env.NEXT_PUBLIC_REDIRECT_URI;
  const BASE_API_URL = process.env.NEXT_PUBLIC_BASE_API_URL;

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

// Helper function to get a cookie by name
const getCookie = (name: string) => {
  if (typeof window === 'undefined') return null;
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop()?.split(';').shift();
};

// Optional: Function to fetch user profile
const fetchUserProfile = async (accessToken: string) => {
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

// React component for handling auth state
export function useGoogleAuth() {
  const [isLoading, setIsLoading] = useState(false);
  const [userProfile, setUserProfile] = useState(null);
  const router = useRouter();

  useEffect(() => {
    // Ensure environment variables are loaded
    if (!process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID || 
        !process.env.NEXT_PUBLIC_BASE_API_URL || 
        !process.env.NEXT_PUBLIC_REDIRECT_URI) {
      console.error("Missing environment variables for Google Auth");
    }

    // Check for the presence of cookies after the redirect
    const accessToken = getCookie('access_token');
    const refreshToken = getCookie('refresh_token');

    if (accessToken && refreshToken) {
      setIsLoading(true);

      fetchUserProfile(accessToken)
        .then(profile => {
          setUserProfile(profile);
          setIsLoading(false);
          router.push('/dashboard');
        })
        .catch(error => {
          console.error("Error fetching profile:", error);
          setIsLoading(false);
        });
    } else {
      setIsLoading(false);
    }
  }, [router]);

  return {
    isLoading,
    userProfile,
    handleGoogleLogin
  };
}