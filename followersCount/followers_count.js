let count=0;

const displayCount=function(){
    document.getElementById("countDisplay").innerHTML=count;
};
const increaseCount = function(){
count++;
displayCount();
checkCountValue();
}


function checkCountValue(){
    if(count===10){
        alert("Your insta post gained 10 followers")
    }else if (count ===20){
        alert("Your insta post gained 20 followers")
    }
}