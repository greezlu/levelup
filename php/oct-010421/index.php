<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>oct-300321</title>
</head>
<body>
<?php
    
    $street = [
            [
                    'building' => '12a',
                    'flats' => ['1a','2a','1b','2b'],
            ],
            [
                    'building' => '124',
                    'flats' => ['1','2','3','4'],
            ],
            [
                    'building' => '21',
                    'flats' => ['1','4','5','6'],
            ],
            [
                    'building' => '56',
                    'flats' => ['flora','fauna','sea','forest'],
            ]
    ];
    
    foreach($street as $build){
        echo "<h4>Building: {$build["building"]}</h4>";
        echo "<ol>";
        foreach($build["flats"] as $flat){
            echo "<li>{$flat}</li>";
        }
        echo "</ol>";
    }
    
?>
</body>
</html>