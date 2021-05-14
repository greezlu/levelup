<?php foreach ($data as $note) : ?>
<div class="note">
    <?= $note ?>
    <div class="view-button">
        <a href="?id=<?= array_search($note, $data); ?>" >View Note</a>
    </div>    
</div>
<?php endforeach; ?>
