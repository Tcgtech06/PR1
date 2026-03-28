import './FabricFlow.css';

const FabricFlow = () => {
  return (
    <div className="fabric-flow-container">
      {/* Yarn threads flowing */}
      <div className="yarn-thread yarn-1"></div>
      <div className="yarn-thread yarn-2"></div>
      <div className="yarn-thread yarn-3"></div>
      <div className="yarn-thread yarn-4"></div>
      <div className="yarn-thread yarn-5"></div>
      <div className="yarn-thread yarn-6"></div>
      
      {/* Fabric particles */}
      <div className="fabric-particle particle-1"></div>
      <div className="fabric-particle particle-2"></div>
      <div className="fabric-particle particle-3"></div>
      <div className="fabric-particle particle-4"></div>
      <div className="fabric-particle particle-5"></div>
      <div className="fabric-particle particle-6"></div>
      <div className="fabric-particle particle-7"></div>
      <div className="fabric-particle particle-8"></div>
      
      {/* Weaving pattern overlay */}
      <div className="weave-pattern"></div>
    </div>
  );
};

export default FabricFlow;
