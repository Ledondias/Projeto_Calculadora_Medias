const form = document.getElementById('form-activity')
const imgApproved = '<img src="./images/aprovado.png" alt="Emoji festejando">'
const imgDisapproved = '<img src="./images/reprovado.png" alt="Emoji festejando">'
const activities = []
const notes = []
const spanApproved = '<span class="result approved">Aprovado</span>'
const spanDisapproved = '<span class="result disapproved">Reprovado</span>'
const minimumNote = parseFloat(prompt("Digite a nota mínima:"))

let rows = ''

form.addEventListener('submit', function (event){
    event.preventDefault()

    addRow()
    updateTable()
    finalMediaUpdate()
})

function addRow() {
    const inputActivityName = document.getElementById('activity-name')
    const inputActivityNote = document.getElementById('activity-note')

    if(activities.includes(inputActivityName.value)){
        alert(`A atividade ${inputActivityName.value} já foi inserida! `)
    } else {
        activities.push(inputActivityName.value)
        notes.push(parseFloat(inputActivityNote.value))

        let row = '<tr>'
        row += `<td>${inputActivityName.value}</td>`
        row += `<td>${inputActivityNote.value}</td>`
        row += `<td>${inputActivityNote.value >= minimumNote ? imgApproved : imgDisapproved}</td>`
        row += `</tr>`
        rows += row
    }
    inputActivityName.value = ''
    inputActivityNote.value = ''
}

function updateTable(){
    const tablebody = document.querySelector('tbody')
    tablebody.innerHTML = rows
}

function finalMediaUpdate() {
    const finalMedia = finalMediaCalc()

    document.getElementById('final-media-value').innerHTML = finalMedia.toFixed(2)
    document.getElementById('final-media-result').innerHTML = finalMedia >= minimumNote ? spanApproved : spanDisapproved
}

function finalMediaCalc() {
    let notesSum = 0

    for(let i = 0; i < notes.length; i++){
        notesSum += notes[i]
    }

    return notesSum/notes.length
}   