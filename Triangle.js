class Triangle {
    /**
     * Creates an instance of Triangle.
     * @param {array} values three sides of a triangle, integers
     * 
     * @memberOf Triangle
     */
    constructor(values){
        this.input = values;
        this.triangle = this.input.map(Number).sort((a, b) => a - b);
    }

    /**
     * Get the type of triangle, handle errors in input
     * 
     * @readonly
     * @returns {string} type of triangle or error
     * @memberOf Triangle
     */
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

    /**
     * determins the type of triangle.
     * 
     * @returns {string} type
     * 
     * @memberOf Triangle
     */
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
