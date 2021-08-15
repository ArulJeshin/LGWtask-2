const data = [
    {
        name: "JESHIN",
        Maths:"100",
        Physics:"100",
        Chemistry : "100"
    },
    {
        name: "HARRY",
        Maths:"98",
        Physics:"100",
        Chemistry : "99"
    },
    {
        name: "MIXIE",
        Maths:"100",
        Physics:"99",
        Chemistry : "99"
    },
    {
        name: "SHINCHAN",
        Maths:"99",
        Physics:"99",
        Chemistry : "99"
    }
]

const results = document.getElementById('res')

const smBtn = document.getElementById('smt-btn')
smBtn.addEventListener("click", function() {
    const name = document.getElementById('name-box').value;
    for(let i = 0; i < data.length; i++){
        if(data[i].name.toLowerCase() == name.toLowerCase()){
            console.log(data[i].marks)
            results.innerHTML ="<hr><h3>" + "Maths : " + data[i].Maths +"</h3></hr>" + "<hr><h3>" + "Physics : " 
            + data[i].Physics +"</h3></hr>" +"<h3><hr>" + "Chemistry : " + data[i].Chemistry +"</h3></hr>"+"<hr></hr>"
            return;
        }
    }
    results.innerHTML = "<h3>" + "NO information about this student!!!" + "</h3>" 
}) 