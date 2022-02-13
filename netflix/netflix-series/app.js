// DEĞİŞKENLER //

const lucifer=document.querySelectorAll("#lucifer");
let player=document.getElementById("video");
let btnPlay=document.getElementById("btnPlay");
let btnPause=document.getElementById("btnPause");
let imdb=document.getElementById("imdb");
let protector=document.querySelectorAll("#protector");
let p=document.getElementById("banner_p");
let h1=document.getElementById("banner_h1")
let atiye=document.querySelectorAll("#atiye");
let lcdp=document.querySelectorAll("#lcdp");


// OBJECT //
const anaBilgiler={

    lucifer:{

        name:"Lucifer",
        aciklama:"Cehennemin Efendisi olmaktan bıkan şeytan,Los Angeles'a yerleşir,bir gece kulübü açar ve bir cinayet dedektifiyle ilişki kurar.",
        imdb:"18+ | IMDb 8.1",
        trailer:"/netflix-series/img/trailer.mp4"
        
    },

    protector:{

    name:"Hakan Muhafız",
    aciklama:"Günümüz İstanbulu'nda yaşayan ve kadim bir gizli,birlikle olan bağını keşfeden genç bir adam, şehri ölümsüz bir düşmandan kurtarmak için maceraya atılır.",
    imdb:"18+ | IMDb 6.6",
    trailer:"/netflix-series/img/trailerProtector.mp4"
    

    
    },

    atiye:{
    name:"Atiye",
    aciklama:"İstanbul'da bir ressam, çıktığı kişisel yolculukta Anadolu'daki arkeolojik bir alana dair evrensel sırları ve bu alanın kendi geçmişiyle ilişkisini ortaya çıkarır.",
    imdb:"18+ | IMDb 7.1",
    trailer:"EN KISA SÜREDE TRAILER EKLENECEKTIR..."
    },


    lcdp:{
        name:"La Casa De Papel",
        aciklama:"Bir suç dehası planını gerçekleştirmek üzere polisi ustalıkla yönlendirirken sekiz hırsız, rehineler alarak kendilerini İspanya Kraliyet Darphanesine kilitler.",
        imdb:"18+ | IMDb 8.2/10",
        trailer:"EN KISA SÜREDE EKLENECEKTIR..."
    }

}



// SAYFA YÜKLENDİĞİNDE //
/*
function getRandomPoster(){
    
    let posterler=[
        "/netflix-series/img/lucifer-poster.jpg", 
        "/netflix-series/img/protector-poster.jpg",
    ];
    
    player.poster=posterler[Math.floor(Math.random()*posterler.length)];
    let sonuc=player.poster;
    
    if(toString(player.poster==posterler[1])){
        p.innerHTML="hakan açıklama"
        h1.innerHTML="Hakan";
        imdb.innerHTML=anaBilgiler.protector.imdb;
        player.src="/netflix-series/img/trailerProtector.mp4"
        h1.style.left = "30px";
        alert(sonuc +"1");
    }
    else{
        p.innerHTML="Lucifer Açıklama"
        h1.innerHTML="Lucifer"
        imdb.innerHTML=anaBilgiler.lucifer.imdb;
        player.src="/netflix-series/img/trailer.mp4";
        h1.style.left = "30px";
        alert(sonuc +"1");
    }
   
    
    
    
    }
   

window.onload=getRandomPoster();

*/









for (let i = 0; i < lucifer.length; i++) {
    lucifer[i].addEventListener("click", function() {
        player.src="/netflix-series/img/trailer.mp4";
        player.poster="/netflix-series/img/lucifer-poster.jpg";
        h1.innerHTML=anaBilgiler.lucifer.name;
        p.innerHTML=anaBilgiler.lucifer.aciklama;
        imdb.innerHTML=anaBilgiler.lucifer.imdb;
        player.style.objectFit="fill";
        player.focus();
    });
}




btnPlay.addEventListener("click",()=>{
btnPlay.style.fontWeight="bold";
btnPause.style.fontWeight="normal";
player.play();

})

btnPause.addEventListener("click",()=>{

btnPause.style.fontWeight="bold";
btnPlay.style.fontWeight="normal";
player.pause();

})

// PROTECTOR //


protector.forEach(eleman=>{
    eleman.addEventListener("click", hakan)
            function hakan(){
                player.src =anaBilgiler.protector.trailer;
                player.poster = "/netflix-series/img/protector-poster.jpg";
                p.innerHTML = anaBilgiler.protector.aciklama;
                h1.innerHTML = anaBilgiler.protector.name;
                imdb.innerHTML = anaBilgiler.protector.imdb;
                player.style.objectFit="fill";
                h1.style.left = "30px";
                player.focus();    
              
    }

 


})



// ATİYE //

// https://www.youtube.com/watch?v=FvCfE9i-nhg //


atiye.forEach(atiye=>{
    atiye.addEventListener("click", ()=>{
                player.poster = "/netflix-series/img/atiye.jpg";
                player.style.objectFit="contain";
                p.innerHTML = anaBilgiler.atiye.aciklama;
                h1.innerHTML = anaBilgiler.atiye.name;
                imdb.innerHTML = anaBilgiler.atiye.imdb;
                h1.style.left = "30px";
                player.focus();

    })
})


// LCDP //


lcdp.forEach(lcdp=>{
    lcdp.addEventListener("click", ()=>{
                player.src=anaBilgiler.lcdp.trailer;
                player.poster = "/netflix-series/img/lcdp.jpg";
                player.style.objectFit="contain";
                p.innerHTML = anaBilgiler.lcdp.aciklama;
                h1.innerHTML = anaBilgiler.lcdp.name;
                imdb.innerHTML = anaBilgiler.lcdp.imdb;
                h1.style.left = "30px";
                player.focus();

    })
})


