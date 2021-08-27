let icone = document.querySelector('#icone')
let menuMobile = document.querySelector('#menuMobile')

icone.addEventListener('click', ()=>{
    if(menuMobile.getAttribute('style') == 'display: none;'){

        menuMobile.setAttribute('style', 'display: block;')

    } else{
        menuMobile.setAttribute('style', 'display: none;')
    }
})
