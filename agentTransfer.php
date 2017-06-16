<html>
<head>
<title>PHP GET and POST Method Example</title>

</head>
<body>
<?php
if( $_GET["name"] || $_GET["email"] || $_GET["contact"])
{
echo "Welcome: ". $_GET['name']. "<br />";
echo "Your Email is: ". $_GET["email"]. "<br />";
echo "Your Mobile No. is: ". $_GET["contact"];
}
?>
</body>
</html>