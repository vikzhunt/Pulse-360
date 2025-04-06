import React, { useState,useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import Logo from "../../assets/Pulse 360.png";
import Logo1 from "../../assets/logo.png";
import { 
  Mail, 
  Lock, 
  User, 
  ArrowRight, 
  UserCheck, 
  Shield, 
  Globe2,
  Users,
  CheckCircle2,
  Fingerprint,
  Key
} from 'lucide-react';

function Auth() {
  const [isLogin, setIsLogin] = useState(true);
  const [isAnimating, setIsAnimating] = useState(false);
  const [role, setRole] = useState('Viewer');
  const [showFeatures, setShowFeatures] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    setShowFeatures(true);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', { email, password, name, role });
  };

  const toggleForm = () => {
    setIsAnimating(true);
    setTimeout(() => {
      setIsLogin(!isLogin);
      setIsAnimating(false);
    }, 400);
  };

  const features = [
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'Military-grade encryption for your data'
    },
    {
      icon: Globe2,
      title: 'Global Operations',
      description: 'Manage security from anywhere, anytime'
    },
    {
      icon: Users,
      title: 'Team Management',
      description: 'Collaborate with your security team efficiently'
    },
    {
      icon: Fingerprint,
      title: 'Biometric Integration',
      description: 'Advanced authentication methods'
    }
  ];

  const handleLogin = () => {
    navigate("/dashboard");
  };

  return (
    <div className="h-screen w-screen flex items-stretch bg-gradient-to-br from-emerald-50 to-emerald-100 overflow-hidden">
      <div className="w-full h-full flex flex-row-reverse">
        {/* Left Side - Form */}
        <div className="w-full lg:w-[45%] h-full p-8 lg:p-12 flex flex-col justify-center bg-white relative z-10">
          <div 
            className={`transition-all duration-500 max-w-md mx-auto ${
              isAnimating ? 'opacity-0 scale-95' : 'opacity-100 scale-100'
            }`}
          >
            <div className="flex items-center justify-center mb-8">
              <div className="relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-yellow-600 rounded-full to-teal-600 blur opacity-30 animate-pulse"></div>
                <div className="h-26 w-26 relative bg-white rounded-full flex items-center justify-center border-2 border-emerald-500">
                  <img
                    className='rounded-full w-24 h-24' 
                    src={Logo1} 
                    alt="" 
                  />
                </div>
              </div>
            </div>

            <h2 className="text-4xl font-bold text-gray-800 mb-2 text-center bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
              {isLogin ? 'Welcome Back!' : 'Join Pulse 360'}
            </h2>
            <p className="text-center text-gray-600 mb-8">
              {isLogin ? 'Access your secure dashboard' : 'Create your security command center'}
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              {!isLogin && (
                <>
                  <div className="relative group">
                    <UserCheck className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 group-hover:text-emerald-500 transition-colors" size={20} />
                    <select
                      value={role}
                      onChange={(e) => setRole(e.target.value)}
                      className="w-full pl-11 pr-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 bg-white shadow-sm transition-all hover:border-emerald-500"
                    >
                      <option value="Viewer">Security Analyst</option>
                      <option value="Client">Team Lead</option>
                      <option value="Admin">Security Admin</option>
                    </select>
                  </div>

                  <div className="relative group">
                    <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 group-hover:text-emerald-500 transition-colors" size={20} />
                    <input
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Full Name"
                      className="w-full pl-11 pr-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 bg-white shadow-sm transition-all hover:border-emerald-500"
                    />
                  </div>
                </>
              )}

              <div className="relative group">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 group-hover:text-emerald-500 transition-colors" size={20} />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email Address"
                  className="w-full pl-11 pr-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 bg-white shadow-sm transition-all hover:border-emerald-500"
                />
              </div>

              <div className="relative group">
                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 group-hover:text-emerald-500 transition-colors" size={20} />
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Password"
                  className="w-full pl-11 pr-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 bg-white shadow-sm transition-all hover:border-emerald-500"
                />
              </div>

              <button
                type="submit"
                onClick={handleLogin}
                className="w-full bg-gradient-to-r from-emerald-600 to-teal-600 text-white py-3.5 rounded-xl hover:opacity-90 transform hover:scale-[1.02] transition-all flex items-center justify-center group shadow-lg"
              >
                <span className="text-lg">{isLogin ? 'Sign In' : 'Create Account'}</span>
                <ArrowRight className="ml-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" size={20} />
              </button>
            </form>

            <p className="text-center text-sm text-gray-600 mt-6">
              {isLogin ? "Don't have an account?" : "Already have an account?"}
              <button
                onClick={toggleForm}
                className="ml-2 text-emerald-600 hover:text-emerald-800 font-medium transition-colors"
              >
                {isLogin ? 'Sign Up' : 'Sign In'}
              </button>
            </p>

            <div className="mt-6 pt-6 border-t text-center text-sm text-gray-500">
              <a href="#" className="hover:text-gray-700 transition-colors">Privacy Policy</a>
              <span className="mx-2">•</span>
              <a href="#" className="hover:text-gray-700 transition-colors">Terms & Conditions</a>
            </div>
          </div>
        </div>

        {/* Right Side - Image & Features */}
        <div className="hidden lg:block w-[55%] relative group overflow-hidden bg-gray-900">
          <div className="absolute inset-0 bg-gradient-to-tr from-black/90 via-black/70 to-transparent z-10"></div>
          <img
            src={isLogin
              ? "https://images.unsplash.com/photo-1639322537228-f710d846310a?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80"
              : "https://images.unsplash.com/photo-1639322537504-6427a16b0a28?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80"}
            alt="Security Operations"
            className="w-full h-full object-cover transition-transform duration-700 ease-in-out scale-100 group-hover:scale-105"
          />
          
          <div className="absolute inset-0 z-20 p-12 flex flex-col justify-between">
            <div>
              <div className="flex items-center space-x-3 mb-12">
                <div className="h-12 w-12 bg-emerald-500/20 backdrop-blur-sm rounded-xl flex items-center justify-center">
                  <Shield className="h-6 w-6 text-emerald-400" />
                </div>
                <h3 className="text-2xl font-bold text-white">Pulse 360</h3>
              </div>
              <div className="space-y-4 max-w-lg">
                <h2 className="text-4xl font-bold text-white leading-tight">
                  {isLogin ? 'Welcome to Next-Gen Security' : 'Join the Security Revolution'}
                </h2>
                <p className="text-emerald-100 text-lg">
                  Experience enterprise-grade security management with AI-powered threat detection 
                  and real-time incident response.
                </p>
              </div>
            </div>

            <div className="space-y-6">
              <div className="grid grid-cols-2 gap-6">
                {features.map((feature, index) => (
                  <div
                    key={feature.title}
                    className={`transform transition-all duration-700 backdrop-blur-sm bg-white/5 rounded-xl p-4 hover:bg-white/10 ${
                      showFeatures ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                    }`}
                    style={{ transitionDelay: `${index * 100}ms` }}
                  >
                    <div className="flex items-start space-x-3">
                      <div className="flex-shrink-0">
                        <feature.icon className="h-6 w-6 text-emerald-400" />
                      </div>
                      <div>
                        <h4 className="text-white font-semibold">{feature.title}</h4>
                        <p className="text-emerald-200 text-sm mt-1">{feature.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex items-center space-x-4 pt-6 border-t border-white/10">
                <CheckCircle2 className="text-emerald-400 h-5 w-5" />
                <span className="text-emerald-100 text-sm">SOC 2 Type II & ISO 27001 Certified</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Auth;
