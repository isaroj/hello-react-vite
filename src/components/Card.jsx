export const Card = ({
  title = "dummy title",
  subTitle = "dummy subtitle",
  imgLink = "https://images.pexels.com/photos/1194713/pexels-photo-1194713.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  btnLabel = "dummy button",
}) => {
  return (
    <div className="card mb-4" style={{ width: "18rem" }}>
        <img src={imgLink} className="card-img-top" alt="..." />
        <div className="card-body">
            <h5 className="card-title">{title} title</h5>
            <p className="card-text">{subTitle}</p>
            <a href="#" className="btn btn-success">
            {btnLabel}
            </a>
        </div>
    </div>
  )
}
