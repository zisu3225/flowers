<?php
header("Content-Type:application/json");
require_once("../init.php");
$sql="select * from index_knowledge";
echo json_encode(sql_execute($sql));
?>