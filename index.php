<?php
    header('Content-type:text/html;charset=utf-8');

    // var_dump($_SERVER);

    // $path = $_SERVER.('PATH_INFO');

    // var_dump($path);

    $path = '';

    if (array_key_exists('PATH_INFO',$_SERVER)) {

        $path = $_SERVER['PATH_INFO'];
        // var_dump($path);

        $path = substr($path,1);

        $arr = explode('/',$path);

        // var_dump($arr);

        if (count($arr) == 2) {
            $path = 'views/'.$arr[0].'/'.$arr[1];
        }else if(count($arr) == 1){
            $path = 'views/dashboard/'.$arr[0];
        }
    }else{
        $path = 'views/dashboard/index';
    }

    include $path.'.html';

?>