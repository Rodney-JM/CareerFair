document.querySelectorAll('#topic_container').forEach(container => {
    container.addEventListener('click', () => {
        document.querySelectorAll('#topic_container').forEach(c =>{ 
            c.style.flex = '0.5'
            c.classList.remove('clicked');
        });

        document.querySelectorAll('.description_container').forEach(d =>{
            
        })
        container.style.flex = '2';
        container.classList.add('clicked');

        if(container.classList.contains('cont1')){
            container.classList.add('scale');
        }else{
            container.classList.remove('scale');
        }
    });
});
