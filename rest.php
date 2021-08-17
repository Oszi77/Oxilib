

<?php 
    require_once("test.php");

    $requestPayload = file_get_contents("php://input");
    $object = json_decode($requestPayload);
    //var_dump($object);

    $testObj = new Test();
    $reciveObj = json_encode($testObj);

    /*Ha a feltöltött adat ->JSON jelen van, akkor az a válasz
        különben a Test objektum ->JSON.
    */
    if($requestPayload != null){
        print($requestPayload);
    }else{
        print($reciveObj);
    }

    
     
