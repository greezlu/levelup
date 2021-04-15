<?php

const UPLOADS_PATH = "G:/git/levelup/php/oct-130421/homework/uploads/";

const ALLOWED_TYPES = [
	"image/gif",
	"image/jpeg",
	"image/png"
];

const ALLOWED_FILE_SIZE = 3 * 1024 * 1024;

const ERROR_MESSAGE = [
	1 => "Increased max file size",
	2 => "Increased max file size",
	3 => "Error occured due to sending of the file",
	4 => "Error occured due to sending of the file",
	6 => "Server error",
	7 => "Server error",
	8 => "Server error"
];