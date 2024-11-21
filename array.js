// Funkcija, kuri grąžina antrą didžiausią skaičių
function findSecondLargest(numbers) {
    if (numbers.length < 2) {
      throw new Error("Masyve turi būti bent du skaičiai.");
    }
  
    let largest = -Infinity;
    let secondLargest = -Infinity;
  
    for (const number of numbers) {
      if (number > largest) {
        secondLargest = largest;
        largest = number;
      } else if (number > secondLargest && number < largest) {
        secondLargest = number;
      }
    }
  
    if (secondLargest === -Infinity) {
      throw new Error("Masyve nėra antro unikalaus didžiausio skaičiaus.");
    }
  
    return secondLargest;
  }
  
  // Pavyzdys
  const numbers = [5, 12, 8, 20, 3, 15, 20];
  console.log(findSecondLargest(numbers)); // Rezultatas: 15
  