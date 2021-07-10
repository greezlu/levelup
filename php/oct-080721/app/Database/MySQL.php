<?php

namespace Database;

/**
 * Basic class to work woth MySQL queries.
 */
class MySQL {

    /**
     * Connection to database.
     * @var mysqli $db
     */
    static private $db;

    /**
     * Bool status of any errors due to connection to database.
     * @var bool $connectionStatus 
     */
    static protected $connectionStatus;

    /**
     * Connerct to database if connection was not made before.
     * @return void
     */
    static private function connect() {

        if (self::$db && self::$connectionStatus) return;

        self::$db = new \mysqli("localhost", "discuss-user", "iv5yruWmm2SmyhBCPBSCiNhTgU44JSks", "discuss");

        if (self::$db->connect_errno) {
            self::$connectionStatus = false;
        } else {
            self::$connectionStatus = true;
        }

    }

    /**
     * Insert query to database. Only one insert item per query.
     * @param string $tableName Name of the table to send query.
     * @param array $values Keys of the array will become names of the fields.
     * @return bool Result of the query.
     */
    static public function insert (string $tableName, array $values) {

        if (!self::$db) self::connect();
        if (!self::$connectionStatus) return false;

        $tableName = addslashes($tableName);

        $query = "INSERT INTO `$tableName` ";

        $fieldList = array_keys($values);

        $query .= "(";

        foreach ($fieldList as $field) {
            $query .= "`$field`, ";
        }

        $query = substr($query, 0, -2) . ") ";

        $query .= "VALUES (";

        foreach ($values as $value) {
            $query .= "'" . addslashes($value) . "', ";
        }

        $query = substr($query, 0, -2) . ");";

        return self::$db->query($query);

    }

    /**
     * Select query to database. Returns all the records.
     * @param string $tableName Name of the table to send query.
     * @param string $orderField Name of the field to sort select query.
     * @param string $orderDirection ASC or DESC direction of the result.
     * @return array Result array of the select query.
     */
    static public function select (string $tableName, string $orderField = NULL, string $orderDirection = NULL) {

        if (!self::$db) self::connect();
        if (!self::$connectionStatus) return [];

        $tableName = addslashes($tableName);
        if ($orderField) $orderField = addslashes($orderField);
        if ($orderDirection) $orderDirection = addslashes($orderDirection);

        $query = "SELECT * FROM `$tableName`";

        if ($orderField && $orderDirection) {
            $query .= " ORDER BY `$orderField` $orderDirection";
        } else if ($orderField) {
            $query .= " ORDER BY `$orderField`";
        }

        $query .= ";";

        $result = self::$db->query($query);

        if ($result instanceof \mysqli_result) {
            $result = $result->fetch_all(MYSQLI_ASSOC);
        } else {
            return [];
        }

        return $result;

    }

}
