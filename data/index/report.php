<?php
header("Content-Type:application/json");
require_once("../init.php");
$sql="select * from index_report";
echo json_encode(sql_execute($sql));
?>