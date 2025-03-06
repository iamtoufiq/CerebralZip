const salesData = [
    { date: "2022-12-13 22:05:00", web_sales: 15, offline_sales: 14 },
    { date: "2022-12-13 22:06:00", web_sales: 23, offline_sales: 21 },
    { date: "2022-12-13 22:07:00", web_sales: 39, offline_sales: 35 },
    { date: "2022-12-13 22:08:00", web_sales: 56, offline_sales: 49 },
    { date: "2022-12-13 22:09:00", web_sales: 67, offline_sales: 60 },
    { date: "2022-12-13 22:10:00", web_sales: 86, offline_sales: 78 },
    { date: "2022-12-13 22:11:00", web_sales: 100, offline_sales: 90 },
    { date: "2022-12-13 22:12:00", web_sales: 125, offline_sales: 100 },
    { date: "2022-12-13 22:13:00", web_sales: 139, offline_sales: 109 },
    { date: "2022-12-13 22:14:00", web_sales: 148, offline_sales: 117 },
    { date: "2022-12-13 22:15:00", web_sales: 160, offline_sales: 127 },
    { date: "2022-12-13 22:16:00", web_sales: 172, offline_sales: 138 },
    { date: "2022-12-13 22:17:00", web_sales: 189, offline_sales: 149 },
    { date: "2022-12-13 22:18:00", web_sales: 212, offline_sales: 162 },
    { date: "2022-12-13 22:19:00", web_sales: 231, offline_sales: 170 },
    { date: "2022-12-13 22:20:00", web_sales: 248, offline_sales: 176 },
    { date: "2022-12-13 22:21:00", web_sales: 265, offline_sales: 186 },
    { date: "2022-12-13 22:22:00", web_sales: 278, offline_sales: 195 },
    { date: "2022-12-13 22:23:00", web_sales: 294, offline_sales: 207 },
    { date: "2022-12-13 22:24:00", web_sales: 309, offline_sales: 219 },
    { date: "2022-12-13 22:25:00", web_sales: 323, offline_sales: 228 },
    { date: "2022-12-13 22:26:00", web_sales: 340, offline_sales: 240 },
    { date: "2022-12-13 22:27:00", web_sales: 354, offline_sales: 252 },
    { date: "2022-12-13 22:28:00", web_sales: 366, offline_sales: 261 },
    { date: "2022-12-13 22:29:00", web_sales: 378, offline_sales: 272 },
    { date: "2022-12-13 22:30:00", web_sales: 388, offline_sales: 279 },
    { date: "2022-12-13 22:31:00", web_sales: 399, offline_sales: 287 },
    { date: "2022-12-13 22:32:00", web_sales: 410, offline_sales: 296 },
    { date: "2022-12-13 22:33:00", web_sales: 427, offline_sales: 311 },
    { date: "2022-12-13 22:34:00", web_sales: 440, offline_sales: 321 },
    { date: "2022-12-13 22:35:00", web_sales: 455, offline_sales: 333 },
    { date: "2022-12-13 22:36:00", web_sales: 468, offline_sales: 341 },
    { date: "2022-12-13 22:37:00", web_sales: 474, offline_sales: 346 },
    { date: "2022-12-13 22:38:00", web_sales: 489, offline_sales: 359 },
    { date: "2022-12-13 22:39:00", web_sales: 497, offline_sales: 366 },
    { date: "2022-12-13 22:40:00", web_sales: 515, offline_sales: 383 },
    { date: "2022-12-13 22:41:00", web_sales: 525, offline_sales: 390 },
    { date: "2022-12-13 22:42:00", web_sales: 534, offline_sales: 398 },
    { date: "2022-12-13 22:43:00", web_sales: 547, offline_sales: 410 },
    { date: "2022-12-13 22:44:00", web_sales: 565, offline_sales: 423 },
    { date: "2022-12-13 22:45:00", web_sales: 582, offline_sales: 436 },
    { date: "2022-12-13 22:46:00", web_sales: 593, offline_sales: 444 },
    { date: "2022-12-13 22:47:00", web_sales: 605, offline_sales: 451 },
    { date: "2022-12-13 22:48:00", web_sales: 624, offline_sales: 464 },
    { date: "2022-12-13 22:49:00", web_sales: 642, offline_sales: 477 },
    { date: "2022-12-13 22:50:00", web_sales: 660, offline_sales: 486 },
    { date: "2022-12-13 22:51:00", web_sales: 668, offline_sales: 492 },
    { date: "2022-12-13 22:52:00", web_sales: 683, offline_sales: 500 },
    { date: "2022-12-13 22:53:00", web_sales: 701, offline_sales: 516 },
    { date: "2022-12-13 22:54:00", web_sales: 720, offline_sales: 531 },
    { date: "2022-12-13 22:55:00", web_sales: 736, offline_sales: 543 },
    { date: "2022-12-13 22:56:00", web_sales: 757, offline_sales: 557 },
    { date: "2022-12-13 22:57:00", web_sales: 775, offline_sales: 571 },
    { date: "2022-12-13 22:58:00", web_sales: 799, offline_sales: 590 },
    { date: "2022-12-13 22:59:00", web_sales: 816, offline_sales: 599 },
    { date: "2022-12-13 23:00:00", web_sales: 828, offline_sales: 606 },
    { date: "2022-12-13 23:01:00", web_sales: 844, offline_sales: 618 },
    { date: "2022-12-13 23:02:00", web_sales: 860, offline_sales: 627 },
    { date: "2022-12-13 23:03:00", web_sales: 876, offline_sales: 635 },
    { date: "2022-12-13 23:04:00", web_sales: 890, offline_sales: 645 },
    { date: "2022-12-13 23:05:00", web_sales: 905, offline_sales: 655 },
    { date: "2022-12-13 23:06:00", web_sales: 918, offline_sales: 666 },
    { date: "2022-12-13 23:07:00", web_sales: 937, offline_sales: 678 },
  ];

  export const web_sales= salesData.map((item) => item.web_sales);
  export const offline_sales= salesData.map((item) => item.offline_sales);