<!doctype html>
<html lang="en">
    <head>
        <meta charset="utf-8">
        <title>Title</title>
    </head>
    <body>
        <header>Site Name</header>
        <main>
            <nav>
                <ul>
                    <li><a href="<?= static::getUrl("task") ?>">Task Index</a></li>
                    <li><a href="<?= static::getUrl("task", "create") ?>">Task Create</a></li>
                    <li><a href="<?= static::getUrl("task", "edit") ?>">Task Edit</a></li>
                </ul>
            </nav>
            <p><?php include_once "view/pages/$page.php"?></p>
        </main>
    </body>
</html>