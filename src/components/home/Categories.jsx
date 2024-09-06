import { categories } from "../../data/Categories";
import { CardCategorie } from "./CardCategorie";

export const Categories = () => {
  return (
    <>
      <div className="backCard ">
        <div className="boxTextCate">
          <h3 className="text-Cate text-center text-light">Categorías</h3>
        </div>

        <div className="card-group groupcards d-flex justify-content-center align-items-center">
          <div className="row categories ">
            {categories.map(({ id, name, img }) => (
              <div className="col-xl col-md-4 col-xs-12 mx-auto" key={id}>
                <CardCategorie name={name} img={img} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
