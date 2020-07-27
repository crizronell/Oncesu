const navSlide = () => {
    const hamburger = document.querySelector('.hamburger');
    const nav  = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');

    //toggle Nav
    hamburger.addEventListener('click', () => {
        nav.classList.toggle('nav-active');
    


        navLinks.forEach((link, index) => {
			if(link.style.animation){
				link.style.animation = '';
			}else{
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
                console.log(index / 7 );
			}
		});

	hamburger.classList.toggle('toggle');
	});
      
}

navSlide();


// function to change bg
const bg = () => {
    const nayeon = document.querySelector('#nayeon');
    const jeongyeon = document.querySelector('#jeongyeon');
    const momo = document.querySelector('#momo');
    const sana = document.querySelector('#sana');
    const jihyo = document.querySelector('#jihyo');
    const mina = document.querySelector('#mina');
    const dahyun = document.querySelector('#dahyun');
    const chaeyoung = document.querySelector('#chaeyoung');
    const tzuyu = document.querySelector('#tzuyu');

    nayeon.addEventListener('click', ()=>{
        document.body.style.backgroundImage = "url('picture/Nayeon_big.jpg')";
    });
    jeongyeon.addEventListener('click', ()=>{
        document.body.style.backgroundImage = "url('picture/Jeongyeon_big.jpg')";
    });
    momo.addEventListener('click', ()=>{
        document.body.style.backgroundImage = "url('picture/Momo_big.jpg')";
    });
    sana.addEventListener('click', ()=>{
        document.body.style.backgroundImage = "url('picture/Sana_big.jpg')";
    });
    jihyo.addEventListener('click', ()=>{
        document.body.style.backgroundImage = "url('picture/Jihyo_big.jpg')";
    });
    mina.addEventListener('click', ()=>{
        document.body.style.backgroundImage = "url('picture/Mina_big.jpg')";
    });
    dahyun.addEventListener('click', ()=>{
        document.body.style.backgroundImage = "url('picture/Dahyun_big.jpg')";
    });
    chaeyoung.addEventListener('click', ()=>{
        document.body.style.backgroundImage = "url('picture/Chaeyoung_big.jpg')";
    });
    tzuyu.addEventListener('click', ()=>{
        document.body.style.backgroundImage = "url('picture/Tzuyu_big.jpg')";
    });
}
bg();
