var rect ={
    premiter : (x,y) => (2*(x+y)),
    area:(x,y) =>(x*y)
}

function solveRect(l,b){
    console.log("Solving for rectangle with  l= "+l+" and b= "+b)
    if (l <=0 || b <= 0){
        console.log("Rectangle dimension should be greater than Zero l= "+l+" and b= "+b)
    }else{
        console.log("The area of rectangle is "+rect.area(l,b)+"\n")
        console.log("The Premiter of rectangle is "+rect.premiter(l,b)+"\n")

    }
}

solveRect(2,4)
solveRect(3,5)
solveRect(0,5)
solveRect(-3,5)