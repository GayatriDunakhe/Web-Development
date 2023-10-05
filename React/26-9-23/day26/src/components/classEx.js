import React from "react";


function RectangleComp(){
    class Rectangle{
        constructor(height, width){
          this.height = height;
          this.width = width;
        }
    
        area(){
          return this.height * this.width
        }
      }
    
      const rect = new Rectangle(20,12)
      console.log(rect.area())
}

export default RectangleComp;