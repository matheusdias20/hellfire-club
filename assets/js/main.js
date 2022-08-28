
import { subscribeToHellfireClub } from './firebase/hellfire-club.js'


const txtName = document.getElementById('txtName')
const txtEmail = document.getElementById('txtEmail')
const txtLevel = document.getElementById('txtLevel')
const txtCharacter = document.getElementById('txtCharacter')


const btnSubscribe = document.getElementById('btnSubscribe')


btnSubscribe.addEventListener('click', (event) => {
    event.preventDefault();
    
    const subscription = {
        name: txtName.value,
        email: txtEmail.value,
        level: txtLevel.value,
        character: txtCharacter.value,
    }
    
    subscribeToHellfireClub(subscription)

    alert('Inscrição enviada!!!!')
})