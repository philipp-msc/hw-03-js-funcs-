function isSimple(number) {

    if (number > 1000) {
      console.log('Данные неверны');
      return;
    }
  
    if (number === 0 || number === 1) {
      console.log('Число не является простым');
      return;
    }
  
    for (let i = 2; i < number; i++) {
      if (number % i === 0) {
        console.log('Число не является простым');
        return;
      }
    }
  
    console.log('Число является простым');
  }
  
isSimple(5)