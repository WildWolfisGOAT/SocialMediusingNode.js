document.addEventListener('DOMContentLoaded',()=>{
    let loginPage=document.querySelector('#loginPage');
    let loginBoxAdmin=document.querySelector('#loginInput');
    let loginBoxPass=document.querySelector('#loginPass');
    let EnterButn1=document.querySelector('#Enter1');
    let EnterButn2=document.querySelector('#Enter2');
    let RegisterLink = document.querySelector('#Register');
    let logkacontent=document.querySelector('.loginkeandar');
    let registerkacontent = document.querySelector('.registerkeandar');
    let registername = document.querySelector('#SetLogname');
    let registerpass = document.querySelector('#SetLogPass');

    if(localStorage.getItem('Username')&&localStorage.getItem('Password')){
        loginPage.style.display='none';
    }
    registerkacontent.style.display='none';
    RegisterLink.addEventListener('click',(event)=>{
        event.preventDefault();
        registerkacontent.style.display='flex';
        logkacontent.style.display='none';
    });
    EnterButn1.addEventListener('click',()=>{
        let LoginVal = loginBoxAdmin.value;
        let LoginPass=loginBoxPass.value;
        if(LoginVal==='ADMIN' && LoginPass==='123'){
            localStorage.setItem('Username',LoginVal);
            localStorage.setItem('Password',LoginPass);
            loginPage.style.display='none';
        }
    });
    EnterButn2.addEventListener('click',()=>{
        loginPage.style.display='none';
    });
  
    


    
});

