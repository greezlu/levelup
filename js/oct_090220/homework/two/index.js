function round (num) {
  if (num%1 >= 0.5) {
    return num += 1-num%1;
  } else {
    return num -= num%1;
  }
}