<?php


    header("Access-Control-Allow-Origin: *");
    header('Content-Type: application/json');

    $conn = mysqli_connect("127.0.0.1", "root" ,"", "ecell");
    if(mysqli_connect_errno()){
    
        $response = array(
            "success" => false,
            "message" => "Failed to connect to MySQL!"
        );
        echo json_encode($response);
        return;
    }

    $email = $_POST['email'];

    $sql_1 = "SELECT * FROM `subscriptions` WHERE email = '$email'";
    $result_1 = mysqli_query($conn, $sql_1);
    if(!$result_1){
        $response = array(
            "success" => false,
            "message" => "Something went wrong"
        );
        echo json_encode($response);
        return;
    }
    $row_count = mysqli_num_rows($result_1);

    if($row_count>=1){
        $response = array(
            "success" => false,
            "message" => "You are already registered"
        );
        echo json_encode($response);
        return;
    }
    
    $sql = "INSERT INTO `subscriptions` (`email`) VALUES ('$email')";
    $result = mysqli_query($conn, $sql);
    if(!$result){
        $response = array(
            "success" => false,
            "message" => "Something went wrong"
        );
        echo json_encode($response);
        return;
    }

    $response = array(
        "success" => true,
        "message" => "Subscription successful"
    );
    echo json_encode($response);
    return;

    mysqli_close($conn);
    

?>