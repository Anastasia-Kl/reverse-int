module.exports = function reverse (n) {
    let mas = n.toString(10).split('').map(int => parseInt(int, 10));
    
        return mas.reverse();
      
    }