<?php $users = $options->getAllUsers(); ?>
<div id="container">
    <?php if ( !empty($users) ): ?>
    <div id="user-form-container">

        <table id="user-list">

            <thead>
                <tr>
                    <td>Login</td>
                    <td>Password</td>
                    <td>Email</td>
                    <td>Action</td>
                </tr>
            </thead>

            <tbody>
                <?php foreach ($users as $user) : ?>
                    <tr>
                        <td><?= $user["login"] ?></td>
                        <td><?= $user["password"] ?></td>
                        <td><?= $user["email"] ?></td>
                        
                        <td>
                            <form action="<?= $_SERVER["REQUEST_URI"] ?>" method="post">
                                <input type="hidden" name="login" value="<?= $user["login"] ?>">
                                <input type="submit" name="delete" value="Delete">
                            </form>
                        </td>

                    </tr>
                <?php endforeach ?>
            </tbody>

        </table>
        
    </div>
    <?php endif ?>

    <form action="<?= $_SERVER["REQUEST_URI"] ?>" method="post" id="user-form">
        <input type="text" name="login" placeholder="Login">
        <input type="password" name="password" placeholder="Password">
        <input type="password" name="password-verify" placeholder="Repeat password">
        <input type="email" name="email" placeholder="Emali">
        <input type="submit">
    </form>

</div>
