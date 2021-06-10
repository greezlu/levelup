-- phpMyAdmin SQL Dump
-- version 5.1.0
-- https://www.phpmyadmin.net/
--
-- Хост: localhost
-- Время создания: Июн 10 2021 г., 11:36
-- Версия сервера: 8.0.24
-- Версия PHP: 8.0.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- База данных: `education`
--

-- --------------------------------------------------------

--
-- Структура таблицы `groups`
--

CREATE TABLE `groups` (
  `id` bigint UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `audience` smallint NOT NULL,
  `teacher_id` bigint UNSIGNED NOT NULL,
  `graduation_date` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;

--
-- Дамп данных таблицы `groups`
--

INSERT INTO `groups` (`id`, `name`, `audience`, `teacher_id`, `graduation_date`) VALUES
(1, 'group-1', 111, 1, NULL),
(2, 'group-2', 112, 2, NULL),
(3, 'group-3', 113, 3, NULL),
(4, 'group-4', 114, 3, NULL),
(5, 'group-5', 115, 2, '2021-06-01 10:28:14');

-- --------------------------------------------------------

--
-- Структура таблицы `marks`
--

CREATE TABLE `marks` (
  `id` bigint UNSIGNED NOT NULL,
  `student_id` bigint UNSIGNED NOT NULL,
  `group_id` bigint UNSIGNED NOT NULL,
  `comment` text,
  `value` smallint UNSIGNED NOT NULL,
  `subject_id` bigint UNSIGNED NOT NULL,
  `teacher_id` bigint UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;

--
-- Дамп данных таблицы `marks`
--

INSERT INTO `marks` (`id`, `student_id`, `group_id`, `comment`, `value`, `subject_id`, `teacher_id`) VALUES
(1, 1, 1, 'COMMENT', 5, 2, 1),
(2, 1, 2, NULL, 4, 1, 2),
(3, 2, 1, NULL, 4, 2, 1),
(4, 3, 2, NULL, 3, 6, 2),
(5, 4, 3, NULL, 5, 4, 3),
(6, 5, 3, NULL, 3, 3, 3),
(7, 6, 2, NULL, 3, 6, 2),
(8, 7, 2, NULL, 5, 1, 2),
(9, 8, 5, NULL, 2, 6, 2),
(10, 9, 5, NULL, 5, 6, 2),
(11, 10, 2, NULL, 3, 6, 2),
(12, 11, 3, NULL, 5, 4, 3),
(13, 12, 3, NULL, 3, 4, 3),
(14, 13, 4, NULL, 5, 3, 3),
(15, 14, 4, NULL, 3, 3, 3),
(16, 15, 5, NULL, 3, 6, 2);

-- --------------------------------------------------------

--
-- Структура таблицы `students`
--

CREATE TABLE `students` (
  `id` bigint UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `lastname` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(60) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;

--
-- Дамп данных таблицы `students`
--

INSERT INTO `students` (`id`, `name`, `lastname`, `email`, `password`) VALUES
(1, 'name-student-1', 'lastname-student-1', 'student-1@email.com', 'oyizMABSgW679jiMpC7J504I7W1f2HTh6ZEIn5qtRkqOuzqJZlgSabo7XfaP'),
(2, 'name-student-2', 'lastname-student-2', 'student-2@email.com', 'i0Dgm8Ex3w3PPTRdFKME7aLKklqtep9kfAqryVNqfG5SpKTUkwoiwZQG96Zb'),
(3, 'name-student-3', 'lastname-student-3', 'student-3@email.com', 'Zox2MBdTqOYIdoOaUAzkQIRSnwsf81UXfgNPFQyTsmswz6ujuTtbq8TDu9Gs'),
(4, 'name-student-4', 'lastname-student-4', 'student-4@email.com', 'SGmMmve49uGhiZd50eAXGbDmzWwb5wuL3Gnd1q70KB5Sq6Oeac0FbtRyebA9'),
(5, 'name-student-5', 'lastname-student-5', 'student-5@email.com', '6KCofmbpCvBJDhiyQnhz6d6eAC0O3KF0i8enidAKx0h07poLCtawx6AVwoyq'),
(6, 'name-student-6', 'lastname-student-6', 'student-6@email.com', 'Z7TPOCeEaFM2toUGG3dPr6PkT66LPeqEcajOAliyOUq769EA2HehCTslNoWq'),
(7, 'name-student-7', 'lastname-student-7', 'student-7@email.com', 'Cp1ngnKBrZXT9CHEdio6wxoMvcdoTvLkICxON6d4V1NSrimupzpLWDngFouo'),
(8, 'name-student-8', 'lastname-student-8', 'student-8@email.com', 'gRgkpJqiuGEkQflwub4WDHqFBKG0rArwixEx4UEoq8x6cIruJleaQuFi396i'),
(9, 'name-student-9', 'lastname-student-9', 'student-9@email.com', 'JjIvJdD9OgxA0m5R46M1PryciZkDSJipQQIqTbnwhIU6TPLNLnCpF0pLNxet'),
(10, 'name-student-10', 'lastname-student-10', 'student-10@email.com', 'mTWJT6RbHfr5C2qp2anF8RrreN8IO2MYLxxttcsYhJRHA5Uq67V2MahOMfno'),
(11, 'name-student-11', 'lastname-student-11', 'student-11@email.com', 'lPBXlp1lHjDSnI6ZwMq0W5yXA0iIkeIvT9i5m8gUfIAqeugA6wpSrLDQBMmJ'),
(12, 'name-student-12', 'lastname-student-12', 'student-12@email.com', 'RWLqmfWF2GSAQKJLh9fwxuuq80SqSGbAqLODOA6G6N6LnFmtDqP0K7eGXUUD'),
(13, 'name-student-13', 'lastname-student-13', 'student-13@email.com', 'BhpM2YTAVkRxKyUY8qGo9vXitZpogo2Hthjl60MR9rdJPXvLe2ZbnLhEAxSG'),
(14, 'name-student-14', 'lastname-student-14', 'student-14@email.com', 'BwjOfPHeGDGylQa0q5n83yYrTCQrFh05B7JFLfJhIfDSTDG7yU3pgSFZkjfO'),
(15, 'name-student-15', 'lastname-student-15', 'student-15@email.com', '1DH8nwlplqGDubWYfXKRPm7sTnb3FOQufnqrHBETPak9a6VdSwTxIQQp1Piw');

-- --------------------------------------------------------

--
-- Структура таблицы `student_groups`
--

CREATE TABLE `student_groups` (
  `id` bigint UNSIGNED NOT NULL,
  `student_id` bigint UNSIGNED NOT NULL,
  `group_id` bigint UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;

--
-- Дамп данных таблицы `student_groups`
--

INSERT INTO `student_groups` (`id`, `student_id`, `group_id`) VALUES
(1, 1, 1),
(2, 2, 1),
(3, 3, 1),
(4, 4, 1),
(5, 5, 1),
(6, 6, 2),
(7, 7, 2),
(9, 9, 5),
(10, 10, 2),
(11, 11, 3),
(12, 12, 3),
(13, 13, 4),
(14, 14, 4),
(15, 15, 5),
(16, 1, 2),
(17, 2, 2),
(18, 3, 2),
(19, 6, 1),
(20, 7, 1),
(21, 8, 5),
(22, 4, 3),
(23, 5, 3);

-- --------------------------------------------------------

--
-- Структура таблицы `student_phones`
--

CREATE TABLE `student_phones` (
  `id` bigint UNSIGNED NOT NULL,
  `student_id` bigint UNSIGNED NOT NULL,
  `phone` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;

--
-- Дамп данных таблицы `student_phones`
--

INSERT INTO `student_phones` (`id`, `student_id`, `phone`) VALUES
(1, 1, '752272613261'),
(2, 2, '670068733374'),
(3, 3, '306514113574'),
(4, 4, '732909266307'),
(5, 5, '661446370870'),
(6, 6, '770071114274'),
(7, 7, '320523851006'),
(8, 8, '994671097167'),
(9, 9, '797315852290'),
(10, 10, '991283520652'),
(11, 11, '797315852290'),
(12, 12, '191838319719'),
(13, 13, '446738861753'),
(14, 14, '524574443458'),
(15, 15, '458355250474');

-- --------------------------------------------------------

--
-- Структура таблицы `subjects`
--

CREATE TABLE `subjects` (
  `id` bigint UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;

--
-- Дамп данных таблицы `subjects`
--

INSERT INTO `subjects` (`id`, `name`) VALUES
(6, 'Algebra'),
(4, 'Choir'),
(2, 'English'),
(3, 'Geography'),
(1, 'Math'),
(7, 'Speech'),
(5, 'Sports');

-- --------------------------------------------------------

--
-- Структура таблицы `teachers`
--

CREATE TABLE `teachers` (
  `id` bigint UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `lastname` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;

--
-- Дамп данных таблицы `teachers`
--

INSERT INTO `teachers` (`id`, `name`, `lastname`, `email`) VALUES
(1, 'name-teacher-1', 'lastname-teacher-1', 'teacher-1@email.com'),
(2, 'name-teacher-2', 'lastname-teacher-2', 'teacher-2@email.com'),
(3, 'name-teacher-3', 'lastname-teacher-3', 'teacher-3@email.com'),
(4, 'name-teacher-4', 'lastname-teacher-4', 'teacher-4@email.com'),
(5, 'name-teacher-5', 'lastname-teacher-5', 'teacher-5@email.com');

-- --------------------------------------------------------

--
-- Структура таблицы `teacher_phones`
--

CREATE TABLE `teacher_phones` (
  `id` bigint UNSIGNED NOT NULL,
  `teacher_id` bigint UNSIGNED NOT NULL,
  `phone` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;

--
-- Дамп данных таблицы `teacher_phones`
--

INSERT INTO `teacher_phones` (`id`, `teacher_id`, `phone`) VALUES
(1, 1, '183085738926'),
(2, 2, '238862533817'),
(3, 3, '904610580547'),
(4, 4, '238862533817'),
(5, 5, '875526768957');

-- --------------------------------------------------------

--
-- Структура таблицы `teacher_subject`
--

CREATE TABLE `teacher_subject` (
  `id` bigint UNSIGNED NOT NULL,
  `teacher_id` bigint UNSIGNED NOT NULL,
  `subject_id` bigint UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;

--
-- Дамп данных таблицы `teacher_subject`
--

INSERT INTO `teacher_subject` (`id`, `teacher_id`, `subject_id`) VALUES
(1, 1, 2),
(2, 1, 7),
(3, 2, 1),
(4, 3, 4),
(5, 2, 6),
(6, 3, 3),
(7, 4, 5),
(8, 5, 6),
(9, 5, 1);

--
-- Индексы сохранённых таблиц
--

--
-- Индексы таблицы `groups`
--
ALTER TABLE `groups`
  ADD PRIMARY KEY (`id`),
  ADD KEY `techer_id` (`teacher_id`);

--
-- Индексы таблицы `marks`
--
ALTER TABLE `marks`
  ADD PRIMARY KEY (`id`),
  ADD KEY `group_id` (`group_id`),
  ADD KEY `student_id` (`student_id`),
  ADD KEY `subject_id` (`subject_id`),
  ADD KEY `teacher_id` (`teacher_id`);

--
-- Индексы таблицы `students`
--
ALTER TABLE `students`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `techer_email` (`email`);

--
-- Индексы таблицы `student_groups`
--
ALTER TABLE `student_groups`
  ADD PRIMARY KEY (`id`),
  ADD KEY `group_id` (`group_id`),
  ADD KEY `student_id` (`student_id`);

--
-- Индексы таблицы `student_phones`
--
ALTER TABLE `student_phones`
  ADD PRIMARY KEY (`id`),
  ADD KEY `student_id` (`student_id`);

--
-- Индексы таблицы `subjects`
--
ALTER TABLE `subjects`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `subject_name` (`name`);

--
-- Индексы таблицы `teachers`
--
ALTER TABLE `teachers`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `teacher_email` (`email`);

--
-- Индексы таблицы `teacher_phones`
--
ALTER TABLE `teacher_phones`
  ADD PRIMARY KEY (`id`),
  ADD KEY `teacher_id` (`teacher_id`);

--
-- Индексы таблицы `teacher_subject`
--
ALTER TABLE `teacher_subject`
  ADD PRIMARY KEY (`id`),
  ADD KEY `teacher_id` (`teacher_id`),
  ADD KEY `subject_id` (`subject_id`);

--
-- AUTO_INCREMENT для сохранённых таблиц
--

--
-- AUTO_INCREMENT для таблицы `groups`
--
ALTER TABLE `groups`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT для таблицы `marks`
--
ALTER TABLE `marks`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;

--
-- AUTO_INCREMENT для таблицы `students`
--
ALTER TABLE `students`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;

--
-- AUTO_INCREMENT для таблицы `student_groups`
--
ALTER TABLE `student_groups`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=26;

--
-- AUTO_INCREMENT для таблицы `student_phones`
--
ALTER TABLE `student_phones`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;

--
-- AUTO_INCREMENT для таблицы `subjects`
--
ALTER TABLE `subjects`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT для таблицы `teachers`
--
ALTER TABLE `teachers`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT для таблицы `teacher_phones`
--
ALTER TABLE `teacher_phones`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT для таблицы `teacher_subject`
--
ALTER TABLE `teacher_subject`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- Ограничения внешнего ключа сохраненных таблиц
--

--
-- Ограничения внешнего ключа таблицы `groups`
--
ALTER TABLE `groups`
  ADD CONSTRAINT `groups_ibfk_1` FOREIGN KEY (`teacher_id`) REFERENCES `teachers` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT;

--
-- Ограничения внешнего ключа таблицы `marks`
--
ALTER TABLE `marks`
  ADD CONSTRAINT `marks_ibfk_1` FOREIGN KEY (`group_id`) REFERENCES `groups` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT,
  ADD CONSTRAINT `marks_ibfk_2` FOREIGN KEY (`student_id`) REFERENCES `students` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT,
  ADD CONSTRAINT `marks_ibfk_3` FOREIGN KEY (`subject_id`) REFERENCES `subjects` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT,
  ADD CONSTRAINT `marks_ibfk_4` FOREIGN KEY (`teacher_id`) REFERENCES `teachers` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT;

--
-- Ограничения внешнего ключа таблицы `student_groups`
--
ALTER TABLE `student_groups`
  ADD CONSTRAINT `student_groups_ibfk_1` FOREIGN KEY (`group_id`) REFERENCES `groups` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT,
  ADD CONSTRAINT `student_groups_ibfk_2` FOREIGN KEY (`student_id`) REFERENCES `students` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT;

--
-- Ограничения внешнего ключа таблицы `student_phones`
--
ALTER TABLE `student_phones`
  ADD CONSTRAINT `student_phones_ibfk_1` FOREIGN KEY (`student_id`) REFERENCES `students` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT;

--
-- Ограничения внешнего ключа таблицы `teacher_phones`
--
ALTER TABLE `teacher_phones`
  ADD CONSTRAINT `teacher_phones_ibfk_1` FOREIGN KEY (`teacher_id`) REFERENCES `teachers` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT;

--
-- Ограничения внешнего ключа таблицы `teacher_subject`
--
ALTER TABLE `teacher_subject`
  ADD CONSTRAINT `teacher_subject_ibfk_2` FOREIGN KEY (`teacher_id`) REFERENCES `teachers` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT,
  ADD CONSTRAINT `teacher_subject_ibfk_3` FOREIGN KEY (`subject_id`) REFERENCES `subjects` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
