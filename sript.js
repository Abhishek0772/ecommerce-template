const btn = document.querySelector('.nav-navigation');
btn.addEventListener('click', (e)=>{
    const navigation = document.getElementById('navigation');
    if(navigation.classList.contains('hide')){
        navigation.classList.remove('hide')
        // btn.classList.remove('bars')
    }
    else{
        navigation.classList.add('hide')
        // btn.classList.add('bars')

        
    }
})
