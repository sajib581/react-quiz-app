function myFunc(...params) {
    console.log(params);
    console.log(...params);
    console.log({params});
    console.log({...params});

}

myFunc(2,4,6)