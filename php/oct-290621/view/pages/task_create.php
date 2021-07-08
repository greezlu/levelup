<form action="<?= static::getUrl("task", "save") ?>" method="post">
    <input type="text" name="name">
    <input type="submit" value="addTask">
</form>

<form name="taskCreate">
    <input type="text" name="name">
    <input type="submit" value="addTask">
</form>

<div id="loadTasks">Button</div>
<div id="tasksList"></div>

<script src="/scripts/ajax.js"></script>