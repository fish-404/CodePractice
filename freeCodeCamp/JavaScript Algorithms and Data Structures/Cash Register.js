function checkCashRegister(price, cash, cid) {
    let needChange = cash - price;
    let cashHave = new cashInDrawer(cid);
    let status, change;
    if (cashHave.sum() < needChange) {
        status = -1;
        change = [];
    }
    else if (cashHave.sum() == needChange) {
        status = 0;
        change = cid;
    }
    else {
        if (isEnough(cashHave, needChange) == false) {
            status = -1;
            change = [];
        }
        else {
            status = 1;
            change = isEnough(cashHave, needChange);
        }
    }
    
    return (new result(status, change));
}

function cashInDrawer(cid) {
      this.penny = cid[0][1];
      this.nickel = cid[1][1];
      this.dime = cid[2][1];
      this.quarter = cid[3][1];
      this.dollar = cid[4][1];
      this.fiveDollar = cid[5][1];
      this.tenDollar = cid[6][1];
      this.twentyDollar = cid[7][1];
      this.hundredDollar = cid[8][1];
}

cashInDrawer.prototype.sum = function() {
    let values = Object.values(this);
    const reducer =(accumulator, currentValue) => accumulator + currentValue;

    return fix(values.reduce(reducer));
}

function isEnough(cashHave, needChange) {
    let change = [];

    if (Math.floor(needChange/100)) {
        if (needChange > cashHave.hundredDollar) {
            needChange = fix(needChange-cashHave.hundredDollar);
            change.push(["ONE HUNDRED", cashHave.hundredDollar]);
        }
        else {
            change.push(["ONE HUNDRED", Math.floor(needChange/100)]);
            needChange %= 100;
        }
    }
    if (Math.floor(needChange/20)) {
        if (needChange > cashHave.twentyDollar) {
            needChange = fix(needChange-cashHave.twentyDollar);
            change.push(["TWENTY", cashHave.twentyDollar]);
        }
        else {
            change.push(["TWENTY", Math.floor(needChange/20)*20]);
            needChange %= 20;
        }
    }
    if (Math.floor(needChange/10)) {
        if (needChange > cashHave.tenDollar) {
            needChange = fix(needChange-cashHave.tenDollar);
            change.push(["TEN", cashHave.tenDollar]);
        }
        else {
            change.push(["TEN", Math.floor(needChange/10)*10]);
            needChange %= 10;
        }
    }    
    if (Math.floor(needChange/5)) {
        if (needChange > cashHave.fiveDollar) {
            needChange = fix(needchange-cashHave.fiveDollar);
            change.push(["FIVE", cashHave.fiveDollar]);
        }
        else {
            change.push(["FIVE", Math.floor(needChange/5)*5]);
            needChange %= 5;
        }
    }
    if (Math.floor(needChange)) {
        if (needChange > cashHave.dollar) {
            needChange = fix(needChange-cashHave.dollar);
            change.push(["ONE", cashHave.dollar]);
        }
        else {
            change.push(["ONE", Math.floor(needChange)]);
            needChange = fix(needChange-Math.floor(needChange));
        }
    }
    if (Math.floor(needChange/0.25)) {
        if (needChange > cashHave.quarter) {
            needChange = fix(needChange-cashHave.quarter);
            change.push(["QUARTER", cashHave.quarter]);
        }
        else {
            change.push(["QUARTER", Math.floor(needChange/0.25)*0.25]);
            needChange = fix(needChange-Math.floor(needChange/0.25)*0.25);
        }
    }
    if (Math.floor(needChange/0.1)) {
        if (needChange > cashHave.dime) {
            needChange = fix(needChange-cashHave.dime);
            change.push(["DIME", cashHave.dime]);
        }
        else {
            change.push(["DIME", Math.floor(needChange/0.1)*0.1]);
            needChange = fix(needChange-Math.floor(needChange/0.1)*0.1);
        }
    }
    if (Math.floor(needChange/0.05)) {
        if (needChange > cashHave.nickel) {
            needChange = fix(needChange-cashHave.nickel);
            change.push(["NICKEL", cashHave.nickel]);
        }
        else {
            change.push(["NICKEL", Math.floor(needChange/0.05)*0.05]);
            needChange = fix(needChange-Math.floor(needChange/0.05)*0.05);
        }
    }
    if (Math.floor(needChange/0.01)) {
        if (needChange > cashHave.penny) {
            needChange = fix(needChange-cashHave.penny);
            change.push(["PENNY", cashHave.penny])
        }
        else {
            change.push(["PENNY", Math.floor(needChange/0.01)*0.01]);
            needChange = fix(needChange-Math.floor(needChange/0.01)*0.01);
        }
    }
    if (needChange != 0)
        return false;
    else 
        return change;

}

function fix(x) {
  return Number.parseFloat(x).toFixed(2);
}

function result(status, change) {
    if (status == -1) {
        this.status = "INSUFFICIENT_FUNDS";
    }
    else if (status == 0) {
        this.status = "CLOSED";
    }
    else {
        this.status = "OPEN";
    }

    this.change = change;
}
