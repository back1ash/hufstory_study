function fac (n) {
    var result = 1;
    while(n > 0) {
        result *= n--;
    }
    console.log(result);
}

function fib (n) {
    var x = 0;
    var y = 1;
    var cur;
    if (n == 1) {
        console.log(0);
    } else if (n == 2) {
        console.log(1);
    } else {
        n--;
        while(n > 0) {
            cur = x + y;
            x = y;
            y = cur;
            n--;
        }
    }
    console.log(cur);
}

function star_mark (n) {
    const print = (x, y, s) => {
        if (Math.floor(x/s)%3 === 1 && Math.floor(y/s)%3 === 1) {
            return " ";
        } else {
            if (Math.floor(s/3) === 0) {
                return "*";
            } else {
                print(x,y,s/3);
            }
        }
    }
    for (let i = 0 ; i<n; ++i) {
        let string = "";
        for (let j = 0; j<n ; ++j) {
            string += print(i,j,n);
        }
        console.log(string);
    }
}

