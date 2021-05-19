<?php

/**
 * Class to work with data
 */
class Storage {

    /**
     * @var string Contains path to the storage file
     */
    private $storageFile;

    /**
     * Storage class constructor
     * @param string $filePath Path to the storage file
     * @return void
     */
    public function __construct (string $filePath = "./storage.json") {
        $this->storageFile = $filePath;
    }

    /**
     * Gets list of all notes
     * @return array
     */
    public function getAllNotes () :array {
        
        if ( !file_exists($this->storageFile) ) return [];
        
        $notesJson = file_get_contents($this->storageFile);
        $notesList = json_decode($notesJson, true) ?? [];

        return $notesList;

    }

    /**
     * Adding new note to the $storageFile
     * @return void
     */
    public function addNote (string $note) {

        if ($note === "") return false;
        $notesList = $this->getAllNotes();
        array_push( $notesList, htmlentities($note) );
        $this->setNotes($notesList);

    }

    public function removeNote (int $id) {

        $notesList = $this->getAllNotes();
        if ( !isset($notesList[$id]) ) return false;
        array_splice($notesList, $id, 1);
        $this->setNotes($notesList);

    }

    public function setNotes (array $notesList) {

        $notesJson = json_encode($notesList, JSON_UNESCAPED_UNICODE | JSON_HEX_TAG);
        file_put_contents($this->storageFile, $notesJson);

    }

}
