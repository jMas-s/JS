// Sukuriamas telefoną apibūdinantis objektas
const telefonas = {
    marke: "Apple",
    modelis: "iPhone 15",
    kaina: 1200, // Eurai
    // Metodas, kuris grąžina mėnesinę įmoką
    kainaIsimoketinai: function () {
      const menesineImoka = this.kaina / 12;
      return menesineImoka.toFixed(2); // Suapvalinama iki dviejų skaičių po kablelio
    }
  };
  
  // Naudojimas
  console.log(`Mėnesinė įmoka: ${telefonas.kainaIsimoketinai()} €`);
  