<h2>Task Edit</h2>
<form action="<?= static::getUrl("task", "save") ?>" method="post">
    <input type="text" name="name" value="<?= $data["name"] ?>">
    <input type="hidden" name="id" value="<?= $data["id"] ?>">
    <input type="submit" value="editTask">
</form>