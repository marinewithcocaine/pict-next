import NavigationLink from "../NavigationLink/NavigationLink";

const ServicesList = ({services}) => {

  return (
    <ul className='category-list'>
      {services.map((service) => {
        return (
          <li key={service.id} className="navigation__item">
            <NavigationLink
              title={service.title.rendered}
              link={`/services/${service.slug}`}
            />
          </li>
        );
      })}
    </ul>
  );
};

export default ServicesList;
