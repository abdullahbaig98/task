let n = 5;

for (let i = 1; i <= n; i++) {

  for (let j = n-i; j>0; j--) {
    process.stdout.write('.')
  }
  for (let k = 0; k < i*(2-1) ; k++) {
    process.stdout.write(i.toString()+" ");
  }
  console.log();
}