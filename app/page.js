
"use client";

import { useState, useEffect } from 'react';
import axios from 'axios';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import MessageDisplay from '@/components/MessageDisplay';
import { Transition } from '@headlessui/react';

export default function Home() {
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/message`);
        setMessage(response.data.message);
        setError(null);
      } catch (err) {
        console.error('Error fetching data:', err);
        setError('Failed to fetch data from the server. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-grow flex items-center justify-center p-6 sm:p-24">
        <div className="w-full max-w-4xl mx-auto">
          <Transition
            show={!loading}
            enter="transition-opacity duration-500"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity duration-500"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="bg-white rounded-2xl shadow-medium p-8 sm:p-12">
              <h1 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-6 text-center">
                Welcome to Simple Web Stack
              </h1>
              
              <div className="mb-8 text-center">
                <p className="text-gray-600 mb-4">
                  A minimalist application with a NextJS frontend and Express backend.
                </p>
                
                <MessageDisplay 
                  message={message} 
                  loading={loading} 
                  error={error} 
                />
              </div>
            </div>
          </Transition>
          
          {loading && (
            <div className="flex justify-center items-center">
              <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary-500"></div>
            </div>
          )}
        </div>
      </main>
      
      <Footer />
    </div>
  );
}
