document.querySelector('.task1').addEventListener('click',t1)
document.querySelector('.task2').addEventListener('click',t2)
document.querySelector('.task3').addEventListener('click',t3)
document.querySelector('.task4').addEventListener('click',t4)
document.querySelector('.task5').addEventListener('click',t5)
document.querySelector('.task6').addEventListener('click',t6)
document.querySelector('.task7').addEventListener('click',t7)
document.querySelector('.task8').addEventListener('click',t8)
document.querySelector('.task9').addEventListener('click',t9)
//document.querySelector('.task10').addEventListener('click',t10)


const deleteBtn = document.querySelectorAll('.del')


Array.from(deleteBtn).forEach((el)=>{
    el.addEventListener('click', deleteWeek4)
})

async function deleteWeek4(){
    const week4Id = this.parentNode.dataset.id
    try{
        const response = await fetch('week4/deleteWeek4', {
            method: 'delete',
            headers: {'Content-type': "application/json"},
            body: JSON.stringify({
                'week4IdFromJSFile' : week4Id
            })
        })
        const data = await response.json()
        console.log(data)
        location.reload()
    }catch(err){
        console.log(err)
    }
}

function t1(){
    document.querySelector('.task1').classList.toggle('bbar')
}
function t2(){
    document.querySelector('.task2').classList.toggle('bbar')
}
function t3(){
    document.querySelector('.task3').classList.toggle('bbar')
}
function t4(){
    document.querySelector('.task4').classList.toggle('bbar')
}
function t5(){
    document.querySelector('.task5').classList.toggle('bbar')
}
function t6(){
    document.querySelector('.task6').classList.toggle('bbar')
}
function t7(){
    document.querySelector('.task7').classList.toggle('bbar')
}
function t8(){
    document.querySelector('.task8').classList.toggle('bbar')
}
function t9(){
    document.querySelector('.task9').classList.toggle('bbar')
}
// function t10(){
//     document.querySelector('.task10').classList.toggle('bbar')
// }