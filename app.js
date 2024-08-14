const upperset="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerset="abcdefghijklmnopqrstuvwxyz";
const numbers="0123456789";
const symbols="!@#$%^&*()_+<>?}{:/";

const btn=document.querySelector('.btn');
const input=document.querySelector('.input');


const getRandomdata = (dataSet) =>{
    return dataSet[Math.floor(Math.random()*dataSet.length)];
}

const generatepassword=(length=10)=>{
    let password="";
    for(i=0;i<length;i++)
    {
    const randomSet=[upperset,lowerset,numbers,symbols];
    const randomData=getRandomdata(randomSet[Math.floor(Math.random()*randomSet.length)]);
    password += randomData;
    }
    return password;
}

const getdata=()=>{
    const password=generatepassword();
    input.value=password;
}
btn.addEventListener("click",getdata);


