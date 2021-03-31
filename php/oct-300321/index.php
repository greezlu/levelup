<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>oct-300321</title>
  <style media="screen">
    * {
      margin: 0;
      padding: 0;
      border: 0;
    }
    table {
      border-collapse: collapse;
      margin: 0 auto;
    }
    table, tr, td {
      border: 1px solid black;
    }
    td {
      padding: 5px 8px;
    }
  </style>
</head>
<body>
  <table>
    <tbody>
      <?php
      $list = [
        ['Vasya','Pupko'],
        ['Kolya','Dudko'],
        ['Olya','Banko'],
        ['Stas','Dubko'],
      ];

      $size = count($list);

      for ($i=0;$i<$size;$i++) {?>

      <tr>
        <td><?=$i+1?></td>
        <td><?=$list[$i][0]?></td>
        <td><?=$list[$i][1]?></td>
      </tr>

      <?php } ?>
    </tbody>
  </table>
</body>
</html>