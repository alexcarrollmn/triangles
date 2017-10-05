class Triangle {
    
    constructor(values){
        this.input = values;
        this.triangle = this.input.map(Number).sort((a, b) => a - b);
    }

    get type(){
        try {
            if ( this.triangle.every(val => parseInt(val)) && this.triangle.length === 3 ){
                return this.determineType(this.triangle);
            }
            throw new Error();
        }
        catch ( error ){
            return error;
        }
        
    }

    determineType(){
        if ( this.triangle[0] === this.triangle[1] && this.triangle[1] === this.triangle[2] ){
            return "equilateral";
        }
        if ( (this.triangle[0] === this.triangle[1] || this.triangle[0] == this.triangle[2] || this.triangle[1] === this.triangle[2]) 
            && ( (this.triangle[0] + this.triangle[1]) > this.triangle[2] ) ){
            return "isosceles";
        }
        if ( (this.triangle[0] + this.triangle[1]) > this.triangle[2] ){
            return "scalene";
        }
        return false;
    }
}

module.exports = Triangle;
