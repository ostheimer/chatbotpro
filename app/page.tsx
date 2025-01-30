import React from 'react';
import Link from 'next/link';

const HomePage: React.FC = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen overflow-hidden">
        <video
          autoPlay
          loop
          muted
          className="absolute w-full h-full object-cover"
        >
          <source src="/path-to-your-video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="relative z-10 bg-blue-500 bg-opacity-50 text-white py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl font-bold mb-4">Build a Free AI Chatbot</h1>
            <p className="text-lg mb-8">Powered by OpenAI</p>
            <Link href="/auth/register" className="bg-white text-blue-500 px-6 py-3 rounded-full font-semibold hover:bg-gray-100">
              Try Free
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Key Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2">Get Started Quickly</h3>
              <p>Easy setup and integration with your existing systems.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2">Connect and Control</h3>
              <p>Manage your data and interactions seamlessly.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2">Integrate with Apps</h3>
              <p>Connect with over 7000+ apps for enhanced functionality.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-gray-100 py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">What Our Users Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <p>&quot;TheChatBot has transformed the way we interact with our customers. It&apos;s a game-changer!&quot;</p>
              <p className="mt-4 font-semibold">- Jane Doe, CEO of TechCorp</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <p>"Our team loves the seamless integration and powerful AI capabilities."</p>
              <p className="mt-4 font-semibold">- John Smith, CTO of Innovate Inc.</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">FAQ</h2>
          <div className="space-y-4">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2">How can I try TheChatBot?</h3>
              <p>Sign up for a free trial to explore all features.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2">What makes TheChatBot different?</h3>
              <p>Our AI-driven approach ensures intelligent and context-aware interactions.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2023 TheChatBot. All rights reserved.</p>
          <p>Privacy Policy | Terms of Service | Contact Us</p>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
