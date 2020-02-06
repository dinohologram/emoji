//There's a lot of good faces starting on 0x1f60${x}

function runTen() {
  for (let x = 0; x < 10; x++) {
    let unicode = `0x1f64${x}`;
    console.log(unicode);
    let emoji = String.fromCodePoint(unicode);
    console.log(emoji);
  }
}

// 0x1f47b - ghost

function runOne() {
  console.log(String.fromCodePoint(0x1f47b));
}

// runTen();
runOne();
