class Thermostat {

  constructor() {
    this.temperature = 20;
    this.PSM = true;
  }

  getTemperature() {
    return this.temperature;
  }

  up() {
    if ((this.PSM === true) && (this.temperature < 25)) {
      this.temperature ++;
    } else if ((this.PSM === true) && (this.temperature >= 25)) {
      return `PSM is on. Max temp: 25`;
    } else if ((this.PSM === false) && (this.temperature < 32)) {
      this.temperature ++;
    } else if ((this.PSM === false) && (this.temperature >= 32)) {
      return `PSM is off. Max temp: 32`;
    }
  }

  down() {
    if (this.temperature > 10) {
      this.temperature --;
    } else {
      return `Temperature can't go below 10.`;
    }
  }

  setPowerSavingMode(status) {
    if (status === true) {
      this.PSM = true;
    } else if (status === false) {
      this.PSM = false;
    } 
  }

}

module.exports = Thermostat;