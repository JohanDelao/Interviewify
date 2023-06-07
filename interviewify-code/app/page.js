"use client";
import { useEffect, useState } from 'react';
import axios from 'axios';
import InfoPage from "./components/infopage";
import { useRouter } from 'next/navigation';
import DashBoardComponent from './components/dashboard';

export default function Home() {
  const [user, setUser] = useState(null)
  const router = useRouter()

  useEffect(() => {
    const getUser = async () => {
      try {
        const res = await axios.get('http://localhost:4000/auth/login/success',
          {
            withCredentials: true
          }
        );
        setUser(res.data.user)

      } catch (error) {
        console.log(error)
      }
    }
    getUser();
    if(user){
      router.push('/dashboard')
    }else{
      router.push('/homePage')
    }
  }, []);

  return (
    <>
    {/* {user ? <DashBoardComponent /> : <InfoPage />} */}
    </>
  )
}
