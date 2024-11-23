const today = () => {
  // 現在の日付を取得
  const currentDate = new Date();
  
  // 年月日を取得
  const year = currentDate.getFullYear();
  const month = currentDate.getMonth()+1;
  const day = currentDate.getDate();
  // 表示方法
  const formatDay = `${year}年${month}月${day}日`;
  
  console.log(formatDay);
};
today();




