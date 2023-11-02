import React from 'react'

const Services = ( {servicesList}) => {
  return (
    <>
      <section className="services">
        <h2 className="section__title">Услуги</h2>
        <div className="services__wrapper">
          {servicesList.map(service =>

            <article
              className={`services__item services__item-${service.alias}`}
              key={service.id}
              style={{backgroundImage: `url(${service.img})`}}
            >
              <a className='services__item-link' href={service.url}>
                <h3 className="services__item-title">{service.title}</h3>
              </a>
            </article>

          )}
        </div>
      </section>
    </>
  )
}

export default Services