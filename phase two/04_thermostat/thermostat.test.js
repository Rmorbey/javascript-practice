const Thermostat = require('./thermostat');



describe(`Thermostat`, () => {
  describe(`.getTemperature`, () => {
    it(`starts with an initial temperature of 20`, () => {
      let thermostat = new Thermostat();
      expect(thermostat.getTemperature()).toBe(20)
    });

    // it(`returns current temperature`, () => {
    //   thermostat.up();
    //   thermostat.up();
    //   expect(thermostat.getTemperature()).toBe(22)
    // });

    it(`the minimum possible temp is 10, it can't go below 10`, () => {
      let thermostat = new Thermostat();
      for (let i = 0 ; i < 10 ; i++) {
        thermostat.down();
      }
      thermostat.down();
      
      expect(thermostat.down()).toEqual(`Temperature can't go below 10.`)
      expect(thermostat.getTemperature()).toBe(10)
    });

    // it(`the maximum possible temp is 32, it can't go above 32`, () => {
    //   thermostat.setPowerSavingMode(false);
    //   for (let i = 0 ; i < 12 ; i++) {
    //     thermostat.up();
    //   }
    //   thermostat.up();
    //   // an error should be thrown here saying `can't go above 32 degrees, just dunno how to do it`
    //   expect(thermostat.getTemperature()).toBe(32)
    // });

  });

  describe(`.up`, () => {
    it(`increases the temp by 1`, () => {
      let thermostat = new Thermostat();
      thermostat.up();
      expect(thermostat.getTemperature()).toBe(21)
    });
  });

  describe(`.down`, () => {
    it(`decreases the temp by 1`, () => {
      let thermostat = new Thermostat();
      thermostat.down();
      expect(thermostat.getTemperature()).toBe(19)
    });
  });

  describe(`.setPowerSavingMode`, () => {
    it(`PoweverSavingMode is on by default`, () => {
      let thermostat = new Thermostat();

      expect(thermostat.PSM).toBe(true)
    });

    it(`PoweverSavingMode can be switched to false`, () => {
      let thermostat = new Thermostat();
      thermostat.setPowerSavingMode(false);
      expect(thermostat.PSM).toBe(false)
    });

    it(`can be set to true (on), max temp is now 25`, () => {
      let thermostat = new Thermostat();
      for (let i = 0 ; i < 6 ; i++) {
        thermostat.up();
      }
      expect(thermostat.up()).toEqual(`PSM is on. Max temp: 25`)
      expect(thermostat.getTemperature()).toBe(25)
    });

    // it(`can be set to false (off), max temp is now 32`, () => {
    //   thermostat.setPowerSavingMode(false);
    //   for (let i = 0 ; i < 12 ; i++) {
    //     thermostat.up();
    //   }
    //   expect(thermostat.getTemperature()).toBe(32)
    // });

    // it(`when PowerSavingMode is turned on when the temp is above 25, it will set the temp back to 25`, () => {
    //   thermostat.setPowerSavingMode(false);
    //   for (let i = 0 ; i < 10 ; i++) {
    //     thermostat.up();
    //   }
    //   thermostat.setPowerSavingMode(true);
    //   expect(thermostat.getTemperature()).toBe(25)
    // });
  });
  
  // describe(`.reset`, () => {
  //   it(`resets temp back to 20, or initial temp when temp is above 20`, () => {
  //     for (let i = 0 ; i < 10 ; i++) {
  //       thermostat.up();
  //     }
  //     thermostat.reset();
  //     expect(thermostat.getTemperature()).toBe(20)
  //   });

  //   it(`resets temp back to 20, or initial temp when temp is below 20`, () => {
  //     for (let i = 0 ; i < 10 ; i++) {
  //       thermostat.down();
  //     }
  //     thermostat.reset();
  //     expect(thermostat.getTemperature()).toBe(20)
  //   });

  // });

  // describe(`.energyUsage`, () => {
  //   it(`tells you energyUsage is low-usage if below 18`, () => {
  //     for (let i = 0 ; i < 5 ; i++) {
  //       thermostat.down();
  //     }
  //     expect(thermostat.energyUsage()).toEqual('low-usage')
  //   });

  //   it(`tells you energyUsage is medium-usage if equal to or below 25`, () => {
  //     for (let i = 0 ; i < 5 ; i++) {
  //       thermostat.up();
  //     }
  //     expect(thermostat.energyUsage()).toEqual('medium-usage')
  //   });

  //   it(`tells you energyUsage is high-usage if above 26`, () => {
  //     for (let i = 0 ; i < 6 ; i++) {
  //       thermostat.up();
  //     }
  //     expect(thermostat.energyUsage()).toEqual('high-usage')
  //   });
  // });
});