import Button from "../Button/Button";
import style from "./PostCard.module.css";
import placeholder from "../../assets/placeholder.webp";
import Tags from "../tags/Tags";
import TrashIcon from "../ui/trash-icon";
import { API_BASE_URI_IMAGES } from "../Main/Main";

export default function PostCard({ onDelete = () => {}, post = {} }) {
  const { title, image, content, tags, published } = post;

  //console.log(post);

  // function callback () {
  //   console.log('elimina questo post')
  // }

  return (
    <div className={style.card}>
      <img
        className={style.image}
        src={image ? API_BASE_URI_IMAGES + image : placeholder}
        alt=""
      />
      <div className={style.card_body}>
        <h3 className={style.card_title}>{title}</h3>
        <Tags tags={tags} />
        <p className={style.card_description}>{content}</p>
        <div className={style.card_footer}>
          <Button />
          <button onClick={onDelete} className={style.icon}>
            <TrashIcon />
          </button>
        </div>
      </div>
    </div>
  );
}
