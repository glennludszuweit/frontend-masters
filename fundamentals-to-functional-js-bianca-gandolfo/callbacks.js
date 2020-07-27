cost ifElse = (condition, isTrue, isFalse) => {
  return ? isTrue : isFalse;
}
ifElse(true, 
       () => { console.log(true) },
       () => { console.log(false) }
      )








