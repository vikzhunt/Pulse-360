import React, { useState } from 'react';
import {
  LayoutDashboard,
  Users,
  Settings,
  ChevronLeft,
  Menu,
  Bell,
  Search,
  Briefcase,
  FileText,
  Shield,
  AlertCircle,
  Activity,
  ClipboardList,
  UserCog,
  BarChart,
  Calendar,
  MessageSquare,
  HelpCircle,
  FileBarChart,
  Building2,
  Wallet,
  Receipt,
  PieChart,
  LineChart,
  UserPlus,
  Mail,
  Phone,
  Clock,
  Target,
  Boxes,
  Truck,
  Package,
  Warehouse,
  ShoppingCart,
  DollarSign,
  CreditCard,
  PiggyBank,
  TrendingUp,
  BadgePercent,
  Users2,
  GraduationCap,
  BookOpen,
  Award,
  AlignCenterVertical as Certificate,
  Binary,
  Code2,
  Database,
  Server,
  Cloud,
  Globe,
  Headphones,
  PhoneCall,
  MessagesSquare,
  MailQuestion,
  Heart,
  Stethoscope,
  Clipboard,
  FileSpreadsheet,
} from 'lucide-react';

const Dashboard = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [activeCategory, setActiveCategory] = useState('dashboard');
  const [showUserMenu, setShowUserMenu] = useState(false);

  const sidebarItems = [
    { id: 'dashboard', icon: LayoutDashboard, label: 'Dashboard' },
    { id: 'analytics', icon: BarChart, label: 'Analytics' },
    { id: 'calendar', icon: Calendar, label: 'Calendar' },
    { id: 'users', icon: Users, label: 'Users' },
    { id: 'messages', icon: MessageSquare, label: 'Messages' },
    { id: 'reports', icon: FileBarChart, label: 'Reports' },
    { id: 'help', icon: HelpCircle, label: 'Help Center' },
    { id: 'settings', icon: Settings, label: 'Settings' },
  ];

  const categories = [
    {
      title: 'Management',
      color: 'blue',
      bgClass: 'from-blue-50 to-blue-100/50',
      items: [
        { id: 'admin', icon: UserCog, label: 'Administration Center' },
        { id: 'delegation', icon: Users, label: 'Delegation' },
        { id: 'projects', icon: Briefcase, label: 'Project Management' },
        { id: 'tasks', icon: FileText, label: 'Task Tracking' },
        { id: 'organization', icon: Building2, label: 'Organization Structure' },
      ],
    },
    {
      title: 'Compliance & Safety',
      color: 'purple',
      bgClass: 'from-purple-50 to-purple-100/50',
      items: [
        { id: 'audits', icon: ClipboardList, label: 'Audits Management' },
        { id: 'compliance', icon: Shield, label: 'Compliance Obligations' },
        { id: 'corrective', icon: AlertCircle, label: 'Corrective Action (CAPA & SCAR)' },
        { id: 'critical', icon: Activity, label: 'Critical Actions Tracker' },
        { id: 'risk', icon: Target, label: 'Risk Assessment' },
      ],
    },
    {
      title: 'Finance & Operations',
      color: 'emerald',
      bgClass: 'from-red-50 to-red-100/50',
      items: [
        { id: 'expenses', icon: Wallet, label: 'Expense Management' },
        { id: 'invoicing', icon: Receipt, label: 'Invoicing System' },
        { id: 'budgeting', icon: PiggyBank, label: 'Budget Planning' },
        { id: 'forecasting', icon: TrendingUp, label: 'Financial Forecasting' },
        { id: 'reporting', icon: PieChart, label: 'Financial Reports' },
      ],
    },
    {
      title: 'Supply Chain',
      color: 'amber',
      bgClass: 'from-amber-50 to-amber-100/50',
      items: [
        { id: 'inventory', icon: Boxes, label: 'Inventory Management' },
        { id: 'logistics', icon: Truck, label: 'Logistics Control' },
        { id: 'procurement', icon: ShoppingCart, label: 'Procurement' },
        { id: 'warehouse', icon: Warehouse, label: 'Warehouse Operations' },
        { id: 'orders', icon: Package, label: 'Order Processing' },
      ],
    },
    {
      title: 'Human Resources',
      color: 'rose',
      bgClass: 'from-orange-50 to-orange-100/50',
      items: [
        { id: 'recruitment', icon: UserPlus, label: 'Recruitment' },
        { id: 'training', icon: GraduationCap, label: 'Training & Development' },
        { id: 'performance', icon: Award, label: 'Performance Management' },
        { id: 'benefits', icon: Heart, label: 'Benefits Administration' },
        { id: 'attendance', icon: Clock, label: 'Time & Attendance' },
      ],
    },
    {
      title: 'IT & Infrastructure',
      color: 'cyan',
      bgClass: 'from-cyan-50 to-cyan-100/50',
      items: [
        { id: 'systems', icon: Server, label: 'System Administration' },
        { id: 'network', icon: Globe, label: 'Network Management' },
        { id: 'security', icon: Shield, label: 'Security Controls' },
        { id: 'database', icon: Database, label: 'Database Management' },
        { id: 'cloud', icon: Cloud, label: 'Cloud Services' },
      ],
    },
    {
      title: 'Customer Relations',
      color: 'indigo',
      bgClass: 'from-indigo-50 to-indigo-100/50',
      items: [
        { id: 'support', icon: Headphones, label: 'Customer Support' },
        { id: 'communication', icon: MessagesSquare, label: 'Communication Center' },
        { id: 'feedback', icon: MessageSquare, label: 'Feedback Management' },
        { id: 'inquiries', icon: MailQuestion, label: 'Inquiry Handling' },
        { id: 'crm', icon: Users2, label: 'CRM Dashboard' },
      ],
    },
    {
      title: 'Quality Management',
      color: 'fuchsia',
      bgClass: 'from-fuchsia-50 to-fuchsia-100/50',
      items: [
        { id: 'quality-control', icon: ClipboardList, label: 'Quality Control' },
        { id: 'documentation', icon: FileSpreadsheet, label: 'Documentation' },
        { id: 'standards', icon: Certificate, label: 'Standards Compliance' },
        { id: 'metrics', icon: LineChart, label: 'Quality Metrics' },
        { id: 'improvement', icon: TrendingUp, label: 'Continuous Improvement' },
      ],
    },
  ];

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar */}
      <div 
        className={`bg-emerald-950/80 text-white transition-all duration-300 ${
          isCollapsed ? 'flex flex-col items-center' : ''
        } ${
          isCollapsed ? 'w-16' : 'w-64'
        }`}
      >
        <div className="p-4 pt-6 flex justify-between items-center">
          {!isCollapsed && <h1 className="text-2xl font-bold">Pulse 360</h1>}
          <button
            onClick={() => setIsCollapsed(!isCollapsed)}
            className="p-2 hover:bg-emerald-900 rounded-lg"
          >
            {isCollapsed ? <Menu size={24} /> : <ChevronLeft size={20} />}
          </button>
        </div>
        <nav className="mt-4 items-center">
          {sidebarItems.map((item) => {
            const SidebarIcon = item.icon;
            return (
              <button
                key={item.id}
                onClick={() => setActiveCategory(item.id)}
                className={`w-full flex items-center p-4 hover:bg-emerald-900/80 ${ isCollapsed? 'rounded-lg mb-2' : ''} transition-colors ${
                  activeCategory === item.id ? 'bg-emerald-900/80' : ''
                }`}
              >
                <SidebarIcon size={20} />
                {!isCollapsed && <span className="ml-4">{item.label}</span>}
              </button>
            );
          })}
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-hidden">
        {/* Header */}
        <header className="bg-white border-b border-gray-200">
          <div className="flex items-center justify-between px-6 py-4">
            <div className="flex items-center flex-1">
              <div className="relative w-64">
                <input
                  type="text"
                  placeholder="Search modules..."
                  className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <Search className="absolute left-3 top-2.5 text-gray-400" size={20} />
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <button className="relative p-2 hover:bg-gray-100 rounded-lg">
                <Bell size={20} className="text-gray-600" />
                <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full"></span>
              </button>
              <div className="relative">
                <button 
                  onClick={() => setShowUserMenu(!showUserMenu)}
                  className="flex items-center space-x-3 p-2 hover:bg-gray-100 rounded-lg"
                >
                  <div className="w-8 h-8 bg-emerald-700 rounded-full flex items-center justify-center text-white font-semibold">
                    JD
                  </div>
                  {!isCollapsed && (
                    <div className="text-left">
                      <p className="text-sm font-medium text-gray-700">John Doe</p>
                      <p className="text-xs text-gray-500">Administrator</p>
                    </div>
                  )}
                </button>
                {showUserMenu && (
                  <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-1 z-10">
                    <button className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                      Profile Settings
                    </button>
                    <button className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                      Notifications
                    </button>
                    <button className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                      Security
                    </button>
                    <hr className="my-1" />
                    <button className="block w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-gray-100">
                      Sign Out
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </header>

        {/* Main Content Area */}
        <main className="p-6 overflow-auto h-[calc(100vh-73px)]">
          <div className="max-w-7xl mx-auto">
            <div className="flex justify-between items-center mb-6">
              <div>
                <h2 className="text-2xl font-bold">All Modules</h2>
                <p className="text-gray-600 mt-1">
                  Access and manage all enterprise modules from a single dashboard interface.
                </p>
              </div>
              <div className="flex space-x-2">
                <button className="px-4 py-2 bg-white border-2 border-gray-300 hover:border-emerald-700 hover:text-emerald-800 rounded-lg hover:bg-gray-50 text-sm font-medium text-gray-700">
                  Filter
                </button>
                <button 
                  className="px-4 py-2 text-white rounded-lg bg-emerald-700 hover:bg-emerald-800 text-sm font-medium"
                >
                  Add New Module
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {categories.map((category) => {
                const CategoryIcon = category.items[0].icon;
                return (
                  <div
                    key={category.title}
                    className={`bg-gradient-to-br ${category.bgClass} rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow`}
                  >
                    <div className="p-6 flex flex-col items-center">
                      <h3 className="text-xl text-gray-600 font-bold text-center mb-4 flex items-center">
                        {category.title}
                      </h3>
                      <div className="space-y-2">
                        {category.items.map((item) => {
                          const ItemIcon = item.icon;
                          return (
                            <button
                              key={item.id}
                              className="w-full flex items-center justify-between p-3 bg-white rounded-lg hover:shadow-md transition-all duration-200 hover:translate-x-1"
                            >
                              <div className="flex items-center">
                                <ItemIcon size={18} className={`text-${category.color}-600`} />
                                <span className="ml-3 font-medium  text-left text-sm">{item.label}</span>
                              </div>
                              <ChevronLeft size={16} className="transform rotate-180 text-gray-400" />
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default Dashboard;