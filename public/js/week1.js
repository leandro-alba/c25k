document.querySelector('.task1').addEventListener('touchstart',markComplete1)
document.querySelector('.task2').addEventListener('click',markComplete2)
document.querySelector('.task3').addEventListener('click',t3)
document.querySelector('.task4').addEventListener('click',t4)
document.querySelector('.task5').addEventListener('click',t5)
document.querySelector('.task6').addEventListener('click',t6)
document.querySelector('.task7').addEventListener('click',t7)
document.querySelector('.task8').addEventListener('click',t8)
document.querySelector('.task9').addEventListener('click',t9)
document.querySelector('.task10').addEventListener('click',t10)
document.querySelector('.task11').addEventListener('click',t11)
document.querySelector('.task12').addEventListener('click',t12)
document.querySelector('.task13').addEventListener('click',t13)
document.querySelector('.task14').addEventListener('click',t14)
document.querySelector('.task15').addEventListener('click',t15)
document.querySelector('.task16').addEventListener('click',t16)
document.querySelector('.task17').addEventListener('click',t17)
document.querySelector('.task18').addEventListener('click',t18)


const deleteBtn = document.querySelectorAll('.del')


Array.from(deleteBtn).forEach((el)=>{
    el.addEventListener('click', deleteWeek1)
})

async function deleteWeek1(){
    const week1Id = this.parentNode.dataset.id
    try{
        const response = await fetch('week1/deleteWeek1', {
            method: 'delete',
            headers: {'Content-type': "application/json"},
            body: JSON.stringify({
                'week1IdFromJSFile' : week1Id
            })
        })
        const data = await response.json()
        console.log(data)
        location.reload()
    }catch(err){
        console.log(err)
    }
}

function markComplete1(){
    document.querySelector('.task1').classList.toggle('bbar')
}
function markComplete2(){
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
function t10(){
    document.querySelector('.task10').classList.toggle('bbar')
}
function t11(){
    document.querySelector('.task11').classList.toggle('bbar')
}
function t12(){
    document.querySelector('.task12').classList.toggle('bbar')
}
function t13(){
    document.querySelector('.task13').classList.toggle('bbar')
}
function t14(){
    document.querySelector('.task14').classList.toggle('bbar')
}
function t15(){
    document.querySelector('.task15').classList.toggle('bbar')
}
function t16(){
    document.querySelector('.task16').classList.toggle('bbar')
}
function t17(){
    document.querySelector('.task17').classList.toggle('bbar')
}
function t18(){
    document.querySelector('.task18').classList.toggle('bbar')
}

// document.querySelector('.task19').addEventListener('touchstart', e=>{
//     document.querySelector('.task19').classList.toggle('bbar')
// })

const colorBtn = document.querySelector('.color')
const mdn = document.querySelector('.mdn')
const stylesheet = document.styleSheets[0];
const mdnParaRule = [...stylesheet.cssRules].find((r)=> r.selectorText === '.mdn span')
colorBtn.addEventListener('click', setRandColor)
function setRandColor(){
    //const newColor = 
    mdnParaRule.style.setProperty('color', 'white')
}
const undoBtn = document.querySelector('.undo')
undoBtn.addEventListener('click', setOldColor)
function setOldColor(){
    mdnParaRule.style.setProperty('color','black')
}

const check = document.querySelector('.check')
const mdn1 = document.querySelector('.mdn1')
const mdnParaRule1 = [...stylesheet.cssRules].find((r)=> r.selectorText === '.mdn1 span')
check.addEventListener('click', setCheck)
function setCheck(){
    //const newColor = 
    mdnParaRule1.style.setProperty('text-decoration','line-through black')//text-decoration line-through does not work iphone.
}
const undoBtn1 = document.querySelector('.undo1')
undoBtn1.addEventListener('click', setOldColor1)
function setOldColor1(){
    mdnParaRule1.style.setProperty('text-decoration','none')
}