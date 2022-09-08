document.querySelector('.task1').addEventListener('click',t1)
document.querySelector('.task2').addEventListener('click',t2)
document.querySelector('.task3').addEventListener('click',t3)
document.querySelector('.task4').addEventListener('click',t4)
document.querySelector('.task5').addEventListener('click',t5)
// document.querySelector('.task6').addEventListener('click',t6)
// document.querySelector('.task7').addEventListener('click',t7)


const deleteBtn = document.querySelectorAll('.del')


Array.from(deleteBtn).forEach((el)=>{
    el.addEventListener('click', deleteWeek5)
})

async function deleteWeek5(){
    const week5s3Id = this.parentNode.dataset.id
    try{
        const response = await fetch('week5s3/deleteWeek5', {
            method: 'delete',
            headers: {'Content-type': "application/json"},
            body: JSON.stringify({
                'week5s3IdFromJSFile' : week5s3Id
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
// function t6(){
//     document.querySelector('.task6').classList.toggle('bb')
// }
// function t7(){
//     document.querySelector('.task7').classList.toggle('bb')
// }