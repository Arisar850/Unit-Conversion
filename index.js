let Btn = document.getElementById('btn')
let length = document.getElementById('length-result')
let volume = document.getElementById('volume-result')
let mass = document.getElementById('mass-result')
Btn.addEventListener('click', function(){
    let input = parseFloat(document.getElementById('input').value)
    if (!isNaN(input)){
        let meter = (input /3.281).toFixed(3)
        let feet = (input *3.281).toFixed(3)
        let leter = (input /0.264).toFixed(3)
        let gallon = (input * 0.264).toFixed(3)
        let kg = (input /2.204).toFixed(3)
        let pound = (input * 2.204).toFixed(3)

        length.textContent = `${input} meters = ${feet} feet | ${input} feet = ${meter} meters`
        volume.textContent = `${input} leters = ${gallon} gallons | ${input} gallons = ${leter} leters`
        mass.textContent = `${input} kilos = ${pound} pounds | ${input} pounds = ${kg} kilos`
    }
    else{
        alert('Enter Valid number!')
    }
})




