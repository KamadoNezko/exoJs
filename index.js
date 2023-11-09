const  form = document.getElementById("form")
const p=document.getElementById("result1")
const p2=document.getElementById("result2")

form.addEventListener("submit", (e) => {
    e.preventDefault()
    let diviseur = document.getElementsByName("diviseur")[0].value
    let debut = document.getElementsByName("debut")[0].value
    let fin = document.getElementsByName("fin")[0].value

    if (diviseur !== "" || debut !== "" || fin !== "") {
        console.log(diviseur + debut + fin );
        p.innerText = `Les nombre divisible par ${diviseur} entre ${debut} et ${fin} sont:`
        for (let i = debut; i <= fin; i++) {
            if(i % diviseur === 0){
                p2.innerText += i +","
            }
        }
    } else {
        alert("Les champs sont vide")
    }

})


