const ages1 = [12, 16, 18, 19];
const ages2 = [25, 27, 20, 21];
const ages3 = [24, 27, 30, 32];

const allAge = ages1.concat(ages2).concat([5]).concat(ages3);
const allAge2 = [...ages1,...ages2, 5, ...ages3];

//console.log(allAge);
console.log(allAge2);


/*...........second part...........*/
const business = 650;
const minister = 450;
const sochib   = 250;
const totalAmmount = [200, 234, 520, 353, 627, 890, 739];

const maximum = Math.max(business, minister, sochib);
const ammountResult = Math.max(...totalAmmount);

console.log(maximum);
console.log(ammountResult);