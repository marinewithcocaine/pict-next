import NavigationLink from "../NavigationLink/NavigationLink";

const CategoryList = ({ categories }) => {

  return (
    <ul className='category-list'>
      {categories.map((category) => {
        return (
          <li key={category.id} className="navigation__item">
            <NavigationLink
              title={category.name}
              link={`/portfolio/${category.slug}`}
            />
          </li>
        );
      })}
    </ul>
  );
};

export default CategoryList;
