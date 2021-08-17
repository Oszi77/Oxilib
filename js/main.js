window.onload = () => {
    const getBtn = document.getElementById("get-btn");
    const postBtn = document.getElementById("post-btn");
    const res = document.getElementById("res");

    const oxlb = new Oxilib("json");

    let get = function (){
        oxlb.getData("GET", "rest.php").then(responseData => {
            res.innerHTML = responseData.name + '</br>'+
                            responseData.age + '</br>' +
                            responseData.occupation + '</br>' 
            console.log(responseData);
        })
    };

    let post = function(){
        oxlb.postData("POST", "rest.php", {
            name: "Erdei Oszkár",
            age: 45,
            occupation: "Web Developer"}).then(responseData => {
                res.innerHTML += responseData.name + '</br>'+
                                 responseData.age + '</br>' +
                                 responseData.occupation + '</br>';
                console.log(responseData);
            }).catch(err => {
                console.warn(err);
            });
        }

    getBtn.addEventListener("click", get);
    postBtn.addEventListener("click", post);  

}