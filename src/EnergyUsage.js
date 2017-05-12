function EnergyUsage() {}

EnergyUsage.prototype.usageIndicator = function (temperature) {
  if ( temperature < 18 ) { return 'LOW-USAGE' }
  if ( temperature > 24 ) { return 'HIGH-USAGE' }
  return 'MEDIUM-USAGE'
};
