import React, { useState, useEffect } from 'react';
import { Zap, Settings, Gauge, Wrench, ChevronRight, Star, Droplets, Thermometer, Activity } from 'lucide-react';

function App() {
  const [animatedText, setAnimatedText] = useState(0);
  const [glowPulse, setGlowPulse] = useState(false);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setAnimatedText(prev => (prev + 1) % 3);
    }, 2000);
    
    const glowInterval = setInterval(() => {
      setGlowPulse(prev => !prev);
    }, 1500);
    
    return () => {
      clearInterval(interval);
      clearInterval(glowInterval);
    };
  }, []);

  // Specifications from the technical drawing
  const specs = [
    { label: "Work Order No.", value: "HH-1245-SC", icon: <Wrench className="w-4 h-4" /> },
    { label: "Type", value: "H Frame (SPM) Four Guide", icon: <Settings className="w-4 h-4" /> },
    { label: "Force", value: "150+150 TON", icon: <Zap className="w-4 h-4" /> },
    { label: "Working Pressure", value: "212 Kg/cm²", icon: <Gauge className="w-4 h-4" /> },
    { label: "Motor Rating", value: "40 HP (30 kW)", icon: <Zap className="w-4 h-4" /> },
    { label: "Tank Capacity", value: "1000 Ltrs", icon: <Droplets className="w-4 h-4" /> },
    { label: "Customer Trial", value: "11.07.2023", icon: <Activity className="w-4 h-4" /> },
    { label: "Dispatch", value: "15.07.2023", icon: <Settings className="w-4 h-4" /> }
  ];

  // Component legend matching the technical drawing color coding
  const components = [
    { name: "Hydraulic Tank", color: "bg-cyan-400", textColor: "text-cyan-900", description: "1000L Main Storage" },
    { name: "Motor", color: "bg-blue-600", textColor: "text-white", description: "40 HP Drive Unit" },
    { name: "Pump", color: "bg-green-500", textColor: "text-white", description: "Main/Rexroth Equivalent" },
    { name: "Heat Exchanger", color: "bg-orange-500", textColor: "text-white", description: "Water Cooled Oil Cooling" },
    { name: "Relief Valve", color: "bg-red-500", textColor: "text-white", description: "212 Kg/cm² Directional" },
    { name: "Control Valve", color: "bg-purple-500", textColor: "text-white", description: "Flow Control System" },
    { name: "Flow Control", color: "bg-pink-400", textColor: "text-black", description: "Fast: 260ml/s" },
    { name: "Accumulator", color: "bg-gray-400", textColor: "text-black", description: "Pressure Storage" },
    { name: "PLC/HMI", color: "bg-lime-400", textColor: "text-black", description: "Mitsubishi GS2107 HMI" },
    { name: "Electrical", color: "bg-indigo-500", textColor: "text-white", description: "Siemens/Schneider" },
    { name: "Lubrication", color: "bg-yellow-400", textColor: "text-black", description: "Auto Lube System" },
    { name: "High Pressure Lines", color: "bg-red-600", textColor: "text-white", description: "Main Hydraulic Lines" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(25)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-yellow-400 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 2}s`
            }}
          />
        ))}
      </div>

      {/* Main Container */}
      <div className="relative z-10 container mx-auto px-4 py-8">
        {/* Header Section with 90s Flash Style */}
        <div className="text-center mb-12">
          <div className={`inline-block p-6 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 rounded-lg shadow-2xl border-4 border-yellow-400 transform transition-all duration-500 ${glowPulse ? 'scale-105 shadow-yellow-400/50' : 'scale-100'}`}>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 tracking-wider filter drop-shadow-lg">
              <span className="bg-gradient-to-r from-yellow-300 to-orange-400 bg-clip-text text-transparent">
                HYDRAULIC POWER PACK
              </span>
              <br />
              <span className="bg-gradient-to-r from-pink-400 to-red-500 bg-clip-text text-transparent">
                2D TECHNICAL DRAWING
              </span>
            </h1>
            <div className="flex justify-center items-center space-x-2 text-yellow-300 text-lg font-bold">
              <Star className="w-6 h-6 animate-spin" />
              <span>300 TON H FRAME COMPRESSION & TRANSFER MOULDING PRESS</span>
              <Star className="w-6 h-6 animate-spin" />
            </div>
          </div>
          
          {/* Animated Tech Text */}
          <div className="mt-6 h-8">
            <p className={`text-lime-400 font-mono text-xl transition-opacity duration-500 ${animatedText === 0 ? 'opacity-100' : 'opacity-0'} ${animatedText === 0 ? '' : 'absolute'}`}>
              > H FRAME (SPM) FOUR GUIDE SYSTEM_
            </p>
            <p className={`text-cyan-400 font-mono text-xl transition-opacity duration-500 ${animatedText === 1 ? 'opacity-100' : 'opacity-0'} ${animatedText === 1 ? '' : 'absolute'}`}>
              > 212 KG/CM² WORKING PRESSURE_
            </p>
            <p className={`text-pink-400 font-mono text-xl transition-opacity duration-500 ${animatedText === 2 ? 'opacity-100' : 'opacity-0'} ${animatedText === 2 ? '' : 'absolute'}`}>
              > MITSUBISHI PLC/HMI CONTROL_
            </p>
          </div>
        </div>

        {/* Technical Specifications Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {specs.map((spec, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-lg border-2 border-cyan-400 shadow-lg transform hover:scale-105 transition-all duration-300 hover:shadow-cyan-400/50 group"
            >
              <div className="flex items-center space-x-3 mb-3">
                <div className="text-yellow-400 group-hover:text-pink-400 transition-colors duration-300">
                  {spec.icon}
                </div>
                <h3 className="text-cyan-400 font-bold text-sm">{spec.label}</h3>
              </div>
              <p className="text-white text-lg font-mono bg-gradient-to-r from-lime-300 to-yellow-400 bg-clip-text text-transparent">
                {spec.value}
              </p>
            </div>
          ))}
        </div>

        {/* System Diagram Representation */}
        <div className="bg-gradient-to-r from-gray-900 via-purple-900 to-gray-900 p-8 rounded-xl border-4 border-yellow-400 shadow-2xl mb-12">
          <h2 className="text-3xl font-bold text-center mb-8 bg-gradient-to-r from-cyan-400 to-pink-400 bg-clip-text text-transparent">
            HYDRAULIC SYSTEM LAYOUT
          </h2>
          
          {/* Simplified System Flow */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div className="text-center">
              <div className="bg-cyan-400 text-cyan-900 p-6 rounded-lg border-4 border-white shadow-lg mb-4">
                <Droplets className="w-12 h-12 mx-auto mb-2" />
                <h3 className="font-bold text-lg">HYDRAULIC TANK</h3>
                <p className="text-sm">1000 LITERS</p>
                <p className="text-xs">Oil Level Indicator</p>
              </div>
            </div>
            
            <div className="text-center">
              <div className="bg-blue-600 text-white p-6 rounded-lg border-4 border-white shadow-lg mb-4">
                <Zap className="w-12 h-12 mx-auto mb-2" />
                <h3 className="font-bold text-lg">MOTOR & PUMP</h3>
                <p className="text-sm">40 HP (30 kW)</p>
                <p className="text-xs">Main/Rexroth Equivalent</p>
              </div>
            </div>
            
            <div className="text-center">
              <div className="bg-orange-500 text-white p-6 rounded-lg border-4 border-white shadow-lg mb-4">
                <Thermometer className="w-12 h-12 mx-auto mb-2" />
                <h3 className="font-bold text-lg">HEAT EXCHANGER</h3>
                <p className="text-sm">Water Cooled</p>
                <p className="text-xs">Oil Cooling System</p>
              </div>
            </div>
          </div>

          {/* Control Systems */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-lime-400 text-black p-6 rounded-lg border-4 border-white shadow-lg">
              <Settings className="w-8 h-8 mb-2" />
              <h3 className="font-bold text-lg">PLC & HMI</h3>
              <p className="text-sm">Mitsubishi GS2107 HMI</p>
              <p className="text-xs">Centralized Grease & Auto Lube</p>
            </div>
            
            <div className="bg-indigo-500 text-white p-6 rounded-lg border-4 border-white shadow-lg">
              <Activity className="w-8 h-8 mb-2" />
              <h3 className="font-bold text-lg">ELECTRICAL</h3>
              <p className="text-sm">Siemens/Schneider</p>
              <p className="text-xs">Industrial Control Systems</p>
            </div>
          </div>
        </div>

        {/* Component Legend with Flash-style Animation */}
        <div className="bg-gradient-to-r from-gray-900 via-purple-900 to-gray-900 p-8 rounded-xl border-4 border-yellow-400 shadow-2xl mb-12">
          <h2 className="text-3xl font-bold text-center mb-8 bg-gradient-to-r from-cyan-400 to-pink-400 bg-clip-text text-transparent">
            COMPONENT LEGEND & COLOR CODING
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {components.map((component, index) => (
              <div
                key={index}
                className={`${component.color} ${component.textColor} p-4 rounded-lg border-2 border-white shadow-lg transform hover:scale-105 transition-all duration-300 cursor-pointer group`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-center">
                  <div className="font-bold text-sm mb-1 group-hover:animate-pulse">
                    {component.name}
                  </div>
                  <div className="text-xs opacity-80">
                    {component.description}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Interactive Control Panel */}
        <div className="flex flex-wrap justify-center gap-6 mb-12">
          <button className="bg-gradient-to-r from-red-500 to-pink-600 text-white px-8 py-4 rounded-lg border-2 border-yellow-400 font-bold text-lg shadow-lg transform hover:scale-105 transition-all duration-300 hover:shadow-red-400/50 flex items-center space-x-2 group">
            <Zap className="w-5 h-5 group-hover:animate-bounce" />
            <span>SYSTEM START</span>
            <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
          
          <button className="bg-gradient-to-r from-green-500 to-lime-500 text-white px-8 py-4 rounded-lg border-2 border-cyan-400 font-bold text-lg shadow-lg transform hover:scale-105 transition-all duration-300 hover:shadow-green-400/50 flex items-center space-x-2 group">
            <Gauge className="w-5 h-5 group-hover:animate-pulse" />
            <span>PRESSURE CHECK</span>
            <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
          
          <button className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-lg border-2 border-pink-400 font-bold text-lg shadow-lg transform hover:scale-105 transition-all duration-300 hover:shadow-blue-400/50 flex items-center space-x-2 group">
            <Settings className="w-5 h-5 group-hover:animate-spin" />
            <span>HMI CONTROL</span>
            <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* Footer with Technical Details */}
        <div className="text-center">
          <div className="inline-block bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 p-4 rounded-lg border-2 border-cyan-400 shadow-lg mb-4">
            <p className="text-black font-bold text-lg">
              🔧 PLATFORM STRUCTURE (TOP OF PRESS) • LADDER ACCESS • AUTO LUBE SYSTEM 🔧
            </p>
          </div>
          <div className="mt-4 text-cyan-400 font-mono text-sm">
            > Work Order: HH-1245-SC • Customer Trial: 11.07.2023 • Dispatch: 15.07.2023 <
          </div>
          <div className="mt-2 text-lime-400 font-mono text-xs">
            > Fast Approach: 260ml/s • Slow Approach: 15ml/s • Water In/Out Heat Exchange <
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;