
let visitCount = sessionStorage.getItem('visitCount');


if (visitCount === null) {
  sessionStorage.setItem('visitCount', 1);
} 

else {
  visitCount = parseInt(visitCount) + 1;
  sessionStorage.setItem('visitCount', visitCount);
}

