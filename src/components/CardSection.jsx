import { Card } from "./Card"

export const CardSection = () => {
    return (
      <section className="contact bg-success ">
        <div className="container ">
          <h2 className="text-white">We love new friends!</h2>
          <div className="row">
            <div className="col-4">
              <Card
                title="dummy title one"
                subTitle="dummy subtitle one"
                imgLink="https://images.pexels.com/photos/1151141/pexels-photo-1151141.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                btnLabel="dummy button one"
              />
            </div>
            <div className="col-4">
              <Card
                title="dummy title two"
                subTitle="dummy subtitle two"
                imgLink="https://images.pexels.com/photos/891141/pexels-photo-891141.jpeg?cs=srgb&dl=pexels-julien-bachelet-891141.jpg&fm=jpg"
                btnLabel="dummy button two"
              />
            </div>
            <div className="col-4">
              <Card
                title="dummy title three"
                subTitle="dummy subtitle three"
                imgLink="https://images.pexels.com/photos/777001/pexels-photo-777001.jpeg?cs=srgb&dl=pexels-xxss-is-back-777001.jpg&fm=jpg"
                btnLabel="dummy button three"
              />
            </div>
          </div>
        </div>
      </section>
    );
}
