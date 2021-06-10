<?php
    $users = $options->getAllUsers();
?>
<table>
    
    <tr>
        <td>Login</td>
        <td>Password</td>
        <td>Email</td>
    </tr>
    
    <?php foreach ($users as $user): ?>
        <tr>
            <td><?= $user["login"] ?></td>
            <td><?= $user["password"] ?></td>
            <td><?= $user["email"] ?></td>
        </tr>
    <?php endforeach ?>
    
</table>
<form action="/" method="post">
    <input type="text" name="login">
    <input type="password" name="password">
    <input type="email" name="email">
    <input type="submit">
</form>
