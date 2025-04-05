import React, { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import Logo from "../../assets/Pulse 360.png";
import Logo1 from "../../assets/logo.png";
import { Mail, Lock, User, ArrowRight, UserCheck } from 'lucide-react';

function Auth() {
  const [isLogin, setIsLogin] = useState(true);
  const [isAnimating, setIsAnimating] = useState(false);
  // const [role, setRole] = useState('Viewer');
  const navigate = useNavigate();
  

  const toggleForm = () => {
    setIsAnimating(true);
    setTimeout(() => {
      setIsLogin(!isLogin);
      setIsAnimating(false);
    }, 300);
  };

  const handleLogin = () => {
    navigate("/dashboard");
  }

  return (
    <div className="min-h-screen w-full flex">
      <div className="hidden lg:block w-2/3 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-green-800/20 to-transparent z-10" />
        <div className="relative w-full h-full">
          <img
            src="https://images.unsplash.com/photo-1560493676-04071c5f467b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80"
            alt="Quality control"
            className={`absolute inset-0 w-full h-full object-cover animate-ken-burns transition-opacity duration-500 ${
              isLogin ? 'opacity-100' : 'opacity-0'
            }`}
          />
          <img
            src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80"
            alt="Digital security"
            className={`absolute inset-0 w-full h-full object-cover animate-ken-burns transition-opacity duration-500 ${
              isLogin ? 'opacity-0' : 'opacity-100'
            }`}
          />
        </div>
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-8 text-white z-20">
          <div className="flex items-center space-x-2 mb-4">
            <div>
              <img 
                src={Logo}
                alt="Pulse 360 Logo"
                className="h-12 rounded-full"
              />
            </div>
            <span className="text-xl font-semibold">Pulse 360</span>
          </div>
          <p className="text-sm opacity-80">
            {isLogin 
              ? "Pulse 360 is a platform for raising security concerns and ensuring tasks are completed efficiently."
              : "Join Pulse 360 to manage security concerns and streamline task execution."}
          </p>
        </div>
      </div>

      <div className="w-full lg:w-1/3 flex flex-col justify-center px-8 lg:px-12 bg-white">
        <div className={`transform transition-all duration-300 ${isAnimating ? 'scale-95 opacity-0' : 'scale-100 opacity-100'}`}>
          <div className="mb-4">
            <div className="flex items-center mb-4">
              <div>
                <img 
                  src={Logo1}
                  alt="Pulse 360 Logo"
                  className="h-28 w-36"
                />
              </div>
              {/* <span className="text-xl font-semibold text-gray-800">Pulse 360</span> */}
            </div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-2">
                {isLogin ? 'Authentication' : 'Create Account'}
            </h2>
            <p className="text-gray-600">
              {isLogin ? 'Access your Pulse 360 account' : 'Join Pulse 360 platform'}
            </p>
          </div>

          <form onSubmit={(e) => e.preventDefault()} className="space-y-5">
            {/* <div className="relative">
              <UserCheck className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <select
                value={role}
                onChange={(e) => setRole(e.target.value)}
                className="w-full pl-11 pr-4 text-gray-500 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 bg-white"
              >
                <option value="Viewer">Viewer</option>
                <option value="Client">Client</option>
                <option value="Admin">Admin</option>
              </select>
            </div> */}
            
            {!isLogin && (
              <div className="relative">
                <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                <input
                  type="text"
                  placeholder="Full Name"
                  className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all"
                />
              </div>
            )}
            
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="email"
                placeholder="Email Address"
                className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all"
              />
            </div>

            <div className="relative">
              <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="password"
                placeholder="Password"
                className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all"
              />
            </div>

            <button 
                onClick={handleLogin}
                className="w-full bg-red-600 text-white py-3 rounded-lg hover:bg-red-700 transform hover:scale-[1.02] transition-all flex items-center justify-center group"
            >
              <span>{isLogin ? 'Log In' : 'Create Account'}</span>
              <ArrowRight className="ml-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" size={20} />
            </button>
          </form>

          <div className="mt-6">
            <p className="text-gray-600 text-center text-sm">
              {isLogin ? "Don't have an account?" : "Already have an account?"}
              <button
                onClick={toggleForm}
                className="ml-2 text-red-600 hover:text-red-800 font-medium transition-colors"
              >
                {isLogin ? 'Sign Up' : 'Log In'}
                
              </button>
            </p>

          </div>
          <div className="mt-2 space-y-3">
            <p className="text-center text-gray-500 text-sm">or continue with</p>
            <div className="flex flex-col space-y-3">
              <button className="w-full flex items-center justify-center gap-3 border border-gray-300 py-2 rounded-lg hover:bg-gray-50 transition">
                <img src="https://www.svgrepo.com/show/475656/google-color.svg" alt="Google" className="w-5 h-5" />
                <span className="text-sm text-gray-700">Continue with Google</span>
              </button>
            </div>
            <div className="mt-4 flex space-x-4 justify-center text-sm text-gray-500">
              <a href="#" className="hover:text-gray-700 transition-colors">Privacy Policy</a>
              <span>•</span>
              <a href="#" className="hover:text-gray-700 transition-colors">Terms & Conditions</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Auth;