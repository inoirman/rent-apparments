import { useParams } from "react-router-dom";

const OneNews = () => {
  const news = {
    id: 3,
    title: "News # 3",
    descr:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat ducimus a tempore quos consequatur harum doloribus suscipit vitae, dolorum rerum ad, fugit voluptatum? Omnis nisi dolores neque minima architecto eos provident ducimus. Quidem dignissimos sed optio ad ullam. Vero quam eligendi id quo temporibus asperiores, totam, fuga omnis aperiam quisquam pariatur exercitationem nam maxime explicabo! Et mollitia sed non similique distinctio ducimus illo optio saepe, laudantium modi porro veritatis commodi? Repellat fugiat impedit quam voluptas, consectetur necessitatibus quia debitis, natus distinctio nisi atque placeat perferendis beatae dolorem deserunt quisquam ad et modi rerum dignissimos iusto, reiciendis sit quas vel? Cupiditate!",
    photo: "https://picsum.photos/id/237/200",
  };
  let { id } = useParams();
  return (
    <div className="container">
      <div className="row">
        <div className="col s12">
          <div class="card">
            <div class="card-image">
              <img src={news.photo} alt={news.title} />
              <span class="card-title">
                {news.title} ({id})
              </span>
            </div>
            <div class="card-content">
              <p>{news.descr}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OneNews;
