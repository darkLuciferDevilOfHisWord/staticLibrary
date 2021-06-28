//animation
let threePage = document.getElementById('threePage');
let threePage1 = document.getElementById('threePage1');
let navbarHeading = document.getElementById('navbarHeading');
let hidden = document.getElementById('hidden');
let search = document.getElementById('search');
let x = 0;
hidden.addEventListener('click',function(){
    hidden.style.display = 'none';
    funPage();
})
function funPage(){
    if(x === 0){
        threePage.style.display = 'flex';
        threePage1.style.display = 'flex';
        threePage.style.animationName = 'pageAnimation';
        threePage1.style.animationName = 'pageAnimation1';
        navbarHeading.style.boxShadow = '0 0 40px rgb(189, 11, 11)';
        hidden.style.display = 'block'
        x = 1;
    }
    else if(x === 1){
        threePage.style.animationName = 'pageAnimationReturn';
        threePage1.style.animationName = 'pageAnimation1Return';
        navbarHeading.style.boxShadow = '0 0 2px rgb(189, 11, 11)';
        hidden.style.display = 'none';
        setTimeout(function(){
            threePage.style.display = 'none';
            threePage1.style.display = 'none';
        x = 0;
        },1000);
        x = 2;
    }
}

navbarHeading.style.width = navbarHeading.offsetWidth+1+'px';
navbarHeading.addEventListener('mouseenter',function(){
    navbarHeading.style.width = navbarHeading.offsetWidth+10+'px';
})
navbarHeading.addEventListener('mouseleave',function(){
    navbarHeading.style.width = navbarHeading.offsetWidth-10+'px';
})



// new page  A B C
let A = document.querySelector('.containerA');
let B = document.querySelector('.containerB');
let C = document.querySelector('.containerC');

let pagea = document.getElementById('pagea');
let pageb = document.getElementById('pageb');
let pagec = document.getElementById('pagec');
let paged = document.getElementById('paged');
let pagee = document.getElementById('pagee');
let pagef = document.getElementById('pagef');
pagea.style.color = 'rgb(100, 25, 25)';
paged.style.color = 'rgb(100, 25, 25)';
function funA(){
    funPage();
    A.style.display = 'block';
    B.style.display = 'none';
    C.style.display = 'none';
    search.style.display = 'block';
    pagea.style.color = 'rgb(100, 25, 25)';
    paged.style.color = 'rgb(100, 25, 25)';
    pageb.style.color = 'rgb(189, 11, 11)';
    pagec.style.color = 'rgb(189, 11, 11)';
    pagee.style.color = 'rgb(189, 11, 11)';
    pagef.style.color = 'rgb(189, 11, 11)';
}
function funB(){
    funPage();
    B.style.display = 'block';
    A.style.display = 'none';
    C.style.display = 'none';
    search.style.display = 'block';
    pageb.style.color = 'rgb(100, 25, 25)';
    pagee.style.color = 'rgb(100, 25, 25)';
    pagea.style.color = 'rgb(189, 11, 11)';
    pagec.style.color = 'rgb(189, 11, 11)';
    paged.style.color = 'rgb(189, 11, 11)';
    pagef.style.color = 'rgb(189, 11, 11)';

}
function funC(){
    funPage();
    C.style.display = 'block';
    B.style.display = 'none';
    A.style.display = 'none';
    search.style.display = 'none';
    pagec.style.color = 'rgb(100, 25, 25)';
    pagef.style.color = 'rgb(100, 25, 25)';
    pagea.style.color = 'rgb(189, 11, 11)';
    pageb.style.color = 'rgb(189, 11, 11)';
    paged.style.color = 'rgb(189, 11, 11)';
    pagee.style.color = 'rgb(189, 11, 11)';

}

//real stuff

//add book
let bookName = document.getElementById('bookName');
let authorName = document.getElementById('authorName');
let containerAddBook = document.getElementById('containerAddBook');
let bookNameVar = 0, authorNameVar = 0;
bookName.addEventListener('input',function(){ 
    if(bookName.value.length > 0){
        bookNameVar = 1;
    }
    else{console.log('c');
        bookNameVar = 0;
    }
})
authorName.addEventListener('input',function(){
    if(authorName.value.length > 0){
        authorNameVar = 1;
    }
    else{console.log('f');
        authorNameVar = 0;
    }
})

containerAddBook.addEventListener('mouseenter',function(){
    if(bookNameVar === 1 && authorNameVar === 1){
        containerAddBook.style.cursor = 'pointer';
        containerAddBook.style.boxShadow = '0 0 20px  rgb(189, 11, 11)';
        containerAddBook.style.width = containerAddBook.offsetWidth+8+'px';
    }
})
containerAddBook.addEventListener('mouseleave',function(){
    if(bookNameVar === 1 && authorNameVar === 1){
        containerAddBook.style.cursor = 'not-allowed';
        containerAddBook.style.boxShadow = 'none';
        containerAddBook.style.width = containerAddBook.offsetWidth-8+'px';
    }
})
containerAddBook.addEventListener('click',function(){
    
    let authorNameValue = authorName.value;
    let bookNameValue = bookName.value;
    if(authorNameValue.length > 0 && bookNameValue.length > 0){
        containerAddBook.style.boxShadow = '0 0 20px  rgb(189, 11, 11)';
        containerAddBook.style.width = containerAddBook.offsetWidth+8+'px';
        setTimeout(function(){
            containerAddBook.style.boxShadow = 'none';
            containerAddBook.style.width = containerAddBook.offsetWidth-8+'px';
        },400);
        authorName.value = '';
        containerAddBook.style.cursor = 'not-allowed';
        bookName.value = '';
    bookNameVar = 0; authorNameVar = 0;

    }
})




// issue book

let bookNameB = document.getElementById('bookNameB');
let authorNameB = document.getElementById('authorNameB');
let containerAddBookB = document.getElementById('containerAddBookB');
let bookNameVarB = 0, authorNameVarB = 0;
bookNameB.addEventListener('input',function(){
    if(bookNameB.value.length > 0){
        bookNameVarB = 1;
    }
    else{
        bookNameVarB = 0;
    }
})
authorNameB.addEventListener('input',function(){
    if(authorNameB.value.length > 0){
        authorNameVarB = 1;
    }
    else{
        authorNameVarB = 0;
    }
})

// containerAddBookB.style.width = containerAddBookB.offsetWidth+2+'px';
containerAddBookB.addEventListener('mouseenter',function(){
    if(bookNameVarB === 1 && authorNameVarB === 1){
        containerAddBookB.style.cursor = 'pointer';
        containerAddBookB.style.boxShadow = '0 0 20px  rgb(189, 11, 11)';
        containerAddBookB.style.width = containerAddBookB.offsetWidth+8+'px';
    }
})
containerAddBookB.addEventListener('mouseleave',function(){
    if(bookNameVarB === 1 && authorNameVarB === 1){
        containerAddBookB.style.cursor = 'not-allowed';
        containerAddBookB.style.boxShadow = 'none';
        containerAddBookB.style.width = containerAddBookB.offsetWidth-8+'px';
    }
})
containerAddBookB.addEventListener('click',function(){
    
    let authorNameValueB = authorNameB.value;
    let bookNameValueB = bookNameB.value;
    if(authorNameValueB.length > 0 && bookNameValueB.length > 0){
        containerAddBookB.style.boxShadow = '0 0 20px  rgb(189, 11, 11)';
        containerAddBookB.style.width = containerAddBookB.offsetWidth+8+'px';
        setTimeout(function(){
            containerAddBookB.style.boxShadow = 'none';
            containerAddBookB.style.width = containerAddBookB.offsetWidth-8+'px';
        },400);
        authorNameB.value = '';
        containerAddBookB.style.cursor = 'not-allowed';
        bookNameVarB = 0; authorNameVarB = 0;
    bookNameB.value = '';
    }
})


// RETURN book

let bookNameC = document.getElementById('bookNameC');
let authorNameC = document.getElementById('authorNameC');
let containerAddBookC = document.getElementById('containerAddBookC');
let bookNameVarC = 0, authorNameVarC = 0;
bookNameC.addEventListener('input',function(){
    if(bookNameC.value.length > 0){
        bookNameVarC = 1;
    }
    else{
        bookNameVarC = 0;
    }
})
authorNameC.addEventListener('input',function(){
    if(authorNameC.value.length > 0){
        authorNameVarC = 1;
    }
    else{
        authorNameVarC = 0;
    }
})

// containerAddBookC.style.width = containerAddBookC.offsetWidth+2+'px';
containerAddBookC.addEventListener('mouseenter',function(){
    if(bookNameVarC === 1 && authorNameVarC === 1){
        containerAddBookC.style.cursor = 'pointer';
        containerAddBookC.style.boxShadow = '0 0 20px  rgb(189, 11, 11)';
        containerAddBookC.style.width = containerAddBookC.offsetWidth+8+'px';
    }
})
containerAddBookC.addEventListener('mouseleave',function(){
    if(bookNameVarC === 1 && authorNameVarC === 1){ 
        containerAddBookC.style.cursor = 'not-allowed';
        containerAddBookC.style.boxShadow = 'none';
        containerAddBookC.style.width = containerAddBookC.offsetWidth-8+'px';
    }
})
containerAddBookC.addEventListener('click',function(){
    
    let authorNameValueC = authorNameC.value;
    let bookNameValueC = bookNameC.value;
    if(authorNameValueC.length > 0 && bookNameValueC.length > 0){
        containerAddBookC.style.boxShadow = '0 0 20px  rgb(189, 11, 11)';
        containerAddBookC.style.width = containerAddBookC.offsetWidth+8+'px';
        setTimeout(function(){
            containerAddBookC.style.boxShadow = 'none';
            containerAddBookC.style.width = containerAddBookC.offsetWidth-8+'px';
        },400);
        authorNameC.value = '';
        containerAddBookC.style.cursor = 'not-allowed';
        bookNameC.value = '';
    bookNameVarC = 0; authorNameVarC = 0;

    }
})