import NewsCard from "../NewsCard";

const News = () => {
  const newses = [
    {
      id: 1,
      title: "News # 1",
      descr:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat ducimus a tempore quos consequatur harum doloribus suscipit vitae, dolorum rerum ad, fugit voluptatum? Omnis nisi dolores neque minima architecto eos provident ducimus. Quidem dignissimos sed optio ad ullam. Vero quam eligendi id quo temporibus asperiores, totam, fuga omnis aperiam quisquam pariatur exercitationem nam maxime explicabo! Et mollitia sed non similique distinctio ducimus illo optio saepe, laudantium modi porro veritatis commodi? Repellat fugiat impedit quam voluptas, consectetur necessitatibus quia debitis, natus distinctio nisi atque placeat perferendis beatae dolorem deserunt quisquam ad et modi rerum dignissimos iusto, reiciendis sit quas vel? Cupiditate!",
      photo: "https://picsum.photos/id/238/200",
    },
    {
      id: 2,
      title: "News # 2",
      descr:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat ducimus a tempore quos consequatur harum doloribus suscipit vitae, dolorum rerum ad, fugit voluptatum? Omnis nisi dolores neque minima architecto eos provident ducimus. Quidem dignissimos sed optio ad ullam. Vero quam eligendi id quo temporibus asperiores, totam, fuga omnis aperiam quisquam pariatur exercitationem nam maxime explicabo! Et mollitia sed non similique distinctio ducimus illo optio saepe, laudantium modi porro veritatis commodi? Repellat fugiat impedit quam voluptas, consectetur necessitatibus quia debitis, natus distinctio nisi atque placeat perferendis beatae dolorem deserunt quisquam ad et modi rerum dignissimos iusto, reiciendis sit quas vel? Cupiditate!",
      photo: "https://picsum.photos/id/239/200",
    },
    {
      id: 3,
      title: "News # 3",
      descr:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat ducimus a tempore quos consequatur harum doloribus suscipit vitae, dolorum rerum ad, fugit voluptatum? Omnis nisi dolores neque minima architecto eos provident ducimus. Quidem dignissimos sed optio ad ullam. Vero quam eligendi id quo temporibus asperiores, totam, fuga omnis aperiam quisquam pariatur exercitationem nam maxime explicabo! Et mollitia sed non similique distinctio ducimus illo optio saepe, laudantium modi porro veritatis commodi? Repellat fugiat impedit quam voluptas, consectetur necessitatibus quia debitis, natus distinctio nisi atque placeat perferendis beatae dolorem deserunt quisquam ad et modi rerum dignissimos iusto, reiciendis sit quas vel? Cupiditate!",
      photo: "https://picsum.photos/id/237/200",
    },
  ];

  const newsesRender = () => {
    return newses.map((item) => <NewsCard news={item} key={item.key} />);
  };

  return (
    <div className="container">
      <h2>News</h2>
      <div className="row">{newsesRender()}</div>
    </div>
  );
};

export default News;
