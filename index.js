window.addEventListener('load',()=>{
    const frutas = document.querySelectorAll('li');
    const boton = document.querySelector('button')

    frutas.forEach((item,idx)=>{
        if(idx%2==0) item.classList.add('color')
        
    })
    boton.addEventListener('click',()=>{
        console.log("Hello");
        frutas.forEach((item,idx)=>{
            item.classList.toggle('color')
        })
    })
})