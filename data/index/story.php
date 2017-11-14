<?php
header("Content-Type:application/json");
require_once("../init.php");
$sql="SELECT s.pic,s.title,s.content,s.ctime,u.uname FROM index_story s,user u WHERE u.uid=s.uid";
echo json_encode(sql_execute($sql));
?>