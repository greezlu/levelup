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
        
        if (!file_exists($this->storageFile)) {
          return [];
        }
        
        $notesJson = file_get_contents($this->storageFile);
        $notesArray = json_decode($notesJson, true) ?? [];

        return $notesArray;

    }

    /**
     * Adding new note to the $storageFile
     * @return void
     */
    public function addNote (string $note) {

        $notesJson = file_get_contents($this->storageFile);

        $notesArray = $notesJson ? json_decode($notesJson, true) : [];

        array_push($notesArray, $note);

        $notesJson = json_encode($notesArray);

        file_put_contents($this->storageFile, $notesJson);

    }

}
