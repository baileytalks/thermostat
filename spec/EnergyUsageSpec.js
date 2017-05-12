describe('EnergyUsage', function() {

  var energyUsage = new EnergyUsage();

  describe('usage indicator', function() {
    it('returns low-usage if temperature is under 18', function() {
      expect(energyUsage.usageIndicator(17)).toEqual('LOW-USAGE');
    })

    it('returns high-usage if temperature is over 24', function() {
      expect(energyUsage.usageIndicator(25)).toEqual('HIGH-USAGE');
    })

    it('returns medium-usage if temperature is between 18 and 24', function() {
      expect(energyUsage.usageIndicator(18)).toEqual('MEDIUM-USAGE');
      expect(energyUsage.usageIndicator(24)).toEqual('MEDIUM-USAGE');
    })
  })
})
