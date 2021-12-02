var container=document.getElementById('cards');
var counter=1;

var ourRequest=new XMLHttpRequest();
    ourRequest.open(  //Two Parameter: 1st:http method,2nd:URL
        "GET",
        "https://reqres.in/api/users?page=2"
    );

ourRequest.onload=function(){
    if(ourRequest.status>=200 && ourRequest.status<400){
        //If there is no error
        console.log(ourRequest.responseText);  //by default, it will be string

        var ourData=JSON.parse(ourRequest.responseText);
        //var newData=JSON.parse(ourData);
      
  
        console.log(ourData.data);

        render(ourData.data);
     
        
    }
};

ourRequest.send();






function render(Mydata){
    var htmlString="";
    for(let i=0;i<Mydata.length;i++){
    // document.getElementById('Image').src=Mydata[i].avatar; 
    // document.getElementById('Name').textContent=Mydata[i].first_name+" "+Mydata[i].last_name;
    // document.getElementById('PersonID').textContent="ID: "+Mydata[i].id;
    // document.getElementById('EmailID').textContent="Email: "+Mydata[i].email;
    htmlString="<div class='card' style='width: 18rem;margin-top: 5%;margin:5%;display:inline-block;float:none' id='card'><img class='card-img-top' src="+Mydata[i].avatar+" alt='Card image cap' id='Image'><div class='card-body'><h5 class='card-title' style='text-align: center;'' id='Name'>"+Mydata[i].first_name+" "+Mydata[i].last_name+"</h5></div><ul class='list-group list-group-flush'><li class='list-group-item' id='PersonID' style='text-align: center;'>"+"ID: "+Mydata[i].id+"</li><li class='list-group-item' id='EmailID' style='text-align: center;'>"+"Email: "+Mydata[i].email+"</li></ul></div>";
        
    console.log(htmlString);
    container.insertAdjacentHTML("beforeend",htmlString);
    }
}