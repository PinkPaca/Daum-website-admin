export const menuItems = [
  {
    title: '대쉬보드',
    url: '/',
  },
  {
    title: '회원관리',
    url: '/accounts',
  },
  {
    title: '게시물관리',
    url: '/post-manage',
    submenu: [
      {
        title: '설교',
        url: '/post-manage/sermon',
      },
      {
        title: '찬양',
        url: '/post-manage/worship',
      },
      {
        title: '특별영상',
        url: '/post-manage/videos',
      },
      {
        title: '앨범',
        url: '/post-manage/album',
      },
      {
        title: '예배실황',
        url: '/post-manage/broadcasting',
      },
      {
        title: '보도자료',
        url: '/post-manage/news',
      },
      {
        title: '단기선교',
        url: '/post-manage/mission-trip',
      },
      {
        title: '교회학교',
        url: '/post-manage/children',
      },
      {
        title: '비전트립',
        url: '/post-manage/vision-trip',
      },
      {
        title: '주보',
        url: '/post-manage/weekly',
      },
    ],
  },
];
