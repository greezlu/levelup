<div id="add-note">
    <form action="/admin.php" method="POST">
        <textarea name="note" placeholder="Enter your note"></textarea>
        <input type="submit">
    </form>
</div>
<?php foreach ($data as $note) : ?>
<div class="note">
    <?= $note ?>
    <form action="/admin.php" method="POST" class="remove-button">
        <input type="submit" value="Remove">
        <input type="hidden" name="remove-id" value="<?= array_search($note, $data) ?>">
    </form>
</div>
<?php endforeach; ?> 
