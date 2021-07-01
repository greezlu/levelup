<?php if (self::$data) : ?>
    <ul>
    <?php foreach ($data as $task) : ?>
    
        <li>
            <?= $task["name"] ?>
            <a href="<?= static::getUrl("task", "edit") . "/?id=" . $task["id"] ?>">Edit</a>
            <form action="<?= static::getUrl("task", "delete") ?>" method="POST">
                <input type="hidden" name="id" value="<?= $task["id"] ?>">
                <input type="submit" value="Delete">
            </form>
        </li>
        
    <?php endforeach ?>
    </ul>
<?php endif ?>