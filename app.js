const button = document.querySelector('button');
const imgShow = document.querySelector('.imgShow');
const button1 = document.querySelector('.button1');
const button2 = document.querySelector('.button2');
const imgShow1 = document.querySelector('.imgShow1')
const imgShow2 = document.querySelector('.imgShow2')


    button.addEventListener('click', ()=> {

        imgShow.classList.toggle('active');
        imgShow1.classList.remove('active');
        imgShow2.classList.remove('active');

    });

    button1.addEventListener('click', ()=> {

        imgShow1.classList.toggle('active');
        imgShow.classList.remove('active');
        imgShow2.classList.remove('active');
    });
    

    button2.addEventListener('click', ()=> {
        imgShow2.classList.toggle('active');
        imgShow1.classList.remove('active');
        imgShow.classList.remove('active');

    });

