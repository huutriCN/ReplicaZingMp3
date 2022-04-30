const navbars = {
  menuItem: [
    {
      itemType: "icon",
      itemTitle: "Zing MP3",
      id: 1,
      link: "/home",
    },
    {
      itemType: "text",
      itemTitle: "Nhạc Cá Nhân",
      link: "/home",
      id: 2,
    },
    {
      itemType: "separation",
      id: 10,
    },
    {
      itemType: "text",
      link: "/home",
      itemTitle: "#zingChart",
      id: 3,
      dropdownItems: [
        {
          columnTitle: "#zingchart",
          id: 1,
          columnItems: [
            {
              rowText: "Bài Hát",
              rowLink: "/home",
              id: 1,
            },
            {
              rowText: "MV",
              rowLink: "/home",
              id: 2,
            },
          ],
        },
        {
          columnTitle: "Tuần",
          id: 2,
          columnItems: [
            {
              rowText: "Bài Hát",
              rowLink: "/home",
              id: 1,
            },
            {
              rowText: "MV",
              rowLink: "/home",
              id: 2,
            },
            {
              rowText: "Album",
              rowLink: "/home",
              id: 3,
            },
          ],
        },
        {
          columnTitle: "us-uk chart",
          id: 3,
          columnItems: [
            {
              rowText: "Bài Hát",
              rowLink: "/home",
              id: 1,
            },
            {
              rowText: "MV",
              rowLink: "/home",
              id: 2,
            },
            {
              rowText: "Album",
              rowLink: "/home",
              id: 3,
            },
          ],
        },
        {
          columnTitle: "kpop chart",
          id: 4,
          columnItems: [
            {
              rowText: "Bài Hát",
              rowLink: "/home",
              id: 1,
            },
            {
              rowText: "MV",
              rowLink: "/home",
              id: 2,
            },
            {
              rowText: "Album",
              rowLink: "/home",
              id: 4,
            },
          ],
        },
      ],
    },
    {
      itemType: "text",
      itemTitle: "Top 100",
      link: "/home",
      id: 4,
      dropdownItems: [
        {
          columnTitle: "",
          id: 1,
          columnItems: [
            {
              rowText: "Việt Nam",
              rowLink: "/home",
              id: 4,
            },
            {
              rowText: "Âu Mỹ",
              rowLink: "/home",
              id: 3,
            },
            {
              rowText: "Châu Á",
              rowLink: "/home",
              id: 2,
            },
            {
              rowText: "Hòa Tấu",
              rowLink: "/home",
              id: 1,
            },
          ],
        },
      ],
    },
    {
      itemType: "text",
      itemTitle: "Chủ Đề",
      id: 5,
      link: "/home",
      dropdownItems: [
        {
          columnTitle: "Đề xuất",
          id: 3,
          columnItems: [
            {
              rowText: "Nhạc HOT",
              rowLink: "/home",
              id: 6,
            },
            {
              rowText: "Những Bài HITs Mới",
              rowLink: "/home",
              id: 5,
            },
            {
              rowText: "Nhạc Việt Bất Hủ",
              rowLink: "/home",
              id: 4,
            },
            {
              rowText: "Nhạc Bất Hủ Âu Mỹ",
              rowLink: "/home",
              id: 3,
            },
            {
              rowText: "K-Pop HITs",
              rowLink: "/home",
              id: 2,
            },
            {
              rowText: "Nhạc Thúy Nga",
              rowLink: "/home",
              id: 1,
            },
          ],
        },
        {
          columnTitle: "thể loại",
          id: 2,
          columnItems: [
            {
              rowText: "EDM",
              rowLink: "/home",
              id: 5,
            },
            {
              rowText: "Aucoustic",
              rowLink: "/home",
              id: 4,
            },
            {
              rowText: "Indie",
              rowLink: "/home",
              id: 3,
            },
            {
              rowText: "Nhạc không lời",
              rowLink: "/home",
              id: 2,
            },
            {
              rowText: "Nhạc không lời",
              rowLink: "/home",
              id: 1,
            },
          ],
        },
        {
          columnTitle: "tâm trạng",
          id: 5,
          columnItems: [
            {
              rowText: "Những ngày mưa",
              rowLink: "/home",
              id: 4,
            },
            {
              rowText: "Tình Yêu",
              rowLink: "/home",
              id: 3,
            },
            {
              rowText: "Buồn",
              rowLink: "/home",
              id: 2,
            },
            {
              rowText: "Thư giãn",
              rowLink: "/home",
              id: 1,
            },
          ],
        },
        {
          columnTitle: "hoạt động",
          id: 1,
          columnItems: [
            {
              rowText: "Làm việc",
              rowLink: "/home",
              id: 6,
            },
            {
              rowText: "Yoga",
              rowLink: "/home",
              id: 5,
            },
            {
              rowText: "Cà phê",
              rowLink: "/home",
              id: 4,
            },
            {
              rowText: "Cuối tuần",
              rowLink: "/home",
              id: 3,
            },
            {
              rowText: "Tiệc Tùng",
              rowLink: "/home",
              id: 2,
            },
            {
              rowText: "Du Lịch",
              rowLink: "/home",
              id: 1,
            },
          ],
        },
      ],
    },
    {
      itemType: "text",
      itemTitle: "Video",
      id: 6,
      link: "/home",
      dropdownItems: [
        {
          columnTitle: "Việt Nam",
          id: 5,
          columnItems: [
            {
              rowText: "Nhạc Trẻ",
              rowLink: "/home",
              id: 7,
            },
            {
              rowText: "Nhạc Trữ Tình",
              rowLink: "/home",
              id: 6,
            },
            {
              rowText: "Dance Việt",
              rowLink: "/home",
              id: 5,
            },
            {
              rowText: "Rock Việt",
              rowLink: "/home",
              id: 4,
            },
            {
              rowText: "Rap/ Hip Hop Việt",
              rowLink: "/home",
              id: 3,
            },
            {
              rowText: "Nhạc Trịnh",
              rowLink: "/home",
              id: 2,
            },
            {
              rowText: "Nhạc Thiếu Nhi",
              rowLink: "/home",
              id: 1,
            },
          ],
        },
        {
          columnTitle: "Âu Mỹ",
          id: 3,
          columnItems: [
            {
              rowText: "Pop",
              rowLink: "/home",
              id: 7,
            },
            {
              rowText: "Rock",
              rowLink: "/home",
              id: 6,
            },
            {
              rowText: "Rap/Hip Hop",
              rowLink: "/home",
              id: 5,
            },
            {
              rowText: "Country",
              rowLink: "/home",
              id: 4,
            },
            {
              rowText: "Electronic/Dance",
              rowLink: "/home",
              id: 3,
            },
            {
              rowText: "R&B/Soul",
              rowLink: "/home",
              id: 2,
            },
            {
              rowText: "Audiophile",
              rowLink: "/home",
              id: 1,
            },
          ],
        },
        {
          columnTitle: "Châu Á",
          id: 2,
          columnItems: [
            {
              rowText: "Hàn Quốc",
              rowLink: "/home",
              id: 4,
            },
            {
              rowText: "Nhật Bản",
              rowLink: "/home",
              id: 3,
            },
            {
              rowText: "Hoa Ngữ",
              rowLink: "/home",
              id: 2,
            },
            {
              rowText: "Thái Lan",
              rowLink: "/home",
              id: 1,
            },
          ],
        },
        {
          columnTitle: "Hòa Tấu",
          id: 1,
          columnItems: [
            {
              rowText: "Classical",
              rowLink: "/home",
              id: 7,
            },
            {
              rowText: "Piano",
              rowLink: "/home",
              id: 6,
            },
            {
              rowText: "Guitar",
              rowLink: "/home",
              id: 5,
            },
            {
              rowText: "Violin",
              rowLink: "/home",
              id: 4,
            },
            {
              rowText: "Celio",
              rowLink: "/home",
              id: 3,
            },
            {
              rowText: "Saxophone",
              rowLink: "/home",
              id: 2,
            },
            {
              rowText: "Nhạc Cụ Dân Tộc",
              rowLink: "/home",
              id: 1,
            },
          ],
        },
      ],
    },
    {
      itemType: "text",
      itemTitle: "Album",
      id: 7,
      link: "/home",
      dropdownItems: [
        {
          columnTitle: "Việt Nam",
          id: 7,
          columnItems: [
            {
              rowText: "Nhạc Trẻ",
              rowLink: "/home",
              id: 7,
            },
            {
              rowText: "Nhạc Trữ Tình",
              rowLink: "/home",
              id: 6,
            },
            {
              rowText: "Dance Việt",
              rowLink: "/home",
              id: 5,
            },
            {
              rowText: "Rock Việt",
              rowLink: "/home",
              id: 4,
            },
            {
              rowText: "Rap/ Hip Hop Việt",
              rowLink: "/home",
              id: 3,
            },
            {
              rowText: "Nhạc Trịnh",
              rowLink: "/home",
              id: 2,
            },
            {
              rowText: "Nhạc Thiếu Nhi",
              rowLink: "/home",
              id: 1,
            },
          ],
        },
        {
          columnTitle: "Âu Mỹ",
          id: 6,
          columnItems: [
            {
              rowText: "Pop",
              rowLink: "/home",
              id: 7,
            },
            {
              rowText: "Rock",
              rowLink: "/home",
              id: 6,
            },
            {
              rowText: "Rap/Hip Hop",
              rowLink: "/home",
              id: 5,
            },
            {
              rowText: "Country",
              rowLink: "/home",
              id: 4,
            },
            {
              rowText: "Electronic/Dance",
              rowLink: "/home",
              id: 3,
            },
            {
              rowText: "R&B/Soul",
              rowLink: "/home",
              id: 2,
            },
            {
              rowText: "Audiophile",
              rowLink: "/home",
              id: 1,
            },
          ],
        },
        {
          columnTitle: "Châu Á",
          id: 5,
          columnItems: [
            {
              rowText: "Hàn Quốc",
              rowLink: "/home",
              id: 4,
            },
            {
              rowText: "Nhật Bản",
              rowLink: "/home",
              id: 3,
            },
            {
              rowText: "Hoa Ngữ",
              rowLink: "/home",
              id: 2,
            },
            {
              rowText: "Thái Lan",
              rowLink: "/home",
              id: 1,
            },
          ],
        },
        {
          columnTitle: "Hòa Tấu",
          id: 1,
          columnItems: [
            {
              rowText: "Classical",
              rowLink: "/home",
              id: 7,
            },
            {
              rowText: "Piano",
              rowLink: "/home",
              id: 6,
            },
            {
              rowText: "Guitar",
              rowLink: "/home",
              id: 5,
            },
            {
              rowText: "Violin",
              rowLink: "/home",
              id: 4,
            },
            {
              rowText: "Celio",
              rowLink: "/home",
              id: 3,
            },
            {
              rowText: "Saxophone",
              rowLink: "/home",
              id: 2,
            },
            {
              rowText: "Nhạc Cụ Dân Tộc",
              rowLink: "/home",
              id: 1,
            },
          ],
        },
      ],
    },
    {
      itemType: "text",
      itemTitle: "Nghệ Sĩ",
      id: 8,
      link: "/home",
      dropdownItems: [
        {
          columnTitle: "",
          id: 1,
          columnItems: [
            {
              rowText: "Việt Nam",
              rowLink: "/home",
              id: 7,
            },
            {
              rowText: "Âu Mỹ",
              rowLink: "/home",
              id: 6,
            },
            {
              rowText: "Hàn Quốc",
              rowLink: "/home",
              id: 5,
            },
            {
              rowText: "Nhật Bản",
              rowLink: "/home",
              id: 4,
            },
            {
              rowText: "Hàn Quốc",
              rowLink: "/home",
              id: 3,
            },
            {
              rowText: "Hoa Ngữ",
              rowLink: "/home",
              id: 2,
            },
            {
              rowText: "Hoà Tấu",
              rowLink: "/home",
              id: 1,
            },
          ],
        },
      ],
    },
    {
      itemType: "text",
      itemTitle: "VIP",
      id: 9,
      link: "/home",
      dropdownItems: [
        {
          id: 1,
          columnTitle: "",
          columnItems: [
            {
              rowText: "Mua VIP",
              rowLink: "/home",
              id: 1,
            },
            {
              rowText: "Giới thiệu VIP",
              rowLink: "/home",
              id: 2,
            },
          ],
        },
      ],
    },
  ],
};

export default navbars;
