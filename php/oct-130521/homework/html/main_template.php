<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <link type="image/png" sizes="96x96" rel="icon" href="./images/favicon.png">
    <?php foreach($this->cssList as $cssFile): ?>
    <link rel="stylesheet" href="<?= $cssFile ?>">
    <?php endforeach ?>
    <title><?= $this->pageName ?></title>
</head>
<body>

    <header>
        <div class="header-container index-header">
            <a href="/index.php">NOTES</a>
        </div>
        <div class="header-container admin-header">
            <a href="/admin.php">ADMIN</a>
        </div>
    </header>

    <main>
        <section></section>
        <section class="content">
            <?php include($this->pageFile); ?>
        </section>
        <section></section>
    </main>

    <footer>
        <a href="https://github.com/greezlu/levelup/tree/master/php/oct-130521/homework">
            <img src="./images/github.png" alt="Github Link">
        </a>
    </footer>
    
</body>
</html>
