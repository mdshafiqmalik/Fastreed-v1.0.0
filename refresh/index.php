<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <meta charset="utf-8">
    <title>FastReed - Refresh</title>
  </head>
  <body>
    <?php
    ini_set('display_errors', 1);
    ini_set('display_startup_errors', 1);
    error_reporting(E_ALL);

    $h = "Hellow World";
    echo $h;

    $output = shell_exec("ls");
    echo "<pre>$output</pre>"
     ?>
  </body>
</html>