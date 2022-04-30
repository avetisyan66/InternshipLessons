Array.prototype.forEach = function (callBack){
    for (let i = 0; i < this.length; i++) {
        callBack(this[i], i, this)
    }
}

Array.prototype.map = function (callBack){
    let newArr = [];
   for(let i = 0 ; i < this.length ; i++){
       if(i in this){
           newArr[i] = callBack(this[i] , i , this);
       }
   }
   return newArr;
}

// ==============================

Array.prototype.find = function (callBack){
    let firstFound = undefined;
    for(let i = 0; i < this.length; i++){
        if(callBack(this[i], i, this)){ 
            firstFound = this[i];
            return firstFound;
        }
    } return firstFound;
}

Array.prototype.findIndex = function (callBack){
    let firstFoundIndex = -1;
    for(let i = 0; i < this.length; i++){
        if(callBack(this[i], i, this)) {
            firstFoundIndex = i;
            return firstFoundIndex;
        }
    } return firstFoundIndex
}

Array.prototype.lastIndexOf = function (el){
    for(let i = this.length - 1; i >= 0; i--){
       if(this[i] !== el){
          continue;
       };
       return i;
    };
    return -1;
 };

Array.prototype.some = function (callback){
    for(let i = 0; i < this.length; i++){
        if(callback(this[i], i, this)) 
            return true;
    }
    return false;
}

Array.prototype.every = function (callback){
    for(let i = 0; i < this.length; i++){
        if(i in this){
            if(!callback(this[i], i, this)) return false;
        }
    }
    return true;
}

Array.prototype.reduce = function (callback, current){
    for (let i = 0; i < this.length; i++) {
        current = callback(current, this[i], i, this);
    }
    return current;
}

Array.prototype.reduceRight = function (callback, current) {
  let accumulator = current;
  let index = this.length - 1;
  if (current === undefined) {
    if (!this.length) {
      throw new TypeError("There's no value to use reduceRight method");
    } else {
      accumulator = this[this.length - 1];
      index = this.length - 2;
    }
  }
  for (; index >= 0; index--) {
    accumulator = callback(accumulator, this[index], index, this);
  }
  return accumulator;
}

Array.prototype.join = function (sep = " ") {
    if (!(this instanceof Array)) {
        return "";
    }
    let final = "";
    for (let i = 0; i < this.length; i++) {
        final += this[i];
        if (i != this.length - 1) {
            final += sep;
        }
    }
    return final;
}

Array.prototype.push = function (...value) {
    for (let i = 0; i < arguments.length; i++) {
      this[this.length] = arguments[i];
    }
    return this.length;
};

Array.prototype.pop = function () {
    const value = this[this.length - 1];
    this.length = this.length - 1;
   
    return this;
}

Array.prototype.unshift = function (...value) {
    for (let i = this.length + arguments.length - 1; i > arguments.length - 1; i--) {
      this[i] = this[i - arguments.length];
    }
    for (let k = 0; k < arguments.length; k++) {
      this[k] = arguments[k];
    }
    return this.length;
};

