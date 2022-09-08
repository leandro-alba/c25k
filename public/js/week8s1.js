document.querySelector('.task1').addEventListener('click',t1)
document.querySelector('.task2').addEventListener('click',t2)
document.querySelector('.task3').addEventListener('click',t3)
document.querySelector('.task4').addEventListener('click',t4)
document.querySelector('.task5').addEventListener('click',t5)
document.querySelector('.task6').addEventListener('click',t6)
document.querySelector('.task7').addEventListener('click',t7)
// document.querySelector('.task8').addEventListener('click',t8)
// document.querySelector('.task9').addEventListener('click',t9)
// document.querySelector('.task10').addEventListener('click',t10)
// document.querySelector('.task11').addEventListener('click',t11)
// document.querySelector('.task12').addEventListener('click',t12)
// document.querySelector('.task13').addEventListener('click',t13)
// document.querySelector('.task14').addEventListener('click',t14)


const deleteBtn = document.querySelectorAll('.del')


Array.from(deleteBtn).forEach((el)=>{
    el.addEventListener('click', deleteWeek8)
})

async function deleteWeek8(){
    const week8s1Id = this.parentNode.dataset.id
    try{
        const response = await fetch('week8s1/deleteWeek8', {
            method: 'delete',
            headers: {'Content-type': "application/json"},
            body: JSON.stringify({
                'week8s1IdFromJSFile' : week8s1Id
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
    document.querySelector('.task1').classList.toggle('bb')
}
function t2(){
    document.querySelector('.task2').classList.toggle('bb')
}
function t3(){
    document.querySelector('.task3').classList.toggle('bb')
}
function t4(){
    document.querySelector('.task4').classList.toggle('bb')
}
function t5(){
    document.querySelector('.task5').classList.toggle('bb')
}
function t6(){
    document.querySelector('.task6').classList.toggle('bb')
}
function t7(){
    document.querySelector('.task7').classList.toggle('bb')
}
// function t8(){
//     document.querySelector('.task8').classList.toggle('bb')
// }
// function t9(){
//     document.querySelector('.task9').classList.toggle('bb')
// }
// function t10(){
//     document.querySelector('.task10').classList.toggle('bb')
// }
// function t11(){
//     document.querySelector('.task11').classList.toggle('bb')
// }
// function t12(){
//     document.querySelector('.task12').classList.toggle('bb')
// }
// function t13(){
//     document.querySelector('.task13').classList.toggle('bb')
// }
// function t14(){
//     document.querySelector('.task14').classList.toggle('bb')
// }