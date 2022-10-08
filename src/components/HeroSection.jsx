const HeroSection = () => {
  return (
    <main>
      <div className="jumbotron ">
        <h1 className="display-4">App looks great!</h1>
        <p className="lead">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione
          necessitatibus, quas voluptas beatae optio maxime cupiditate at fuga
          officiis odit rem provident nobis esse magni! Lorem ipsum dolor sit
          amet consectetur, adipisicing elit. Assumenda velit dolorem
          repudiandae qui rerum possimus sit animi. Illo, laudantium ea!
        </p>
        <hr className="my-4" />
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem,
          incidunt?
        </p>
        <a className="btn btn-success btn-lg" href="#" role="button">
          React is awesome
        </a>
      </div>

      <div className="bg-success text-center">
        <p className="display-4 text-white p-4">Discover the amazing new app</p>
        <p className="text-white">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, rem?
        </p>
        <div className="row  p-4">
          <div className="col-6 text-right">
            <button className="btn btn-warning btn-lg">Play Store</button>
          </div>
          <button className="btn btn-warning btn-lg">App Store</button>
          <div className="col-6 text-center"></div>
        </div>
      </div>
    </main>
  )
}

export default HeroSection;
